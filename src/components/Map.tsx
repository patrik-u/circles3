import { createEffect, createSignal, onCleanup, Accessor, Component } from "solid-js";
import * as THREE from "three";
import { Circle, circles, toggleResize, setToggleResize } from "./CirclesData";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Map: Component = () => {
    let mapRef: HTMLDivElement;
    let mapContainerRef: HTMLDivElement;
    const [sceneState, setSceneState] = createSignal<THREE.Scene | null>(null);
    const [cameraState, setCameraState] = createSignal<THREE.PerspectiveCamera | null>(null);
    const [rendererState, setRendererState] = createSignal<THREE.WebGLRenderer | null>(null);

    createEffect(() => {
        if (toggleResize()) {
            onWindowResize();
            setToggleResize(false);
        }
    });

    const init = () => {
        console.log("initializing three js");

        const width = mapContainerRef.clientWidth;
        const height = mapContainerRef.clientHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.001, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        mapRef.appendChild(renderer.domElement);

        //"#5b77c5";
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0x5b77c5, wireframe: true });
        camera.position.z = 2;

        const earthMap = new TextureLoader().load("./images/1_earth_sm.jpg");
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enablePan = false; // Disable panning
        controls.minDistance = 1.002; // Set a minimum distance from the sphere
        controls.maxDistance = 20; // Set a maximum distance from the sphere
        controls.screenSpacePanning = false; // Move the camera along the surface
        //controls.dynamicDampingFactor = 0.1;

        controls.target = new THREE.Vector3(0, 0, 0); // Set the target to the center of the sphere
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
        const globeMesh = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshStandardMaterial({ map: earthMap }));
        scene.add(globeMesh);

        let previousDistance = 0;
        let previousZoomSpeed = 0;

        const animate = () => {
            requestAnimationFrame(animate);
            //globeMesh.rotation.y -= 0.002;
            // Calculate the distance from the camera to the target
            const distance = camera.position.distanceTo(controls.target);
            // if (distance != previousDistance) {
            //     console.log(distance);
            //     previousDistance = distance;
            // }
            // Calculate a factor for the zoom speed
            const zoomSpeedFactor = (distance - controls.minDistance) / (2 - controls.minDistance);
            // Set the zoom speed based on the factor, using a quadratic function
            controls.zoomSpeed = Math.min(Math.max(0.001, zoomSpeedFactor), 5);
            // Adjust the zoomSpeed based on the distance
            //controls.zoomSpeed = THREE.MathUtils.lerp(0.1, 10, (distance - controls.minDistance) / (controls.maxDistance - controls.minDistance));
            // if (controls.zoomSpeed != previousZoomSpeed) {
            //     console.log("zoomSpeed", controls.zoomSpeed);
            //     previousZoomSpeed = controls.zoomSpeed;
            // }
            //controls.zoomSpeed = 0.5;
            // Calculate a factor for the pan speed
            //const rotateSpeedFactor = (distance - controls.minDistance) / (2 - controls.minDistance);
            // Set the pan speed based on the factor, using a linear function
            controls.rotateSpeed = 0.27; // Math.min(Math.max(0.001, rotateSpeedFactor), 5);
            controls.update();
            controls.update();
            renderer.render(scene, camera);
        };
        animate();
        setSceneState(scene);
        setCameraState(camera);
        setRendererState(renderer);
    };

    const createPin = (latitude: number, longitude: number) => {
        //#ff3c00
        const pinMaterial = new THREE.MeshBasicMaterial({ color: 0xff3c00 });
        const pinGeometry = new THREE.SphereGeometry(0.01, 5, 5); //new THREE.CylinderGeometry(0.01, 0.01, 0.1, 32);
        const pin = new THREE.Mesh(pinGeometry, pinMaterial);

        const phi = (90 - latitude) * (Math.PI / 180);
        const theta = (longitude + 180) * (Math.PI / 180);

        pin.position.x = -Math.sin(phi) * Math.cos(theta);
        pin.position.y = Math.cos(phi);
        pin.position.z = Math.sin(phi) * Math.sin(theta);
        pin.rotation.set(0, 0, Math.PI / 2);

        return pin;
    };

    const onWindowResize = () => {
        const width = mapContainerRef.clientWidth;
        const height = mapContainerRef.clientHeight;

        console.log("width", width);
        let camera = cameraState();
        let renderer = rendererState();
        if (!camera || !renderer) return;

        // Update the camera aspect ratio
        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        // Update the size of the renderer
        renderer.setSize(width, height);
    };

    createEffect(() => {
        init();

        // Add window resize event listener
        window.addEventListener("resize", onWindowResize);

        return () => {
            if (mapRef.firstChild) {
                mapRef.removeChild(mapRef.firstChild);
            }

            // Remove window resize event listener
            window.removeEventListener("resize", onWindowResize);
        };
    });

    createEffect(() => {
        let scene = sceneState();
        let camera = cameraState();
        let renderer = rendererState();
        let circlesAr = circles() ? Object.values(circles()) : [];
        if (!scene || !camera || !renderer || !circlesAr) return;

        console.log("updating pins", circlesAr?.length);

        // Remove all existing pins before creating new ones
        scene.children.filter((child) => child.userData.pin).forEach((child) => scene?.remove(child));

        circlesAr.forEach((circle: any) => {
            if (circle.latitude && circle.longitude) {
                const pin = createPin(circle.latitude, circle.longitude);
                pin.userData.pin = true; // Add a flag to identify pin objects
                scene?.add(pin);
            }
        });

        renderer.render(scene, camera);
    });

    return (
        <div class="map-container w-full h-full relative" ref={mapContainerRef!}>
            <div class="map absolute" ref={mapRef!}></div>
        </div>
    );
};

export default Map;
