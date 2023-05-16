import { createMemo, For, createSignal, Component, createEffect, Show } from "solid-js";
import { FiEdit, FiArrowLeft, FiCamera } from "solid-icons/fi";
import { isMobile, userCircle, circle, circleOwner, gun, user, circleRef, setCircle, isLoggedIn } from "./CirclesData";
import CirclePicture from "./CirclePicture";
import { useNavigate } from "@solidjs/router";

interface ProfileMenuProps {
    //onBack: () => void;
}

const ProfileMenu: Component<ProfileMenuProps> = () => {
    const navigate = useNavigate();

    const onProfileClick = () => {
        navigate("/~" + user() + "/circles/home");
    };

    return (
        <Show when={isLoggedIn()}>
            <div class="mr-6 mt-3 flex items-center justify-start absolute top-0 right-0 cursor-pointer" onClick={onProfileClick}>
                <div class="relative">
                    <CirclePicture circle={userCircle()} size="40px" />
                </div>
            </div>
        </Show>
    );
};

export default ProfileMenu;
