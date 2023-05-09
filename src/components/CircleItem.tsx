import { Component, Accessor } from "solid-js";
import { Circle, circle as currentCircle } from "./CirclesData";
import CirclePicture from "./CirclePicture";

interface CircleItemProps {
    circle: Circle;
    className?: string;
    highlightCurrentCircle?: boolean;
    onClick?: (circle: Circle) => void;
    itemCollapsed?: () => boolean;
}

const CircleItem: Component<CircleItemProps> = (props) => {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick(props.circle);
        }
    };

    return (
        <div
            class={`flex items-center p-3 cursor-pointer bg-white hover:bg-gray-100 transition-colors duration-200 ${
                props.highlightCurrentCircle && currentCircle()?.name?.toLowerCase() == props.circle?.name?.toLowerCase() ? "bg-gray-100" : ""
            } ${props.className}`}
            onClick={handleClick}
        >
            <CirclePicture circle={props.circle} size="40px" />
            {!props.itemCollapsed?.() && <h3 class="ml-3">{props.circle.name}</h3>}
        </div>
    );
};

export default CircleItem;
