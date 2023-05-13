import { Routes, Route, Navigate, useNavigate } from "@solidjs/router";
import type { Component } from "solid-js";
import { createSignal, onCleanup, createEffect } from "solid-js";
import { setIsMobile, isDarkTheme } from "./components/CirclesData";
import CircleManager from "./components/CircleManager";
import AuthManager from "./components/AuthManager";
import LocationManager from "./components/LocationManager";
import CircleSelect from "./components/CircleSelect";
import { useWindowDimensions } from "./components/useWindowDimensions";
import Map from "./components/Map";
import WidgetController from "./components/WidgetController";

const App: Component = () => {
    const { windowWidth, windowHeight } = useWindowDimensions();
    const navigate = useNavigate();

    createEffect(() => {
        let newIsMobile = windowWidth() < 768;
        setIsMobile(newIsMobile);
    });

    createEffect(() => {
        if (isDarkTheme() || (isDarkTheme() === undefined && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark");
            console.log("using dark theme");
        } else {
            document.documentElement.classList.remove("dark");
            console.log("using light theme");
        }
    });

    console.log("APP_NAMESPACE", import.meta.env.VITE_APP_NAMESPACE);

    return (
        <>
            <div class="w-full h-full">
                <Map />
                <WidgetController />
                {/* <CircleSelect />
                <WidgetController />
                <ProfileMenu /> */}

                <Routes>
                    <Route path="/" element={<Navigate href="/all" />} />
                    <Route path="/*" element={<CircleManager />} />
                </Routes>
            </div>

            <AuthManager />
            <LocationManager />
        </>
    );
};

export default App;
