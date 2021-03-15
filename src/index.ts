import { Engine } from '@babylonjs/core/Engines/engine';
import { Color3, Vector3 } from '@babylonjs/core/Maths/math';
import { Mesh } from "@babylonjs/core/Meshes/mesh"
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { GridMaterial } from '@babylonjs/materials/grid'

import "@babylonjs/core/Meshes/meshBuilder";
import '@babylonjs/core/Loading/loadingScreen'

import { createStars } from './components/stars'
import { createScene } from './components/scene'
import { createSun } from './components/sun'
import { NebulaBackground } from './components/nebula'
import { StandardMaterial, Texture } from '@babylonjs/core';

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;

const engine = new Engine(canvas);
//engine.loadingScreen = new BABYLON.DefaultLoadingScreen(canvas, "", "black")

function createDelayedScene() {
    // Scene
    const { scene } = createScene(canvas, engine)

    /* var gl = new BABYLON.GlowLayer("glow", scene, {
            mainTextureFixedSize: 512
        });        
    */
    // Stuff

    /* Galaxy Background */
    const nebula = new NebulaBackground(scene)
    //const { SPS, systemMesh: stars } = createStars(scene)
    createStars(scene)
    createSun(scene)


    /* var makeShadows=0;
     var lod=0; */

    //let material = new GridMaterial("grid", scene);
    // // base ground
    // //const ground = Mesh.CreateGround("ground-1", 600, 600, 200, scene);
    // const ground = MeshBuilder.CreateGround("ground", { width: 10, height: 10 })
    // ground.material = material;

    let planet = Mesh.CreateSphere("sphere-1", 16, 1, scene);
    /* var mat = new BABYLON.StandardMaterial("planetMat", scene);
    mat.ambientTexture = new BABYLON.Texture("https://i.imgur.com/wlnx1yQ.jpg", scene, true, false);
    sphere.material = mat; */
    let planetMaterial = new StandardMaterial("planetMAterial", scene)
    planetMaterial.ambientTexture = new Texture("https://i.imgur.com/wlnx1yQ.jpg", scene, true, false)
    planetMaterial.specularColor = Color3.Black()
    planetMaterial.emissiveColor = new Color3(1, 1, 1)

    planet.position = new Vector3(0, 0, 0)
    planet.scaling.x = 1
    planet.scaling.y = 1
    planet.scaling.z = 1

    planet.material = planetMaterial;

    /* var terre = BABYLON.Mesh.CreateSphere('terre', 16, 2, scene);
    terre.position.x = 10;

    var earthMat = new BABYLON.StandardMaterial('earth', scene);
    earthMat.diffuseTexture = new BABYLON.Texture('https://1.bp.blogspot.com/-UUXaK5GCj-k/UcsKJRMgkVI/AAAAAAAACfM/sePP_H08JTQ/s1600/1.jpg', scene, false, false);
    earthMat.specularColor = BABYLON.Color3.Black();
    terre.material = earthMat;
    var sunMat = new  BABYLON.StandardMaterial('sun', scene);
    sunMat.diffuseColor = BABYLON.Color3.Yellow();
    sunMat.specularColor = BABYLON.Color3.Black();
    sunMat.emissiveColor = BABYLON.Color3.Yellow();
    sun.material = sunMat;

    var alpha = 0;
    scene.registerBeforeRender(() => {
        terre.position.x = Math.cos(alpha) * 10;
        terre.position.z = Math.sin(alpha) * 10;
        terre.rotation.y -= 0.01;
        alpha += 0.01;
    }) */
    let dt = 0
    scene.registerBeforeRender(() => {
        planet.position.x = Math.cos(dt) * 10
        planet.position.z = Math.sin(dt) * 7
        planet.position.y = 0
        planet.rotation.y -= 0.01
        dt += 0.005
    })

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
setTimeout(() => { scene = createDelayedScene() }, 600)

engine.runRenderLoop(() => {
    if (!scene) {
        engine.displayLoadingUI()
    }
    if (scene) {
        scene.render();
        engine.hideLoadingUI()
    }
})