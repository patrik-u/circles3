import { createEffect, createSignal, createMemo, onCleanup, For, Component } from "solid-js";
import { useParams } from "@solidjs/router";
import Gun from "gun";
import CircleHeader from "./CircleHeader";
import {
    circle,
    setCircle,
    circles,
    setCircles,
    indexRef,
    gun,
    circlesRef,
    isMobile,
    Circle as CircleType,
    setToggleResize,
    isDarkTheme,
    setIsDarkTheme,
} from "./CirclesData";
import Chat from "./Chat";
import Map from "./Map";
import CirclePicture from "./CirclePicture";
import { FiArrowLeft } from "solid-icons/fi";
import { FaSolidSun, FaSolidMoon } from "solid-icons/fa";

interface CircleComponentProps {}

// Responsible for showing widgets such as Chat, Calendar, Video, Map, etc.
const WidgetController: Component<CircleComponentProps> = () => {
    const [toggledWidgets, setToggledWidgets] = createSignal(["chat"]);
    const menuItems = ["about", "chat", "video", "calendar", "map"];

    const toggleWidget = (component: string) => {
        if (isMobile()) {
            if (toggledWidgets().includes(component)) {
                setToggledWidgets([]);
            } else {
                setToggledWidgets([component]);
            }
        } else {
            if (toggledWidgets().includes(component)) {
                setToggledWidgets(toggledWidgets().filter((item) => item !== component));
            } else {
                if (toggledWidgets().length < 3) {
                    setToggledWidgets([...toggledWidgets(), component]);
                }
            }
            setToggleResize(true);
        }
    };

    const getWidgetClass = (component: string): string => {
        let index = toggledWidgets().indexOf(component);
        let fixedSize = (toggledWidgets()[0] === component || toggledWidgets()[2] === component) && toggledWidgets().length !== 1;
        if (component === "chat") {
            fixedSize = true;
        }
        return `flex flex-col ${fixedSize ? "min-w-96 w-96 flex-shrink-0" : "flex-grow"} order-${index + 1}`;
    };

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme());
    };

    // bg: #262626
    // color: white
    // selected: #1e5785

    return (
        <div class="flex flex-col h-screen w-screen z-1 absolute pointer-events-none">
            <div class="p-5 absolute w-screen pointer-events-auto">
                <div class="flex justify-center" style="margin-left: 5px;">
                    {menuItems.map((component) => (
                        <button
                            class={`mr-2 px-6 py-1 text-black dark:text-gray-200 hover:bg-navbuttonHover dark:hover:bg-navbuttonHoverDark transition-colors duration-200 rounded focus:outline-none navbutton navbutton${
                                toggledWidgets().includes(component) ? "-toggled" : ""
                            }${isDarkTheme() ? "-dark" : ""} }
                            }`}
                            onClick={() => toggleWidget(component)}
                        >
                            {component.charAt(0).toUpperCase() + component.slice(1)}
                        </button>
                    ))}

                    <button
                        class="rounded-full pl-2 pr-2 bg-navbutton dark:bg-navbuttonDark hover:bg-navbuttonHover dark:hover:bg-navbuttonHover text-black dark:text-gray-200"
                        onclick={toggleTheme}
                    >
                        {isDarkTheme() ? <FaSolidSun /> : <FaSolidMoon />}
                    </button>
                </div>
            </div>

            <div class="flex flex-grow">
                {toggledWidgets().includes("about") && <div class={getWidgetClass("about")}>About</div>}
                {toggledWidgets().includes("chat") && (
                    <div class={getWidgetClass("chat")}>
                        <Chat />
                    </div>
                )}
                {toggledWidgets().includes("video") && <div class={getWidgetClass("video")}>Video</div>}
                {toggledWidgets().includes("calendar") && <div class={getWidgetClass("calendar")}>Calendar</div>}
                {/* {toggledWidgets().includes("map") && (
                    <div class={getWidgetClass("map")}>
                        <Map />
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default WidgetController;
