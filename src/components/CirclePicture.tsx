import { Component } from "solid-js";
import { Circle } from "./CirclesData";

interface CirclePictureProps {
    circle: Circle | null;
    size: string;
    className?: string;
}

const CirclePicture: Component<CirclePictureProps> = (props) => {
    const dynamicStyle = {
        width: props.size,
        height: props.size,
    };

    const handleImageError = (event: Event) => {
        console.log("Error loading image", JSON.stringify(event));
        // Replace the src attribute with the URL of your default image
        const imgElement = event.target as HTMLImageElement;
        imgElement.src = "./images/default-circle-picture.png";
    };

    return (
        <img
            src={props.circle?.pictureRaw ?? props.circle?.picture ?? "./images/default-circle-picture.png"}
            alt="Circle Picture"
            style={dynamicStyle}
            class={`rounded-full object-cover  ${props.className}`}
            onerror={handleImageError}
        />
    );
};

export default CirclePicture;
