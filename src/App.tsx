import { Routes, Route } from "@solidjs/router";
import type { Component } from "solid-js";

// import CircleSelect from "./components/CircleSelect";
import Chat from "./components/Chat";
import Circle from "./components/Circle";
import AuthManager from "./components/AuthManager";
import LocationManager from "./components/LocationManager";

const App: Component = () => {
    return (
        <>
            <Routes>
                {/* <Route path="/" component={CircleSelect} /> */}
                {/* <Route path="/:circleId" component={Circle} /> */}
                <Route path="/" component={Chat} />
            </Routes>
            <AuthManager />
            <LocationManager />
        </>
    );
};

export default App;
