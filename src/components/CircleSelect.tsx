import { createSignal, onCleanup, createEffect, Component, For } from "solid-js";
import { state, Circle, setCircle } from "./CirclesData";
import CircleItem from "./CircleItem";

interface CircleSelectProps {
    onSelect: (circle: Circle) => void;
    circleSelectCollapsed: () => boolean;
}

const CircleSelect: Component<CircleSelectProps> = (props) => {
    // Signal to track the list of Circle objects
    const [circles, setCircles] = createSignal<Circle[]>([
        {
            name: "All",
            picture: "./images/all.png",
        },
        // {
        //     name: "Test",
        //     //picture: "./images/all.png",
        // },
    ]);

    const [selectedCircle, setSelectedCircle] = createSignal<Circle>(circles()[0]);

    const handleCircleClick = (circle: Circle) => {
        setSelectedCircle(circle);
        props.onSelect(circle);
    };

    return (
        <div>
            <For each={circles()}>
                {(circle) => (
                    <CircleItem circle={circle} itemCollapsed={props.circleSelectCollapsed} selectedCircle={selectedCircle} onClick={handleCircleClick} />
                )}
            </For>
        </div>
    );
};

export default CircleSelect;
