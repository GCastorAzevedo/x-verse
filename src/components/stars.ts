import { Vector3 } from '@babylonjs/core/Maths/math';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder'
import * as BABYLON from "@babylonjs/core/Legacy/legacy";

export function createStars(scene) {
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
        particle.color = new BABYLON.Color4(1, 1, 1, 1.0)
        gl.addIncludedOnlyMesh(particle)
        gl.intensity = 10
    }

    //const starTriangle = BABYLON.MeshBuilder.CreateDisc("t", {tessellation: 6, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
    const starSphere = MeshBuilder.CreateSphere("s", { segments: 6, diameter: starDiameter }, scene)

    starSphere.position = new BABYLON.Vector3(1000,1000,1000)

    const gl = new BABYLON.GlowLayer("glow", scene);

    const SPS = new BABYLON.SolidParticleSystem('SPS', scene, { updatable: true })
    SPS.addShape(starSphere, nb, { positionFunction: starPosition })
    const stars = SPS.buildMesh()
    // starSphere.dispose()
    ////////////////////////////////////////////////////////////////////////////////////
    return { SPS, stars, starSphere }
}