import { Scene } from '@babylonjs/core/scene';
import { Vector3, Color3, Color4 } from '@babylonjs/core/Maths/math';
import { Mesh } from "@babylonjs/core/Meshes/mesh"
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder'
import { SolidParticleSystem } from '@babylonjs/core/Particles/solidParticleSystem'
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial'
import { GlowLayer } from '@babylonjs/core/Layers/glowLayer'
// import { Texture } from '@babylonjs/core/Materials/Textures'

interface IConstellationOutput {
    SPS: SolidParticleSystem,
    systemMesh: Mesh,
    baseModels: Mesh[]
}

export function createStars(scene: Scene): IConstellationOutput {
    ////////////////////////////////////////////////////////////////////////////////////
    /* Background stars */
    ////////////////////////////////////////////////////////////////////////////////////
    const nb = 2000;
    const fact = 20000
    const minDistance = 10000
    const starDiameter = 15

    const indicatorFunction = () => Math.random() < .5 ? -1 : 1
    const getPosition = () => minDistance + (Math.random() * (fact * indicatorFunction()))
    const starPosition = (particle, i, s) => {
        particle.position = new Vector3(getPosition(), getPosition(), getPosition())
        particle.color = new Color4(1, 1, 0.3, 1.0)
        //gl.addIncludedOnlyMesh(particle)
        //gl.intensity = 10
    }

    const gl = new GlowLayer("starGlow", scene, { blurKernelSize: 64 });

    // Red stars
    const redMaterial = new StandardMaterial("redStarsMaterial", scene)
    redMaterial.emissiveColor = Color3.Red()
    const redStar = MeshBuilder.CreateSphere("s", { segments: 6, diameter: starDiameter }, scene)
    redStar.position = new Vector3(1000, 1000, 1000)
    redStar.material = redMaterial

    // Blue stars
    const blueMaterial = new StandardMaterial("blueStarsMaterial", scene)
    blueMaterial.emissiveColor = new Color3(0.7, 0.96, 1)
    blueMaterial.specularColor = Color3.White()
    const blueStar = MeshBuilder.CreateSphere("s", { segments: 6, diameter: starDiameter }, scene)
    blueStar.position = new Vector3(1000, 1000, 1000)
    blueStar.material = blueMaterial

    // Yellow stars
    /*this.mat.diffuseTexture = new Texture("textures/misc.jpg", scene);
    this.mat.emissiveTexture = this.mat.diffuseTexture; */
    const yellowMaterial = new StandardMaterial("yellowStarMaterial", scene)
    yellowMaterial.emissiveColor = new Color3(1, 1, 0.75)
    yellowMaterial.specularColor = Color3.White()
    const yellowStar = MeshBuilder.CreateSphere("s", { segments: 6, diameter: starDiameter }, scene)
    yellowStar.position = new Vector3(1000, 1000, 1000)
    yellowStar.material = yellowMaterial

    // Orange stars
    const orangeMaterial = new StandardMaterial("orangeStarMaterial", scene)
    orangeMaterial.emissiveColor = new Color3(.96, .75, .26)
    orangeMaterial.specularColor = Color3.White()
    const orangeStar = MeshBuilder.CreateSphere("s", { segments: 6, diameter: starDiameter }, scene)
    orangeStar.position = new Vector3(1000, 1000, 1000)
    orangeStar.material = orangeMaterial

    // White stars
    const whiteMaterial = new StandardMaterial("whiteStarMaterial", scene)
    whiteMaterial.emissiveColor = Color3.White()
    whiteMaterial.specularColor = Color3.White()
    const whiteStar = MeshBuilder.CreateSphere("s", { segments: 6, diameter: starDiameter }, scene)
    whiteStar.position = new Vector3(1000, 1000, 1000)
    whiteStar.material = whiteMaterial

    const SPS = new SolidParticleSystem('SPS', scene, { useModelMaterial: true, updatable: false })
    // SPS.addShape(redStar, nb, { positionFunction: starPosition })
    SPS.addShape(blueStar, nb*2, { positionFunction: starPosition })
    SPS.addShape(yellowStar, nb, { positionFunction: starPosition })
    SPS.addShape(orangeStar, nb, { positionFunction: starPosition })
    SPS.addShape(whiteStar, nb*2, { positionFunction: starPosition })
    const systemMesh = SPS.buildMesh()
    // starSphere.dispose()
    ////////////////////////////////////////////////////////////////////////////////////
    return { SPS, systemMesh, baseModels: [redStar, blueStar, yellowStar, orangeStar, whiteStar] }
}