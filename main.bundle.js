/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/nebula.ts":
/*!**********************************!*\
  !*** ./src/components/nebula.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NebulaBackground = void 0;
var mesh_1 = __webpack_require__(/*! @babylonjs/core/Meshes/mesh */ "./node_modules/@babylonjs/core/Meshes/mesh.js");
var texture_1 = __webpack_require__(/*! @babylonjs/core/Materials/Textures/texture */ "./node_modules/@babylonjs/core/Materials/Textures/texture.js");
var cubeTexture_1 = __webpack_require__(/*! @babylonjs/core/Materials/Textures/cubeTexture */ "./node_modules/@babylonjs/core/Materials/Textures/cubeTexture.js");
var backgroundMaterial_1 = __webpack_require__(/*! @babylonjs/core/Materials/Background/backgroundMaterial */ "./node_modules/@babylonjs/core/Materials/Background/backgroundMaterial.js");
var NebulaBackground = (function () {
    function NebulaBackground(scene) {
        this.skybox = mesh_1.Mesh.CreateBox("skyBox", 10000.0, scene);
        this.skyboxMaterial = new backgroundMaterial_1.BackgroundMaterial("skyBox", scene);
        this.skyboxMaterial.backFaceCulling = false;
        var files = [
            "src/textures/space/space_left.jpg",
            "src/textures/space/space_up.jpg",
            "src/textures/space/space_front.jpg",
            "src/textures/space/space_right.jpg",
            "src/textures/space/space_down.jpg",
            "src/textures/space/space_back.jpg"
        ];
        this.skyboxMaterial.reflectionTexture = cubeTexture_1.CubeTexture.CreateFromImages(files, scene);
        this.skyboxMaterial.reflectionTexture.coordinatesMode = texture_1.Texture.SKYBOX_MODE;
        this.skybox.material = this.skyboxMaterial;
        this.skybox.infiniteDistance = true;
    }
    return NebulaBackground;
}());
exports.NebulaBackground = NebulaBackground;


/***/ }),

/***/ "./src/components/scene.ts":
/*!*********************************!*\
  !*** ./src/components/scene.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createScene = void 0;
var scene_1 = __webpack_require__(/*! @babylonjs/core/scene */ "./node_modules/@babylonjs/core/scene.js");
var math_1 = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
var freeCamera_1 = __webpack_require__(/*! @babylonjs/core/Cameras/freeCamera */ "./node_modules/@babylonjs/core/Cameras/freeCamera.js");
var hemisphericLight_1 = __webpack_require__(/*! @babylonjs/core/Lights/hemisphericLight */ "./node_modules/@babylonjs/core/Lights/hemisphericLight.js");
__webpack_require__(/*! @babylonjs/core/Meshes/meshBuilder */ "./node_modules/@babylonjs/core/Meshes/meshBuilder.js");
function createScene(canvas, engine) {
    var scene = new scene_1.Scene(engine);
    scene.clearColor = new math_1.Color4(0, 0, 0, 1);
    var camera = new freeCamera_1.FreeCamera("xverse", new math_1.Vector3(0, -1, -30), scene);
    camera.attachControl(canvas, true);
    var light = new hemisphericLight_1.HemisphericLight("light", new math_1.Vector3(100, 200, 300), scene);
    light.intensity = 1;
    light.specular = math_1.Color3.White();
    return { scene: scene, camera: camera, light: light };
}
exports.createScene = createScene;


/***/ }),

/***/ "./src/components/stars.ts":
/*!*********************************!*\
  !*** ./src/components/stars.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createStars = void 0;
var math_1 = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
var mesh_1 = __webpack_require__(/*! @babylonjs/core/Meshes/mesh */ "./node_modules/@babylonjs/core/Meshes/mesh.js");
var particleSystem_1 = __webpack_require__(/*! @babylonjs/core/Particles/particleSystem */ "./node_modules/@babylonjs/core/Particles/particleSystem.js");
var texture_1 = __webpack_require__(/*! @babylonjs/core/Materials/Textures/texture */ "./node_modules/@babylonjs/core/Materials/Textures/texture.js");
var sphereParticleEmitter_1 = __webpack_require__(/*! @babylonjs/core/Particles/EmitterTypes/sphereParticleEmitter */ "./node_modules/@babylonjs/core/Particles/EmitterTypes/sphereParticleEmitter.js");
function createStars(scene) {
    var baseStarModel = mesh_1.Mesh.CreateBox("emitter", 0.01, scene);
    var starsParticles = new particleSystem_1.ParticleSystem("starParticles", 7000, scene);
    starsParticles.particleTexture = new texture_1.Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_Star.png", scene);
    var minDistance = 0;
    var scale = 200;
    var indicatorFunction = function () { return Math.random() < .5 ? -1 : 1; };
    var getPosition = function () { return minDistance + (Math.random() * (scale * indicatorFunction())); };
    var getRandomPosition = function () { return [getPosition(), getPosition(), getPosition()]; };
    starsParticles.startPositionFunction = function (worldMatrix, positionToUpdate, particle, isLocal) {
        var _a = getRandomPosition(), x = _a[0], y = _a[1], z = _a[2];
        math_1.Vector3.TransformCoordinatesFromFloatsToRef(x, y, z, worldMatrix, positionToUpdate);
    };
    var starsEmitter = new sphereParticleEmitter_1.SphereParticleEmitter();
    starsEmitter.radius = 30;
    starsEmitter.radiusRange = 1;
    starsEmitter.startPositionFunction = function (worldMatrix, positionToUpdate, particle, isLocal) {
        var _a = getRandomPosition(), x = _a[0], y = _a[1], z = _a[2];
        math_1.Vector3.TransformCoordinatesFromFloatsToRef(x, y, z, worldMatrix, positionToUpdate);
    };
    starsParticles.emitter = baseStarModel;
    starsParticles.particleEmitterType = starsEmitter;
    starsParticles.color1 = new math_1.Color4(0.898, 0.737, 0.718, 1.0);
    starsParticles.color2 = new math_1.Color4(0.584, 0.831, 0.894, 1.0);
    starsParticles.minLifeTime = 999999;
    starsParticles.maxLifeTime = 999999;
    starsParticles.manualEmitCount = 500;
    starsParticles.maxEmitPower = 0.0;
    starsParticles.minSize = 1.15;
    starsParticles.maxSize = 5.7;
    starsParticles.blendMode = particleSystem_1.ParticleSystem.BLENDMODE_STANDARD;
    starsParticles.gravity = new math_1.Vector3(0, 0, 0);
    starsParticles.minAngularSpeed = 0.0;
    starsParticles.maxAngularSpeed = 0.0;
    starsParticles.isBillboardBased = true;
    starsParticles.renderingGroupId = 0;
    starsParticles.start();
    return scene;
}
exports.createStars = createStars;


/***/ }),

/***/ "./src/components/sun.ts":
/*!*******************************!*\
  !*** ./src/components/sun.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSun = void 0;
var math_1 = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
var meshBuilder_1 = __webpack_require__(/*! @babylonjs/core/Meshes/meshBuilder */ "./node_modules/@babylonjs/core/Meshes/meshBuilder.js");
var particleSystem_1 = __webpack_require__(/*! @babylonjs/core/Particles/particleSystem */ "./node_modules/@babylonjs/core/Particles/particleSystem.js");
var texture_1 = __webpack_require__(/*! @babylonjs/core/Materials/Textures/texture */ "./node_modules/@babylonjs/core/Materials/Textures/texture.js");
var standardMaterial_1 = __webpack_require__(/*! @babylonjs/core/Materials/standardMaterial */ "./node_modules/@babylonjs/core/Materials/standardMaterial.js");
var sphereParticleEmitter_1 = __webpack_require__(/*! @babylonjs/core/Particles/EmitterTypes/sphereParticleEmitter */ "./node_modules/@babylonjs/core/Particles/EmitterTypes/sphereParticleEmitter.js");
function createSun(scene) {
    var surfaceParticles = new particleSystem_1.ParticleSystem("surfaceParticles", 1600, scene);
    var flareParticles = new particleSystem_1.ParticleSystem("flareParticles", 20, scene);
    var coronaParticles = new particleSystem_1.ParticleSystem("coronaParticles", 600, scene);
    surfaceParticles.particleTexture = new texture_1.Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_SunSurface.png", scene);
    flareParticles.particleTexture = new texture_1.Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_SunFlare.png", scene);
    coronaParticles.particleTexture = new texture_1.Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_Star.png", scene);
    var coreSphere = meshBuilder_1.MeshBuilder.CreateSphere("coreSphere", { diameter: 2.01, segments: 64 }, scene);
    var coreMat = new standardMaterial_1.StandardMaterial("coreMat", scene);
    coreMat.emissiveColor = new math_1.Color3(0.3773, 0.0930, 0.0266);
    coreSphere.material = coreMat;
    surfaceParticles.preWarmStepOffset = 10;
    surfaceParticles.preWarmCycles = 100;
    flareParticles.preWarmStepOffset = 10;
    flareParticles.preWarmCycles = 100;
    coronaParticles.preWarmStepOffset = 10;
    coronaParticles.preWarmCycles = 100;
    surfaceParticles.minInitialRotation = -2 * Math.PI;
    surfaceParticles.maxInitialRotation = 2 * Math.PI;
    flareParticles.minInitialRotation = -2 * Math.PI;
    flareParticles.maxInitialRotation = 2 * Math.PI;
    coronaParticles.minInitialRotation = -2 * Math.PI;
    coronaParticles.maxInitialRotation = 2 * Math.PI;
    var sunEmitter = new sphereParticleEmitter_1.SphereParticleEmitter();
    sunEmitter.radius = 1;
    sunEmitter.radiusRange = 0;
    surfaceParticles.emitter = coreSphere;
    surfaceParticles.particleEmitterType = sunEmitter;
    flareParticles.emitter = coreSphere;
    flareParticles.particleEmitterType = sunEmitter;
    coronaParticles.emitter = coreSphere;
    coronaParticles.particleEmitterType = sunEmitter;
    surfaceParticles.addColorGradient(0, new math_1.Color4(0.8509, 0.4784, 0.1019, 0.0));
    surfaceParticles.addColorGradient(0.4, new math_1.Color4(0.6259, 0.3056, 0.0619, 0.5));
    surfaceParticles.addColorGradient(0.5, new math_1.Color4(0.6039, 0.2887, 0.0579, 0.5));
    surfaceParticles.addColorGradient(1.0, new math_1.Color4(0.3207, 0.0713, 0.0075, 0.0));
    flareParticles.addColorGradient(0, new math_1.Color4(1, 0.9612, 0.5141, 0.0));
    flareParticles.addColorGradient(0.25, new math_1.Color4(0.9058, 0.7152, 0.3825, 1.0));
    flareParticles.addColorGradient(1.0, new math_1.Color4(0.6320, 0.0, 0.0, 0.0));
    coronaParticles.addColorGradient(0, new math_1.Color4(0.8509, 0.4784, 0.1019, 0.0));
    coronaParticles.addColorGradient(0.5, new math_1.Color4(0.6039, 0.2887, 0.0579, 0.12));
    coronaParticles.addColorGradient(1.0, new math_1.Color4(0.3207, 0.0713, 0.0075, 0.0));
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
    flareParticles.addSizeGradient(0, 0);
    flareParticles.addSizeGradient(1, 1);
    surfaceParticles.minLifeTime = 8.0;
    surfaceParticles.maxLifeTime = 8.0;
    flareParticles.minLifeTime = 10.0;
    flareParticles.maxLifeTime = 10.0;
    coronaParticles.minLifeTime = 2.0;
    coronaParticles.maxLifeTime = 2.0;
    surfaceParticles.emitRate = 200;
    flareParticles.emitRate = 1;
    coronaParticles.emitRate = 300;
    surfaceParticles.blendMode = particleSystem_1.ParticleSystem.BLENDMODE_ADD;
    flareParticles.blendMode = particleSystem_1.ParticleSystem.BLENDMODE_ADD;
    coronaParticles.blendMode = particleSystem_1.ParticleSystem.BLENDMODE_ADD;
    surfaceParticles.gravity = new math_1.Vector3(0, 0, 0);
    flareParticles.gravity = new math_1.Vector3(0, 0, 0);
    coronaParticles.gravity = new math_1.Vector3(0, 0, 0);
    surfaceParticles.minAngularSpeed = -0.4;
    surfaceParticles.maxAngularSpeed = 0.4;
    flareParticles.minAngularSpeed = 0.0;
    flareParticles.maxAngularSpeed = 0.0;
    coronaParticles.minAngularSpeed = 0.0;
    coronaParticles.maxAngularSpeed = 0.0;
    surfaceParticles.minEmitPower = 0;
    surfaceParticles.maxEmitPower = 0;
    surfaceParticles.updateSpeed = 0.005;
    flareParticles.minEmitPower = 0.001;
    flareParticles.maxEmitPower = 0.01;
    coronaParticles.minEmitPower = 0.0;
    coronaParticles.maxEmitPower = 0.0;
    surfaceParticles.isBillboardBased = false;
    flareParticles.isBillboardBased = true;
    coronaParticles.isBillboardBased = true;
    coronaParticles.renderingGroupId = 0;
    flareParticles.renderingGroupId = 0;
    surfaceParticles.renderingGroupId = 0;
    coreSphere.renderingGroupId = 0;
    surfaceParticles.start();
    flareParticles.start();
    coronaParticles.start();
    return { coreSphere: coreSphere, coronaParticles: coronaParticles, flareParticles: flareParticles, surfaceParticles: surfaceParticles };
}
exports.createSun = createSun;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var engine_1 = __webpack_require__(/*! @babylonjs/core/Engines/engine */ "./node_modules/@babylonjs/core/Engines/engine.js");
var math_1 = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
var mesh_1 = __webpack_require__(/*! @babylonjs/core/Meshes/mesh */ "./node_modules/@babylonjs/core/Meshes/mesh.js");
var grid_1 = __webpack_require__(/*! @babylonjs/materials/grid */ "./node_modules/@babylonjs/materials/grid/index.js");
var oimoJSPlugin_1 = __webpack_require__(/*! @babylonjs/core/Physics/Plugins/oimoJSPlugin */ "./node_modules/@babylonjs/core/Physics/Plugins/oimoJSPlugin.js");
var OIMO = __importStar(__webpack_require__(/*! oimo */ "./node_modules/oimo/build/oimo.module.js"));
__webpack_require__(/*! @babylonjs/core/Meshes/meshBuilder */ "./node_modules/@babylonjs/core/Meshes/meshBuilder.js");
__webpack_require__(/*! @babylonjs/core/Loading/loadingScreen */ "./node_modules/@babylonjs/core/Loading/loadingScreen.js");
var stars_1 = __webpack_require__(/*! ./components/stars */ "./src/components/stars.ts");
var scene_1 = __webpack_require__(/*! ./components/scene */ "./src/components/scene.ts");
var sun_1 = __webpack_require__(/*! ./components/sun */ "./src/components/sun.ts");
var nebula_1 = __webpack_require__(/*! ./components/nebula */ "./src/components/nebula.ts");
var core_1 = __webpack_require__(/*! @babylonjs/core */ "./node_modules/@babylonjs/core/index.js");
var canvas = document.getElementById("renderCanvas");
var engine = new engine_1.Engine(canvas);
function createDelayedScene() {
    var scene = scene_1.createScene(canvas, engine).scene;
    var origin = math_1.Vector3.Zero();
    var gravityVector = new math_1.Vector3(0, -0.5, 0);
    var physicsPlugin = new oimoJSPlugin_1.OimoJSPlugin(true, undefined, OIMO);
    scene.enablePhysics(gravityVector, physicsPlugin);
    var physicsHelper = new core_1.PhysicsHelper(scene);
    var nebula = new nebula_1.NebulaBackground(scene);
    stars_1.createStars(scene);
    var coreSphere = sun_1.createSun(scene).coreSphere;
    coreSphere.position = origin;
    var radius = 100;
    var strength = -20;
    var falloff = core_1.PhysicsRadialImpulseFalloff.Linear;
    var gravitationalFieldEvent = physicsHelper.gravitationalField(origin, radius, strength, falloff);
    if (gravitationalFieldEvent)
        gravitationalFieldEvent.enable();
    var material = new grid_1.GridMaterial("grid", scene);
    var ground = mesh_1.Mesh.CreateGround("ground", 10, 10, 200, scene);
    ground.position.y = -7;
    ground.material = material;
    ground.physicsImpostor = new core_1.PhysicsImpostor(ground, core_1.PhysicsImpostor.PlaneImpostor, { mass: 0, restitution: 0.9 }, scene);
    var planet = mesh_1.Mesh.CreateSphere("sphere-1", 16, 1, scene);
    var planetMaterial = new core_1.StandardMaterial("planetMAterial", scene);
    planetMaterial.ambientTexture = new core_1.Texture("https://i.imgur.com/wlnx1yQ.jpg", scene, true, false);
    planetMaterial.specularColor = math_1.Color3.Black();
    planetMaterial.emissiveColor = new math_1.Color3(1, 1, 1);
    planet.position = new math_1.Vector3(5, 0, 0);
    planet.scaling.x = 1;
    planet.scaling.y = 1;
    planet.scaling.z = 1;
    planet.material = planetMaterial;
    planet.physicsImpostor = new core_1.PhysicsImpostor(planet, core_1.PhysicsImpostor.SphereImpostor, { mass: 10, restitution: 0.9 }, scene);
    var dt = 0;
    return scene;
}
var scene;
setTimeout(function () { scene = createDelayedScene(); }, 600);
engine.runRenderLoop(function () {
    if (!scene) {
        engine.displayLoadingUI();
    }
    if (scene) {
        scene.render();
        engine.hideLoadingUI();
    }
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/index.ts","vendors"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkxverse"] = self["webpackChunkxverse"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvY29tcG9uZW50cy9uZWJ1bGEudHMiLCJ3ZWJwYWNrOi8veHZlcnNlLy4vc3JjL2NvbXBvbmVudHMvc2NlbmUudHMiLCJ3ZWJwYWNrOi8veHZlcnNlLy4vc3JjL2NvbXBvbmVudHMvc3RhcnMudHMiLCJ3ZWJwYWNrOi8veHZlcnNlLy4vc3JjL2NvbXBvbmVudHMvc3VuLnRzIiwid2VicGFjazovL3h2ZXJzZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EscUhBQWtEO0FBQ2xELHNKQUFvRTtBQUNwRSxrS0FBNEU7QUFDNUUsMkxBQTRGO0FBRzVGO0lBR0ksMEJBQVksS0FBWTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLFdBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHVDQUFrQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFDN0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsS0FBSztRQUUzQyxJQUFNLEtBQUssR0FBRztZQUNWLG1D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QUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBLGdCQUFnQiwyQkFBMkI7V0FDM0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLDRDQUE0QztXQUM1QztXQUNBLEU7Ozs7O1VDcEZBO1VBQ0EiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoXCJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmUnXG5pbXBvcnQgeyBDdWJlVGV4dHVyZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvY3ViZVRleHR1cmUnXG5pbXBvcnQgeyBCYWNrZ3JvdW5kTWF0ZXJpYWwgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0ZXJpYWxzL0JhY2tncm91bmQvYmFja2dyb3VuZE1hdGVyaWFsJ1xuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvc2NlbmUnXG5cbmV4cG9ydCBjbGFzcyBOZWJ1bGFCYWNrZ3JvdW5kIHtcbiAgICBza3lib3g6IE1lc2hcbiAgICBza3lib3hNYXRlcmlhbDogQmFja2dyb3VuZE1hdGVyaWFsXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFNjZW5lKSB7XG4gICAgICAgIHRoaXMuc2t5Ym94ID0gTWVzaC5DcmVhdGVCb3goXCJza3lCb3hcIiwgMTAwMDAuMCwgc2NlbmUpXG4gICAgICAgIHRoaXMuc2t5Ym94TWF0ZXJpYWwgPSBuZXcgQmFja2dyb3VuZE1hdGVyaWFsKFwic2t5Qm94XCIsIHNjZW5lKVxuICAgICAgICB0aGlzLnNreWJveE1hdGVyaWFsLmJhY2tGYWNlQ3VsbGluZyA9IGZhbHNlXG4gICAgICAgIC8vIHRoaXMuc2t5Ym94TWF0ZXJpYWwuZGlzYWJsZUxpZ2h0aW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBbXG4gICAgICAgICAgICBcInNyYy90ZXh0dXJlcy9zcGFjZS9zcGFjZV9sZWZ0LmpwZ1wiLFxuICAgICAgICAgICAgXCJzcmMvdGV4dHVyZXMvc3BhY2Uvc3BhY2VfdXAuanBnXCIsXG4gICAgICAgICAgICBcInNyYy90ZXh0dXJlcy9zcGFjZS9zcGFjZV9mcm9udC5qcGdcIixcbiAgICAgICAgICAgIFwic3JjL3RleHR1cmVzL3NwYWNlL3NwYWNlX3JpZ2h0LmpwZ1wiLFxuICAgICAgICAgICAgXCJzcmMvdGV4dHVyZXMvc3BhY2Uvc3BhY2VfZG93bi5qcGdcIixcbiAgICAgICAgICAgIFwic3JjL3RleHR1cmVzL3NwYWNlL3NwYWNlX2JhY2suanBnXCJcbiAgICAgICAgXVxuICAgICAgICB0aGlzLnNreWJveE1hdGVyaWFsLnJlZmxlY3Rpb25UZXh0dXJlID0gQ3ViZVRleHR1cmUuQ3JlYXRlRnJvbUltYWdlcyhmaWxlcywgc2NlbmUpXG4gICAgICAgIHRoaXMuc2t5Ym94TWF0ZXJpYWwucmVmbGVjdGlvblRleHR1cmUuY29vcmRpbmF0ZXNNb2RlID0gVGV4dHVyZS5TS1lCT1hfTU9ERVxuICAgICAgICB0aGlzLnNreWJveC5tYXRlcmlhbCA9IHRoaXMuc2t5Ym94TWF0ZXJpYWxcbiAgICAgICAgdGhpcy5za3lib3guaW5maW5pdGVEaXN0YW5jZSA9IHRydWVcbiAgICB9XG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvc2NlbmUnO1xuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0VuZ2luZXMvZW5naW5lJ1xuaW1wb3J0IHsgQ29sb3IzLCBDb2xvcjQsIFZlY3RvcjMgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0aHMvbWF0aCc7XG5pbXBvcnQgeyBGcmVlQ2FtZXJhIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0NhbWVyYXMvZnJlZUNhbWVyYSc7XG5pbXBvcnQgeyBVbml2ZXJzYWxDYW1lcmEgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvQ2FtZXJhcy91bml2ZXJzYWxDYW1lcmEnXG5pbXBvcnQgeyBIZW1pc3BoZXJpY0xpZ2h0IH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0xpZ2h0cy9oZW1pc3BoZXJpY0xpZ2h0J1xuXG5pbXBvcnQgXCJAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hCdWlsZGVyXCI7XG5cbmludGVyZmFjZSBJU2NlbmVPdXRwdXQge1xuICAgIHNjZW5lOiBTY2VuZSxcbiAgICBjYW1lcmE6IEZyZWVDYW1lcmEgfCBVbml2ZXJzYWxDYW1lcmEsXG4gICAgbGlnaHQ6IEhlbWlzcGhlcmljTGlnaHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNjZW5lKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGVuZ2luZTogRW5naW5lKTogSVNjZW5lT3V0cHV0IHtcblxuICAgIC8vIFNjZW5lXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgU2NlbmUoZW5naW5lKTtcblxuICAgIHNjZW5lLmNsZWFyQ29sb3IgPSBuZXcgQ29sb3I0KDAsIDAsIDAsIDEpXG5cbiAgICAvLyBDYW1lcmFcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgRnJlZUNhbWVyYShcInh2ZXJzZVwiLCBuZXcgVmVjdG9yMygwLCAtMSwgLTMwKSwgc2NlbmUpXG4gICAgLyogdmFyIGNhbWVyYSA9IG5ldyBCQUJZTE9OLkFyY1JvdGF0ZUNhbWVyYShcImNhbWVyYTFcIiwgMCwgMCwgMCwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAtMCksIHNjZW5lKTtcbiAgICAgY2FtZXJhLnNldFBvc2l0aW9uKG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMTQwMCwgNTApKTtcbiAgICAgY2FtZXJhLndoZWVsUHJlY2lzaW9uID0gMTsgKi9cblxuICAgIC8vY2FtZXJhLnNldFRhcmdldChWZWN0b3IzLlplcm8oKSk7XG5cbiAgICBjYW1lcmEuYXR0YWNoQ29udHJvbChjYW52YXMsIHRydWUpO1xuXG4gICAgLy8gTGlnaHRcbiAgICBsZXQgbGlnaHQgPSBuZXcgSGVtaXNwaGVyaWNMaWdodChcImxpZ2h0XCIsIG5ldyBWZWN0b3IzKDEwMCwgMjAwLCAzMDApLCBzY2VuZSk7XG4gICAgbGlnaHQuaW50ZW5zaXR5ID0gMTtcbiAgICBsaWdodC5zcGVjdWxhciA9IENvbG9yMy5XaGl0ZSgpLy9uZXcgQ29sb3IzKDAuOTUsIDAuMTUsIDAuMTEpIFxuXG4gICAgcmV0dXJuIHsgc2NlbmUsIGNhbWVyYSwgbGlnaHQgfVxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL3NjZW5lJztcbmltcG9ydCB7IFZlY3RvcjMsIENvbG9yNCwgTWF0cml4IH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGhzL21hdGgnO1xuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hcIlxuaW1wb3J0IHsgUGFydGljbGVTeXN0ZW0gfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvUGFydGljbGVzL3BhcnRpY2xlU3lzdGVtJ1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZSdcbmltcG9ydCB7IFNwaGVyZVBhcnRpY2xlRW1pdHRlciB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9QYXJ0aWNsZXMvRW1pdHRlclR5cGVzL3NwaGVyZVBhcnRpY2xlRW1pdHRlcidcbmltcG9ydCB7IEdsb3dMYXllciB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9MYXllcnMvZ2xvd0xheWVyJ1xuaW1wb3J0IHsgUGFydGljbGUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RhcnMoc2NlbmU6IFNjZW5lKSB7XG4gICAgLy8gUGFydGljbGVTeXN0ZW0gIFNwaGVyZVBhcnRpY2xlRW1pdHRlclxuICAgIGNvbnN0IGJhc2VTdGFyTW9kZWwgPSBNZXNoLkNyZWF0ZUJveChcImVtaXR0ZXJcIiwgMC4wMSwgc2NlbmUpXG4gICAgY29uc3Qgc3RhcnNQYXJ0aWNsZXMgPSBuZXcgUGFydGljbGVTeXN0ZW0oXCJzdGFyUGFydGljbGVzXCIsIDcwMDAsIHNjZW5lKVxuICAgIC8vIGNvbnN0IGdsID0gbmV3IEdsb3dMYXllcihcInN0YXJHbG93XCIsIHNjZW5lLCB7IGJsdXJLZXJuZWxTaXplOiA2NCB9KTtcblxuICAgIHN0YXJzUGFydGljbGVzLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1BhdHJpY2tSeWFuTVMvQmFieWxvbkpTdGV4dHVyZXMvbWFzdGVyL1BhcnRpY2xlU3lzdGVtcy9TdW4vVF9TdGFyLnBuZ1wiLCBzY2VuZSlcbiAgICBcbiAgICBjb25zdCBtaW5EaXN0YW5jZSA9IDBcbiAgICBjb25zdCBzY2FsZSA9IDIwMFxuICAgIGNvbnN0IGluZGljYXRvckZ1bmN0aW9uID0gKCkgPT4gTWF0aC5yYW5kb20oKSA8IC41ID8gLTE6IDFcbiAgICBjb25zdCBnZXRQb3NpdGlvbiA9ICgpID0+IG1pbkRpc3RhbmNlICsgKE1hdGgucmFuZG9tKCkgKiAoc2NhbGUgKiBpbmRpY2F0b3JGdW5jdGlvbigpKSlcbiAgICBjb25zdCBnZXRSYW5kb21Qb3NpdGlvbiA9ICgpID0+IFtnZXRQb3NpdGlvbigpLCBnZXRQb3NpdGlvbigpLCBnZXRQb3NpdGlvbigpXVxuICAgIHN0YXJzUGFydGljbGVzLnN0YXJ0UG9zaXRpb25GdW5jdGlvbiA9ICh3b3JsZE1hdHJpeDogTWF0cml4LCBwb3NpdGlvblRvVXBkYXRlOiBWZWN0b3IzLCBwYXJ0aWNsZTogUGFydGljbGUsIGlzTG9jYWw6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgW3gsIHksIHpdID0gZ2V0UmFuZG9tUG9zaXRpb24oKVxuICAgICAgICBWZWN0b3IzLlRyYW5zZm9ybUNvb3JkaW5hdGVzRnJvbUZsb2F0c1RvUmVmKHgsIHksIHosIHdvcmxkTWF0cml4LCBwb3NpdGlvblRvVXBkYXRlKVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJzRW1pdHRlciA9IG5ldyBTcGhlcmVQYXJ0aWNsZUVtaXR0ZXIoKVxuICAgIHN0YXJzRW1pdHRlci5yYWRpdXMgPSAzMFxuICAgIHN0YXJzRW1pdHRlci5yYWRpdXNSYW5nZSA9IDFcbiAgICBzdGFyc0VtaXR0ZXIuc3RhcnRQb3NpdGlvbkZ1bmN0aW9uID0gKHdvcmxkTWF0cml4OiBNYXRyaXgsIHBvc2l0aW9uVG9VcGRhdGU6IFZlY3RvcjMsIHBhcnRpY2xlOiBQYXJ0aWNsZSwgaXNMb2NhbDogYm9vbGVhbik6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBbeCwgeSwgel0gPSBnZXRSYW5kb21Qb3NpdGlvbigpXG4gICAgICAgIFZlY3RvcjMuVHJhbnNmb3JtQ29vcmRpbmF0ZXNGcm9tRmxvYXRzVG9SZWYoeCwgeSwgeiwgd29ybGRNYXRyaXgsIHBvc2l0aW9uVG9VcGRhdGUpXG4gICAgfVxuXG4gICAgc3RhcnNQYXJ0aWNsZXMuZW1pdHRlciA9IGJhc2VTdGFyTW9kZWxcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5lbWl0dGVyID0gVmVjdG9yMy5aZXJvKClcbiAgICBzdGFyc1BhcnRpY2xlcy5wYXJ0aWNsZUVtaXR0ZXJUeXBlID0gc3RhcnNFbWl0dGVyXG5cbiAgICBzdGFyc1BhcnRpY2xlcy5jb2xvcjEgPSBuZXcgQ29sb3I0KDAuODk4LCAwLjczNywgMC43MTgsIDEuMCk7XG4gICAgc3RhcnNQYXJ0aWNsZXMuY29sb3IyID0gbmV3IENvbG9yNCgwLjU4NCwgMC44MzEsIDAuODk0LCAxLjApO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLm1pbkVtaXRCb3ggPSBuZXcgVmVjdG9yMygxMCwgMTAsIDEwKVxuICAgIC8vIHN0YXJzUGFydGljbGVzLm1heEVtaXRCb3ggPSBuZXcgVmVjdG9yMygxMDAsIDEwMCwgMTAwKVxuICAgIHN0YXJzUGFydGljbGVzLm1pbkxpZmVUaW1lID0gOTk5OTk5XG4gICAgc3RhcnNQYXJ0aWNsZXMubWF4TGlmZVRpbWUgPSA5OTk5OTlcbiAgICBzdGFyc1BhcnRpY2xlcy5tYW51YWxFbWl0Q291bnQgPSA1MDA7XG4gICAgc3RhcnNQYXJ0aWNsZXMubWF4RW1pdFBvd2VyID0gMC4wO1xuICAgIHN0YXJzUGFydGljbGVzLm1pblNpemUgPSAxLjE1Ly8wLjE1O1xuICAgIHN0YXJzUGFydGljbGVzLm1heFNpemUgPSA1LjcvLzAuMztcbiAgICBzdGFyc1BhcnRpY2xlcy5ibGVuZE1vZGUgPSBQYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfU1RBTkRBUkRcbiAgICBzdGFyc1BhcnRpY2xlcy5ncmF2aXR5ID0gbmV3IFZlY3RvcjMoMCwgMCwgMClcbiAgICBzdGFyc1BhcnRpY2xlcy5taW5Bbmd1bGFyU3BlZWQgPSAwLjBcbiAgICBzdGFyc1BhcnRpY2xlcy5tYXhBbmd1bGFyU3BlZWQgPSAwLjBcbiAgICBzdGFyc1BhcnRpY2xlcy5pc0JpbGxib2FyZEJhc2VkID0gdHJ1ZVxuICAgIHN0YXJzUGFydGljbGVzLnJlbmRlcmluZ0dyb3VwSWQgPSAwO1xuICAgIHN0YXJzUGFydGljbGVzLnN0YXJ0KClcblxuICAgIHJldHVybiBzY2VuZTtcbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9zY2VuZSc7XG5pbXBvcnQgeyBWZWN0b3IzLCBDb2xvcjQsIENvbG9yMyB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRocy9tYXRoJztcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoXCJcbmltcG9ydCB7IE1lc2hCdWlsZGVyIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlcidcbmltcG9ydCB7IFBhcnRpY2xlU3lzdGVtIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL1BhcnRpY2xlcy9wYXJ0aWNsZVN5c3RlbSdcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmUnXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWwnXG5pbXBvcnQgeyBTcGhlcmVQYXJ0aWNsZUVtaXR0ZXIgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvUGFydGljbGVzL0VtaXR0ZXJUeXBlcy9zcGhlcmVQYXJ0aWNsZUVtaXR0ZXInXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN1bihzY2VuZTogU2NlbmUpIHtcbiAgICAvLyBFbWl0dGVyIG9iamVjdFxuICAgIC8vIGNvbnN0IHN0YXJzID0gTWVzaC5DcmVhdGVCb3goXCJlbWl0dGVyXCIsIDAuMDEsIHNjZW5lKTtcblxuICAgIC8vIENyZWF0ZSBhIHBhcnRpY2xlIHN5c3RlbVxuICAgIGNvbnN0IHN1cmZhY2VQYXJ0aWNsZXMgPSBuZXcgUGFydGljbGVTeXN0ZW0oXCJzdXJmYWNlUGFydGljbGVzXCIsIDE2MDAsIHNjZW5lKTtcbiAgICBjb25zdCBmbGFyZVBhcnRpY2xlcyA9IG5ldyBQYXJ0aWNsZVN5c3RlbShcImZsYXJlUGFydGljbGVzXCIsIDIwLCBzY2VuZSk7XG4gICAgY29uc3QgY29yb25hUGFydGljbGVzID0gbmV3IFBhcnRpY2xlU3lzdGVtKFwiY29yb25hUGFydGljbGVzXCIsIDYwMCwgc2NlbmUpO1xuICAgIC8vIGNvbnN0IHN0YXJzUGFydGljbGVzID0gbmV3IFBhcnRpY2xlU3lzdGVtKFwic3RhcnNQYXJ0aWNsZXNcIiwgNTAwLCBzY2VuZSk7XG5cbiAgICAvLyBUZXh0dXJlIG9mIGVhY2ggcGFydGljbGVcbiAgICBzdXJmYWNlUGFydGljbGVzLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1BhdHJpY2tSeWFuTVMvQmFieWxvbkpTdGV4dHVyZXMvbWFzdGVyL1BhcnRpY2xlU3lzdGVtcy9TdW4vVF9TdW5TdXJmYWNlLnBuZ1wiLCBzY2VuZSk7XG4gICAgZmxhcmVQYXJ0aWNsZXMucGFydGljbGVUZXh0dXJlID0gbmV3IFRleHR1cmUoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUGF0cmlja1J5YW5NUy9CYWJ5bG9uSlN0ZXh0dXJlcy9tYXN0ZXIvUGFydGljbGVTeXN0ZW1zL1N1bi9UX1N1bkZsYXJlLnBuZ1wiLCBzY2VuZSk7XG4gICAgY29yb25hUGFydGljbGVzLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1BhdHJpY2tSeWFuTVMvQmFieWxvbkpTdGV4dHVyZXMvbWFzdGVyL1BhcnRpY2xlU3lzdGVtcy9TdW4vVF9TdGFyLnBuZ1wiLCBzY2VuZSk7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMucGFydGljbGVUZXh0dXJlID0gbmV3IFRleHR1cmUoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUGF0cmlja1J5YW5NUy9CYWJ5bG9uSlN0ZXh0dXJlcy9tYXN0ZXIvUGFydGljbGVTeXN0ZW1zL1N1bi9UX1N0YXIucG5nXCIsIHNjZW5lKTtcblxuICAgIC8vIENyZWF0ZSBjb3JlIHNwaGVyZVxuICAgIGNvbnN0IGNvcmVTcGhlcmUgPSBNZXNoQnVpbGRlci5DcmVhdGVTcGhlcmUoXCJjb3JlU3BoZXJlXCIsIHsgZGlhbWV0ZXI6IDIuMDEsIHNlZ21lbnRzOiA2NCB9LCBzY2VuZSk7XG5cbiAgICAvLyBDcmVhdGUgY29yZSBtYXRlcmlhbFxuICAgIGNvbnN0IGNvcmVNYXQgPSBuZXcgU3RhbmRhcmRNYXRlcmlhbChcImNvcmVNYXRcIiwgc2NlbmUpXG4gICAgY29yZU1hdC5lbWlzc2l2ZUNvbG9yID0gbmV3IENvbG9yMygwLjM3NzMsIDAuMDkzMCwgMC4wMjY2KTtcblxuICAgIC8vIEFzc2lnbiBjb3JlIG1hdGVyaWFsIHRvIHNwaGVyZVxuICAgIGNvcmVTcGhlcmUubWF0ZXJpYWwgPSBjb3JlTWF0O1xuXG4gICAgLy8gUHJlLXdhcm1cbiAgICBzdXJmYWNlUGFydGljbGVzLnByZVdhcm1TdGVwT2Zmc2V0ID0gMTA7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5wcmVXYXJtQ3ljbGVzID0gMTAwO1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMucHJlV2FybVN0ZXBPZmZzZXQgPSAxMDtcbiAgICBmbGFyZVBhcnRpY2xlcy5wcmVXYXJtQ3ljbGVzID0gMTAwO1xuXG4gICAgY29yb25hUGFydGljbGVzLnByZVdhcm1TdGVwT2Zmc2V0ID0gMTA7XG4gICAgY29yb25hUGFydGljbGVzLnByZVdhcm1DeWNsZXMgPSAxMDA7XG5cbiAgICAvLyBJbml0aWFsIHJvdGF0aW9uXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5taW5Jbml0aWFsUm90YXRpb24gPSAtMiAqIE1hdGguUEk7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5tYXhJbml0aWFsUm90YXRpb24gPSAyICogTWF0aC5QSTtcblxuICAgIGZsYXJlUGFydGljbGVzLm1pbkluaXRpYWxSb3RhdGlvbiA9IC0yICogTWF0aC5QSTtcbiAgICBmbGFyZVBhcnRpY2xlcy5tYXhJbml0aWFsUm90YXRpb24gPSAyICogTWF0aC5QSTtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5taW5Jbml0aWFsUm90YXRpb24gPSAtMiAqIE1hdGguUEk7XG4gICAgY29yb25hUGFydGljbGVzLm1heEluaXRpYWxSb3RhdGlvbiA9IDIgKiBNYXRoLlBJO1xuXG4gICAgLy8gV2hlcmUgdGhlIHN1biBwYXJ0aWNsZXMgY29tZSBmcm9tXG4gICAgY29uc3Qgc3VuRW1pdHRlciA9IG5ldyBTcGhlcmVQYXJ0aWNsZUVtaXR0ZXIoKTtcbiAgICBzdW5FbWl0dGVyLnJhZGl1cyA9IDE7XG4gICAgc3VuRW1pdHRlci5yYWRpdXNSYW5nZSA9IDA7IC8vIGVtaXQgb25seSBmcm9tIHNoYXBlIHN1cmZhY2VcblxuICAgIC8vIC8vIFdoZXJlIHRoZSBzdGFycyBwYXJ0aWNsZXMgY29tZSBmcm9tXG4gICAgLy8gY29uc3Qgc3RhcnNFbWl0dGVyID0gbmV3IFNwaGVyZVBhcnRpY2xlRW1pdHRlcigpO1xuICAgIC8vIHN0YXJzRW1pdHRlci5yYWRpdXMgPSAyMDtcbiAgICAvLyBzdGFyc0VtaXR0ZXIucmFkaXVzUmFuZ2UgPSAwOyAvLyBlbWl0IG9ubHkgZnJvbSBzaGFwZSBzdXJmYWNlXG5cbiAgICAvLyBBc3NpZ24gcGFydGljbGVzIHRvIGVtaXR0ZXJzXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5lbWl0dGVyID0gY29yZVNwaGVyZTsgLy8gdGhlIHN0YXJ0aW5nIG9iamVjdCwgdGhlIGVtaXR0ZXJcbiAgICBzdXJmYWNlUGFydGljbGVzLnBhcnRpY2xlRW1pdHRlclR5cGUgPSBzdW5FbWl0dGVyO1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMuZW1pdHRlciA9IGNvcmVTcGhlcmU7IC8vIHRoZSBzdGFydGluZyBvYmplY3QsIHRoZSBlbWl0dGVyXG4gICAgZmxhcmVQYXJ0aWNsZXMucGFydGljbGVFbWl0dGVyVHlwZSA9IHN1bkVtaXR0ZXI7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMuZW1pdHRlciA9IGNvcmVTcGhlcmU7IC8vIHRoZSBzdGFydGluZyBvYmplY3QsIHRoZSBlbWl0dGVyXG4gICAgY29yb25hUGFydGljbGVzLnBhcnRpY2xlRW1pdHRlclR5cGUgPSBzdW5FbWl0dGVyO1xuXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMuZW1pdHRlciA9IHN0YXJzOyAvLyB0aGUgc3RhcnRpbmcgb2JqZWN0LCB0aGUgZW1pdHRlclxuICAgIC8vIHN0YXJzUGFydGljbGVzLnBhcnRpY2xlRW1pdHRlclR5cGUgPSBzdGFyc0VtaXR0ZXI7XG5cbiAgICAvLyBSYW5kb20gc3RhcnRpbmcgY29sb3JcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5jb2xvcjEgPSBuZXcgQ29sb3I0KDAuODk4LCAwLjczNywgMC43MTgsIDEuMCk7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMuY29sb3IyID0gbmV3IENvbG9yNCgwLjU4NCwgMC44MzEsIDAuODk0LCAxLjApO1xuXG4gICAgLy8gQ29sb3IgZ3JhZGllbnQgb3ZlciB0aW1lXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAsIG5ldyBDb2xvcjQoMC44NTA5LCAwLjQ3ODQsIDAuMTAxOSwgMC4wKSk7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAuNCwgbmV3IENvbG9yNCgwLjYyNTksIDAuMzA1NiwgMC4wNjE5LCAwLjUpKTtcbiAgICBzdXJmYWNlUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMC41LCBuZXcgQ29sb3I0KDAuNjAzOSwgMC4yODg3LCAwLjA1NzksIDAuNSkpO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgxLjAsIG5ldyBDb2xvcjQoMC4zMjA3LCAwLjA3MTMsIDAuMDA3NSwgMC4wKSk7XG5cbiAgICBmbGFyZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAsIG5ldyBDb2xvcjQoMSwgMC45NjEyLCAwLjUxNDEsIDAuMCkpO1xuICAgIGZsYXJlUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMC4yNSwgbmV3IENvbG9yNCgwLjkwNTgsIDAuNzE1MiwgMC4zODI1LCAxLjApKTtcbiAgICBmbGFyZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDEuMCwgbmV3IENvbG9yNCgwLjYzMjAsIDAuMCwgMC4wLCAwLjApKTtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAsIG5ldyBDb2xvcjQoMC44NTA5LCAwLjQ3ODQsIDAuMTAxOSwgMC4wKSk7XG4gICAgY29yb25hUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMC41LCBuZXcgQ29sb3I0KDAuNjAzOSwgMC4yODg3LCAwLjA1NzksIDAuMTIpKTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgxLjAsIG5ldyBDb2xvcjQoMC4zMjA3LCAwLjA3MTMsIDAuMDA3NSwgMC4wKSk7XG5cbiAgICAvLyBTaXplIG9mIGVhY2ggcGFydGljbGUgKHJhbmRvbSBiZXR3ZWVuLi4uXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5taW5TaXplID0gMC40O1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWF4U2l6ZSA9IDAuNztcblxuICAgIGZsYXJlUGFydGljbGVzLm1pblNjYWxlWCA9IDAuNTtcbiAgICBmbGFyZVBhcnRpY2xlcy5taW5TY2FsZVkgPSAwLjU7XG4gICAgZmxhcmVQYXJ0aWNsZXMubWF4U2NhbGVYID0gMS4wO1xuICAgIGZsYXJlUGFydGljbGVzLm1heFNjYWxlWSA9IDEuMDtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5taW5TY2FsZVggPSAwLjU7XG4gICAgY29yb25hUGFydGljbGVzLm1pblNjYWxlWSA9IDAuNzU7XG4gICAgY29yb25hUGFydGljbGVzLm1heFNjYWxlWCA9IDEuMjtcbiAgICBjb3JvbmFQYXJ0aWNsZXMubWF4U2NhbGVZID0gMy4wO1xuXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWluU2l6ZSA9IDAuMTU7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4U2l6ZSA9IDAuMztcblxuICAgIC8vIFNpemUgb3ZlciBsaWZldGltZVxuICAgIGZsYXJlUGFydGljbGVzLmFkZFNpemVHcmFkaWVudCgwLCAwKTtcbiAgICBmbGFyZVBhcnRpY2xlcy5hZGRTaXplR3JhZGllbnQoMSwgMSk7XG5cbiAgICAvLyBMaWZlIHRpbWUgb2YgZWFjaCBwYXJ0aWNsZSAocmFuZG9tIGJldHdlZW4uLi5cbiAgICBzdXJmYWNlUGFydGljbGVzLm1pbkxpZmVUaW1lID0gOC4wO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWF4TGlmZVRpbWUgPSA4LjA7XG5cbiAgICBmbGFyZVBhcnRpY2xlcy5taW5MaWZlVGltZSA9IDEwLjA7XG4gICAgZmxhcmVQYXJ0aWNsZXMubWF4TGlmZVRpbWUgPSAxMC4wO1xuXG4gICAgY29yb25hUGFydGljbGVzLm1pbkxpZmVUaW1lID0gMi4wO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5tYXhMaWZlVGltZSA9IDIuMDtcblxuICAgIC8vIHN0YXJzUGFydGljbGVzLm1pbkxpZmVUaW1lID0gOTk5OTk5O1xuICAgIC8vIHN0YXJzUGFydGljbGVzLm1heExpZmVUaW1lID0gOTk5OTk5O1xuXG4gICAgLy8gRW1pc3Npb24gcmF0ZVxuICAgIHN1cmZhY2VQYXJ0aWNsZXMuZW1pdFJhdGUgPSAyMDA7XG4gICAgZmxhcmVQYXJ0aWNsZXMuZW1pdFJhdGUgPSAxO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5lbWl0UmF0ZSA9IDMwMDtcblxuICAgIC8vIEJ1cnN0IHJhdGVcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5tYW51YWxFbWl0Q291bnQgPSA1MDA7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4RW1pdFBvd2VyID0gMC4wO1xuXG4gICAgLy8gQmxlbmQgbW9kZSA6IEJMRU5ETU9ERV9PTkVPTkUsIEJMRU5ETU9ERV9TVEFOREFSRCwgb3IgQkxFTkRNT0RFX0FERFxuICAgIHN1cmZhY2VQYXJ0aWNsZXMuYmxlbmRNb2RlID0gUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX0FERDtcbiAgICBmbGFyZVBhcnRpY2xlcy5ibGVuZE1vZGUgPSBQYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfQUREO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5ibGVuZE1vZGUgPSBQYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfQUREO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLmJsZW5kTW9kZSA9IFBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9TVEFOREFSRDtcblxuICAgIC8vIFNldCB0aGUgZ3Jhdml0eSBvZiBhbGwgcGFydGljbGVzXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5ncmF2aXR5ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XG4gICAgZmxhcmVQYXJ0aWNsZXMuZ3Jhdml0eSA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5ncmF2aXR5ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMuZ3Jhdml0eSA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xuXG4gICAgLy8gQW5ndWxhciBzcGVlZCwgaW4gcmFkaWFuc1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWluQW5ndWxhclNwZWVkID0gLTAuNDtcbiAgICBzdXJmYWNlUGFydGljbGVzLm1heEFuZ3VsYXJTcGVlZCA9IDAuNDtcblxuICAgIGZsYXJlUGFydGljbGVzLm1pbkFuZ3VsYXJTcGVlZCA9IDAuMDtcbiAgICBmbGFyZVBhcnRpY2xlcy5tYXhBbmd1bGFyU3BlZWQgPSAwLjA7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMubWluQW5ndWxhclNwZWVkID0gMC4wO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5tYXhBbmd1bGFyU3BlZWQgPSAwLjA7XG5cbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5taW5Bbmd1bGFyU3BlZWQgPSAwLjA7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4QW5ndWxhclNwZWVkID0gMC4wO1xuXG4gICAgLy8gU3BlZWRcbiAgICBzdXJmYWNlUGFydGljbGVzLm1pbkVtaXRQb3dlciA9IDA7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5tYXhFbWl0UG93ZXIgPSAwO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMudXBkYXRlU3BlZWQgPSAwLjAwNTtcblxuICAgIGZsYXJlUGFydGljbGVzLm1pbkVtaXRQb3dlciA9IDAuMDAxO1xuICAgIGZsYXJlUGFydGljbGVzLm1heEVtaXRQb3dlciA9IDAuMDE7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMubWluRW1pdFBvd2VyID0gMC4wO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5tYXhFbWl0UG93ZXIgPSAwLjA7XG5cbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5taW5FbWl0UG93ZXIgPSAwLjA7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4QW5ndWxhclNwZWVkID0gMC4wO1xuXG4gICAgLy8gTm8gYmlsbGJvYXJkXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5pc0JpbGxib2FyZEJhc2VkID0gZmFsc2U7XG4gICAgZmxhcmVQYXJ0aWNsZXMuaXNCaWxsYm9hcmRCYXNlZCA9IHRydWU7XG4gICAgY29yb25hUGFydGljbGVzLmlzQmlsbGJvYXJkQmFzZWQgPSB0cnVlO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLmlzQmlsbGJvYXJkQmFzZWQgPSB0cnVlO1xuXG4gICAgLy8gUmVuZGVyIE9yZGVyXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMucmVuZGVyaW5nR3JvdXBJZCA9IDA7XG4gICAgY29yb25hUGFydGljbGVzLnJlbmRlcmluZ0dyb3VwSWQgPSAwIC8vMTtcbiAgICBmbGFyZVBhcnRpY2xlcy5yZW5kZXJpbmdHcm91cElkID0gMCAvLzI7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5yZW5kZXJpbmdHcm91cElkID0gMCAvLzM7XG4gICAgY29yZVNwaGVyZS5yZW5kZXJpbmdHcm91cElkID0gMCAvLzM7XG5cbiAgICAvLyBTdGFydCB0aGUgcGFydGljbGUgc3lzdGVtXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5zdGFydCgpO1xuICAgIGZsYXJlUGFydGljbGVzLnN0YXJ0KCk7XG4gICAgY29yb25hUGFydGljbGVzLnN0YXJ0KCk7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMuc3RhcnQoKTtcblxuICAgIHJldHVybiB7Y29yZVNwaGVyZSwgY29yb25hUGFydGljbGVzLCBmbGFyZVBhcnRpY2xlcywgc3VyZmFjZVBhcnRpY2xlc307XG59IiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0VuZ2luZXMvZW5naW5lJztcbmltcG9ydCB7IENvbG9yMywgVmVjdG9yMyB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRocy9tYXRoJztcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoXCJcbmltcG9ydCB7IE1lc2hCdWlsZGVyIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlcic7XG5pbXBvcnQgeyBHcmlkTWF0ZXJpYWwgfSBmcm9tICdAYmFieWxvbmpzL21hdGVyaWFscy9ncmlkJ1xuaW1wb3J0IHsgT2ltb0pTUGx1Z2luIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL1BoeXNpY3MvUGx1Z2lucy9vaW1vSlNQbHVnaW4nXG5pbXBvcnQgKiBhcyBPSU1PIGZyb20gXCJvaW1vXCJcblxuaW1wb3J0IFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlclwiO1xuaW1wb3J0ICdAYmFieWxvbmpzL2NvcmUvTG9hZGluZy9sb2FkaW5nU2NyZWVuJ1xuXG5pbXBvcnQgeyBjcmVhdGVTdGFycyB9IGZyb20gJy4vY29tcG9uZW50cy9zdGFycydcbmltcG9ydCB7IGNyZWF0ZVNjZW5lIH0gZnJvbSAnLi9jb21wb25lbnRzL3NjZW5lJ1xuaW1wb3J0IHsgY3JlYXRlU3VuIH0gZnJvbSAnLi9jb21wb25lbnRzL3N1bidcbmltcG9ydCB7IE5lYnVsYUJhY2tncm91bmQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmVidWxhJ1xuaW1wb3J0IHsgUGh5c2ljc0hlbHBlciwgUGh5c2ljc0ltcG9zdG9yLCBQaHlzaWNzUmFkaWFsSW1wdWxzZUZhbGxvZmYsIFN0YW5kYXJkTWF0ZXJpYWwsIFRleHR1cmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUnO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbmRlckNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcblxuY29uc3QgZW5naW5lID0gbmV3IEVuZ2luZShjYW52YXMpO1xuLy9lbmdpbmUubG9hZGluZ1NjcmVlbiA9IG5ldyBCQUJZTE9OLkRlZmF1bHRMb2FkaW5nU2NyZWVuKGNhbnZhcywgXCJcIiwgXCJibGFja1wiKVxuXG5mdW5jdGlvbiBjcmVhdGVEZWxheWVkU2NlbmUoKSB7XG4gICAgLy8gU2NlbmVcbiAgICBjb25zdCB7IHNjZW5lIH0gPSBjcmVhdGVTY2VuZShjYW52YXMsIGVuZ2luZSlcblxuICAgIGNvbnN0IG9yaWdpbiA9IFZlY3RvcjMuWmVybygpXG4gICAgY29uc3QgZ3Jhdml0eVZlY3RvciA9IG5ldyBWZWN0b3IzKDAsIC0wLjUsIDApIC8vVmVjdG9yMy5aZXJvKClcbiAgICBjb25zdCBwaHlzaWNzUGx1Z2luID0gbmV3IE9pbW9KU1BsdWdpbih0cnVlLCB1bmRlZmluZWQsIE9JTU8pXG4gICAgc2NlbmUuZW5hYmxlUGh5c2ljcyhncmF2aXR5VmVjdG9yLCBwaHlzaWNzUGx1Z2luKVxuICAgIGNvbnN0IHBoeXNpY3NIZWxwZXIgPSBuZXcgUGh5c2ljc0hlbHBlcihzY2VuZSlcblxuICAgIC8qIHZhciBnbCA9IG5ldyBCQUJZTE9OLkdsb3dMYXllcihcImdsb3dcIiwgc2NlbmUsIHtcbiAgICAgICAgICAgIG1haW5UZXh0dXJlRml4ZWRTaXplOiA1MTJcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICAqL1xuICAgIC8vIFN0dWZmXG5cbiAgICAvKiBHYWxheHkgQmFja2dyb3VuZCAqL1xuICAgIGNvbnN0IG5lYnVsYSA9IG5ldyBOZWJ1bGFCYWNrZ3JvdW5kKHNjZW5lKVxuICAgIC8vY29uc3QgeyBTUFMsIHN5c3RlbU1lc2g6IHN0YXJzIH0gPSBjcmVhdGVTdGFycyhzY2VuZSlcbiAgICBjcmVhdGVTdGFycyhzY2VuZSlcbiAgICBjb25zdCB7IGNvcmVTcGhlcmUgfSA9IGNyZWF0ZVN1bihzY2VuZSlcbiAgICBjb3JlU3BoZXJlLnBvc2l0aW9uID0gb3JpZ2luXG4gICAgLy8gQWRkIGdyYXZpdGF0aW9uYWwgZmllbGRcbiAgICBjb25zdCByYWRpdXMgPSAxMDBcbiAgICBjb25zdCBzdHJlbmd0aCA9IC0yMFxuICAgIGNvbnN0IGZhbGxvZmYgPSBQaHlzaWNzUmFkaWFsSW1wdWxzZUZhbGxvZmYuTGluZWFyXG4gICAgY29uc3QgZ3Jhdml0YXRpb25hbEZpZWxkRXZlbnQgPSBwaHlzaWNzSGVscGVyLmdyYXZpdGF0aW9uYWxGaWVsZChvcmlnaW4sIHJhZGl1cywgc3RyZW5ndGgsIGZhbGxvZmYpXG4gICAgaWYgKGdyYXZpdGF0aW9uYWxGaWVsZEV2ZW50KSBncmF2aXRhdGlvbmFsRmllbGRFdmVudC5lbmFibGUoKVxuICAgIC8vIGNvcmVTcGhlcmUucGh5c2ljc0ltcG9zdG9yID0gbmV3IFBoeXNpY3NJbXBvc3Rvcihjb3JlU3BoZXJlLCBQaHlzaWNzSW1wb3N0b3IuU3BoZXJlSW1wb3N0b3IsIHsgbWFzczogMSwgcmVzdGl0dXRpb246IDAuOH0sIHNjZW5lKVxuICAgIC8qXG4vLyB0aGUgc2Vjb25kIGByYWRpdXNgIGFyZ3VtZW50IGNhbiBhbHNvIGFjdCBhcyBvcHRpb25zOiBgLmdyYXZpdGF0aW9uYWxGaWVsZChvcmlnaW4sIHsgcmFkaXVzOiByYWRpdXMsIHN0cmVuZ3RoOiBzdHJlbmd0aCwgZmFsbG9mZjogZmFsbG9mZiB9KWBcbmdyYXZpdGF0aW9uYWxGaWVsZEV2ZW50LmVuYWJsZSgpOyAvLyBuZWVkIHRvIGNhbGwsIGlmIHlvdSB3YW50IHRvIGFjdGl2YXRlIHRoZSBncmF2aXRhdGlvbmFsIGZpZWxkLlxuc2V0VGltZW91dChmdW5jdGlvbiAoZ3Jhdml0YXRpb25hbEZpZWxkRXZlbnQpIHsgZ3Jhdml0YXRpb25hbEZpZWxkRXZlbnQuZGlzYWJsZSgpOyB9LCAzMDAwLCBncmF2aXRhdGlvbmFsRmllbGRFdmVudCk7XG4qL1xuXG5cbiAgICAvKiB2YXIgbWFrZVNoYWRvd3M9MDtcbiAgICAgdmFyIGxvZD0wOyAqL1xuXG4gICAgLy8gZ3JvdW5kXG4gICAgbGV0IG1hdGVyaWFsID0gbmV3IEdyaWRNYXRlcmlhbChcImdyaWRcIiwgc2NlbmUpO1xuICAgIGNvbnN0IGdyb3VuZCA9IE1lc2guQ3JlYXRlR3JvdW5kKFwiZ3JvdW5kXCIsIDEwLCAxMCwgMjAwLCBzY2VuZSk7XG4gICAgZ3JvdW5kLnBvc2l0aW9uLnkgPSAtN1xuICAgIGdyb3VuZC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuICAgIGdyb3VuZC5waHlzaWNzSW1wb3N0b3IgPSBuZXcgUGh5c2ljc0ltcG9zdG9yKGdyb3VuZCwgUGh5c2ljc0ltcG9zdG9yLlBsYW5lSW1wb3N0b3IsIHsgbWFzczogMCwgcmVzdGl0dXRpb246IDAuOSB9LCBzY2VuZSk7XG5cblxuICAgIGxldCBwbGFuZXQgPSBNZXNoLkNyZWF0ZVNwaGVyZShcInNwaGVyZS0xXCIsIDE2LCAxLCBzY2VuZSk7XG4gICAgbGV0IHBsYW5ldE1hdGVyaWFsID0gbmV3IFN0YW5kYXJkTWF0ZXJpYWwoXCJwbGFuZXRNQXRlcmlhbFwiLCBzY2VuZSlcbiAgICBwbGFuZXRNYXRlcmlhbC5hbWJpZW50VGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS93bG54MXlRLmpwZ1wiLCBzY2VuZSwgdHJ1ZSwgZmFsc2UpXG4gICAgcGxhbmV0TWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IENvbG9yMy5CbGFjaygpXG4gICAgcGxhbmV0TWF0ZXJpYWwuZW1pc3NpdmVDb2xvciA9IG5ldyBDb2xvcjMoMSwgMSwgMSlcblxuICAgIHBsYW5ldC5wb3NpdGlvbiA9IG5ldyBWZWN0b3IzKDUsIDAsIDApXG4gICAgcGxhbmV0LnNjYWxpbmcueCA9IDFcbiAgICBwbGFuZXQuc2NhbGluZy55ID0gMVxuICAgIHBsYW5ldC5zY2FsaW5nLnogPSAxXG5cbiAgICBwbGFuZXQubWF0ZXJpYWwgPSBwbGFuZXRNYXRlcmlhbDtcbiAgICBwbGFuZXQucGh5c2ljc0ltcG9zdG9yID0gbmV3IFBoeXNpY3NJbXBvc3RvcihwbGFuZXQsIFBoeXNpY3NJbXBvc3Rvci5TcGhlcmVJbXBvc3RvciwgeyBtYXNzOiAxMCwgcmVzdGl0dXRpb246IDAuOSB9LCBzY2VuZSlcblxuICAgIC8qIHZhciB0ZXJyZSA9IEJBQllMT04uTWVzaC5DcmVhdGVTcGhlcmUoJ3RlcnJlJywgMTYsIDIsIHNjZW5lKTtcbiAgICB0ZXJyZS5wb3NpdGlvbi54ID0gMTA7XG5cbiAgICB2YXIgZWFydGhNYXQgPSBuZXcgQkFCWUxPTi5TdGFuZGFyZE1hdGVyaWFsKCdlYXJ0aCcsIHNjZW5lKTtcbiAgICBlYXJ0aE1hdC5kaWZmdXNlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoJ2h0dHBzOi8vMS5icC5ibG9nc3BvdC5jb20vLVVVWGFLNUdDai1rL1Vjc0tKUk1na1ZJL0FBQUFBQUFBQ2ZNL3NlUFBfSDA4SlRRL3MxNjAwLzEuanBnJywgc2NlbmUsIGZhbHNlLCBmYWxzZSk7XG4gICAgZWFydGhNYXQuc3BlY3VsYXJDb2xvciA9IEJBQllMT04uQ29sb3IzLkJsYWNrKCk7XG4gICAgdGVycmUubWF0ZXJpYWwgPSBlYXJ0aE1hdDtcbiAgICB2YXIgc3VuTWF0ID0gbmV3ICBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoJ3N1bicsIHNjZW5lKTtcbiAgICBzdW5NYXQuZGlmZnVzZUNvbG9yID0gQkFCWUxPTi5Db2xvcjMuWWVsbG93KCk7XG4gICAgc3VuTWF0LnNwZWN1bGFyQ29sb3IgPSBCQUJZTE9OLkNvbG9yMy5CbGFjaygpO1xuICAgIHN1bk1hdC5lbWlzc2l2ZUNvbG9yID0gQkFCWUxPTi5Db2xvcjMuWWVsbG93KCk7XG4gICAgc3VuLm1hdGVyaWFsID0gc3VuTWF0O1xuXG4gICAgdmFyIGFscGhhID0gMDtcbiAgICBzY2VuZS5yZWdpc3RlckJlZm9yZVJlbmRlcigoKSA9PiB7XG4gICAgICAgIHRlcnJlLnBvc2l0aW9uLnggPSBNYXRoLmNvcyhhbHBoYSkgKiAxMDtcbiAgICAgICAgdGVycmUucG9zaXRpb24ueiA9IE1hdGguc2luKGFscGhhKSAqIDEwO1xuICAgICAgICB0ZXJyZS5yb3RhdGlvbi55IC09IDAuMDE7XG4gICAgICAgIGFscGhhICs9IDAuMDE7XG4gICAgfSkgKi9cbiAgICBsZXQgZHQgPSAwXG4gICAgLyogc2NlbmUucmVnaXN0ZXJCZWZvcmVSZW5kZXIoKCkgPT4ge1xuICAgICAgICBwbGFuZXQucG9zaXRpb24ueCA9IE1hdGguY29zKGR0KSAqIDEwXG4gICAgICAgIHBsYW5ldC5wb3NpdGlvbi56ID0gTWF0aC5zaW4oZHQpICogN1xuICAgICAgICBwbGFuZXQucG9zaXRpb24ueSA9IDBcbiAgICAgICAgcGxhbmV0LnJvdGF0aW9uLnkgLT0gMC4wMVxuICAgICAgICBkdCArPSAwLjAwNVxuICAgIH0pICovXG5cbiAgICAvKiBjb25zdCBza3lib3ggPSBNZXNoLkNyZWF0ZUJveChcIkJhY2tncm91bmRTa3lib3hcIiwgNTAwLCBzY2VuZSwgdW5kZWZpbmVkLCBNZXNoLkJBQ0tTSURFKTtcbiAgICAgICAgXG4gICAgLy8gQ3JlYXRlIGFuZCB0d2VhayB0aGUgYmFja2dyb3VuZCBtYXRlcmlhbC5cbiAgICBjb25zdCBiYWNrZ3JvdW5kTWF0ZXJpYWwgPSBuZXcgQkFCWUxPTi5CYWNrZ3JvdW5kTWF0ZXJpYWwoXCJiYWNrZ3JvdW5kTWF0ZXJpYWxcIiwgc2NlbmUpO1xuICAgIGJhY2tncm91bmRNYXRlcmlhbC5yZWZsZWN0aW9uVGV4dHVyZSA9IG5ldyBCQUJZTE9OLkN1YmVUZXh0dXJlKFwidGV4dHVyZXMvVHJvcGljYWxTdW5ueURheVwiLCBzY2VuZSk7XG4gICAgYmFja2dyb3VuZE1hdGVyaWFsLnJlZmxlY3Rpb25UZXh0dXJlLmNvb3JkaW5hdGVzTW9kZSA9IEJBQllMT04uVGV4dHVyZS5TS1lCT1hfTU9ERTtcbiAgICBza3lib3gubWF0ZXJpYWwgPSBiYWNrZ3JvdW5kTWF0ZXJpYWw7IFxuICAgIHZhciBlYXJ0aE1hdGVyaWFsID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbChcImVhcnRoTWF0ZXJpYWxcIiwgc2NlbmUpO1xuICAgICAgICBlYXJ0aC5tYXRlcmlhbCA9IGVhcnRoTWF0ZXJpYWw7XG4gICAgICAgIGVhcnRoTWF0ZXJpYWwuYW1iaWVudENvbG9yID0gbmV3IEJBQllMT04uQ29sb3IzKC44LCAuOCwgMSk7ICovXG4gICAgcmV0dXJuIHNjZW5lXG59XG5cbmxldCBzY2VuZVxuc2V0VGltZW91dCgoKSA9PiB7IHNjZW5lID0gY3JlYXRlRGVsYXllZFNjZW5lKCkgfSwgNjAwKVxuXG5lbmdpbmUucnVuUmVuZGVyTG9vcCgoKSA9PiB7XG4gICAgaWYgKCFzY2VuZSkge1xuICAgICAgICBlbmdpbmUuZGlzcGxheUxvYWRpbmdVSSgpXG4gICAgfVxuICAgIGlmIChzY2VuZSkge1xuICAgICAgICBzY2VuZS5yZW5kZXIoKTtcbiAgICAgICAgZW5naW5lLmhpZGVMb2FkaW5nVUkoKVxuICAgIH1cbn0pIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gdGhlIHN0YXJ0dXAgZnVuY3Rpb25cbi8vIEl0J3MgZW1wdHkgYXMgc29tZSBydW50aW1lIG1vZHVsZSBoYW5kbGVzIHRoZSBkZWZhdWx0IGJlaGF2aW9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSB4ID0+IHt9O1xuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFtcIi4vc3JjL2luZGV4LnRzXCIsXCJ2ZW5kb3JzXCJdXG5dO1xuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxudmFyIGNoZWNrRGVmZXJyZWRNb2R1bGVzID0geCA9PiB7fTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWUsIGV4ZWN1dGVNb2R1bGVzXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3h2ZXJzZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt4dmVyc2VcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpO1xuXG5mdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwoKSB7XG5cdHZhciByZXN1bHQ7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcblx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuXHRcdH1cblx0fVxuXHRpZihkZWZlcnJlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0geCA9PiB7fTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxudmFyIHN0YXJ0dXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLng7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIHJlc2V0IHN0YXJ0dXAgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGNhbGxlZCBhZ2FpbiB3aGVuIG1vcmUgc3RhcnR1cCBjb2RlIGlzIGFkZGVkXG5cdF9fd2VicGFja19yZXF1aXJlX18ueCA9IHN0YXJ0dXAgfHwgKHggPT4ge30pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTsiLCIvLyBydW4gc3RhcnR1cFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=