declare module "three-orbit-controls" {
    import { Camera, Object3D } from "three";

    class OrbitControls extends Object3D {
        constructor(camera: Camera, domElement?: HTMLElement);
        update(): void;
    }

    export default OrbitControls;
}
