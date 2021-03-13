import { Scene } from '@babylonjs/core/scene';
import { Color3, Vector3 } from '@babylonjs/core/Maths/math';
import { FreeCamera } from '@babylonjs/core/Cameras/freeCamera';
import { UniversalCamera } from '@babylonjs/core/Cameras/universalCamera'
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight'
import * as BABYLON from "@babylonjs/core/Legacy/legacy";

import "@babylonjs/core/Meshes/meshBuilder";

interface ISceneOutput {
    scene: Scene,
    camera: FreeCamera | UniversalCamera,
    light: HemisphericLight
}

export function createScene(canvas: HTMLCanvasElement, engine: BABYLON.Engine): ISceneOutput {

    // Scene
    const scene = new Scene(engine);

    scene.clearColor = new BABYLON.Color4(0, 0, 0, 1)

    // Camera
    const camera = new FreeCamera("xverse", new Vector3(0, 5, -10), scene)
    /* var camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 0, new BABYLON.Vector3(0, 0, -0), scene);
     camera.setPosition(new BABYLON.Vector3(0, 1400, 50));
     camera.wheelPrecision = 1; */

    //camera.setTarget(Vector3.Zero());

    camera.attachControl(canvas, true);

    // Light
    let light = new HemisphericLight("light", new Vector3(100, 200, 300), scene);
    light.intensity = 1;
    light.specular = new Color3(0.95, 0.15, 0.11)

    return { scene, camera, light }
}