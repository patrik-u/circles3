import { Routes, Route } from "@solidjs/router";
import type { Component } from "solid-js";

import Circle from "./components/Circle";
import AuthManager from "./components/AuthManager";

// import logo from './logo.svg';
// import styles from './App.module.css';

const App: Component = () => {
    return (
        <>
            <h1>App</h1>
            <Routes>
                <Route path="/:circleId" component={Circle} />
            </Routes>
            <AuthManager />
        </>
        // <div class={styles.App}>
        //   <header class={styles.header}>
        //     <img src={logo} class={styles.logo} alt="logo" />
        //     <p>
        //       Edit <code>src/App.tsx</code> and save to reload.
        //     </p>
        //     <a
        //       class={styles.link}
        //       href="https://github.com/solidjs/solid"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn Solid
        //     </a>
        //   </header>
        // </div>
    );
};

export default App;
