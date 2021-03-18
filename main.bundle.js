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
    var camera = new freeCamera_1.FreeCamera("xverse", new math_1.Vector3(0, -1, -20), scene);
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
    var gravityVector = math_1.Vector3.Zero();
    var physicsPlugin = new oimoJSPlugin_1.OimoJSPlugin(true, undefined, OIMO);
    scene.enablePhysics(gravityVector, physicsPlugin);
    var physicsHelper = new core_1.PhysicsHelper(scene);
    var nebula = new nebula_1.NebulaBackground(scene);
    stars_1.createStars(scene);
    var coreSphere = sun_1.createSun(scene).coreSphere;
    coreSphere.position = origin;
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
    planet.physicsImpostor.applyImpulse(new math_1.Vector3(2, 1, 5), planet.position);
    var radius = 50;
    var strength = .01;
    var falloff = core_1.PhysicsRadialImpulseFalloff.Linear;
    var gravitationalFieldOrigin = new math_1.Vector3(0, 0, 0);
    setTimeout(function () {
        var event = physicsHelper.gravitationalField(gravitationalFieldOrigin, {
            radius: radius,
            strength: strength,
            falloff: core_1.PhysicsRadialImpulseFalloff.Linear,
        });
        event === null || event === void 0 ? void 0 : event.enable();
        var eventData = event === null || event === void 0 ? void 0 : event.getData();
        var sphere = eventData === null || eventData === void 0 ? void 0 : eventData.sphere;
        addMaterialToMesh(sphere);
        if (sphere === null || sphere === void 0 ? void 0 : sphere.isVisible)
            sphere.isVisible = true;
    }, 1000);
    function addMaterialToMesh(sphere) {
        var sphereMaterial = new core_1.StandardMaterial("sphereMaterial", scene);
        sphereMaterial.alpha = 1;
        sphereMaterial.emissiveColor = new math_1.Color3(1, 0, 1);
        sphere.material = sphereMaterial;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvY29tcG9uZW50cy9uZWJ1bGEudHMiLCJ3ZWJwYWNrOi8veHZlcnNlLy4vc3JjL2NvbXBvbmVudHMvc2NlbmUudHMiLCJ3ZWJwYWNrOi8veHZlcnNlLy4vc3JjL2NvbXBvbmVudHMvc3RhcnMudHMiLCJ3ZWJwYWNrOi8veHZlcnNlLy4vc3JjL2NvbXBvbmVudHMvc3VuLnRzIiwid2VicGFjazovL3h2ZXJzZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EscUhBQWtEO0FBQ2xELHNKQUFvRTtBQUNwRSxrS0FBNEU7QUFDNUUsMkxBQTRGO0FBRzVGO0lBR0ksMEJBQVksS0FBWTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLFdBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHVDQUFrQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFDN0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsS0FBSztRQUUzQyxJQUFNLEtBQUssR0FBRztZQUNWLG1D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VUFFQTtVQUNBO1VBQ0E7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBLGdCQUFnQiwyQkFBMkI7V0FDM0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLDRDQUE0QztXQUM1QztXQUNBLEU7Ozs7O1VDcEZBO1VBQ0EiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoXCJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmUnXG5pbXBvcnQgeyBDdWJlVGV4dHVyZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvY3ViZVRleHR1cmUnXG5pbXBvcnQgeyBCYWNrZ3JvdW5kTWF0ZXJpYWwgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0ZXJpYWxzL0JhY2tncm91bmQvYmFja2dyb3VuZE1hdGVyaWFsJ1xuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvc2NlbmUnXG5cbmV4cG9ydCBjbGFzcyBOZWJ1bGFCYWNrZ3JvdW5kIHtcbiAgICBza3lib3g6IE1lc2hcbiAgICBza3lib3hNYXRlcmlhbDogQmFja2dyb3VuZE1hdGVyaWFsXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFNjZW5lKSB7XG4gICAgICAgIHRoaXMuc2t5Ym94ID0gTWVzaC5DcmVhdGVCb3goXCJza3lCb3hcIiwgMTAwMDAuMCwgc2NlbmUpXG4gICAgICAgIHRoaXMuc2t5Ym94TWF0ZXJpYWwgPSBuZXcgQmFja2dyb3VuZE1hdGVyaWFsKFwic2t5Qm94XCIsIHNjZW5lKVxuICAgICAgICB0aGlzLnNreWJveE1hdGVyaWFsLmJhY2tGYWNlQ3VsbGluZyA9IGZhbHNlXG4gICAgICAgIC8vIHRoaXMuc2t5Ym94TWF0ZXJpYWwuZGlzYWJsZUxpZ2h0aW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBbXG4gICAgICAgICAgICBcInNyYy90ZXh0dXJlcy9zcGFjZS9zcGFjZV9sZWZ0LmpwZ1wiLFxuICAgICAgICAgICAgXCJzcmMvdGV4dHVyZXMvc3BhY2Uvc3BhY2VfdXAuanBnXCIsXG4gICAgICAgICAgICBcInNyYy90ZXh0dXJlcy9zcGFjZS9zcGFjZV9mcm9udC5qcGdcIixcbiAgICAgICAgICAgIFwic3JjL3RleHR1cmVzL3NwYWNlL3NwYWNlX3JpZ2h0LmpwZ1wiLFxuICAgICAgICAgICAgXCJzcmMvdGV4dHVyZXMvc3BhY2Uvc3BhY2VfZG93bi5qcGdcIixcbiAgICAgICAgICAgIFwic3JjL3RleHR1cmVzL3NwYWNlL3NwYWNlX2JhY2suanBnXCJcbiAgICAgICAgXVxuICAgICAgICB0aGlzLnNreWJveE1hdGVyaWFsLnJlZmxlY3Rpb25UZXh0dXJlID0gQ3ViZVRleHR1cmUuQ3JlYXRlRnJvbUltYWdlcyhmaWxlcywgc2NlbmUpXG4gICAgICAgIHRoaXMuc2t5Ym94TWF0ZXJpYWwucmVmbGVjdGlvblRleHR1cmUuY29vcmRpbmF0ZXNNb2RlID0gVGV4dHVyZS5TS1lCT1hfTU9ERVxuICAgICAgICB0aGlzLnNreWJveC5tYXRlcmlhbCA9IHRoaXMuc2t5Ym94TWF0ZXJpYWxcbiAgICAgICAgdGhpcy5za3lib3guaW5maW5pdGVEaXN0YW5jZSA9IHRydWVcbiAgICB9XG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvc2NlbmUnO1xuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0VuZ2luZXMvZW5naW5lJ1xuaW1wb3J0IHsgQ29sb3IzLCBDb2xvcjQsIFZlY3RvcjMgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0aHMvbWF0aCc7XG5pbXBvcnQgeyBGcmVlQ2FtZXJhIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0NhbWVyYXMvZnJlZUNhbWVyYSc7XG5pbXBvcnQgeyBVbml2ZXJzYWxDYW1lcmEgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvQ2FtZXJhcy91bml2ZXJzYWxDYW1lcmEnXG5pbXBvcnQgeyBIZW1pc3BoZXJpY0xpZ2h0IH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0xpZ2h0cy9oZW1pc3BoZXJpY0xpZ2h0J1xuXG5pbXBvcnQgXCJAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hCdWlsZGVyXCI7XG5cbmludGVyZmFjZSBJU2NlbmVPdXRwdXQge1xuICAgIHNjZW5lOiBTY2VuZSxcbiAgICBjYW1lcmE6IEZyZWVDYW1lcmEgfCBVbml2ZXJzYWxDYW1lcmEsXG4gICAgbGlnaHQ6IEhlbWlzcGhlcmljTGlnaHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNjZW5lKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGVuZ2luZTogRW5naW5lKTogSVNjZW5lT3V0cHV0IHtcblxuICAgIC8vIFNjZW5lXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgU2NlbmUoZW5naW5lKTtcblxuICAgIHNjZW5lLmNsZWFyQ29sb3IgPSBuZXcgQ29sb3I0KDAsIDAsIDAsIDEpXG5cbiAgICAvLyBDYW1lcmFcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgRnJlZUNhbWVyYShcInh2ZXJzZVwiLCBuZXcgVmVjdG9yMygwLCAtMSwgLTIwKSwgc2NlbmUpXG4gICAgLyogdmFyIGNhbWVyYSA9IG5ldyBCQUJZTE9OLkFyY1JvdGF0ZUNhbWVyYShcImNhbWVyYTFcIiwgMCwgMCwgMCwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAtMCksIHNjZW5lKTtcbiAgICAgY2FtZXJhLnNldFBvc2l0aW9uKG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMTQwMCwgNTApKTtcbiAgICAgY2FtZXJhLndoZWVsUHJlY2lzaW9uID0gMTsgKi9cblxuICAgIC8vY2FtZXJhLnNldFRhcmdldChWZWN0b3IzLlplcm8oKSk7XG5cbiAgICBjYW1lcmEuYXR0YWNoQ29udHJvbChjYW52YXMsIHRydWUpO1xuXG4gICAgLy8gTGlnaHRcbiAgICBsZXQgbGlnaHQgPSBuZXcgSGVtaXNwaGVyaWNMaWdodChcImxpZ2h0XCIsIG5ldyBWZWN0b3IzKDEwMCwgMjAwLCAzMDApLCBzY2VuZSk7XG4gICAgbGlnaHQuaW50ZW5zaXR5ID0gMTtcbiAgICBsaWdodC5zcGVjdWxhciA9IENvbG9yMy5XaGl0ZSgpLy9uZXcgQ29sb3IzKDAuOTUsIDAuMTUsIDAuMTEpIFxuXG4gICAgcmV0dXJuIHsgc2NlbmUsIGNhbWVyYSwgbGlnaHQgfVxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL3NjZW5lJztcbmltcG9ydCB7IFZlY3RvcjMsIENvbG9yNCwgTWF0cml4IH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGhzL21hdGgnO1xuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hcIlxuaW1wb3J0IHsgUGFydGljbGVTeXN0ZW0gfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvUGFydGljbGVzL3BhcnRpY2xlU3lzdGVtJ1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZSdcbmltcG9ydCB7IFNwaGVyZVBhcnRpY2xlRW1pdHRlciB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9QYXJ0aWNsZXMvRW1pdHRlclR5cGVzL3NwaGVyZVBhcnRpY2xlRW1pdHRlcidcbmltcG9ydCB7IEdsb3dMYXllciB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9MYXllcnMvZ2xvd0xheWVyJ1xuaW1wb3J0IHsgUGFydGljbGUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RhcnMoc2NlbmU6IFNjZW5lKSB7XG4gICAgLy8gUGFydGljbGVTeXN0ZW0gIFNwaGVyZVBhcnRpY2xlRW1pdHRlclxuICAgIGNvbnN0IGJhc2VTdGFyTW9kZWwgPSBNZXNoLkNyZWF0ZUJveChcImVtaXR0ZXJcIiwgMC4wMSwgc2NlbmUpXG4gICAgY29uc3Qgc3RhcnNQYXJ0aWNsZXMgPSBuZXcgUGFydGljbGVTeXN0ZW0oXCJzdGFyUGFydGljbGVzXCIsIDcwMDAsIHNjZW5lKVxuICAgIC8vIGNvbnN0IGdsID0gbmV3IEdsb3dMYXllcihcInN0YXJHbG93XCIsIHNjZW5lLCB7IGJsdXJLZXJuZWxTaXplOiA2NCB9KTtcblxuICAgIHN0YXJzUGFydGljbGVzLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1BhdHJpY2tSeWFuTVMvQmFieWxvbkpTdGV4dHVyZXMvbWFzdGVyL1BhcnRpY2xlU3lzdGVtcy9TdW4vVF9TdGFyLnBuZ1wiLCBzY2VuZSlcbiAgICBcbiAgICBjb25zdCBtaW5EaXN0YW5jZSA9IDBcbiAgICBjb25zdCBzY2FsZSA9IDIwMFxuICAgIGNvbnN0IGluZGljYXRvckZ1bmN0aW9uID0gKCkgPT4gTWF0aC5yYW5kb20oKSA8IC41ID8gLTE6IDFcbiAgICBjb25zdCBnZXRQb3NpdGlvbiA9ICgpID0+IG1pbkRpc3RhbmNlICsgKE1hdGgucmFuZG9tKCkgKiAoc2NhbGUgKiBpbmRpY2F0b3JGdW5jdGlvbigpKSlcbiAgICBjb25zdCBnZXRSYW5kb21Qb3NpdGlvbiA9ICgpID0+IFtnZXRQb3NpdGlvbigpLCBnZXRQb3NpdGlvbigpLCBnZXRQb3NpdGlvbigpXVxuICAgIHN0YXJzUGFydGljbGVzLnN0YXJ0UG9zaXRpb25GdW5jdGlvbiA9ICh3b3JsZE1hdHJpeDogTWF0cml4LCBwb3NpdGlvblRvVXBkYXRlOiBWZWN0b3IzLCBwYXJ0aWNsZTogUGFydGljbGUsIGlzTG9jYWw6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgW3gsIHksIHpdID0gZ2V0UmFuZG9tUG9zaXRpb24oKVxuICAgICAgICBWZWN0b3IzLlRyYW5zZm9ybUNvb3JkaW5hdGVzRnJvbUZsb2F0c1RvUmVmKHgsIHksIHosIHdvcmxkTWF0cml4LCBwb3NpdGlvblRvVXBkYXRlKVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJzRW1pdHRlciA9IG5ldyBTcGhlcmVQYXJ0aWNsZUVtaXR0ZXIoKVxuICAgIHN0YXJzRW1pdHRlci5yYWRpdXMgPSAzMFxuICAgIHN0YXJzRW1pdHRlci5yYWRpdXNSYW5nZSA9IDFcbiAgICBzdGFyc0VtaXR0ZXIuc3RhcnRQb3NpdGlvbkZ1bmN0aW9uID0gKHdvcmxkTWF0cml4OiBNYXRyaXgsIHBvc2l0aW9uVG9VcGRhdGU6IFZlY3RvcjMsIHBhcnRpY2xlOiBQYXJ0aWNsZSwgaXNMb2NhbDogYm9vbGVhbik6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBbeCwgeSwgel0gPSBnZXRSYW5kb21Qb3NpdGlvbigpXG4gICAgICAgIFZlY3RvcjMuVHJhbnNmb3JtQ29vcmRpbmF0ZXNGcm9tRmxvYXRzVG9SZWYoeCwgeSwgeiwgd29ybGRNYXRyaXgsIHBvc2l0aW9uVG9VcGRhdGUpXG4gICAgfVxuXG4gICAgc3RhcnNQYXJ0aWNsZXMuZW1pdHRlciA9IGJhc2VTdGFyTW9kZWxcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5lbWl0dGVyID0gVmVjdG9yMy5aZXJvKClcbiAgICBzdGFyc1BhcnRpY2xlcy5wYXJ0aWNsZUVtaXR0ZXJUeXBlID0gc3RhcnNFbWl0dGVyXG5cbiAgICBzdGFyc1BhcnRpY2xlcy5jb2xvcjEgPSBuZXcgQ29sb3I0KDAuODk4LCAwLjczNywgMC43MTgsIDEuMCk7XG4gICAgc3RhcnNQYXJ0aWNsZXMuY29sb3IyID0gbmV3IENvbG9yNCgwLjU4NCwgMC44MzEsIDAuODk0LCAxLjApO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLm1pbkVtaXRCb3ggPSBuZXcgVmVjdG9yMygxMCwgMTAsIDEwKVxuICAgIC8vIHN0YXJzUGFydGljbGVzLm1heEVtaXRCb3ggPSBuZXcgVmVjdG9yMygxMDAsIDEwMCwgMTAwKVxuICAgIHN0YXJzUGFydGljbGVzLm1pbkxpZmVUaW1lID0gOTk5OTk5XG4gICAgc3RhcnNQYXJ0aWNsZXMubWF4TGlmZVRpbWUgPSA5OTk5OTlcbiAgICBzdGFyc1BhcnRpY2xlcy5tYW51YWxFbWl0Q291bnQgPSA1MDA7XG4gICAgc3RhcnNQYXJ0aWNsZXMubWF4RW1pdFBvd2VyID0gMC4wO1xuICAgIHN0YXJzUGFydGljbGVzLm1pblNpemUgPSAxLjE1Ly8wLjE1O1xuICAgIHN0YXJzUGFydGljbGVzLm1heFNpemUgPSA1LjcvLzAuMztcbiAgICBzdGFyc1BhcnRpY2xlcy5ibGVuZE1vZGUgPSBQYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfU1RBTkRBUkRcbiAgICBzdGFyc1BhcnRpY2xlcy5ncmF2aXR5ID0gbmV3IFZlY3RvcjMoMCwgMCwgMClcbiAgICBzdGFyc1BhcnRpY2xlcy5taW5Bbmd1bGFyU3BlZWQgPSAwLjBcbiAgICBzdGFyc1BhcnRpY2xlcy5tYXhBbmd1bGFyU3BlZWQgPSAwLjBcbiAgICBzdGFyc1BhcnRpY2xlcy5pc0JpbGxib2FyZEJhc2VkID0gdHJ1ZVxuICAgIHN0YXJzUGFydGljbGVzLnJlbmRlcmluZ0dyb3VwSWQgPSAwO1xuICAgIHN0YXJzUGFydGljbGVzLnN0YXJ0KClcblxuICAgIHJldHVybiBzY2VuZTtcbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9zY2VuZSc7XG5pbXBvcnQgeyBWZWN0b3IzLCBDb2xvcjQsIENvbG9yMyB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRocy9tYXRoJztcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoXCJcbmltcG9ydCB7IE1lc2hCdWlsZGVyIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlcidcbmltcG9ydCB7IFBhcnRpY2xlU3lzdGVtIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL1BhcnRpY2xlcy9wYXJ0aWNsZVN5c3RlbSdcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmUnXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWwnXG5pbXBvcnQgeyBTcGhlcmVQYXJ0aWNsZUVtaXR0ZXIgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvUGFydGljbGVzL0VtaXR0ZXJUeXBlcy9zcGhlcmVQYXJ0aWNsZUVtaXR0ZXInXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN1bihzY2VuZTogU2NlbmUpIHtcbiAgICAvLyBFbWl0dGVyIG9iamVjdFxuICAgIC8vIGNvbnN0IHN0YXJzID0gTWVzaC5DcmVhdGVCb3goXCJlbWl0dGVyXCIsIDAuMDEsIHNjZW5lKTtcblxuICAgIC8vIENyZWF0ZSBhIHBhcnRpY2xlIHN5c3RlbVxuICAgIGNvbnN0IHN1cmZhY2VQYXJ0aWNsZXMgPSBuZXcgUGFydGljbGVTeXN0ZW0oXCJzdXJmYWNlUGFydGljbGVzXCIsIDE2MDAsIHNjZW5lKTtcbiAgICBjb25zdCBmbGFyZVBhcnRpY2xlcyA9IG5ldyBQYXJ0aWNsZVN5c3RlbShcImZsYXJlUGFydGljbGVzXCIsIDIwLCBzY2VuZSk7XG4gICAgY29uc3QgY29yb25hUGFydGljbGVzID0gbmV3IFBhcnRpY2xlU3lzdGVtKFwiY29yb25hUGFydGljbGVzXCIsIDYwMCwgc2NlbmUpO1xuICAgIC8vIGNvbnN0IHN0YXJzUGFydGljbGVzID0gbmV3IFBhcnRpY2xlU3lzdGVtKFwic3RhcnNQYXJ0aWNsZXNcIiwgNTAwLCBzY2VuZSk7XG5cbiAgICAvLyBUZXh0dXJlIG9mIGVhY2ggcGFydGljbGVcbiAgICBzdXJmYWNlUGFydGljbGVzLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1BhdHJpY2tSeWFuTVMvQmFieWxvbkpTdGV4dHVyZXMvbWFzdGVyL1BhcnRpY2xlU3lzdGVtcy9TdW4vVF9TdW5TdXJmYWNlLnBuZ1wiLCBzY2VuZSk7XG4gICAgZmxhcmVQYXJ0aWNsZXMucGFydGljbGVUZXh0dXJlID0gbmV3IFRleHR1cmUoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUGF0cmlja1J5YW5NUy9CYWJ5bG9uSlN0ZXh0dXJlcy9tYXN0ZXIvUGFydGljbGVTeXN0ZW1zL1N1bi9UX1N1bkZsYXJlLnBuZ1wiLCBzY2VuZSk7XG4gICAgY29yb25hUGFydGljbGVzLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1BhdHJpY2tSeWFuTVMvQmFieWxvbkpTdGV4dHVyZXMvbWFzdGVyL1BhcnRpY2xlU3lzdGVtcy9TdW4vVF9TdGFyLnBuZ1wiLCBzY2VuZSk7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMucGFydGljbGVUZXh0dXJlID0gbmV3IFRleHR1cmUoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUGF0cmlja1J5YW5NUy9CYWJ5bG9uSlN0ZXh0dXJlcy9tYXN0ZXIvUGFydGljbGVTeXN0ZW1zL1N1bi9UX1N0YXIucG5nXCIsIHNjZW5lKTtcblxuICAgIC8vIENyZWF0ZSBjb3JlIHNwaGVyZVxuICAgIGNvbnN0IGNvcmVTcGhlcmUgPSBNZXNoQnVpbGRlci5DcmVhdGVTcGhlcmUoXCJjb3JlU3BoZXJlXCIsIHsgZGlhbWV0ZXI6IDIuMDEsIHNlZ21lbnRzOiA2NCB9LCBzY2VuZSk7XG5cbiAgICAvLyBDcmVhdGUgY29yZSBtYXRlcmlhbFxuICAgIGNvbnN0IGNvcmVNYXQgPSBuZXcgU3RhbmRhcmRNYXRlcmlhbChcImNvcmVNYXRcIiwgc2NlbmUpXG4gICAgY29yZU1hdC5lbWlzc2l2ZUNvbG9yID0gbmV3IENvbG9yMygwLjM3NzMsIDAuMDkzMCwgMC4wMjY2KTtcblxuICAgIC8vIEFzc2lnbiBjb3JlIG1hdGVyaWFsIHRvIHNwaGVyZVxuICAgIGNvcmVTcGhlcmUubWF0ZXJpYWwgPSBjb3JlTWF0O1xuXG4gICAgLy8gUHJlLXdhcm1cbiAgICBzdXJmYWNlUGFydGljbGVzLnByZVdhcm1TdGVwT2Zmc2V0ID0gMTA7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5wcmVXYXJtQ3ljbGVzID0gMTAwO1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMucHJlV2FybVN0ZXBPZmZzZXQgPSAxMDtcbiAgICBmbGFyZVBhcnRpY2xlcy5wcmVXYXJtQ3ljbGVzID0gMTAwO1xuXG4gICAgY29yb25hUGFydGljbGVzLnByZVdhcm1TdGVwT2Zmc2V0ID0gMTA7XG4gICAgY29yb25hUGFydGljbGVzLnByZVdhcm1DeWNsZXMgPSAxMDA7XG5cbiAgICAvLyBJbml0aWFsIHJvdGF0aW9uXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5taW5Jbml0aWFsUm90YXRpb24gPSAtMiAqIE1hdGguUEk7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5tYXhJbml0aWFsUm90YXRpb24gPSAyICogTWF0aC5QSTtcblxuICAgIGZsYXJlUGFydGljbGVzLm1pbkluaXRpYWxSb3RhdGlvbiA9IC0yICogTWF0aC5QSTtcbiAgICBmbGFyZVBhcnRpY2xlcy5tYXhJbml0aWFsUm90YXRpb24gPSAyICogTWF0aC5QSTtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5taW5Jbml0aWFsUm90YXRpb24gPSAtMiAqIE1hdGguUEk7XG4gICAgY29yb25hUGFydGljbGVzLm1heEluaXRpYWxSb3RhdGlvbiA9IDIgKiBNYXRoLlBJO1xuXG4gICAgLy8gV2hlcmUgdGhlIHN1biBwYXJ0aWNsZXMgY29tZSBmcm9tXG4gICAgY29uc3Qgc3VuRW1pdHRlciA9IG5ldyBTcGhlcmVQYXJ0aWNsZUVtaXR0ZXIoKTtcbiAgICBzdW5FbWl0dGVyLnJhZGl1cyA9IDE7XG4gICAgc3VuRW1pdHRlci5yYWRpdXNSYW5nZSA9IDA7IC8vIGVtaXQgb25seSBmcm9tIHNoYXBlIHN1cmZhY2VcblxuICAgIC8vIC8vIFdoZXJlIHRoZSBzdGFycyBwYXJ0aWNsZXMgY29tZSBmcm9tXG4gICAgLy8gY29uc3Qgc3RhcnNFbWl0dGVyID0gbmV3IFNwaGVyZVBhcnRpY2xlRW1pdHRlcigpO1xuICAgIC8vIHN0YXJzRW1pdHRlci5yYWRpdXMgPSAyMDtcbiAgICAvLyBzdGFyc0VtaXR0ZXIucmFkaXVzUmFuZ2UgPSAwOyAvLyBlbWl0IG9ubHkgZnJvbSBzaGFwZSBzdXJmYWNlXG5cbiAgICAvLyBBc3NpZ24gcGFydGljbGVzIHRvIGVtaXR0ZXJzXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5lbWl0dGVyID0gY29yZVNwaGVyZTsgLy8gdGhlIHN0YXJ0aW5nIG9iamVjdCwgdGhlIGVtaXR0ZXJcbiAgICBzdXJmYWNlUGFydGljbGVzLnBhcnRpY2xlRW1pdHRlclR5cGUgPSBzdW5FbWl0dGVyO1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMuZW1pdHRlciA9IGNvcmVTcGhlcmU7IC8vIHRoZSBzdGFydGluZyBvYmplY3QsIHRoZSBlbWl0dGVyXG4gICAgZmxhcmVQYXJ0aWNsZXMucGFydGljbGVFbWl0dGVyVHlwZSA9IHN1bkVtaXR0ZXI7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMuZW1pdHRlciA9IGNvcmVTcGhlcmU7IC8vIHRoZSBzdGFydGluZyBvYmplY3QsIHRoZSBlbWl0dGVyXG4gICAgY29yb25hUGFydGljbGVzLnBhcnRpY2xlRW1pdHRlclR5cGUgPSBzdW5FbWl0dGVyO1xuXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMuZW1pdHRlciA9IHN0YXJzOyAvLyB0aGUgc3RhcnRpbmcgb2JqZWN0LCB0aGUgZW1pdHRlclxuICAgIC8vIHN0YXJzUGFydGljbGVzLnBhcnRpY2xlRW1pdHRlclR5cGUgPSBzdGFyc0VtaXR0ZXI7XG5cbiAgICAvLyBSYW5kb20gc3RhcnRpbmcgY29sb3JcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5jb2xvcjEgPSBuZXcgQ29sb3I0KDAuODk4LCAwLjczNywgMC43MTgsIDEuMCk7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMuY29sb3IyID0gbmV3IENvbG9yNCgwLjU4NCwgMC44MzEsIDAuODk0LCAxLjApO1xuXG4gICAgLy8gQ29sb3IgZ3JhZGllbnQgb3ZlciB0aW1lXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAsIG5ldyBDb2xvcjQoMC44NTA5LCAwLjQ3ODQsIDAuMTAxOSwgMC4wKSk7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAuNCwgbmV3IENvbG9yNCgwLjYyNTksIDAuMzA1NiwgMC4wNjE5LCAwLjUpKTtcbiAgICBzdXJmYWNlUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMC41LCBuZXcgQ29sb3I0KDAuNjAzOSwgMC4yODg3LCAwLjA1NzksIDAuNSkpO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgxLjAsIG5ldyBDb2xvcjQoMC4zMjA3LCAwLjA3MTMsIDAuMDA3NSwgMC4wKSk7XG5cbiAgICBmbGFyZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAsIG5ldyBDb2xvcjQoMSwgMC45NjEyLCAwLjUxNDEsIDAuMCkpO1xuICAgIGZsYXJlUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMC4yNSwgbmV3IENvbG9yNCgwLjkwNTgsIDAuNzE1MiwgMC4zODI1LCAxLjApKTtcbiAgICBmbGFyZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDEuMCwgbmV3IENvbG9yNCgwLjYzMjAsIDAuMCwgMC4wLCAwLjApKTtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAsIG5ldyBDb2xvcjQoMC44NTA5LCAwLjQ3ODQsIDAuMTAxOSwgMC4wKSk7XG4gICAgY29yb25hUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMC41LCBuZXcgQ29sb3I0KDAuNjAzOSwgMC4yODg3LCAwLjA1NzksIDAuMTIpKTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgxLjAsIG5ldyBDb2xvcjQoMC4zMjA3LCAwLjA3MTMsIDAuMDA3NSwgMC4wKSk7XG5cbiAgICAvLyBTaXplIG9mIGVhY2ggcGFydGljbGUgKHJhbmRvbSBiZXR3ZWVuLi4uXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5taW5TaXplID0gMC40O1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWF4U2l6ZSA9IDAuNztcblxuICAgIGZsYXJlUGFydGljbGVzLm1pblNjYWxlWCA9IDAuNTtcbiAgICBmbGFyZVBhcnRpY2xlcy5taW5TY2FsZVkgPSAwLjU7XG4gICAgZmxhcmVQYXJ0aWNsZXMubWF4U2NhbGVYID0gMS4wO1xuICAgIGZsYXJlUGFydGljbGVzLm1heFNjYWxlWSA9IDEuMDtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5taW5TY2FsZVggPSAwLjU7XG4gICAgY29yb25hUGFydGljbGVzLm1pblNjYWxlWSA9IDAuNzU7XG4gICAgY29yb25hUGFydGljbGVzLm1heFNjYWxlWCA9IDEuMjtcbiAgICBjb3JvbmFQYXJ0aWNsZXMubWF4U2NhbGVZID0gMy4wO1xuXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWluU2l6ZSA9IDAuMTU7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4U2l6ZSA9IDAuMztcblxuICAgIC8vIFNpemUgb3ZlciBsaWZldGltZVxuICAgIGZsYXJlUGFydGljbGVzLmFkZFNpemVHcmFkaWVudCgwLCAwKTtcbiAgICBmbGFyZVBhcnRpY2xlcy5hZGRTaXplR3JhZGllbnQoMSwgMSk7XG5cbiAgICAvLyBMaWZlIHRpbWUgb2YgZWFjaCBwYXJ0aWNsZSAocmFuZG9tIGJldHdlZW4uLi5cbiAgICBzdXJmYWNlUGFydGljbGVzLm1pbkxpZmVUaW1lID0gOC4wO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWF4TGlmZVRpbWUgPSA4LjA7XG5cbiAgICBmbGFyZVBhcnRpY2xlcy5taW5MaWZlVGltZSA9IDEwLjA7XG4gICAgZmxhcmVQYXJ0aWNsZXMubWF4TGlmZVRpbWUgPSAxMC4wO1xuXG4gICAgY29yb25hUGFydGljbGVzLm1pbkxpZmVUaW1lID0gMi4wO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5tYXhMaWZlVGltZSA9IDIuMDtcblxuICAgIC8vIHN0YXJzUGFydGljbGVzLm1pbkxpZmVUaW1lID0gOTk5OTk5O1xuICAgIC8vIHN0YXJzUGFydGljbGVzLm1heExpZmVUaW1lID0gOTk5OTk5O1xuXG4gICAgLy8gRW1pc3Npb24gcmF0ZVxuICAgIHN1cmZhY2VQYXJ0aWNsZXMuZW1pdFJhdGUgPSAyMDA7XG4gICAgZmxhcmVQYXJ0aWNsZXMuZW1pdFJhdGUgPSAxO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5lbWl0UmF0ZSA9IDMwMDtcblxuICAgIC8vIEJ1cnN0IHJhdGVcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5tYW51YWxFbWl0Q291bnQgPSA1MDA7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4RW1pdFBvd2VyID0gMC4wO1xuXG4gICAgLy8gQmxlbmQgbW9kZSA6IEJMRU5ETU9ERV9PTkVPTkUsIEJMRU5ETU9ERV9TVEFOREFSRCwgb3IgQkxFTkRNT0RFX0FERFxuICAgIHN1cmZhY2VQYXJ0aWNsZXMuYmxlbmRNb2RlID0gUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX0FERDtcbiAgICBmbGFyZVBhcnRpY2xlcy5ibGVuZE1vZGUgPSBQYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfQUREO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5ibGVuZE1vZGUgPSBQYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfQUREO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLmJsZW5kTW9kZSA9IFBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9TVEFOREFSRDtcblxuICAgIC8vIFNldCB0aGUgZ3Jhdml0eSBvZiBhbGwgcGFydGljbGVzXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5ncmF2aXR5ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XG4gICAgZmxhcmVQYXJ0aWNsZXMuZ3Jhdml0eSA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5ncmF2aXR5ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMuZ3Jhdml0eSA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xuXG4gICAgLy8gQW5ndWxhciBzcGVlZCwgaW4gcmFkaWFuc1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWluQW5ndWxhclNwZWVkID0gLTAuNDtcbiAgICBzdXJmYWNlUGFydGljbGVzLm1heEFuZ3VsYXJTcGVlZCA9IDAuNDtcblxuICAgIGZsYXJlUGFydGljbGVzLm1pbkFuZ3VsYXJTcGVlZCA9IDAuMDtcbiAgICBmbGFyZVBhcnRpY2xlcy5tYXhBbmd1bGFyU3BlZWQgPSAwLjA7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMubWluQW5ndWxhclNwZWVkID0gMC4wO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5tYXhBbmd1bGFyU3BlZWQgPSAwLjA7XG5cbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5taW5Bbmd1bGFyU3BlZWQgPSAwLjA7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4QW5ndWxhclNwZWVkID0gMC4wO1xuXG4gICAgLy8gU3BlZWRcbiAgICBzdXJmYWNlUGFydGljbGVzLm1pbkVtaXRQb3dlciA9IDA7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5tYXhFbWl0UG93ZXIgPSAwO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMudXBkYXRlU3BlZWQgPSAwLjAwNTtcblxuICAgIGZsYXJlUGFydGljbGVzLm1pbkVtaXRQb3dlciA9IDAuMDAxO1xuICAgIGZsYXJlUGFydGljbGVzLm1heEVtaXRQb3dlciA9IDAuMDE7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMubWluRW1pdFBvd2VyID0gMC4wO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5tYXhFbWl0UG93ZXIgPSAwLjA7XG5cbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5taW5FbWl0UG93ZXIgPSAwLjA7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4QW5ndWxhclNwZWVkID0gMC4wO1xuXG4gICAgLy8gTm8gYmlsbGJvYXJkXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5pc0JpbGxib2FyZEJhc2VkID0gZmFsc2U7XG4gICAgZmxhcmVQYXJ0aWNsZXMuaXNCaWxsYm9hcmRCYXNlZCA9IHRydWU7XG4gICAgY29yb25hUGFydGljbGVzLmlzQmlsbGJvYXJkQmFzZWQgPSB0cnVlO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLmlzQmlsbGJvYXJkQmFzZWQgPSB0cnVlO1xuXG4gICAgLy8gUmVuZGVyIE9yZGVyXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMucmVuZGVyaW5nR3JvdXBJZCA9IDA7XG4gICAgY29yb25hUGFydGljbGVzLnJlbmRlcmluZ0dyb3VwSWQgPSAwIC8vMTtcbiAgICBmbGFyZVBhcnRpY2xlcy5yZW5kZXJpbmdHcm91cElkID0gMCAvLzI7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5yZW5kZXJpbmdHcm91cElkID0gMCAvLzM7XG4gICAgY29yZVNwaGVyZS5yZW5kZXJpbmdHcm91cElkID0gMCAvLzM7XG5cbiAgICAvLyBTdGFydCB0aGUgcGFydGljbGUgc3lzdGVtXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5zdGFydCgpO1xuICAgIGZsYXJlUGFydGljbGVzLnN0YXJ0KCk7XG4gICAgY29yb25hUGFydGljbGVzLnN0YXJ0KCk7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMuc3RhcnQoKTtcblxuICAgIHJldHVybiB7Y29yZVNwaGVyZSwgY29yb25hUGFydGljbGVzLCBmbGFyZVBhcnRpY2xlcywgc3VyZmFjZVBhcnRpY2xlc307XG59IiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0VuZ2luZXMvZW5naW5lJztcbmltcG9ydCB7IENvbG9yMywgVmVjdG9yMyB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRocy9tYXRoJztcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoXCJcbmltcG9ydCB7IE1lc2hCdWlsZGVyIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlcic7XG5pbXBvcnQgeyBHcmlkTWF0ZXJpYWwgfSBmcm9tICdAYmFieWxvbmpzL21hdGVyaWFscy9ncmlkJ1xuaW1wb3J0IHsgT2ltb0pTUGx1Z2luIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL1BoeXNpY3MvUGx1Z2lucy9vaW1vSlNQbHVnaW4nXG5pbXBvcnQgKiBhcyBPSU1PIGZyb20gXCJvaW1vXCJcblxuaW1wb3J0IFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlclwiO1xuaW1wb3J0ICdAYmFieWxvbmpzL2NvcmUvTG9hZGluZy9sb2FkaW5nU2NyZWVuJ1xuXG5pbXBvcnQgeyBjcmVhdGVTdGFycyB9IGZyb20gJy4vY29tcG9uZW50cy9zdGFycydcbmltcG9ydCB7IGNyZWF0ZVNjZW5lIH0gZnJvbSAnLi9jb21wb25lbnRzL3NjZW5lJ1xuaW1wb3J0IHsgY3JlYXRlU3VuIH0gZnJvbSAnLi9jb21wb25lbnRzL3N1bidcbmltcG9ydCB7IE5lYnVsYUJhY2tncm91bmQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmVidWxhJ1xuaW1wb3J0IHsgUGh5c2ljc0hlbHBlciwgUGh5c2ljc0ltcG9zdG9yLCBQaHlzaWNzUmFkaWFsRXhwbG9zaW9uRXZlbnRPcHRpb25zLCBQaHlzaWNzUmFkaWFsSW1wdWxzZUZhbGxvZmYsIFN0YW5kYXJkTWF0ZXJpYWwsIFRleHR1cmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUnO1xuaW1wb3J0IHsgUGxhbmVQYW5lbCB9IGZyb20gJ0BiYWJ5bG9uanMvZ3VpJztcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW5kZXJDYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5cbmNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUoY2FudmFzKTtcbi8vZW5naW5lLmxvYWRpbmdTY3JlZW4gPSBuZXcgQkFCWUxPTi5EZWZhdWx0TG9hZGluZ1NjcmVlbihjYW52YXMsIFwiXCIsIFwiYmxhY2tcIilcblxuZnVuY3Rpb24gY3JlYXRlRGVsYXllZFNjZW5lKCkge1xuICAgIC8vIFNjZW5lXG4gICAgY29uc3QgeyBzY2VuZSB9ID0gY3JlYXRlU2NlbmUoY2FudmFzLCBlbmdpbmUpXG5cbiAgICBjb25zdCBvcmlnaW4gPSBWZWN0b3IzLlplcm8oKVxuICAgIGNvbnN0IGdyYXZpdHlWZWN0b3IgPSBWZWN0b3IzLlplcm8oKSAvLyBuZXcgVmVjdG9yMygwLCAtMC41LCAwKVxuICAgIGNvbnN0IHBoeXNpY3NQbHVnaW4gPSBuZXcgT2ltb0pTUGx1Z2luKHRydWUsIHVuZGVmaW5lZCwgT0lNTylcbiAgICBzY2VuZS5lbmFibGVQaHlzaWNzKGdyYXZpdHlWZWN0b3IsIHBoeXNpY3NQbHVnaW4pXG4gICAgY29uc3QgcGh5c2ljc0hlbHBlciA9IG5ldyBQaHlzaWNzSGVscGVyKHNjZW5lKVxuXG4gICAgLyogdmFyIGdsID0gbmV3IEJBQllMT04uR2xvd0xheWVyKFwiZ2xvd1wiLCBzY2VuZSwge1xuICAgICAgICAgICAgbWFpblRleHR1cmVGaXhlZFNpemU6IDUxMlxuICAgICAgICB9KTsgICAgICAgIFxuICAgICovXG4gICAgLy8gU3R1ZmZcblxuICAgIC8qIEdhbGF4eSBCYWNrZ3JvdW5kICovXG4gICAgY29uc3QgbmVidWxhID0gbmV3IE5lYnVsYUJhY2tncm91bmQoc2NlbmUpXG4gICAgLy9jb25zdCB7IFNQUywgc3lzdGVtTWVzaDogc3RhcnMgfSA9IGNyZWF0ZVN0YXJzKHNjZW5lKVxuICAgIGNyZWF0ZVN0YXJzKHNjZW5lKVxuICAgIGNvbnN0IHsgY29yZVNwaGVyZSB9ID0gY3JlYXRlU3VuKHNjZW5lKVxuICAgIGNvcmVTcGhlcmUucG9zaXRpb24gPSBvcmlnaW5cblxuICAgIC8vIGNvcmVTcGhlcmUucGh5c2ljc0ltcG9zdG9yID0gbmV3IFBoeXNpY3NJbXBvc3Rvcihjb3JlU3BoZXJlLCBQaHlzaWNzSW1wb3N0b3IuU3BoZXJlSW1wb3N0b3IsIHsgbWFzczogMSwgcmVzdGl0dXRpb246IDAuOH0sIHNjZW5lKVxuICAgIC8qXG4vLyB0aGUgc2Vjb25kIGByYWRpdXNgIGFyZ3VtZW50IGNhbiBhbHNvIGFjdCBhcyBvcHRpb25zOiBgLmdyYXZpdGF0aW9uYWxGaWVsZChvcmlnaW4sIHsgcmFkaXVzOiByYWRpdXMsIHN0cmVuZ3RoOiBzdHJlbmd0aCwgZmFsbG9mZjogZmFsbG9mZiB9KWBcbmdyYXZpdGF0aW9uYWxGaWVsZEV2ZW50LmVuYWJsZSgpOyAvLyBuZWVkIHRvIGNhbGwsIGlmIHlvdSB3YW50IHRvIGFjdGl2YXRlIHRoZSBncmF2aXRhdGlvbmFsIGZpZWxkLlxuc2V0VGltZW91dChmdW5jdGlvbiAoZ3Jhdml0YXRpb25hbEZpZWxkRXZlbnQpIHsgZ3Jhdml0YXRpb25hbEZpZWxkRXZlbnQuZGlzYWJsZSgpOyB9LCAzMDAwLCBncmF2aXRhdGlvbmFsRmllbGRFdmVudCk7XG4qL1xuXG5cbiAgICAvKiB2YXIgbWFrZVNoYWRvd3M9MDtcbiAgICAgdmFyIGxvZD0wOyAqL1xuXG4gICAgLy8gZ3JvdW5kXG4gICAgLy8gbGV0IG1hdGVyaWFsID0gbmV3IEdyaWRNYXRlcmlhbChcImdyaWRcIiwgc2NlbmUpO1xuICAgIC8vIGNvbnN0IGdyb3VuZCA9IE1lc2guQ3JlYXRlR3JvdW5kKFwiZ3JvdW5kXCIsIDEwLCAxMCwgMjAwLCBzY2VuZSk7XG4gICAgLy8gZ3JvdW5kLnBvc2l0aW9uLnkgPSAtN1xuICAgIC8vIGdyb3VuZC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuICAgIC8vIGdyb3VuZC5waHlzaWNzSW1wb3N0b3IgPSBuZXcgUGh5c2ljc0ltcG9zdG9yKGdyb3VuZCwgUGh5c2ljc0ltcG9zdG9yLlBsYW5lSW1wb3N0b3IsIHsgbWFzczogMCwgcmVzdGl0dXRpb246IDAuOSB9LCBzY2VuZSk7XG5cblxuICAgIGxldCBwbGFuZXQgPSBNZXNoLkNyZWF0ZVNwaGVyZShcInNwaGVyZS0xXCIsIDE2LCAxLCBzY2VuZSk7XG4gICAgbGV0IHBsYW5ldE1hdGVyaWFsID0gbmV3IFN0YW5kYXJkTWF0ZXJpYWwoXCJwbGFuZXRNQXRlcmlhbFwiLCBzY2VuZSlcbiAgICBwbGFuZXRNYXRlcmlhbC5hbWJpZW50VGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS93bG54MXlRLmpwZ1wiLCBzY2VuZSwgdHJ1ZSwgZmFsc2UpXG4gICAgcGxhbmV0TWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IENvbG9yMy5CbGFjaygpXG4gICAgcGxhbmV0TWF0ZXJpYWwuZW1pc3NpdmVDb2xvciA9IG5ldyBDb2xvcjMoMSwgMSwgMSlcblxuICAgIHBsYW5ldC5wb3NpdGlvbiA9IG5ldyBWZWN0b3IzKDUsIDAsIDApXG4gICAgcGxhbmV0LnNjYWxpbmcueCA9IDFcbiAgICBwbGFuZXQuc2NhbGluZy55ID0gMVxuICAgIHBsYW5ldC5zY2FsaW5nLnogPSAxXG5cbiAgICBwbGFuZXQubWF0ZXJpYWwgPSBwbGFuZXRNYXRlcmlhbDtcbiAgICBwbGFuZXQucGh5c2ljc0ltcG9zdG9yID0gbmV3IFBoeXNpY3NJbXBvc3RvcihwbGFuZXQsIFBoeXNpY3NJbXBvc3Rvci5TcGhlcmVJbXBvc3RvciwgeyBtYXNzOiAxMCwgcmVzdGl0dXRpb246IDAuOSB9LCBzY2VuZSlcbiAgICAvLyBzcGhlcmUucGh5c2ljc0ltcG9zdG9yLmFwcGx5SW1wdWxzZShuZXcgQkFCWUxPTi5WZWN0b3IzKDEwLCAtMTAsIHNwaGVyZS5wb3NpdGlvbi54KSwgbmV3IEJBQllMT04uVmVjdG9yMyhzcGhlcmUucG9zaXRpb24ueCwgc3BoZXJlLnBvc2l0aW9uLnksIHNwaGVyZS5wb3NpdGlvbi56KSlcbiAgICBwbGFuZXQucGh5c2ljc0ltcG9zdG9yLmFwcGx5SW1wdWxzZShuZXcgVmVjdG9yMygyLDEsNSksIHBsYW5ldC5wb3NpdGlvbilcbiAgICAvLyBBZGQgZ3Jhdml0YXRpb25hbCBmaWVsZFxuICAgIGNvbnN0IHJhZGl1cyA9IDUwXG4gICAgY29uc3Qgc3RyZW5ndGggPSAuMDFcbiAgICBjb25zdCBmYWxsb2ZmID0gUGh5c2ljc1JhZGlhbEltcHVsc2VGYWxsb2ZmLkxpbmVhclxuICAgIC8qY29uc3QgZ3Jhdml0YXRpb25hbEZpZWxkRXZlbnQgPSBwaHlzaWNzSGVscGVyLmdyYXZpdGF0aW9uYWxGaWVsZChvcmlnaW4sIHJhZGl1cywgc3RyZW5ndGgsIGZhbGxvZmYpXG4gICAgaWYgKGdyYXZpdGF0aW9uYWxGaWVsZEV2ZW50KSBncmF2aXRhdGlvbmFsRmllbGRFdmVudC5lbmFibGUoKVxuICAgIGNvbnN0IGV2ZW50RGF0YSA9IGdyYXZpdGF0aW9uYWxGaWVsZEV2ZW50Py5nZXREYXRhKClcbiAgICBjb25zdCBzcGhlcmVEYXRhID0gZXZlbnREYXRhPy5zcGhlcmVcbiAgICBjb25zdCBzcGhlcmVEYXRhTWF0ZXJpYWwgPSBuZXcgU3RhbmRhcmRNYXRlcmlhbChcInNwaGVyZU1hdGVyaWFsXCIsIHNjZW5lKVxuICAgIGlmIChzcGhlcmVEYXRhKSB7XG4gICAgICAgIHNwaGVyZURhdGEuaXNWaXNpYmxlID0gdHJ1ZVxuICAgICAgICBzcGhlcmVEYXRhTWF0ZXJpYWwuYWxwaGEgPSAwLjVcbiAgICAgICAgc3BoZXJlRGF0YU1hdGVyaWFsLnNwZWN1bGFyQ29sb3IgPSBDb2xvcjMuUmVkKClcbiAgICAgICAgc3BoZXJlRGF0YU1hdGVyaWFsLmVtaXNzaXZlQ29sb3IgPSBuZXcgQ29sb3IzKDEsMSwxKVxuICAgICAgICAvLyBwbGFuZXQucG9zaXRpb24gPSBuZXcgVmVjdG9yMyg1LCAwLCAwKVxuICAgICAgICBzcGhlcmVEYXRhLm1hdGVyaWFsID0gc3BoZXJlRGF0YU1hdGVyaWFsXG4gICAgICAgIHNwaGVyZURhdGEucG9zaXRpb24gPSBuZXcgVmVjdG9yMygwLDAsMClcbiAgICB9XG4gICAgY29uc29sZS5sb2coZ3Jhdml0YXRpb25hbEZpZWxkRXZlbnQsIGV2ZW50RGF0YSwgc3BoZXJlRGF0YSlcbiAqL1xuICAgIC8vIFxuICAgIC8vIHZhciBldmVudCA9IHBoeXNpY3NIZWxwZXIuZ3Jhdml0YXRpb25hbEZpZWxkKFxuICAgIC8vICAgICBvcmlnaW4sXG4gICAgLy8gICAgIHJhZGl1cyxcbiAgICAvLyAgICAgc3RyZW5ndGgsXG4gICAgLy8gICAgIGZhbGxvZmYpO1xuICAgIC8vIGV2ZW50Py5lbmFibGUoKTtcblxuICAgIC8vIEJveGVzXG4gICAgLy8gdmFyIHBoeXNpY3NWaWV3ZXIgPSBuZXcgRGVidWcuUGh5c2ljc1ZpZXdlcigpO1xuICAgIC8qIHZhciBib3hTaXplID0gMjtcbiAgICB2YXIgYm94UGFkZGluZyA9IDQ7XG4gICAgdmFyIG1pblhZID0gLTEyO1xuICAgIHZhciBtYXhYWSA9IDEyO1xuICAgIHZhciBtYXhaID0gODtcbiAgICB2YXIgYm94UGFyYW1zID0geyBoZWlnaHQ6IGJveFNpemUsIHdpZHRoOiBib3hTaXplLCBkZXB0aDogYm94U2l6ZSB9O1xuICAgIHZhciBib3hJbXBvc3RvclBhcmFtcyA9IHsgbWFzczogYm94U2l6ZSwgcmVzdGl0dXRpb246IDAsIGZyaWN0aW9uOiAxIH07XG4gICAgdmFyIGJveE1hdGVyaWFsID0gbmV3IFN0YW5kYXJkTWF0ZXJpYWwoXCJib3hNYXRlcmlhbFwiLCBzY2VuZSk7XG4gICAgYm94TWF0ZXJpYWwuZGlmZnVzZUNvbG9yID0gbmV3IENvbG9yMygxLCAwLCAwKTtcbiAgICBmb3IgKHZhciB4ID0gbWluWFk7IHggPD0gbWF4WFk7IHggKz0gYm94U2l6ZSArIGJveFBhZGRpbmcpIHtcbiAgICAgICAgZm9yICh2YXIgeiA9IG1pblhZOyB6IDw9IG1heFhZOyB6ICs9IGJveFNpemUgKyBib3hQYWRkaW5nKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gYm94U2l6ZSAvIDI7IHkgPD0gbWF4WjsgeSArPSBib3hTaXplKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJveE5hbWUgPSBcImJveDpcIiArIHggKyAnLCcgKyB5ICsgJywnICsgejtcbiAgICAgICAgICAgICAgICB2YXIgYm94ID0gTWVzaEJ1aWxkZXIuQ3JlYXRlQm94KGJveE5hbWUsIGJveFBhcmFtcywgc2NlbmUpO1xuICAgICAgICAgICAgICAgIGJveC5wb3NpdGlvbiA9IG5ldyBWZWN0b3IzKHgsIHksIHopO1xuICAgICAgICAgICAgICAgIGJveC5tYXRlcmlhbCA9IGJveE1hdGVyaWFsO1xuICAgICAgICAgICAgICAgIGJveC5waHlzaWNzSW1wb3N0b3IgPSBuZXcgUGh5c2ljc0ltcG9zdG9yKGJveCwgUGh5c2ljc0ltcG9zdG9yLkJveEltcG9zdG9yLCBib3hJbXBvc3RvclBhcmFtcywgc2NlbmUpO1xuICAgICAgICAgICAgICAgIC8vIHBoeXNpY3NWaWV3ZXIuc2hvd0ltcG9zdG9yKGJveC5waHlzaWNzSW1wb3N0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSAqL1xuXG4gICAgLy8gR3Jhdml0YXRpb25hbCBmaWVsZFxuICAgIHZhciBncmF2aXRhdGlvbmFsRmllbGRPcmlnaW4gPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZXZlbnQgPSBwaHlzaWNzSGVscGVyLmdyYXZpdGF0aW9uYWxGaWVsZChcbiAgICAgICAgICAgIGdyYXZpdGF0aW9uYWxGaWVsZE9yaWdpbixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByYWRpdXMsXG4gICAgICAgICAgICAgICAgc3RyZW5ndGgsXG4gICAgICAgICAgICAgICAgZmFsbG9mZjogUGh5c2ljc1JhZGlhbEltcHVsc2VGYWxsb2ZmLkxpbmVhcixcbiAgICAgICAgICAgIH0gYXMgUGh5c2ljc1JhZGlhbEV4cGxvc2lvbkV2ZW50T3B0aW9uc1xuICAgICAgICApO1xuICAgICAgICBldmVudD8uZW5hYmxlKCk7XG5cbiAgICAgICAgLy8gRGVidWdcbiAgICAgICAgdmFyIGV2ZW50RGF0YSA9IGV2ZW50Py5nZXREYXRhKCk7XG4gICAgICAgIHZhciBzcGhlcmUgPSBldmVudERhdGE/LnNwaGVyZTtcbiAgICAgICAgYWRkTWF0ZXJpYWxUb01lc2goc3BoZXJlKTtcbiAgICAgICAgaWYgKHNwaGVyZT8uaXNWaXNpYmxlKSBzcGhlcmUuaXNWaXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICBcbiAgICAgICAgLy8gRGVidWcgLSBFTkRcbiAgICB9LCAxMDAwKTtcblxuICAgIC8vIEhlbHBlcnNcbiAgICAvLyBEZWJ1Z1xuICAgIGZ1bmN0aW9uIGFkZE1hdGVyaWFsVG9NZXNoKHNwaGVyZSkge1xuICAgICAgICB2YXIgc3BoZXJlTWF0ZXJpYWwgPSBuZXcgU3RhbmRhcmRNYXRlcmlhbChcInNwaGVyZU1hdGVyaWFsXCIsIHNjZW5lKTtcbiAgICAgICAgc3BoZXJlTWF0ZXJpYWwuYWxwaGEgPSAxO1xuICAgICAgICBzcGhlcmVNYXRlcmlhbC5lbWlzc2l2ZUNvbG9yID0gbmV3IENvbG9yMygxLDAsMSlcbiAgICAgICAgc3BoZXJlLm1hdGVyaWFsID0gc3BoZXJlTWF0ZXJpYWw7XG4gICAgfVxuICAgIC8vIHZhciBldmVudERhdGEgPSBldmVudD8uZ2V0RGF0YSgpO1xuICAgIC8vIC8vIGNvbnNvbGUubG9nKHBoeXNpY3NIZWxwZXIsIGV2ZW50LCBldmVudERhdGEsIGV2ZW50RGF0YT8uc3BoZXJlKVxuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50RGF0YT8uc3BoZXJlKVxuICAgIC8vIHZhciBzcGhlcmUgPSBldmVudERhdGE/LnNwaGVyZTtcbiAgICAvLyBhZGRNYXRlcmlhbFRvTWVzaChzcGhlcmUpO1xuICAgIC8vIGlmIChzcGhlcmU/LmlzVmlzaWJsZSkgc3BoZXJlLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgLy8gXG5cbiAgICAvKiB2YXIgdGVycmUgPSBCQUJZTE9OLk1lc2guQ3JlYXRlU3BoZXJlKCd0ZXJyZScsIDE2LCAyLCBzY2VuZSk7XG4gICAgdGVycmUucG9zaXRpb24ueCA9IDEwO1xuXG4gICAgdmFyIGVhcnRoTWF0ID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbCgnZWFydGgnLCBzY2VuZSk7XG4gICAgZWFydGhNYXQuZGlmZnVzZVRleHR1cmUgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKCdodHRwczovLzEuYnAuYmxvZ3Nwb3QuY29tLy1VVVhhSzVHQ2otay9VY3NLSlJNZ2tWSS9BQUFBQUFBQUNmTS9zZVBQX0gwOEpUUS9zMTYwMC8xLmpwZycsIHNjZW5lLCBmYWxzZSwgZmFsc2UpO1xuICAgIGVhcnRoTWF0LnNwZWN1bGFyQ29sb3IgPSBCQUJZTE9OLkNvbG9yMy5CbGFjaygpO1xuICAgIHRlcnJlLm1hdGVyaWFsID0gZWFydGhNYXQ7XG4gICAgdmFyIHN1bk1hdCA9IG5ldyAgQkFCWUxPTi5TdGFuZGFyZE1hdGVyaWFsKCdzdW4nLCBzY2VuZSk7XG4gICAgc3VuTWF0LmRpZmZ1c2VDb2xvciA9IEJBQllMT04uQ29sb3IzLlllbGxvdygpO1xuICAgIHN1bk1hdC5zcGVjdWxhckNvbG9yID0gQkFCWUxPTi5Db2xvcjMuQmxhY2soKTtcbiAgICBzdW5NYXQuZW1pc3NpdmVDb2xvciA9IEJBQllMT04uQ29sb3IzLlllbGxvdygpO1xuICAgIHN1bi5tYXRlcmlhbCA9IHN1bk1hdDtcblxuICAgIHZhciBhbHBoYSA9IDA7XG4gICAgc2NlbmUucmVnaXN0ZXJCZWZvcmVSZW5kZXIoKCkgPT4ge1xuICAgICAgICB0ZXJyZS5wb3NpdGlvbi54ID0gTWF0aC5jb3MoYWxwaGEpICogMTA7XG4gICAgICAgIHRlcnJlLnBvc2l0aW9uLnogPSBNYXRoLnNpbihhbHBoYSkgKiAxMDtcbiAgICAgICAgdGVycmUucm90YXRpb24ueSAtPSAwLjAxO1xuICAgICAgICBhbHBoYSArPSAwLjAxO1xuICAgIH0pICovXG4gICAgbGV0IGR0ID0gMFxuICAgIC8qIHNjZW5lLnJlZ2lzdGVyQmVmb3JlUmVuZGVyKCgpID0+IHtcbiAgICAgICAgcGxhbmV0LnBvc2l0aW9uLnggPSBNYXRoLmNvcyhkdCkgKiAxMFxuICAgICAgICBwbGFuZXQucG9zaXRpb24ueiA9IE1hdGguc2luKGR0KSAqIDdcbiAgICAgICAgcGxhbmV0LnBvc2l0aW9uLnkgPSAwXG4gICAgICAgIHBsYW5ldC5yb3RhdGlvbi55IC09IDAuMDFcbiAgICAgICAgZHQgKz0gMC4wMDVcbiAgICB9KSAqL1xuXG4gICAgLyogY29uc3Qgc2t5Ym94ID0gTWVzaC5DcmVhdGVCb3goXCJCYWNrZ3JvdW5kU2t5Ym94XCIsIDUwMCwgc2NlbmUsIHVuZGVmaW5lZCwgTWVzaC5CQUNLU0lERSk7XG4gICAgICAgIFxuICAgIC8vIENyZWF0ZSBhbmQgdHdlYWsgdGhlIGJhY2tncm91bmQgbWF0ZXJpYWwuXG4gICAgY29uc3QgYmFja2dyb3VuZE1hdGVyaWFsID0gbmV3IEJBQllMT04uQmFja2dyb3VuZE1hdGVyaWFsKFwiYmFja2dyb3VuZE1hdGVyaWFsXCIsIHNjZW5lKTtcbiAgICBiYWNrZ3JvdW5kTWF0ZXJpYWwucmVmbGVjdGlvblRleHR1cmUgPSBuZXcgQkFCWUxPTi5DdWJlVGV4dHVyZShcInRleHR1cmVzL1Ryb3BpY2FsU3VubnlEYXlcIiwgc2NlbmUpO1xuICAgIGJhY2tncm91bmRNYXRlcmlhbC5yZWZsZWN0aW9uVGV4dHVyZS5jb29yZGluYXRlc01vZGUgPSBCQUJZTE9OLlRleHR1cmUuU0tZQk9YX01PREU7XG4gICAgc2t5Ym94Lm1hdGVyaWFsID0gYmFja2dyb3VuZE1hdGVyaWFsOyBcbiAgICB2YXIgZWFydGhNYXRlcmlhbCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoXCJlYXJ0aE1hdGVyaWFsXCIsIHNjZW5lKTtcbiAgICAgICAgZWFydGgubWF0ZXJpYWwgPSBlYXJ0aE1hdGVyaWFsO1xuICAgICAgICBlYXJ0aE1hdGVyaWFsLmFtYmllbnRDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMyguOCwgLjgsIDEpOyAqL1xuICAgIHJldHVybiBzY2VuZVxufVxuXG5sZXQgc2NlbmVcbnNldFRpbWVvdXQoKCkgPT4geyBzY2VuZSA9IGNyZWF0ZURlbGF5ZWRTY2VuZSgpIH0sIDYwMClcblxuZW5naW5lLnJ1blJlbmRlckxvb3AoKCkgPT4ge1xuICAgIGlmICghc2NlbmUpIHtcbiAgICAgICAgZW5naW5lLmRpc3BsYXlMb2FkaW5nVUkoKVxuICAgIH1cbiAgICBpZiAoc2NlbmUpIHtcbiAgICAgICAgc2NlbmUucmVuZGVyKCk7XG4gICAgICAgIGVuZ2luZS5oaWRlTG9hZGluZ1VJKClcbiAgICB9XG59KSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIHRoZSBzdGFydHVwIGZ1bmN0aW9uXG4vLyBJdCdzIGVtcHR5IGFzIHNvbWUgcnVudGltZSBtb2R1bGUgaGFuZGxlcyB0aGUgZGVmYXVsdCBiZWhhdmlvclxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0geCA9PiB7fTtcbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG52YXIgZGVmZXJyZWRNb2R1bGVzID0gW1xuXHRbXCIuL3NyYy9pbmRleC50c1wiLFwidmVuZG9yc1wiXVxuXTtcbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbnZhciBjaGVja0RlZmVycmVkTW9kdWxlcyA9IHggPT4ge307XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lLCBleGVjdXRlTW9kdWxlc10gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuXHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcblx0fVxuXG5cdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3Rcblx0aWYoZXhlY3V0ZU1vZHVsZXMpIGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuXG5cdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt4dmVyc2VcIl0gPSBzZWxmW1wid2VicGFja0NodW5reHZlcnNlXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTtcblxuZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKCkge1xuXHR2YXIgcmVzdWx0O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcblx0XHR9XG5cdH1cblx0aWYoZGVmZXJyZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCA9IHggPT4ge307XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbnZhciBzdGFydHVwID0gX193ZWJwYWNrX3JlcXVpcmVfXy54O1xuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyByZXNldCBzdGFydHVwIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4gd2hlbiBtb3JlIHN0YXJ0dXAgY29kZSBpcyBhZGRlZFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSBzdGFydHVwIHx8ICh4ID0+IHt9KTtcblx0cmV0dXJuIChjaGVja0RlZmVycmVkTW9kdWxlcyA9IGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCkoKTtcbn07IiwiLy8gcnVuIHN0YXJ0dXBcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9