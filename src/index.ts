import { Engine } from '@babylonjs/core/Engines/engine';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Mesh } from "@babylonjs/core/Meshes/mesh"
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { GridMaterial } from '@babylonjs/materials/grid'

import "@babylonjs/core/Meshes/meshBuilder";

import { createStars } from './components/stars'
import { createScene } from './components/scene'
import { createSun } from './components/sun'

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;

const engine = new Engine(canvas);
//engine.loadingScreen = new BABYLON.DefaultLoadingScreen(canvas, "", "black")

function createDelayedScene() {
    // Scene
    const { scene } = createScene(canvas, engine)

    // Stuff
    //const { SPS, systemMesh: stars } = createStars(scene)
    createStars(scene)
    createSun(scene)


    /* var makeShadows=0;
     var lod=0; */

    let material = new GridMaterial("grid", scene);

    // base ground
    //const ground = Mesh.CreateGround("ground-1", 600, 600, 200, scene);
    const ground = MeshBuilder.CreateGround("ground", { width: 10, height: 10 })
    ground.material = material;

    let sphere = Mesh.CreateSphere("sphere-1", 16, 1, scene);

    sphere.position = new Vector3(2, 4, 0)
    sphere.scaling.x = 1
    sphere.scaling.y = 1
    sphere.scaling.z = 1

    sphere.material = material;

    /* const skybox = Mesh.CreateBox("BackgroundSkybox", 500, scene, undefined, Mesh.BACKSIDE);
        
    // Create and tweak the background material.
    const backgroundMaterial = new BABYLON.BackgroundMaterial("backgroundMaterial", scene);
    backgroundMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/TropicalSunnyDay", scene);
    backgroundMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skybox.material = backgroundMaterial; 
    var earthMaterial = new BABYLON.StandardMaterial("earthMaterial", scene);
        earth.material = earthMaterial;
        earthMaterial.ambientColor = new BABYLON.Color3(.8, .8, 1); */
    return scene
}

let scene
setTimeout(() => {scene = createDelayedScene()}, 600)

engine.runRenderLoop(() => {
    if (!scene) {
        engine.displayLoadingUI()
    }
    if (scene) {
        scene.render();
        engine.hideLoadingUI()
    }
})