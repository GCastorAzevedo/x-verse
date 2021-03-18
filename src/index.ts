import { Engine } from '@babylonjs/core/Engines/engine';
import { Color3, Vector3 } from '@babylonjs/core/Maths/math';
import { Mesh } from "@babylonjs/core/Meshes/mesh"
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { GridMaterial } from '@babylonjs/materials/grid'
import { OimoJSPlugin } from '@babylonjs/core/Physics/Plugins/oimoJSPlugin'
import * as OIMO from "oimo"

import "@babylonjs/core/Meshes/meshBuilder";
import '@babylonjs/core/Loading/loadingScreen'

import { createStars } from './components/stars'
import { createScene } from './components/scene'
import { createSun } from './components/sun'
import { NebulaBackground } from './components/nebula'
import { PhysicsHelper, PhysicsImpostor, PhysicsRadialImpulseFalloff, StandardMaterial, Texture } from '@babylonjs/core';

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;

const engine = new Engine(canvas);
//engine.loadingScreen = new BABYLON.DefaultLoadingScreen(canvas, "", "black")

function createDelayedScene() {
    // Scene
    const { scene } = createScene(canvas, engine)

    const origin = Vector3.Zero()
    const gravityVector = new Vector3(0, -0.5, 0) //Vector3.Zero()
    const physicsPlugin = new OimoJSPlugin(true, undefined, OIMO)
    scene.enablePhysics(gravityVector, physicsPlugin)
    const physicsHelper = new PhysicsHelper(scene)

    /* var gl = new BABYLON.GlowLayer("glow", scene, {
            mainTextureFixedSize: 512
        });        
    */
    // Stuff

    /* Galaxy Background */
    const nebula = new NebulaBackground(scene)
    //const { SPS, systemMesh: stars } = createStars(scene)
    createStars(scene)
    const { coreSphere } = createSun(scene)
    coreSphere.position = origin
    // Add gravitational field
    const radius = 100
    const strength = -20
    const falloff = PhysicsRadialImpulseFalloff.Linear
    const gravitationalFieldEvent = physicsHelper.gravitationalField(origin, radius, strength, falloff)
    if (gravitationalFieldEvent) gravitationalFieldEvent.enable()
    // coreSphere.physicsImpostor = new PhysicsImpostor(coreSphere, PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0.8}, scene)
    /*
// the second `radius` argument can also act as options: `.gravitationalField(origin, { radius: radius, strength: strength, falloff: falloff })`
gravitationalFieldEvent.enable(); // need to call, if you want to activate the gravitational field.
setTimeout(function (gravitationalFieldEvent) { gravitationalFieldEvent.disable(); }, 3000, gravitationalFieldEvent);
*/


    /* var makeShadows=0;
     var lod=0; */

    // ground
    let material = new GridMaterial("grid", scene);
    const ground = Mesh.CreateGround("ground", 10, 10, 200, scene);
    ground.position.y = -7
    ground.material = material;
    ground.physicsImpostor = new PhysicsImpostor(ground, PhysicsImpostor.PlaneImpostor, { mass: 0, restitution: 0.9 }, scene);


    let planet = Mesh.CreateSphere("sphere-1", 16, 1, scene);
    let planetMaterial = new StandardMaterial("planetMAterial", scene)
    planetMaterial.ambientTexture = new Texture("https://i.imgur.com/wlnx1yQ.jpg", scene, true, false)
    planetMaterial.specularColor = Color3.Black()
    planetMaterial.emissiveColor = new Color3(1, 1, 1)

    planet.position = new Vector3(5, 0, 0)
    planet.scaling.x = 1
    planet.scaling.y = 1
    planet.scaling.z = 1

    planet.material = planetMaterial;
    planet.physicsImpostor = new PhysicsImpostor(planet, PhysicsImpostor.SphereImpostor, { mass: 10, restitution: 0.9 }, scene)

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
    /* scene.registerBeforeRender(() => {
        planet.position.x = Math.cos(dt) * 10
        planet.position.z = Math.sin(dt) * 7
        planet.position.y = 0
        planet.rotation.y -= 0.01
        dt += 0.005
    }) */

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