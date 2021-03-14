import { Scene } from '@babylonjs/core/scene';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Mesh } from "@babylonjs/core/Meshes/mesh"
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder'
import * as BABYLON from "@babylonjs/core/Legacy/legacy";

interface IConstellationOutput {
    SPS: BABYLON.SolidParticleSystem,
    systemMesh: Mesh,
    baseModels: Mesh[]
}

export function createStars(scene: Scene): IConstellationOutput {
    ////////////////////////////////////////////////////////////////////////////////////
    /* Background stars */
    ////////////////////////////////////////////////////////////////////////////////////
    const nb = 10000;
    const fact = 20000
    const minDistance = 10000
    const starDiameter = 15

    const indicatorFunction = () => Math.random() < .5 ? -1 : 1
    const getPosition = () => minDistance + (Math.random() * (fact * indicatorFunction()))
    const starPosition = (particle, i, s) => {
        particle.position = new Vector3(getPosition(), getPosition(), getPosition())
        particle.color = new BABYLON.Color4(1, 1, 0.3, 1.0)
        //gl.addIncludedOnlyMesh(particle)
        //gl.intensity = 10
    }

    const gl = new BABYLON.GlowLayer("starGlow", scene, { blurKernelSize: 64 });

    // Red stars
    const redMaterial = new BABYLON.StandardMaterial("redStarsMaterial", scene)
    redMaterial.emissiveColor = BABYLON.Color3.Red()
    const redStar = MeshBuilder.CreateSphere("s", { segments: 6, diameter: starDiameter }, scene)
    redStar.position = new BABYLON.Vector3(1000, 1000, 1000)
    redStar.material = redMaterial

    // Blue stars
    const blueMaterial = new BABYLON.StandardMaterial("blueStarsMaterial", scene)
    blueMaterial.emissiveColor = new BABYLON.Color3(0.7, 0.96, 1)
    blueMaterial.specularColor = BABYLON.Color3.White()
    const blueStar = MeshBuilder.CreateSphere("s", { segments: 6, diameter: starDiameter }, scene)
    blueStar.position = new BABYLON.Vector3(1000, 1000, 1000)
    blueStar.material = blueMaterial

    // Yellow stars
    /*this.mat.diffuseTexture = new BABYLON.Texture("textures/misc.jpg", scene);
    this.mat.emissiveTexture = this.mat.diffuseTexture; */
    const yellowMaterial = new BABYLON.StandardMaterial("yellowStarMaterial", scene)
    yellowMaterial.emissiveColor = new BABYLON.Color3(1, 1, 0.6)
    yellowMaterial.specularColor = BABYLON.Color3.White()
    const yellowStar = MeshBuilder.CreateSphere("s", { segments: 6, diameter: starDiameter }, scene)
    yellowStar.position = new BABYLON.Vector3(1000, 1000, 1000)
    yellowStar.material = yellowMaterial

    // Orange stars
    const orangeMaterial = new BABYLON.StandardMaterial("orangeStarMaterial", scene)
    orangeMaterial.emissiveColor = new BABYLON.Color3(.96, .75, .26)
    orangeMaterial.specularColor = BABYLON.Color3.White()
    const orangeStar = MeshBuilder.CreateSphere("s", { segments: 6, diameter: starDiameter }, scene)
    orangeStar.position = new BABYLON.Vector3(1000, 1000, 1000)
    orangeStar.material = orangeMaterial

    // White stars
    const whiteMaterial = new BABYLON.StandardMaterial("whiteStarMaterial", scene)
    whiteMaterial.emissiveColor = BABYLON.Color3.White()
    whiteMaterial.specularColor = BABYLON.Color3.White()
    const whiteStar = MeshBuilder.CreateSphere("s", { segments: 6, diameter: starDiameter }, scene)
    whiteStar.position = new BABYLON.Vector3(1000, 1000, 1000)
    whiteStar.material = whiteMaterial

    const SPS = new BABYLON.SolidParticleSystem('SPS', scene, { useModelMaterial: true, updatable: false })
    //SPS.addShape(redStar, nb, { positionFunction: starPosition })
    SPS.addShape(blueStar, nb, { positionFunction: starPosition })
    SPS.addShape(yellowStar, nb, { positionFunction: starPosition })
    SPS.addShape(orangeStar, nb, { positionFunction: starPosition })
    SPS.addShape(whiteStar, nb, { positionFunction: starPosition })
    const systemMesh = SPS.buildMesh()
    // starSphere.dispose()
    ////////////////////////////////////////////////////////////////////////////////////
    return { SPS, systemMesh, baseModels: [redStar, blueStar, yellowStar, orangeStar, whiteStar] }
}