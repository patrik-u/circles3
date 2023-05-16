import { createMemo, For, createSignal, Component, createEffect } from "solid-js";
import { FiEdit, FiArrowLeft, FiCamera } from "solid-icons/fi";
import { isMobile, circle, circleOwner, gun, user, circleRef, setCircle } from "./CirclesData";
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
    const [circleName, setCircleName] = createSignal("");

    const handleNameChange = (e: any) => setNewName(e.target.value);

    // if circle alias is current username then show edit button
    createEffect(() => {
        console.log("~" + user() + " === " + circleOwner());
        setIsAdmin("~" + user() === circleOwner());
    });

    const saveName = () => {
        setEditingName(false);

        console.log("Saving new name: ", newName());
        console.log("Circle ref: ", circleRef());
        setCircle((prev) => ({ ...prev, name: newName() }));

        if (circleRef()) {
            circleRef().get("name").put(newName());
        }
    };

    // const handlePicChange = (e: any) => {
    //     // Simulate saving new picture to DB
    //     console.log("Saving new picture: ", URL.createObjectURL(e.target.files[0]));
    // };

    const handlePicChange = (e: any) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.onload = () => {
                const maxSize = 1000; // Define the max size here
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > maxSize) {
                        height *= maxSize / width;
                        width = maxSize;
                    }
                } else {
                    if (height > maxSize) {
                        width *= maxSize / height;
                        height = maxSize;
                    }
                }

                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);

                const newImg = canvas.toDataURL("image/png");

                console.log("Saving new picture: ", newImg);

                setCircle((prev) => ({ ...prev, pictureRaw: newImg }));

                if (circleRef()) {
                    circleRef().get("pictureRaw").put(newImg);
                }
            };
            img.src = e.target.result as string;
        };
        reader.readAsDataURL(file);
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

    createEffect(() => {
        console.log("Setting circle name: ", circle()?.name ?? "");
        setCircleName(circle()?.name ?? "");
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
                        <h1 class="text-white text-2xl font-bold">{circleName()}</h1>
                        {isHoveringName() && isAdmin() && <FiEdit class="cursor-pointer ml-2" color="white" onClick={editNameClick} />}
                    </>
                )}
            </div>
        </div>
    );
};

export default CircleHeader;
