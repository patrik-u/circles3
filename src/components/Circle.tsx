import { createEffect, createSignal, createMemo, onCleanup, For, Component } from "solid-js";
import { useParams } from "@solidjs/router";
import Gun from "gun";
import CircleHeader from "./CircleHeader";
import { circle, setCircle, circlesRef, gun, isMobile, Circle as CircleType } from "./CirclesData";
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

                <div class="bg-heading py-3 px-6 flex items-center justify-start">
                    {isMobile() && (
                        <button onClick={onBack} class="mr-3">
                            <FiArrowLeft color="white" size="28px" />
                        </button>
                    )}
                    <CirclePicture circle={circle()} size="40px" className="mr-3" />
                    <h2 class="text-white">{circle()?.name}</h2>
                    {!isMobile() && (
                        <nav class="ml-16">
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
                    )}
                </div>

                {isMobile() && (
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
                )}

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
