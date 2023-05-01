import { createEffect, createSignal, createResource } from "solid-js";
import { Magic } from "magic-sdk";

const magic = new Magic(import.meta.env.VITE_MAGIC_PUBLIC_KEY, {
    network: {
        rpcUrl: import.meta.env.VITE_OPTIMISM_RPCURL,
        chainId: import.meta.env.VITE_OPTIMISM_CHAINID,
    },
});

export default function AuthManager() {
    const [isLoggedIn, setIsLoggedIn] = createSignal(false);

    const login = async () => {
        let result = await magic.wallet.connectWithUI();
        setIsLoggedIn(true);
        return result;
    };

    const logout = async () => {
        await magic.user.logout();
        setIsLoggedIn(false);
    };

    const [response] = createResource(login);

    return (
        <>
            {isLoggedIn() ? (
                <>
                    <p>{response()}</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <p>Logging in...</p>
            )}
        </>
    );
}
