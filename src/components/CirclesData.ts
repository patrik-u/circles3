import { createSignal, Signal } from "solid-js";
import { createStore } from "solid-js/store";
import Gun from "gun";
import SEA from "gun/sea";

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

//#region Helpers

// Creates a signal that stores its value in localStorage
export const createStoredSignal = <T>(key: string, defaultValue: T, storage = localStorage): Signal<T> => {
    const storedValue = storage.getItem(key);
    const initialValue = storedValue !== null ? (JSON.parse(storedValue) as T) : defaultValue;

    const [value, setValue] = createSignal<T>(initialValue);

    const setValueAndStore = ((newValue: Exclude<T, Function>) => {
        setValue(newValue);
        if (newValue === undefined) {
            storage.removeItem(key);
        } else {
            storage.setItem(key, JSON.stringify(newValue));
        }
        return newValue;
    }) as typeof setValue;

    const removeValue = () => {
        setValue(undefined as Exclude<T, Function>);
        storage.removeItem(key);
    };

    return [value, setValueAndStore];
};

// Creates an alias for the circle
export const createCircleAlias = async (circle: Circle) => {
    console.log("alias", circle.alias);
    console.log("soul", circle._?.["#"]);
    if (!circle.alias || !circle._) return;

    let soul = circle._["#"]; // get soul of the circle node
    let alias = circle.alias;
    let hash = await SEA.work(alias, null, null, { name: "SHA-256" }); // hash the alias

    //let soulHash = await SEA.work(soul, null, null, { name: "SHA-256" }); // hash the soul

    //gun.get("#").get(hash).put(soul);

    // rootRef
    //     .get("#aliases")
    //     .get(hash as any)
    //     .put(alias);

    // .get(soulHash as any)
    // .put({ soul: soul });
};

//#endregion

//#region Types

export interface Circle {
    name: string;
    alias?: string;
    picture?: string;
    pictureRaw?: string;
    description?: string;
    content?: string;
    location?: Location;
    type: string;
    admins?: string[];
    _?: any;
}

export interface Message extends Circle {}

export interface Location {
    latitude: number;
    longitude: number;
    geohash?: string;
}

//#endregion

//#region Global state

const [isLoggedIn, setIsLoggedIn] = createSignal<boolean>(false);
export { isLoggedIn, setIsLoggedIn };

const [userLocation, setUserLocation] = createSignal<Location | null>(null);
export { userLocation, setUserLocation };

const [isMobile, setIsMobile] = createSignal<boolean>(false);
export { isMobile, setIsMobile };

const [circle, setCircle] = createSignal<Circle | null>(null);
export { circle, setCircle };

const [circleRef, setCircleRef] = createSignal<any | null>(null);
export { circleRef, setCircleRef };

const [circles, setCircles] = createSignal<any | null>(null);
export { circles, setCircles };

const [toggleResize, setToggleResize] = createSignal<boolean>(false);
export { toggleResize, setToggleResize };

const [isDarkTheme, setIsDarkTheme] = createStoredSignal<boolean | undefined>("isDarkTheme", true);
export { isDarkTheme, setIsDarkTheme };

// owner of the current circle we are viewing
const [circleOwner, setCircleOwner] = createSignal<string | null>(null);
export { circleOwner, setCircleOwner };

const [user, setUser] = createSignal<string | null>(null);
export { user, setUser };

//#endregion
