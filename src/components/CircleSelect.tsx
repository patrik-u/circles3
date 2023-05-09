import { createSignal, onCleanup, createEffect, Component, For } from "solid-js";
import { state, Circle } from "./CirclesData";
import CircleItem from "./CircleItem";

interface CircleSelectProps {
    onSelect: (circle: Circle) => void;
}

const CircleSelect: Component<CircleSelectProps> = ({ onSelect }) => {
    // Signal to track the list of Circle objects
    const [circles, setCircles] = createSignal<Circle[]>([
        {
            name: "All",
            picture: "./images/all.png",
        },
    ]);

    const [selectedCircle, setSelectedCircle] = createSignal<Circle>(circles()[0]);

    const handleCircleClick = (circle: Circle) => {
        setSelectedCircle(circle);
        onSelect(circle);
    };

    return (
        <div>
            <For each={circles()}>{(circle) => <CircleItem circle={circle} selectedCircle={selectedCircle} onClick={handleCircleClick} />}</For>
        </div>
    );
};

export default CircleSelect;
