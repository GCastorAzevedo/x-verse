
import { Mesh } from "@babylonjs/core/Meshes/mesh"
import { Texture } from '@babylonjs/core/Materials/Textures/texture'
import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture'
import { BackgroundMaterial } from '@babylonjs/core/Materials/Background/backgroundMaterial'
import { Scene } from '@babylonjs/core/scene'

export class NebulaBackground {
    skybox: Mesh
    skyboxMaterial: BackgroundMaterial
    constructor(scene: Scene) {
        this.skybox = Mesh.CreateBox("skyBox", 10000.0, scene)
        this.skyboxMaterial = new BackgroundMaterial("skyBox", scene)
        this.skyboxMaterial.backFaceCulling = false
        // this.skyboxMaterial.disableLighting = true;
        const files = [
            "src/textures/space/space_left.jpg",
            "src/textures/space/space_up.jpg",
            "src/textures/space/space_front.jpg",
            "src/textures/space/space_right.jpg",
            "src/textures/space/space_down.jpg",
            "src/textures/space/space_back.jpg"
        ]
        this.skyboxMaterial.reflectionTexture = CubeTexture.CreateFromImages(files, scene)
        this.skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE
        this.skybox.material = this.skyboxMaterial
        this.skybox.infiniteDistance = true
    }
}