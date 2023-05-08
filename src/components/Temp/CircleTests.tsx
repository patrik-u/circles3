import { createEffect, createSignal } from "solid-js";
import { useParams } from "@solidjs/router";
import { ethers } from "ethers";
import CircleDAO from "../../../circle-dao/artifacts/contracts/CircleDAO.sol/CircleDAO.json";
import { isLoggedIn, magic } from "./MagicConnectAuthManager";

export default function CircleTests() {
    const createCircle = async () => {
        const magicProvider = await magic.wallet.getProvider();
        const provider = new ethers.providers.Web3Provider(magicProvider);
        const signer = provider.getSigner();

        const contractAddress = import.meta.env.VITE_CIRCLE_DAO_CONTRACT_ADDRESS;
        const contract = new ethers.Contract(contractAddress, CircleDAO.abi, signer);

        // Example circle data
        const data = JSON.stringify({
            name: "Example Circle",
            picture: "https://example.com/picture.png",
            description: "An example circle DAO",
        });

        try {
            //const gasEstimate = await contract.estimateGas.createCircle(did, data);
            //console.log("Estimated gas cost for createCircle:", gasEstimate.toString());
            let gasLimit = 300000;
            const transaction = await contract.createCircle(data, { gasLimit });
            console.log("createCircle transaction:", transaction);

            // Wait for the transaction to be mined
            const receipt = await transaction.wait();

            // Find the CircleCreated event in the transaction receipt
            const event = receipt.events.find((e) => e.event === "CircleCreated");

            // Get the event arguments (in this case, the DID, creator, and data)
            const { did, creator, _data } = event.args;

            // Use the event data as needed
            console.log("CircleCreated event data:", { did, creator, _data });
        } catch (error) {
            console.error("Error calling createCircle:", error);
        }
    };

    const updateCircle = async () => {
        const magicProvider = await magic.wallet.getProvider();
        const provider = new ethers.providers.Web3Provider(magicProvider);
        const signer = provider.getSigner();

        const contractAddress = import.meta.env.VITE_CIRCLE_DAO_CONTRACT_ADDRESS;
        const contract = new ethers.Contract(contractAddress, CircleDAO.abi, signer);

        console.log("contractAddress:", contractAddress);

        // Example circle data
        const did = "did:example:123456789abcdefghij";
        const newData = JSON.stringify({
            name: "Updated Circle",
            picture: "https://example.com/new_picture.png",
            description: "An updated circle DAO",
        });

        try {
            let gasLimit = 300000;
            const result = await contract.updateCircle(did, newData, { gasLimit });
            console.log("updateCircle result:", result);
            const receipt = await provider.getTransactionReceipt(result.hash);
            console.log("receipt:", JSON.stringify(receipt, null, 2));
        } catch (error) {
            console.error("Error calling updateCircle:", error);
        }
    };

    return (
        <>
            {isLoggedIn() ? (
                <>
                    <button onClick={createCircle}>Create Circle</button>
                    <button onClick={updateCircle}>Update Circle</button>
                </>
            ) : (
                <></>
            )}
        </>
    );
}
