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
import { PhysicsHelper, PhysicsImpostor, PhysicsRadialExplosionEventOptions, PhysicsRadialImpulseFalloff, StandardMaterial, Texture } from '@babylonjs/core';
import { PlanePanel } from '@babylonjs/gui';

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;

const engine = new Engine(canvas);
//engine.loadingScreen = new BABYLON.DefaultLoadingScreen(canvas, "", "black")

function createDelayedScene() {
    // Scene
    const { scene } = createScene(canvas, engine)

    const origin = Vector3.Zero()
    const gravityVector = Vector3.Zero() // new Vector3(0, -0.5, 0)
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

    // coreSphere.physicsImpostor = new PhysicsImpostor(coreSphere, PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0.8}, scene)
    /*
// the second `radius` argument can also act as options: `.gravitationalField(origin, { radius: radius, strength: strength, falloff: falloff })`
gravitationalFieldEvent.enable(); // need to call, if you want to activate the gravitational field.
setTimeout(function (gravitationalFieldEvent) { gravitationalFieldEvent.disable(); }, 3000, gravitationalFieldEvent);
*/


    /* var makeShadows=0;
     var lod=0; */

    // ground
    // let material = new GridMaterial("grid", scene);
    // const ground = Mesh.CreateGround("ground", 10, 10, 200, scene);
    // ground.position.y = -7
    // ground.material = material;
    // ground.physicsImpostor = new PhysicsImpostor(ground, PhysicsImpostor.PlaneImpostor, { mass: 0, restitution: 0.9 }, scene);


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
    // sphere.physicsImpostor.applyImpulse(new BABYLON.Vector3(10, -10, sphere.position.x), new BABYLON.Vector3(sphere.position.x, sphere.position.y, sphere.position.z))
    planet.physicsImpostor.applyImpulse(new Vector3(2,1,5), planet.position)
    // Add gravitational field
    const radius = 50
    const strength = .01
    const falloff = PhysicsRadialImpulseFalloff.Linear
    /*const gravitationalFieldEvent = physicsHelper.gravitationalField(origin, radius, strength, falloff)
    if (gravitationalFieldEvent) gravitationalFieldEvent.enable()
    const eventData = gravitationalFieldEvent?.getData()
    const sphereData = eventData?.sphere
    const sphereDataMaterial = new StandardMaterial("sphereMaterial", scene)
    if (sphereData) {
        sphereData.isVisible = true
        sphereDataMaterial.alpha = 0.5
        sphereDataMaterial.specularColor = Color3.Red()
        sphereDataMaterial.emissiveColor = new Color3(1,1,1)
        // planet.position = new Vector3(5, 0, 0)
        sphereData.material = sphereDataMaterial
        sphereData.position = new Vector3(0,0,0)
    }
    console.log(gravitationalFieldEvent, eventData, sphereData)
 */
    // 
    // var event = physicsHelper.gravitationalField(
    //     origin,
    //     radius,
    //     strength,
    //     falloff);
    // event?.enable();

    // Boxes
    // var physicsViewer = new Debug.PhysicsViewer();
    /* var boxSize = 2;
    var boxPadding = 4;
    var minXY = -12;
    var maxXY = 12;
    var maxZ = 8;
    var boxParams = { height: boxSize, width: boxSize, depth: boxSize };
    var boxImpostorParams = { mass: boxSize, restitution: 0, friction: 1 };
    var boxMaterial = new StandardMaterial("boxMaterial", scene);
    boxMaterial.diffuseColor = new Color3(1, 0, 0);
    for (var x = minXY; x <= maxXY; x += boxSize + boxPadding) {
        for (var z = minXY; z <= maxXY; z += boxSize + boxPadding) {
            for (var y = boxSize / 2; y <= maxZ; y += boxSize) {
                var boxName = "box:" + x + ',' + y + ',' + z;
                var box = MeshBuilder.CreateBox(boxName, boxParams, scene);
                box.position = new Vector3(x, y, z);
                box.material = boxMaterial;
                box.physicsImpostor = new PhysicsImpostor(box, PhysicsImpostor.BoxImpostor, boxImpostorParams, scene);
                // physicsViewer.showImpostor(box.physicsImpostor);
            }
        }
    } */

    // Gravitational field
    var gravitationalFieldOrigin = new Vector3(0, 0, 0);
    setTimeout(function() {
        var event = physicsHelper.gravitationalField(
            gravitationalFieldOrigin,
            {
                radius,
                strength,
                falloff: PhysicsRadialImpulseFalloff.Linear,
            } as PhysicsRadialExplosionEventOptions
        );
        event?.enable();

        // Debug
        var eventData = event?.getData();
        var sphere = eventData?.sphere;
        addMaterialToMesh(sphere);
        if (sphere?.isVisible) sphere.isVisible = true;

        
        // Debug - END
    }, 1000);

    // Helpers
    // Debug
    function addMaterialToMesh(sphere) {
        var sphereMaterial = new StandardMaterial("sphereMaterial", scene);
        sphereMaterial.alpha = 1;
        sphereMaterial.emissiveColor = new Color3(1,0,1)
        sphere.material = sphereMaterial;
    }
    // var eventData = event?.getData();
    // // console.log(physicsHelper, event, eventData, eventData?.sphere)
    // console.log(eventData?.sphere)
    // var sphere = eventData?.sphere;
    // addMaterialToMesh(sphere);
    // if (sphere?.isVisible) sphere.isVisible = true;
    // 

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