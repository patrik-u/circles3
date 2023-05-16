import { createSignal, createEffect, onCleanup, Show } from "solid-js";
import { gun, circlesRef, setUserCircle, isLoggedIn, setIsLoggedIn, createCircleAlias, setUser } from "./CirclesData";
import { CgLogOut } from "solid-icons/cg";

export const signOut = () => {
    gun.user().leave();
    localStorage.removeItem("userCredentials");
    setIsLoggedIn(false);
};

export default function AuthManager() {
    const [usernameInput, setUsernameInput] = createSignal("");
    const [passwordInput, setPasswordInput] = createSignal("");
    const userLocalStorageKey = "userCredentials";
    const [isAuthenticating, setIsAuthenticating] = createSignal(true);
    const [error, setError] = createSignal<string | null>(null);
    const defaultCircleName = "home";
    let dialogRef: HTMLDialogElement;

    createEffect(() => {
        const storedCredentials = localStorage.getItem(userLocalStorageKey);

        if (storedCredentials) {
            const { username, password } = JSON.parse(storedCredentials);
            console.log("storedCredentials", storedCredentials);
            signIn(username, password);
        } else {
            setIsAuthenticating(false);
        }
    });

    createEffect(() => {
        if (dialogRef && !isLoggedIn() && !isAuthenticating()) {
            console.log("showing dialog");
            dialogRef.showModal();
        }
    });

    const signIn = (username: string, password: string) => {
        const gunUser = gun.user();

        const authCallback = (ack: any) => {
            if (ack.err) {
                console.error("Authentication error:", ack.err);
            } else {
                // Load user data
                if (!gunUser.is) {
                    console.error("Authentication error");
                    setUser(null);
                    return;
                }

                setUser(gunUser.is.pub);

                // Create a circle for the user if it doesn't exist
                gunUser
                    .get("circles")
                    .get(defaultCircleName)
                    .once((data: any) => {
                        if (data) {
                            console.log("user circle already exists", JSON.stringify(data));
                            return;
                        }

                        // Create a circle for the user
                        let circle = {
                            name: username,
                            alias: username,
                            type: "user",
                        };
                        gunUser
                            .get("circles")
                            .get(defaultCircleName)
                            .put(circle)
                            .once((res) => {
                                console.log("created user circle", JSON.stringify(res));
                            });
                    });

                // Subscribe to user circle
                gunUser
                    .get("circles")
                    .get(defaultCircleName)
                    .on((data: any) => {
                        console.log("user circle data", JSON.stringify(data));
                        setUserCircle(data);
                    });

                console.log("user public key", gunUser.is?.pub);

                setIsLoggedIn(true);
                localStorage.setItem(userLocalStorageKey, JSON.stringify({ username, password }));
                dialogRef.close();
            }
            setIsAuthenticating(false);
        };

        gunUser.auth(username, password, authCallback);
    };

    const signUp = (username: string, password: string) => {
        const gunUser = gun.user();

        gun.get(`~@${username}`).once((data: any) => {
            if (data) {
                setError("User already exists");
                return;
            } else {
                gunUser.create(username, password, (ack: any) => {
                    if (ack.err) {
                        setError(ack.err);
                    } else {
                        signIn(username, password);
                    }
                });
            }
        });
    };

    const signInClick = (event: Event) => {
        event.preventDefault();
        signIn(usernameInput(), passwordInput());
    };

    const signUpClick = (event: Event) => {
        event.preventDefault();
        signUp(usernameInput(), passwordInput());
    };

    return (
        <>
            <dialog ref={dialogRef!} class="bg-transparent">
                <div class="bg-white p-8 rounded-lg shadow-lg">
                    <h2 class="text-2xl font-bold mb-6">Log in / Sign up</h2>

                    <div class="mb-4">
                        <label for="username" class="block text-sm mb-2">
                            Username:
                        </label>
                        <input
                            id="username"
                            type="text"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={usernameInput()}
                            onInput={(e: any) => setUsernameInput(e.target.value)}
                        />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block text-sm mb-2">
                            Password:
                        </label>
                        <input
                            id="password"
                            type="password"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={passwordInput()}
                            onInput={(e: any) => setPasswordInput(e.target.value)}
                        />
                    </div>
                    <button type="button" class="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600" onClick={signInClick}>
                        Log in
                    </button>
                    <button type="button" class="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 ml-4" onClick={signUpClick}>
                        Sign up
                    </button>
                    {error() && <p class="text-red-500 mt-4">{error()}</p>}
                </div>
            </dialog>
            <Show when={isLoggedIn()}>
                <button type="button" class="absolute bottom-4 right-2 p-1 font-semibold rounded-md" onClick={signOut}>
                    <CgLogOut size="24px" color="#888" />
                </button>
            </Show>
        </>
    );
}
