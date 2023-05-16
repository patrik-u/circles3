import { createMemo, For, createSignal, Component, createEffect } from "solid-js";
import { FiEdit, FiArrowLeft, FiCamera } from "solid-icons/fi";
import { isMobile, circle, user, userSpace, gun } from "./CirclesData";
import CirclePicture from "./CirclePicture";

interface CircleHeaderProps {
    //onBack: () => void;
}

const CircleHeader: Component<CircleHeaderProps> = () => {
    const onBack = () => {};

    const [isAdmin, setIsAdmin] = createSignal(false); //  TODO CircleManager should check if user is admin

    // Create signals to handle editing
    const [isHoveringName, setHoveringName] = createSignal(false);
    const [isHoveringPic, setHoveringPic] = createSignal(false);
    const [isEditingName, setEditingName] = createSignal(false);
    const [newName, setNewName] = createSignal("");

    const handleNameChange = (e: any) => setNewName(e.target.value);

    // if circle alias is current username then show edit button
    createEffect(() => {
        let us = userSpace();
        let u = user();
        if (!u || !us) {
            setIsAdmin(false);
        } else {
            setIsAdmin(us.username === u.username);
        }
    });

    const saveName = () => {
        setEditingName(false);

        // save new name to circle node
        // let c = circle();
        // if (c) {
        //     c.name = newName();
        //     gun().get(c.id).put(c);
        // }
    };

    const handlePicChange = (e: any) => {
        // Simulate saving new picture to DB
        console.log("Saving new picture: ", URL.createObjectURL(e.target.files[0]));
    };

    const editNameClick = () => {
        setEditingName(true);
        setNewName(circle()?.name ?? "");
    };

    // Focus on the input field when editing
    createEffect(() => {
        if (isEditingName()) {
            const input = document.getElementById("circle-name-input");
            input?.focus();
        }
    });

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            saveName();
        } else if (e.key === "Escape") {
            setEditingName(false);
        }
    };

    return (
        <div class="py-3 px-6 flex items-center justify-start absolute top-0 left-0">
            {isMobile() && (
                <button onClick={onBack} class="mr-3">
                    <FiArrowLeft color="white" size="28px" />
                </button>
            )}
            <div class="mr-3 relative" onMouseEnter={() => isAdmin() && setHoveringPic(true)} onMouseLeave={() => setHoveringPic(false)}>
                <CirclePicture circle={circle()} size="40px" className="mr-3" />
                {isHoveringPic() && isAdmin() && (
                    <div class="absolute bottom-0 right-0 text-white">
                        <label for="circle-pic-input">
                            <FiCamera size="20px" class="cursor-pointer" />
                        </label>
                        <input id="circle-pic-input" type="file" accept="image/*" onChange={handlePicChange} class="hidden" />
                    </div>
                )}
            </div>
            <div class="relative flex items-center" onMouseEnter={() => isAdmin() && setHoveringName(true)} onMouseLeave={() => setHoveringName(false)}>
                {isEditingName() ? (
                    <div>
                        <input
                            id="circle-name-input"
                            class="bg-transparent border-none outline-none font-bold text-2xl text-white"
                            type="text"
                            value={newName()}
                            onInput={handleNameChange}
                            onKeyDown={onKeyDown}
                            onBlur={saveName}
                        />
                    </div>
                ) : (
                    <>
                        <h1 class="text-white text-2xl font-bold">{circle()?.name}</h1>
                        {isHoveringName() && isAdmin() && <FiEdit class="cursor-pointer ml-2" color="white" onClick={editNameClick} />}
                    </>
                )}
            </div>
        </div>
    );
};

export default CircleHeader;
