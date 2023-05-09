import { Component, Accessor } from "solid-js";
import { Circle } from "./CirclesData";
import CirclePicture from "./CirclePicture";

interface CircleItemProps {
    circle: Circle;
    className?: string;
    selectedCircle: Accessor<Circle>;
    onClick: (circle: Circle) => void;
}

const CircleItem: Component<CircleItemProps> = ({ circle, className, selectedCircle, onClick }) => {
    const handleClick = () => {
        onClick(circle);
    };

    return (
        <div
            class={`flex items-center p-3 cursor-pointer bg-white hover:bg-gray-100 transition-colors duration-200 ${
                selectedCircle() === circle ? "bg-gray-200" : ""
            } ${className}`}
            onClick={handleClick}
        >
            <CirclePicture circle={circle} size="40px" />
            <h3 class="ml-3">{circle.name}</h3>
        </div>
    );
};

export default CircleItem;
