import { createEffect, createSignal, onCleanup, For, Component } from "solid-js";
import { gun, indexRef, circles, setCircles, circlesRef, state, setUserRef, setIsLoggedIn, Circle } from "./CirclesData";
import Geohash from "latlon-geohash";
import useGunNode from "./CircleNode";
import Map from "./Map";

interface ChatProps {}

const Chat: Component<ChatProps> = () => {
    const [message, setMessage] = createSignal("");

    const sendMessage = () => {
        if (message().trim() === "") return;

        const user = gun.user();
        if (!user.is) return;

        const createdAt = new Date();
        const createdAtKeys: any[] = [
            createdAt.getUTCFullYear(),
            createdAt.getUTCFullYear() + "-" + (createdAt.getUTCMonth() + 1).toString().padStart(2, "0"),
            createdAt.getUTCFullYear() +
                "-" +
                (createdAt.getUTCMonth() + 1).toString().padStart(2, "0") +
                "-" +
                createdAt.getUTCDate().toString().padStart(2, "0"),
        ];

        let newMessage: any = { message: message(), createdAt: createdAt.toISOString(), type: "message" };

        // Get user coordinates
        let geohashKeys: any[] = [];
        if (state.userLocation) {
            const latitude = state.userLocation.latitude;
            const longitude = state.userLocation.longitude;

            // TODO generate random coordinates for testing
            // const longitude = Math.random() * 360 - 180;
            // const latitude = Math.random() * 180 - 90;

            const geohashFull = Geohash.encode(latitude, longitude); // Default precision (12)
            const geohash = geohashFull.substring(0, 4); // Precision 4
            geohashKeys = [geohash.substring(0, 2), geohash.substring(0, 3), geohash];

            newMessage.latitude = latitude;
            newMessage.longitude = longitude;
            newMessage.geohash = geohashFull;

            //newMessage.location = { latitude, longitude, geohash: geohashFull }; // creates subnode which makes data harder to retrieve as nested nodes need to be loaded
        }

        // Save the message under user node with a unique key
        const messageRef = state.userRef.get("messages").set(newMessage);
        // TODO we want to save the message under user node not userRef right?
        // userRef is reference to user circle

        // Store the message key under the corresponding index nodes
        // global index
        //indexRef.get("messages").set(messageRef);

        // date index
        createdAtKeys.forEach((dateKey: any) => {
            indexRef.get("dates").get(dateKey).set(messageRef);
        });

        // location index
        if (newMessage.location) {
            geohashKeys.forEach((geoKey) => {
                indexRef.get("locations").get(geoKey).set(messageRef);
            });

            // location and date index
            geohashKeys.forEach((geoKey) => {
                createdAtKeys.forEach((dateKey) => {
                    indexRef.get("locations_and_dates").get(geoKey).get(dateKey).set(messageRef);
                });
            });
        }

        setMessage("");
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            <div class="flex">
                <div class="p-3">
                    <ul>
                        {circles() && (
                            <For each={Object.values(circles())?.filter((x: any) => x.type === "message")}>
                                {(item: any) => (
                                    <li class="bg-white rounded-lg shadow-lg p-3 mb-3">
                                        {item.message} ({new Date(item.createdAt).toLocaleTimeString()})
                                    </li>
                                )}
                            </For>
                        )}
                    </ul>
                </div>
            </div>
            <div class="bg-white shadow-lg p-1 mt-auto w-full relative">
                <textarea class="w-full" value={message()} onInput={(e) => setMessage((e.target as HTMLTextAreaElement).value)} onKeyDown={handleKeyDown} />
                <button class="absolute bg-blue-200 top-2 right-2 mr-2 px-4 py-2 rounded" onClick={sendMessage}>
                    Send
                </button>
            </div>
        </>
    );
};

export default Chat;
