import { createSignal, createEffect, onCleanup } from "solid-js";
import "gun/lib/open.js";

function useCirclesNode(nodeRef: any) {
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

            //const id = value._["#"];
            // setData((prevData) => {
            //     console.log("loading circle");
            //     const index = prevData.findIndex((item: any) => item.id === id);

            //     if (index >= 0) {
            //         // Update the element at the given index with the new value
            //         return [...prevData.slice(0, index), { value, id }, ...prevData.slice(index + 1)];
            //     } else {
            //         // Add the new item to the array
            //         return [...prevData, { value, id }];
            //     }
            // });
        });

        return () => {
            nodeRef.off();
        };
    });

    // createEffect(() => {
    //     // console.log("loading circles");
    //     nodeRef.map().on((value: any) => {
    //         const id = value._["#"];

    //         // TODO get location data

    //         setData((prevData) => {
    //             //console.log("loading circle");
    //             const index = prevData.findIndex((item: any) => item._["#"] === id);

    //             if (index >= 0) {
    //                 // Update the element at the given index with the new value
    //                 return [...prevData.slice(0, index), value, ...prevData.slice(index + 1)];
    //             } else {
    //                 // Add the new item to the array
    //                 return [...prevData, value];
    //             }
    //         });
    //     });

    //     return () => {
    //         nodeRef.off();
    //     };
    // });
    return data;
}

export default useCirclesNode;
