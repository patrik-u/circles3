import { createMemo, For, Component } from "solid-js";
import { FiArrowLeft } from "solid-icons/fi";
import { state, isMobile, circle } from "./CirclesData";
import CirclePicture from "./CirclePicture";
import { useCircleNode } from "./CircleNode";

interface CircleHeaderProps {
    onBack: () => void;
}

const CircleHeader: Component<CircleHeaderProps> = ({ onBack }) => {
    // const { picture, name, activeMembers } = state.circle;
    // const extraMembers = createMemo(() => activeMembers.length - 5);

    return (
        <div class="bg-heading py-3 px-6 flex items-center justify-start">
            {isMobile() && (
                <button onClick={onBack} class="mr-3">
                    <FiArrowLeft color="white" size="28px" />
                </button>
            )}
            <CirclePicture circle={circle()} size="40px" className="mr-3" />
            <h2 class="text-white">{circle()?.name}</h2>
            {/* <div class={styles.activeMembers}>
                <For each={activeMembers.slice(0, 5)}>{(member) => <CirclePicture circle={member} size="20px" className={styles.memberBubble} />}</For>
                {extraMembers() > 0 && <div class={styles.extraMembersBubble}>+{extraMembers()}</div>}
            </div> */}
        </div>
    );
};

export default CircleHeader;
