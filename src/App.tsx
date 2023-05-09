import { Routes, Route } from "@solidjs/router";
import type { Component } from "solid-js";
import { createSignal, onCleanup, createEffect } from "solid-js";
import { Circle as CircleType } from "./components/CirclesData";

// import CircleSelect from "./components/CircleSelect";
import Chat from "./components/Chat";
import Circle from "./components/Circle";
import AuthManager from "./components/AuthManager";
import LocationManager from "./components/LocationManager";
import CircleSelect from "./components/CircleSelect";
import { useWindowDimensions } from "./components/useWindowDimensions";

const App: Component = () => {
    const [menuCollapsed, setMenuCollapsed] = createSignal(false);
    const [panelWidth, setPanelWidth] = createSignal(18);
    const [isResizing, setIsResizing] = createSignal(false);
    const { windowWidth, windowHeight } = useWindowDimensions();

    const toggleMenu = () => {
        setMenuCollapsed(!menuCollapsed());
    };

    const onMouseDown = () => {
        setIsResizing(true);
    };

    const onMouseMove = (event: any) => {
        if (!isResizing()) return;

        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const newWidth = event.clientX / rootFontSize;

        if (newWidth < 18) {
            if (newWidth < 10) {
                setPanelWidth(4);
            } else {
                setPanelWidth(18);
            }
        } else {
            setPanelWidth(newWidth);
        }
    };

    const onMouseUp = () => {
        setIsResizing(false);
    };

    createEffect(() => {
        if (isResizing()) {
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
        } else {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        }
    });

    onCleanup(() => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
    });

    const onCircleSelect = (circle: CircleType) => {
        console.log(circle);
        if (windowWidth() < 768) {
            setMenuCollapsed(true);
        }
    };

    return (
        <>
            <div
                class="h-screen w-screen relative"
                style={`display: flex; flex-direction: row; min-width: 200%; transition: transform 300ms ease; transform: translateX(${
                    menuCollapsed() ? "-50%" : "0"
                });`}
            >
                <div
                    class={`h-full w-full md:w-72 relative`}
                    style={windowWidth() >= 768 ? `width: ${panelWidth()}rem; max-width: ${panelWidth()}rem; min-width: ${panelWidth()}rem;` : "width: 100%;"}
                >
                    <CircleSelect onSelect={onCircleSelect} />
                    <div class="hidden md:block absolute right-0 top-0 h-full w-2 cursor-col-resize" onMouseDown={onMouseDown}></div>
                </div>
                <div class="h-full w-full md:w-full" style="background-color: #f5f5f5;">
                    <button class="md:hidden bg-blue-500 text-white px-3 py-2 rounded" onClick={toggleMenu}>
                        Back
                    </button>
                </div>
            </div>
            <AuthManager />
            <LocationManager />
        </>
    );
};

export default App;
