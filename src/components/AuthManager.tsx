import { createEffect, createSignal, createResource } from "solid-js";
import { Magic } from "magic-sdk";

export const magic = new Magic(import.meta.env.VITE_MAGIC_PUBLIC_KEY, {
    network: {
        rpcUrl: import.meta.env.VITE_NETWORK_RPCURL,
        chainId: import.meta.env.VITE_NETWORK_CHAINID,
    },
});

export const [isLoggedIn, setIsLoggedIn] = createSignal(false);

export default function AuthManager() {
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
