import { createEffect, onCleanup, For, Component } from "solid-js";
import { useParams } from "@solidjs/router";
import Gun from "gun";
import CircleHeader from "./CircleHeader";
import { setCircle } from "./CirclesData";
import { Circle as CircleType } from "../models/types";
import * as SEA from "gun/sea";

const Circle: Component = () => {
    const params = useParams();
    const circleId = params.circleId;

    // const heartbeatInterval = 10000; // 10 seconds
    // const userTimeoutThreshold = 30000; // 30 seconds

    // // Add/update user heartbeat timestamp
    // const updateUserHeartbeat = async () => {
    //     // const signedTimestamp = await SEA.sign(Gun.state.is(), userPrivateKey);
    //     // circleRef.get("activeMembers").get(userId).put(signedTimestamp);
    // };

    // // Cleanup inactive users
    // const cleanupInactiveUsers = () => {
    //     // circleRef
    //     //     .get("activeMembers")
    //     //     .map()
    //     //     .once(async (signedTimestamp, memberId) => {
    //     //         const timestamp = await SEA.verify(signedTimestamp, memberId);
    //     //         if (timestamp && Gun.state.is() - timestamp > userTimeoutThreshold) {
    //     //             circleRef.get("activeMembers").get(memberId).unset();
    //     //         }
    //     //     });
    // };

    // // Periodically update the user's heartbeat timestamp
    // const heartbeatIntervalId = setInterval(() => {
    //     updateUserHeartbeat();
    //     cleanupInactiveUsers();
    // }, heartbeatInterval);

    // // Cleanup interval when component is unmounted
    // onCleanup(() => {
    //     clearInterval(heartbeatIntervalId);
    // });

    // // Update the user's heartbeat timestamp for the first time
    // updateUserHeartbeat();

    // Handles the back button click event
    const handleBackButtonClick = () => {
        // Implement navigation back to CircleSelect screen
    };

    // const createNewCircle = (id: string): CircleType => {
    //     return {
    //         id,
    //         name: `Circle ${id}`,
    //         picture: "",
    //         activeMembers: {},
    //     };
    // };

    // createEffect(() => {
    //     const gun = Gun();
    //     const circleRef = gun.get("circles").get(circleId);
    //     circleRef.once((circleData) => {
    //         if (!circleData) {
    //             const newCircle = createNewCircle(circleId);
    //             circleRef.put(newCircle, () => {
    //                 console.log(`Circle with ID "${circleId}" created.`);
    //             });
    //             setCircle(newCircle);
    //         } else {
    //             console.log("Loading circle", JSON.stringify(circleData, null, 2));
    //             setCircle(circleData);
    //         }
    //     });
    // });

    return (
        <>
            <CircleHeader backButtonHandler={handleBackButtonClick} />
            <h1>Circle: {circleId}</h1>
        </>
    );
};

export default Circle;
