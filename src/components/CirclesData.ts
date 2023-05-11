import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import Gun from "gun";
import "gun/sea";

// Global Gun instance
export const gun = Gun("https://gun-manhattan.herokuapp.com/gun");

// Root gun node using app namespace from .env file
export const rootRef = gun.get<any>(import.meta.env.VITE_APP_NAMESPACE);

// Indexing node
export const indexRef = rootRef.get<any>(import.meta.env.VITE_INDEX_NODE);

// Root circles node
export const circlesRef = rootRef.get<any>("circles" as any);

// Messages node
export const nodesRef = rootRef.get<any>("nodes" as any);

//#region Types

export interface Circle {
    name: string;
    picture?: string;
    description?: string;
    content?: string;
    location?: Location;
    type: string;
}

export interface Message extends Circle {}

export interface Location {
    latitude: number;
    longitude: number;
    geohash?: string;
}

//#endregion

//#region Global state

interface GlobalState {
    circleRef: any;
    userRef: any;
    isLoggedIn: boolean;
    userLocation?: Location;
}

const [state, setState] = createStore<GlobalState>({
    circleRef: null,
    userRef: null,
    isLoggedIn: false,
    userLocation: undefined,
});
export { state, setState };

const [isMobile, setIsMobile] = createSignal<boolean>(false);
export { isMobile, setIsMobile };

const [circle, setCircle] = createSignal<Circle | null>(null);
export { circle, setCircle };

const [circles, setCircles] = createSignal<any | null>(null);
export { circles, setCircles };

const [toggleResize, setToggleResize] = createSignal<boolean>(false);
export { toggleResize, setToggleResize };

// Global state setters
export const setCircleRef = (circleRef: any) => {
    setState("circleRef", circleRef);
};

export const setUserRef = (userRef: any) => {
    setState("userRef", userRef);
};

export const setIsLoggedIn = (isLoggedIn: boolean) => {
    setState("isLoggedIn", isLoggedIn);
};

export const setUserLocation = (location: any) => {
    setState("userLocation", location);
    if (state.userRef) {
        state.userRef.get("location").put(location);
    }
};

//#endregion
