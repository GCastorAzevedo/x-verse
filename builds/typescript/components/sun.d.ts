import { Scene } from '@babylonjs/core/scene';
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { ParticleSystem } from '@babylonjs/core/Particles/particleSystem';
export declare function createSun(scene: Scene): {
    coreSphere: Mesh;
    coronaParticles: ParticleSystem;
    flareParticles: ParticleSystem;
    surfaceParticles: ParticleSystem;
};
