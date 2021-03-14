import { Scene } from '@babylonjs/core/scene';
import { Engine } from '@babylonjs/core/Engines/engine';
import { FreeCamera } from '@babylonjs/core/Cameras/freeCamera';
import { UniversalCamera } from '@babylonjs/core/Cameras/universalCamera';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import "@babylonjs/core/Meshes/meshBuilder";
interface ISceneOutput {
    scene: Scene;
    camera: FreeCamera | UniversalCamera;
    light: HemisphericLight;
}
export declare function createScene(canvas: HTMLCanvasElement, engine: Engine): ISceneOutput;
export {};
