declare var JitsiMeetJS: any;

import { createEffect, onMount, createSignal, onCleanup, For, Component } from "solid-js";
import {
    gun,
    indexRef,
    circles,
    setCircles,
    circlesRef,
    userLocation,
    setIsLoggedIn,
    Circle,
    isDarkTheme,
    isMobile,
    setToggleWidgetAction,
} from "./CirclesData";
import Geohash from "latlon-geohash";
import Map from "./Map";
import { IoSend } from "solid-icons/io";

interface TrackProps {
    track: any;
}

const Track: Component<TrackProps> = (props) => {
    let videoRef: HTMLVideoElement;

    if (props.track.getType() !== "video") return;

    onMount(() => {
        props.track.attach(videoRef);
    });

    onCleanup(() => {
        props.track.detach(videoRef);
    });

    return <video class="jitsi-track rounded-3xl pb-2" ref={videoRef!} autoplay />;
};

interface VideoProps {}

const Video: Component<VideoProps> = () => {
    let [localTracks, setLocalTracks] = createSignal<any[]>([]);
    let [remoteTracks, setRemoteTracks] = createSignal<any[]>([]);
    let [conference, setConference] = createSignal<any>(null);

    let videoRef: HTMLDivElement;
    let [jitsiApi, setJitsiApi] = createSignal<any>(null);
    const roomName = "testroom7e39a1bcf3e811eda05b0242ac120003";

    // Handle tracks.
    const addTrack = (track: any) => {
        if (track.getType() !== "video") return;

        const video = document.createElement("video");
        video.autoplay = true;
        video.controls = true;
        videoRef.appendChild(video);

        track.attach(video);
    };

    const initializeJitsi = async () => {
        const options = {
            hosts: {
                domain: "meet.jit.si",
                muc: "conference.meet.jit.si", // FIXME: use XEP-0030
            },
            bosh: `https://meet.jit.si/http-bind?room=${roomName}`,
            clientNode: "http://jitsi.org/jitsimeet",
        };
        const confOptions = {
            openBridgeChannel: true,
        };

        JitsiMeetJS.init();
        JitsiMeetJS.setLogLevel(JitsiMeetJS.logLevels.ERROR);

        const connection = new JitsiMeetJS.JitsiConnection(null, null, options);

        connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_FAILED, (error: any) => {
            // TODO implement retry logic here, or inform the user about the issue.
            console.error("Connection failed:", error);
        });

        // wait for connection to be established and join the room
        connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED, () => {
            console.log("Connection established");
            const conf = connection.initJitsiConference(roomName, confOptions);

            // listen to video/audio tracks added
            conf.on(JitsiMeetJS.events.conference.TRACK_ADDED, (track: any) => {
                if (!track.isLocal()) {
                    setRemoteTracks([...remoteTracks(), track]);
                    console.log("Remote track added", track);
                }
            });

            // listen to video/audio tracks removed
            conf.on(JitsiMeetJS.events.conference.TRACK_REMOVED, (track: any) => {
                console.log();
                setRemoteTracks([...remoteTracks(), track]);
            });

            JitsiMeetJS.createLocalTracks({ devices: ["audio", "video"] })
                .then((tracks: any) => {
                    for (let i = 0; i < tracks.length; i++) {
                        conf.addTrack(tracks[i]);
                        //addTrack(tracks[i]);
                        setLocalTracks([...localTracks(), tracks[i]]);
                    }
                })
                .catch((error: any) => {
                    throw error;
                });

            conf.join();
            setConference(conf);
        });
        connection.connect();

        setJitsiApi(connection);
    };

    onCleanup(() => {
        let api = jitsiApi();
        if (api) {
            let conf = conference();
            if (conf) {
                // Leave the conference
                conf.leave()
                    .then(() => {
                        console.log("Left the conference");
                    })
                    .catch((error: any) => {
                        console.log("Error leaving conference", error);
                    });
            }

            console.log("Disconnecting from Jitsi");
            api.disconnect();
        }

        // dispose tracks
        localTracks().forEach((track) => track.dispose());
        setLocalTracks([]);

        remoteTracks().forEach((track) => track.dispose());
        setRemoteTracks([]);
    });

    createEffect(() => {
        if (!jitsiApi()) {
            initializeJitsi();
        }
    });

    const handleToggleAudio = () => {
        jitsiApi().isAudioMuted() ? jitsiApi().unmuteAudio() : jitsiApi().muteAudio();
    };

    const handleToggleVideo = () => {
        jitsiApi().isVideoMuted() ? jitsiApi().unmuteVideo() : jitsiApi().muteVideo();
    };

    const handleLeave = () => {
        setToggleWidgetAction({ widget: "video", toggleOn: false });
    };

    return (
        <div class="w-full h-full">
            <div class="jitsi-container p-3 w-full mt-24 z-1" ref={videoRef!}>
                <For each={localTracks()}>{(track) => <Track track={track} />}</For>
                <For each={remoteTracks()}>{(track) => <Track track={track} />}</For>
            </div>
            <div class="absolute bottom-0 right-0 text-white pointer-events-auto">
                <button onclick={handleToggleAudio}>Toggle Audio</button>
                <button onclick={handleToggleVideo}>Toggle Video</button>
                <button onclick={handleLeave}>Disconnect</button>
            </div>
        </div>
    );
};

export default Video;
