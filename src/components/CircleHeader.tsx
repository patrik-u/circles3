import { createMemo, For, Component } from "solid-js";
import { FiArrowLeft } from "solid-icons/fi";
import { state } from "./CirclesData";
import CirclePicture from "./CirclePicture";
import styles from "./CircleHeader.module.css";

interface CircleHeaderProps {
    backButtonHandler: () => void;
}

const CircleHeader: Component<CircleHeaderProps> = ({ backButtonHandler }) => {
    const { picture, name, activeMembers } = state.circle;
    const extraMembers = createMemo(() => activeMembers.length - 5);

    return (
        <div class={styles.header}>
            <button onClick={backButtonHandler}>
                <FiArrowLeft />
            </button>
            <CirclePicture circle={state.circle} size="40px" />
            <h2 class={styles.circleName}>{name}</h2>
            {/* <div class={styles.activeMembers}>
                <For each={activeMembers.slice(0, 5)}>{(member) => <CirclePicture circle={member} size="20px" className={styles.memberBubble} />}</For>
                {extraMembers() > 0 && <div class={styles.extraMembersBubble}>+{extraMembers()}</div>}
            </div> */}
        </div>
    );
};

export default CircleHeader;
