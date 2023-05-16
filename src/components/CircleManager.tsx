import { createEffect, onCleanup, Component } from "solid-js";
import { useParams, useLocation } from "@solidjs/router";
import {
    rootRef,
    gun,
    setCircle,
    isLoggedIn,
    setCircleOwner,
    circles,
    Circle,
    setCircles,
    setCircleRef,
    indexRef,
    circlesRef,
    Circle as CircleType,
} from "./CirclesData";
import SEA from "gun/sea";

interface CircleComponentProps {}

// Responsible for loading and managing circle data
const CircleManager: Component<CircleComponentProps> = () => {
    const location = useLocation();

    // load circle from GunDB
    createEffect(() => {
        // hash of all participants + purpose? that way we don't need to store them in the database
        // problem is that it becomes less flexible as people join/leave

        let nodeRoute = location.pathname?.substring(1);
        setCircleOwner(nodeRoute?.split("/")[0]);

        if (!nodeRoute) {
            setCircle(null);
            setCircleRef(null);
            return;
        }

        let circleRef = gun.get(nodeRoute);
        setCircleRef(circleRef);

        circleRef.on((circleData) => {
            if (!circleData) {
                console.error("Circle not found");
                setCircle(null);
                return;
            } else {
                console.log("Loading circle", JSON.stringify(circleData, null, 2));
                setCircle(circleData as Circle);
            }
        });

        return () => {
            circleRef.off();
        };
    });

    // Filter options for circles
    const today = new Date();
    const dateKey = today.getUTCFullYear() + "-" + (today.getUTCMonth() + 1).toString().padStart(2, "0"); // month

    // Subscribe to circles
    const filteredCirclesRef = indexRef.get("dates").get(dateKey);

    filteredCirclesRef.map().on((value: any, key: string) => {
        // map() subscribes to list of messages and on() to each individual message. Replace on() with once() to only subscribe to list of messages and not individual messages.
        if (!value) return;
        const newCircles = Object.assign({}, circles());
        newCircles[key] = value;
        setCircles(newCircles);
    });
    onCleanup(() => filteredCirclesRef.off());

    createEffect(() => {
        // subscribe to circles
        // TODO
        //SEA.certify("*", "circles", pair, null, )
    });

    // // load circle from GunDB
    // createEffect(() => {
    //     let circleId = params?.circleId;
    //     if (!circleId) return;

    //     console.log("Opening circle with ID", circleId);
    //     let circleRef = circlesRef.get(circleId);

    //     // subscribing to circle data
    //     circleRef.on((circleData, key) => {
    //         console.log("circleRef.on()", JSON.stringify(circleData));
    //     });

    //     // load circle data
    //     circleRef.once((circleData) => {
    //         if (!circleData) {
    //             const newCircle = createNewCircle(circleId, "circle");
    //             circleRef.put(newCircle, () => {
    //                 console.log(`Circle with ID "${circleId}" created.`);
    //             });
    //             setCircle(circleData);
    //         } else {
    //             console.log("Loading circle", JSON.stringify(circleData, null, 2));
    //             setCircle(circleData);
    //         }
    //     });

    //     return () => {
    //         circleRef.off();
    //     };
    // });

    return null;
};

export default CircleManager;
