import { Component } from "solid-js";
import { Circle } from "../models/types";

interface CirclePictureProps {
    circle: Circle;
    size: string;
    className?: string;
}

const CirclePicture: Component<CirclePictureProps> = ({ circle, size, className }) => {
    const { picture } = circle;
    const dynamicStyle = {
        width: size,
        height: size,
        borderRadius: "50%",
        objectFit: "cover",
    };

    return <img src={picture} alt="Circle Picture" style={dynamicStyle} class={className} />;
};

export default CirclePicture;
