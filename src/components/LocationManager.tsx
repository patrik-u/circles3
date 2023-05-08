import { createEffect, onCleanup } from "solid-js";
import { getPreciseDistance } from "geolib";
import { state, setUserLocation } from "./CirclesData";

export const LocationManager = () => {
    const getUserLocationSuccess = (location: GeolocationPosition) => {
        let newUserLocation = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        };

        if (state.userLocation?.latitude && state.userLocation?.longitude) {
            const preciseDistance = getPreciseDistance(state.userLocation, newUserLocation);
            console.log(
                `getUserLocationSuccess (diff: ${preciseDistance}, lat: ${location.coords.latitude}, lon: ${location.coords.longitude}, acc: ${location.coords.accuracy})`,
                0
            );
            if (preciseDistance < 100) return;
        }

        console.log(`getUserLocationSuccess (lat: ${location.coords.latitude}, lon: ${location.coords.longitude}, acc: ${location.coords.accuracy})`, 0);
        setUserLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude });
    };

    const getUserLocationError = (error: GeolocationPositionError) => {
        console.log(`getUserLocationError: ${error.message}`, 0);
        navigator.geolocation.getCurrentPosition(getUserLocationSuccess, getUserLocationError, {
            enableHighAccuracy: false,
            maximumAge: Infinity,
        });
    };

    createEffect(() => {
        let watchPositionId: number | null = null;

        if (navigator.geolocation) {
            if (navigator.permissions && navigator.permissions.query) {
                navigator.permissions.query({ name: "geolocation" }).then((result) => {
                    console.log(`Query geolocation result: ${result.state}`, 0);
                    if (result.state === "granted") {
                        navigator.geolocation.getCurrentPosition(getUserLocationSuccess, getUserLocationError, {
                            enableHighAccuracy: false,
                            timeout: 2000,
                            maximumAge: Infinity,
                        });

                        watchPositionId = navigator.geolocation.watchPosition(getUserLocationSuccess);
                    } else if (result.state === "prompt") {
                        navigator.geolocation.getCurrentPosition(getUserLocationSuccess, getUserLocationError, {
                            enableHighAccuracy: true,
                            timeout: 60000,
                            maximumAge: 0,
                        });

                        watchPositionId = navigator.geolocation.watchPosition(getUserLocationSuccess);
                    } else if (result.state === "denied") {
                        // TODO: show instructions to enable location
                    }
                    result.onchange = function () {
                        console.log(`Query geolocation change: ${result.state}`, 0);
                    };
                });
            } else {
                navigator.geolocation.getCurrentPosition(getUserLocationSuccess, getUserLocationError, {
                    enableHighAccuracy: false,
                    timeout: 2000,
                    maximumAge: Infinity,
                });

                watchPositionId = navigator.geolocation.watchPosition(getUserLocationSuccess);
            }
        } else {
            console.log("geolocation not available", 0);
        }

        onCleanup(() => {
            if (watchPositionId !== null) {
                navigator.geolocation.clearWatch(watchPositionId);
            }
        });
    });

    return null;
};

export default LocationManager;
