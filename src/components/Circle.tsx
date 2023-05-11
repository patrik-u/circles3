import { createEffect, createSignal, createMemo, onCleanup, For, Component } from "solid-js";
import { useParams } from "@solidjs/router";
import Gun from "gun";
import CircleHeader from "./CircleHeader";
import { circle, setCircle, circles, setCircles, indexRef, gun, circlesRef, isMobile, Circle as CircleType, setToggleResize } from "./CirclesData";
import Chat from "./Chat";
import Map from "./Map";
import CirclePicture from "./CirclePicture";
import { FiArrowLeft } from "solid-icons/fi";

interface CircleComponentProps {
    onBack: () => void;
}

const Circle: Component<CircleComponentProps> = ({ onBack }) => {
    const params = useParams();
    const [toggledComponents, setToggledComponents] = createSignal(["chat"]);
    const menuItems = ["about", "chat", "video", "calendar", "map"];

    // Filter options for circles
    const today = new Date();
    const dateKey = today.getUTCFullYear() + "-" + (today.getUTCMonth() + 1).toString().padStart(2, "0"); // month

    // Subscribe to circles
    const filteredCirclesRef = indexRef.get("dates").get(dateKey);

    filteredCirclesRef.map().on((value: any, key: string) => {
        // map() subscribes to list of messages and on() to each individual message. Replace on() with once() to only subscribe to list of messages and not individual messages.
        if (!value) return;
        const newCircles = Object.assign({}, circles());
        newCircles[key] = value;
        setCircles(newCircles);
    });
    onCleanup(() => filteredCirclesRef.off());

    const createNewCircle = (name: string, type: string): CircleType => {
        return {
            name,
            type,
        };
    };

    // load circle from GunDB
    createEffect(() => {
        let circleId = params?.circleId;
        if (!circleId) return;

        console.log("Opening circle with ID", circleId);
        let circleRef = circlesRef.get(circleId);

        // subscribing to circle data
        circleRef.on((circleData, key) => {
            console.log("circleRef.on()", JSON.stringify(circleData));
        });

        // load circle data
        circleRef.once((circleData) => {
            if (!circleData) {
                const newCircle = createNewCircle(circleId, "circle");
                circleRef.put(newCircle, () => {
                    console.log(`Circle with ID "${circleId}" created.`);
                });
                setCircle(circleData);
            } else {
                console.log("Loading circle", JSON.stringify(circleData, null, 2));
                setCircle(circleData);
            }
        });

        return () => {
            circleRef.off();
        };
    });

    const toggleComponent = (component: string) => {
        if (isMobile()) {
            setToggledComponents([component]);
        } else {
            if (toggledComponents().includes(component)) {
                setToggledComponents(toggledComponents().filter((item) => item !== component));
            } else {
                if (toggledComponents().length < 3) {
                    setToggledComponents([...toggledComponents(), component]);
                }
            }
            setToggleResize(true);
        }
    };

    const getComponentClass = (component: string): string => {
        let index = toggledComponents().indexOf(component);
        let fixedSize = (toggledComponents()[0] === component || toggledComponents()[2] === component) && toggledComponents().length !== 1;
        let color = "bg-gray-200";
        switch (index) {
            default:
            case 0:
                color = "bg-gray-100";
                break;
            case 1:
                color = "bg-gray-200";
                break;
            case 2:
                color = "bg-gray-300";
                break;
        }

        return `flex flex-col ${fixedSize ? "min-w-96 w-96 flex-shrink-0" : "flex-grow"} ${color} order-${index + 1}`;
    };

    return (
        <>
            <div class="flex flex-col h-screen">
                {/* <CircleHeader onBack={onBack} /> */}

                <div class="bg-white pt-3 px-6 flex items-center justify-start">
                    {isMobile() && (
                        <button onClick={onBack} class="mr-3">
                            <FiArrowLeft color="black" size="28px" />
                        </button>
                    )}
                    <CirclePicture circle={circle()} size="56px" className="mr-3" />
                    <h2 class="text-xl font-medium">{circle()?.name}</h2>
                </div>

                <nav class="bg-white p-2">
                    <div class="flex" style="margin-left: 5px;">
                        {menuItems.map((component) => (
                            <button
                                class={`mr-2 px-6 py-1 hover:bg-blue-200 transition-colors duration-200  rounded focus:outline-none navbutton ${
                                    toggledComponents().includes(component) ? "navbutton-toggled" : ""
                                }`}
                                onClick={() => toggleComponent(component)}
                            >
                                {component.charAt(0).toUpperCase() + component.slice(1)}
                            </button>
                        ))}
                    </div>
                </nav>

                <div class="flex flex-grow">
                    {toggledComponents().includes("about") && <div class={getComponentClass("about")}>About</div>}
                    {toggledComponents().includes("chat") && (
                        <div class={getComponentClass("chat")}>
                            <Chat />
                        </div>
                    )}
                    {toggledComponents().includes("video") && <div class={getComponentClass("video")}>Video</div>}
                    {toggledComponents().includes("calendar") && <div class={getComponentClass("calendar")}>Calendar</div>}
                    {toggledComponents().includes("map") && (
                        <div class={getComponentClass("map")}>
                            <Map />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Circle;
