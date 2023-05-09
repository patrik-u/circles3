import { Component } from "solid-js";
import { Circle } from "./CirclesData";

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

    const handleImageError = (event: Event) => {
        // Replace the src attribute with the URL of your default image
        const imgElement = event.target as HTMLImageElement;
        imgElement.src = "./images/default-circle-picture.png";
    };

    return <img src={picture} alt="Circle Picture" style={dynamicStyle} class={className} onerror={handleImageError} />;
};

export default CirclePicture;
