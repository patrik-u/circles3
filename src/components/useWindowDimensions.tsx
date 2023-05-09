import { createEffect, createSignal, onCleanup } from "solid-js";

export const useWindowDimensions = () => {
    const [windowWidth, setWindowWidth] = createSignal(window.innerWidth);
    const [windowHeight, setWindowHeight] = createSignal(window.innerHeight);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };

    createEffect(() => {
        window.addEventListener("resize", handleResize);

        onCleanup(() => {
            window.removeEventListener("resize", handleResize);
        });
    });

    return {
        windowWidth,
        windowHeight,
    };
};
