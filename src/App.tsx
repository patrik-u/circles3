import { Routes, Route, Navigate, useNavigate } from "@solidjs/router";
import type { Component } from "solid-js";
import { createSignal, onCleanup, createEffect } from "solid-js";
import { Circle as CircleType, setCircle, isMobile, setIsMobile } from "./components/CirclesData";

// import CircleSelect from "./components/CircleSelect";
import Chat from "./components/Chat";
import Circle from "./components/Circle";
import AuthManager from "./components/AuthManager";
import LocationManager from "./components/LocationManager";
import CircleSelect from "./components/CircleSelect";
import { useWindowDimensions } from "./components/useWindowDimensions";

const App: Component = () => {
    const [circleSelectVisible, setCircleSelectVisible] = createSignal(true);
    const [circleSelectCollapsed, setCircleSelectCollapsed] = createSignal(false);
    const [panelWidth, setPanelWidth] = createSignal(18);
    const [isResizing, setIsResizing] = createSignal(false);
    const { windowWidth, windowHeight } = useWindowDimensions();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setCircleSelectVisible(!circleSelectVisible());
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
                setCircleSelectCollapsed(true);
            } else {
                setPanelWidth(18);
                setCircleSelectCollapsed(false);
            }
        } else {
            setPanelWidth(newWidth);
            setCircleSelectCollapsed(false);
        }
    };

    const onMouseUp = () => {
        setIsResizing(false);
    };

    createEffect(() => {
        let newIsMobile = windowWidth() < 768;
        setIsMobile(newIsMobile);
        if (newIsMobile) {
            setCircleSelectCollapsed(false);
        }
    });

    createEffect(() => {
        console.log("APP_NAMESPACE", import.meta.env.VITE_APP_NAMESPACE);
        if (isResizing()) {
            document.body.classList.add("no-select");
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
        } else {
            document.body.classList.remove("no-select");
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        }
    });

    onCleanup(() => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
    });

    const onCircleSelect = (circle: CircleType) => {
        console.log("Selecting circle", circle?.name);
        setCircle(circle);
        navigate(`/${circle?.name.toLowerCase()}`);
        if (windowWidth() < 768) {
            setCircleSelectVisible(false);
        }
    };

    const onBack = () => {
        if (windowWidth() < 768) {
            setCircleSelectVisible(true);
        }
    };

    return (
        <>
            <div
                class="h-screen w-screen relative"
                style={`display: flex; flex-direction: row; min-width: ${
                    isMobile() ? "200%" : "100%"
                }; transition: transform 300ms ease; transform: translateX(${!circleSelectVisible() ? "-50%" : "0"});`}
            >
                <div
                    class={`h-full w-full md:w-72 relative`}
                    style={
                        windowWidth() >= 768
                            ? `width: ${panelWidth()}rem; max-width: ${panelWidth()}rem; min-width: ${panelWidth()}rem;  background-color: #212121;`
                            : `width: ${windowWidth()}px; flex-shrink: 0; background-color: #212121;`
                    }
                >
                    <CircleSelect onSelect={onCircleSelect} circleSelectCollapsed={circleSelectCollapsed} />
                    <div class="hidden md:block absolute right-0 top-0 h-full w-2 cursor-col-resize" onMouseDown={onMouseDown}></div>
                </div>
                <div class="h-full w-full md:w-full" style={isMobile() ? `width: ${windowWidth()}px; flex-shrink: 0;` : "" + `background-color: #f5f5f5;`}>
                    <Routes>
                        {/* <Route path="/" element={<Navigate href="/all" />} />; */}
                        <Route path="/:circleId" element={<Circle onBack={onBack} />} />
                    </Routes>
                </div>
            </div>
            <AuthManager />
            <LocationManager />
        </>
    );
};

export default App;
