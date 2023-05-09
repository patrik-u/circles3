import { createSignal, createEffect, onCleanup } from "solid-js";
import "gun/lib/open.js";

export const useCircleNode = (nodeRef: any) => {
    const [data, setData] = createSignal<any>(null);

    createEffect(() => {
        if (!nodeRef) return;

        console.log("loading circle");
        nodeRef.open((value: any) => {
            console.log("nodeRef.open");
            setData(value);
        });

        return () => {
            nodeRef.off();
        };
    });

    return data;
};

export const useCirclesNode = (nodeRef: any) => {
    const [data, setData] = createSignal<any>([]);

    createEffect(() => {
        console.log("loading circles");
        nodeRef.open((value: any) => {
            // console.log("loading circle", JSON.stringify(value));
            console.log("nodeRef.open");
            const vals = Object.keys(value)
                .map((key) => value[key])
                .filter((x) => Object.keys(x).length !== 0);
            setData(vals);
            console.log(vals);
        });

        return () => {
            nodeRef.off();
        };
    });

    return data;
};

export default useCirclesNode;
