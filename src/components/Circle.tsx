import { createEffect, createSignal, createMemo, onCleanup, For, Component } from "solid-js";
import { useParams } from "@solidjs/router";
import Gun from "gun";
import CircleHeader from "./CircleHeader";
import { circle, setCircle, circlesRef, gun, Circle as CircleType } from "./CirclesData";
import Chat from "./Chat";

interface CircleComponentProps {
    onBack: () => void;
}

const Circle: Component<CircleComponentProps> = ({ onBack }) => {
    const params = useParams();
    const [toggledComponents, setToggledComponents] = createSignal(["chat"]);
    const menuItems = ["about", "chat", "video", "calendar", "map"];

    const createNewCircle = (id: string): CircleType => {
        return {
            name: id,
        };
    };

    // load circle from GunDB
    createEffect(() => {
        let circleId = params?.circleId;
        if (!circleId) return;

        console.log("Opening circle with ID", circleId);
        let circleRef = circlesRef.get(circleId);

        if (circleId === "all") {
            circleRef.put({ name: "All", picture: "./images/all.png" }, () => {
                console.log(`Updating all circle.`);
            });
        }

        // load circle data
        circleRef.once((circleData) => {
            if (!circleData) {
                const newCircle = createNewCircle(circleId);
                circleRef.put(newCircle, () => {
                    console.log(`Circle with ID "${circleId}" created.`);
                });
                setCircle(circleData);
            } else {
                console.log("Loading circle", JSON.stringify(circleData, null, 2));
                setCircle(circleData);
            }
        });

        circleRef.on((circleData, key) => {
            console.log("test");
        });

        return () => {
            circleRef.off();
        };
    });

    const toggleComponent = (component: string) => {
        if (toggledComponents().includes(component)) {
            setToggledComponents(toggledComponents().filter((item) => item !== component));
        } else {
            if (toggledComponents().length < 3) {
                setToggledComponents([...toggledComponents(), component]);
            }
        }
    };

    const getComponentClass = (component: string): string => {
        let fixedSize = (toggledComponents()[0] === component || toggledComponents()[2] === component) && toggledComponents().length !== 1;
        let color = "bg-blue-200";
        switch (toggledComponents().indexOf(component)) {
            default:
            case 0:
                color = "bg-blue-300";
                break;
            case 1:
                color = "bg-green-300";
                break;
            case 2:
                color = "bg-red-300";
                break;
        }

        return `${fixedSize ? "min-w-96 w-96" : "flex-grow"} ${color}`;
    };

    return (
        <>
            <div class="flex flex-col h-screen">
                <CircleHeader onBack={onBack} />
                <nav class="bg-gray-200 p-2">
                    <div class="flex">
                        {menuItems.map((component) => (
                            <button
                                class={`mr-2 px-4 py-2 rounded focus:outline-none ${
                                    toggledComponents().includes(component) ? "bg-blue-500 text-white" : "bg-gray-300"
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
                    {toggledComponents().includes("chat") && <div class={getComponentClass("chat")}>Chat</div>}
                    {toggledComponents().includes("video") && <div class={getComponentClass("video")}>Video</div>}
                    {toggledComponents().includes("calendar") && <div class={getComponentClass("calendar")}>Calendar</div>}
                    {toggledComponents().includes("map") && <div class={getComponentClass("map")}>Map</div>}
                </div>
            </div>
        </>
    );
};

export default Circle;
