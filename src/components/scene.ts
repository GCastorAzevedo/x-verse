import { Scene } from '@babylonjs/core/scene';
import { Engine } from '@babylonjs/core/Engines/engine'
import { Color3, Color4, Vector3 } from '@babylonjs/core/Maths/math';
import { FreeCamera } from '@babylonjs/core/Cameras/freeCamera';
import { UniversalCamera } from '@babylonjs/core/Cameras/universalCamera'
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight'

import "@babylonjs/core/Meshes/meshBuilder";

interface ISceneOutput {
    scene: Scene,
    camera: FreeCamera | UniversalCamera,
    light: HemisphericLight
}

export function createScene(canvas: HTMLCanvasElement, engine: Engine): ISceneOutput {

    // Scene
    const scene = new Scene(engine);

    scene.clearColor = new Color4(0, 0, 0, 1)

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
    light.specular = Color3.White()//new Color3(0.95, 0.15, 0.11)

    return { scene, camera, light }
}