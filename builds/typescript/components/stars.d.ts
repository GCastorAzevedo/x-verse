import { Scene } from '@babylonjs/core/scene';
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import * as BABYLON from "@babylonjs/core/Legacy/legacy";
interface IConstellationOutput {
    SPS: BABYLON.SolidParticleSystem;
    systemMesh: Mesh;
    baseModels: Mesh[];
}
export declare function createStars(scene: Scene): IConstellationOutput;
export {};
