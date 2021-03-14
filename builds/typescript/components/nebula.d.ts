import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { BackgroundMaterial } from '@babylonjs/core/Materials/Background/backgroundMaterial';
import { Scene } from '@babylonjs/core/scene';
export declare class NebulaBackground {
    skybox: Mesh;
    skyboxMaterial: BackgroundMaterial;
    constructor(scene: Scene);
}
