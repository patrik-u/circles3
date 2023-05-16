import { createEffect, onCleanup, Component } from "solid-js";
import { useParams, useLocation } from "@solidjs/router";
import { rootRef, gun, setCircle, isLoggedIn, setUserSpace, circles, Circle, setCircles, indexRef, circlesRef, Circle as CircleType } from "./CirclesData";
import SEA from "gun/sea";

interface CircleComponentProps {}

// Responsible for loading and managing circle data
const CircleManager: Component<CircleComponentProps> = () => {
    const location = useLocation();

    // load circle from GunDB
    createEffect(() => {
        // let nodeRoute = location.pathname?.substring(1);
        // if (!nodeRoute) return;

        // hash of all participants + purpose? that way we don't need to store them in the database
        // problem is that it becomes less flexible as people join/leave

        // gun.get(nodeRoute).once((circleData) => {
        //     if (!circleData) {
        //         console.error("Circle not found");
        //         return;
        //     } else {
        //         console.log("Loading circle", JSON.stringify(circleData, null, 2));
        //         setCircle(circleData as Circle);
        //     }
        // });

        let nodeRoute = location.pathname?.substring(1);
        if (!nodeRoute) return;

        //gun.get('#rooms').get(roomId).get('members').get(username).put(true);

        console.log("Opening node route", nodeRoute);

        // split circleId into username and circle ID/alias
        let routes = nodeRoute.split("/");
        let username = routes[0];
        let circleId = routes[1];
        if (!username) {
            setCircle(null);
            setUserSpace(null);
            return;
        }

        if (!circleId) {
            circleId = username; // default circle
        }

        gun.get(`~@${username}`).once((user, key) => {
            if (!user) {
                console.log(`Circle not found: no user found for username ${username}`);
                setCircle(null);
                setUserSpace(null);
                return;
            }
            let userPubKey = Object.keys(user).find((x) => x.startsWith("~")) ?? "";
            setUserSpace({ username, pubKey: userPubKey });
            gun.get(userPubKey as any)
                .get("circles" as any)
                .get(circleId as any)
                .once((circleData) => {
                    if (!circleData) {
                        console.error("Circle not found");
                        return;
                    } else {
                        console.log("Loading circle", JSON.stringify(circleData, null, 2));
                        setCircle(circleData as Circle);
                    }
                });
        });
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

    const createNewCircle = (name: string, type: string): CircleType => {
        return {
            name,
            type,
        };
    };

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
