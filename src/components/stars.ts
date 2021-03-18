import { Scene } from '@babylonjs/core/scene';
import { Vector3, Color4, Matrix } from '@babylonjs/core/Maths/math';
import { Mesh } from "@babylonjs/core/Meshes/mesh"
import { ParticleSystem } from '@babylonjs/core/Particles/particleSystem'
import { Texture } from '@babylonjs/core/Materials/Textures/texture'
import { SphereParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/sphereParticleEmitter'
import { GlowLayer } from '@babylonjs/core/Layers/glowLayer'
import { Particle } from '@babylonjs/core';

export function createStars(scene: Scene) {
    // ParticleSystem  SphereParticleEmitter
    const baseStarModel = Mesh.CreateBox("emitter", 0.01, scene)
    const starsParticles = new ParticleSystem("starParticles", 7000, scene)
    // const gl = new GlowLayer("starGlow", scene, { blurKernelSize: 64 });

    starsParticles.particleTexture = new Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_Star.png", scene)
    
    const minDistance = 0
    const scale = 200
    const indicatorFunction = () => Math.random() < .5 ? -1: 1
    const getPosition = () => minDistance + (Math.random() * (scale * indicatorFunction()))
    const getRandomPosition = () => [getPosition(), getPosition(), getPosition()]
    starsParticles.startPositionFunction = (worldMatrix: Matrix, positionToUpdate: Vector3, particle: Particle, isLocal: boolean): void => {
        const [x, y, z] = getRandomPosition()
        Vector3.TransformCoordinatesFromFloatsToRef(x, y, z, worldMatrix, positionToUpdate)
    }

    const starsEmitter = new SphereParticleEmitter()
    starsEmitter.radius = 30
    starsEmitter.radiusRange = 1
    starsEmitter.startPositionFunction = (worldMatrix: Matrix, positionToUpdate: Vector3, particle: Particle, isLocal: boolean): void => {
        const [x, y, z] = getRandomPosition()
        Vector3.TransformCoordinatesFromFloatsToRef(x, y, z, worldMatrix, positionToUpdate)
    }

    starsParticles.emitter = baseStarModel
    // starsParticles.emitter = Vector3.Zero()
    starsParticles.particleEmitterType = starsEmitter

    starsParticles.color1 = new Color4(0.898, 0.737, 0.718, 1.0);
    starsParticles.color2 = new Color4(0.584, 0.831, 0.894, 1.0);
    // starsParticles.minEmitBox = new Vector3(10, 10, 10)
    // starsParticles.maxEmitBox = new Vector3(100, 100, 100)
    starsParticles.minLifeTime = 999999
    starsParticles.maxLifeTime = 999999
    starsParticles.manualEmitCount = 500;
    starsParticles.maxEmitPower = 0.0;
    starsParticles.minSize = 1.15//0.15;
    starsParticles.maxSize = 5.7//0.3;
    starsParticles.blendMode = ParticleSystem.BLENDMODE_STANDARD
    starsParticles.gravity = new Vector3(0, 0, 0)
    starsParticles.minAngularSpeed = 0.0
    starsParticles.maxAngularSpeed = 0.0
    starsParticles.isBillboardBased = true
    starsParticles.renderingGroupId = 0;
    starsParticles.start()

    return scene;
}