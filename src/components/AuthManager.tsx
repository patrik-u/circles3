import { createSignal, createEffect, onCleanup } from "solid-js";
import { gun, circlesRef, state, setUserRef, setIsLoggedIn } from "./CirclesData";

export const signOut = () => {
    gun.user().leave();
    localStorage.removeItem("userCredentials");
    setIsLoggedIn(false);
    setUserRef(null);
};

export default function AuthManager() {
    const [usernameInput, setUsernameInput] = createSignal("");
    const [passwordInput, setPasswordInput] = createSignal("");
    const userLocalStorageKey = "userCredentials";
    const [isAuthenticating, setIsAuthenticating] = createSignal(true);
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
        if (dialogRef && !state.isLoggedIn && !isAuthenticating()) {
            console.log("showing dialog");
            dialogRef.showModal();
        }
    });

    const createUserCircle = (userId: string) => {
        const name = `Anonymous`;
        const userRef = state.userRef;
        userRef.put({ name }, (ack: any) => {
            if (ack.err) {
                console.error("Failed to create user circle:", ack.err);
            } else {
                console.log("User circle created:", userId);
            }
        });
    };

    const signIn = (username: string, password: string) => {
        const user = gun.user();

        const authCallback = (ack: any) => {
            if (ack.err) {
                console.error("Authentication error:", ack.err);
            } else {
                // Load user data
                if (!user.is) {
                    console.error("Authentication error");
                    return;
                }
                let userId = user.is.pub;
                const userRef = circlesRef.get(userId as any);
                setUserRef(userRef);

                // Check if the user has a circle
                userRef.once((data: any) => {
                    if (!data) {
                        // New user - create a circle for them
                        createUserCircle(userId);
                    }
                });

                console.log("log user public key", user.is?.pub);

                setIsLoggedIn(true);
                localStorage.setItem(userLocalStorageKey, JSON.stringify({ username, password }));
                dialogRef.close();
            }
            setIsAuthenticating(false);
        };

        user.auth(username, password, authCallback);
    };

    const signUp = (username: string, password: string) => {
        const user = gun.user();

        user.create(username, password, (ack: any) => {
            if (ack.err) {
                console.error("User creation error:", ack.err);
            } else {
                signIn(username, password);
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
            <dialog ref={dialogRef!}>
                <div class="bg-white p-8 rounded-md shadow-lg">
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
                </div>
            </dialog>
            {state.isLoggedIn && (
                <button type="button" class="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600" onClick={signOut}>
                    Sign out
                </button>
            )}
        </>
    );
}
