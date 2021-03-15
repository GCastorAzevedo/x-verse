import { Scene } from '@babylonjs/core/scene';
import { Vector3, Color4, Color3 } from '@babylonjs/core/Maths/math';
import { Mesh } from "@babylonjs/core/Meshes/mesh"
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder'
import { ParticleSystem } from '@babylonjs/core/Particles/particleSystem'
import { Texture } from '@babylonjs/core/Materials/Textures/texture'
import { StandardMaterial} from '@babylonjs/core/Materials/standardMaterial'
import { SphereParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/sphereParticleEmitter'


export function createSun(scene: Scene) {
    // Emitter object
    var stars = Mesh.CreateBox("emitter", 0.01, scene);

    // Create a particle system
    var surfaceParticles = new ParticleSystem("surfaceParticles", 1600, scene);
    var flareParticles = new ParticleSystem("flareParticles", 20, scene);
    var coronaParticles = new ParticleSystem("coronaParticles", 600, scene);
    var starsParticles = new ParticleSystem("starsParticles", 500, scene);

    // Texture of each particle
    surfaceParticles.particleTexture = new Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_SunSurface.png", scene);
    flareParticles.particleTexture = new Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_SunFlare.png", scene);
    coronaParticles.particleTexture = new Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_Star.png", scene);
    starsParticles.particleTexture = new Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_Star.png", scene);

    // Create core sphere
    var coreSphere = MeshBuilder.CreateSphere("coreSphere", { diameter: 2.01, segments: 64 }, scene);

    // Create core material
    var coreMat = new StandardMaterial("coreMat", scene)
    coreMat.emissiveColor = new Color3(0.3773, 0.0930, 0.0266);

    // Assign core material to sphere
    coreSphere.material = coreMat;

    // Pre-warm
    surfaceParticles.preWarmStepOffset = 10;
    surfaceParticles.preWarmCycles = 100;

    flareParticles.preWarmStepOffset = 10;
    flareParticles.preWarmCycles = 100;

    coronaParticles.preWarmStepOffset = 10;
    coronaParticles.preWarmCycles = 100;

    // Initial rotation
    surfaceParticles.minInitialRotation = -2 * Math.PI;
    surfaceParticles.maxInitialRotation = 2 * Math.PI;

    flareParticles.minInitialRotation = -2 * Math.PI;
    flareParticles.maxInitialRotation = 2 * Math.PI;

    coronaParticles.minInitialRotation = -2 * Math.PI;
    coronaParticles.maxInitialRotation = 2 * Math.PI;

    // Where the sun particles come from
    var sunEmitter = new SphereParticleEmitter();
    sunEmitter.radius = 1;
    sunEmitter.radiusRange = 0; // emit only from shape surface

    // // Where the stars particles come from
    var starsEmitter = new SphereParticleEmitter();
    starsEmitter.radius = 20;
    starsEmitter.radiusRange = 0; // emit only from shape surface

    // Assign particles to emitters
    surfaceParticles.emitter = coreSphere; // the starting object, the emitter
    surfaceParticles.particleEmitterType = sunEmitter;

    flareParticles.emitter = coreSphere; // the starting object, the emitter
    flareParticles.particleEmitterType = sunEmitter;

    coronaParticles.emitter = coreSphere; // the starting object, the emitter
    coronaParticles.particleEmitterType = sunEmitter;

    starsParticles.emitter = stars; // the starting object, the emitter
    starsParticles.particleEmitterType = starsEmitter;

    // Random starting color
    starsParticles.color1 = new Color4(0.898, 0.737, 0.718, 1.0);
    starsParticles.color2 = new Color4(0.584, 0.831, 0.894, 1.0);

    // Color gradient over time
    surfaceParticles.addColorGradient(0, new Color4(0.8509, 0.4784, 0.1019, 0.0));
    surfaceParticles.addColorGradient(0.4, new Color4(0.6259, 0.3056, 0.0619, 0.5));
    surfaceParticles.addColorGradient(0.5, new Color4(0.6039, 0.2887, 0.0579, 0.5));
    surfaceParticles.addColorGradient(1.0, new Color4(0.3207, 0.0713, 0.0075, 0.0));

    flareParticles.addColorGradient(0, new Color4(1, 0.9612, 0.5141, 0.0));
    flareParticles.addColorGradient(0.25, new Color4(0.9058, 0.7152, 0.3825, 1.0));
    flareParticles.addColorGradient(1.0, new Color4(0.6320, 0.0, 0.0, 0.0));

    coronaParticles.addColorGradient(0, new Color4(0.8509, 0.4784, 0.1019, 0.0));
    coronaParticles.addColorGradient(0.5, new Color4(0.6039, 0.2887, 0.0579, 0.12));
    coronaParticles.addColorGradient(1.0, new Color4(0.3207, 0.0713, 0.0075, 0.0));

    // Size of each particle (random between...
    surfaceParticles.minSize = 0.4;
    surfaceParticles.maxSize = 0.7;

    flareParticles.minScaleX = 0.5;
    flareParticles.minScaleY = 0.5;
    flareParticles.maxScaleX = 1.0;
    flareParticles.maxScaleY = 1.0;

    coronaParticles.minScaleX = 0.5;
    coronaParticles.minScaleY = 0.75;
    coronaParticles.maxScaleX = 1.2;
    coronaParticles.maxScaleY = 3.0;

    starsParticles.minSize = 0.15;
    starsParticles.maxSize = 0.3;

    // Size over lifetime
    flareParticles.addSizeGradient(0, 0);
    flareParticles.addSizeGradient(1, 1);

    // Life time of each particle (random between...
    surfaceParticles.minLifeTime = 8.0;
    surfaceParticles.maxLifeTime = 8.0;

    flareParticles.minLifeTime = 10.0;
    flareParticles.maxLifeTime = 10.0;

    coronaParticles.minLifeTime = 2.0;
    coronaParticles.maxLifeTime = 2.0;

    starsParticles.minLifeTime = 999999;
    starsParticles.maxLifeTime = 999999;

    // Emission rate
    surfaceParticles.emitRate = 200;
    flareParticles.emitRate = 1;
    coronaParticles.emitRate = 300;

    // Burst rate
    starsParticles.manualEmitCount = 500;
    starsParticles.maxEmitPower = 0.0;

    // Blend mode : BLENDMODE_ONEONE, BLENDMODE_STANDARD, or BLENDMODE_ADD
    surfaceParticles.blendMode = ParticleSystem.BLENDMODE_ADD;
    flareParticles.blendMode = ParticleSystem.BLENDMODE_ADD;
    coronaParticles.blendMode = ParticleSystem.BLENDMODE_ADD;
    // starsParticles.blendMode = ParticleSystem.BLENDMODE_STANDARD;

    // Set the gravity of all particles
    surfaceParticles.gravity = new Vector3(0, 0, 0);
    flareParticles.gravity = new Vector3(0, 0, 0);
    coronaParticles.gravity = new Vector3(0, 0, 0);
    // starsParticles.gravity = new Vector3(0, 0, 0);

    // Angular speed, in radians
    surfaceParticles.minAngularSpeed = -0.4;
    surfaceParticles.maxAngularSpeed = 0.4;

    flareParticles.minAngularSpeed = 0.0;
    flareParticles.maxAngularSpeed = 0.0;

    coronaParticles.minAngularSpeed = 0.0;
    coronaParticles.maxAngularSpeed = 0.0;

    starsParticles.minAngularSpeed = 0.0;
    starsParticles.maxAngularSpeed = 0.0;

    // Speed
    surfaceParticles.minEmitPower = 0;
    surfaceParticles.maxEmitPower = 0;
    surfaceParticles.updateSpeed = 0.005;

    flareParticles.minEmitPower = 0.001;
    flareParticles.maxEmitPower = 0.01;

    coronaParticles.minEmitPower = 0.0;
    coronaParticles.maxEmitPower = 0.0;

    starsParticles.minEmitPower = 0.0;
    starsParticles.maxAngularSpeed = 0.0;

    // No billboard
    surfaceParticles.isBillboardBased = false;
    flareParticles.isBillboardBased = true;
    coronaParticles.isBillboardBased = true;
    starsParticles.isBillboardBased = true;

    // Render Order
    starsParticles.renderingGroupId = 0;
    coronaParticles.renderingGroupId = 0 //1;
    flareParticles.renderingGroupId = 0 //2;
    surfaceParticles.renderingGroupId = 0 //3;
    coreSphere.renderingGroupId = 0 //3;

    // Start the particle system
    surfaceParticles.start();
    flareParticles.start();
    coronaParticles.start();
    // starsParticles.start();

    return scene;
}