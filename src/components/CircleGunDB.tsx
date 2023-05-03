import { createEffect, createSignal } from "solid-js";
import Gun from "gun";
import { useParams } from "@solidjs/router";

// Initialize Gun
const gun = Gun();

export default function Circle() {
    // Get the circle ID from the URL using useParams
    const params = useParams();
    const circleId = params.circleId;

    // Create a signal to store the circle name
    const [circleName, setCircleName] = createSignal("");

    // Create a function to update the circle name in Gun
    const updateCircleName = (event: Event) => {
        const newName = (event.target as HTMLInputElement).value;
        console.log("updating circle name", newName);
        setCircleName(newName);
        gun.get(circleId).put({ name: newName });
    };

    // Read the circle data from Gun and update the circle name
    createEffect(() => {
        gun.get(circleId).on((data) => {
            if (data.name) setCircleName(data.name);
            console.log("gun circle data", JSON.stringify(data, null, 2));
        });
    });

    return (
        <>
            <h1>Circle: {circleId}</h1>
            <h2>Name: {circleName()}</h2>
            <label>
                Name:
                <input type="text" value={circleName()} onInput={updateCircleName} />
            </label>
        </>
    );
}
