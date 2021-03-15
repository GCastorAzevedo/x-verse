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
    var scale = 40;
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
    starsParticles.minSize = 0.15;
    starsParticles.maxSize = .7;
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
var mesh_1 = __webpack_require__(/*! @babylonjs/core/Meshes/mesh */ "./node_modules/@babylonjs/core/Meshes/mesh.js");
var meshBuilder_1 = __webpack_require__(/*! @babylonjs/core/Meshes/meshBuilder */ "./node_modules/@babylonjs/core/Meshes/meshBuilder.js");
var particleSystem_1 = __webpack_require__(/*! @babylonjs/core/Particles/particleSystem */ "./node_modules/@babylonjs/core/Particles/particleSystem.js");
var texture_1 = __webpack_require__(/*! @babylonjs/core/Materials/Textures/texture */ "./node_modules/@babylonjs/core/Materials/Textures/texture.js");
var standardMaterial_1 = __webpack_require__(/*! @babylonjs/core/Materials/standardMaterial */ "./node_modules/@babylonjs/core/Materials/standardMaterial.js");
var sphereParticleEmitter_1 = __webpack_require__(/*! @babylonjs/core/Particles/EmitterTypes/sphereParticleEmitter */ "./node_modules/@babylonjs/core/Particles/EmitterTypes/sphereParticleEmitter.js");
function createSun(scene) {
    var stars = mesh_1.Mesh.CreateBox("emitter", 0.01, scene);
    var surfaceParticles = new particleSystem_1.ParticleSystem("surfaceParticles", 1600, scene);
    var flareParticles = new particleSystem_1.ParticleSystem("flareParticles", 20, scene);
    var coronaParticles = new particleSystem_1.ParticleSystem("coronaParticles", 600, scene);
    var starsParticles = new particleSystem_1.ParticleSystem("starsParticles", 500, scene);
    surfaceParticles.particleTexture = new texture_1.Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_SunSurface.png", scene);
    flareParticles.particleTexture = new texture_1.Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_SunFlare.png", scene);
    coronaParticles.particleTexture = new texture_1.Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_Star.png", scene);
    starsParticles.particleTexture = new texture_1.Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_Star.png", scene);
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
    var starsEmitter = new sphereParticleEmitter_1.SphereParticleEmitter();
    starsEmitter.radius = 20;
    starsEmitter.radiusRange = 0;
    surfaceParticles.emitter = coreSphere;
    surfaceParticles.particleEmitterType = sunEmitter;
    flareParticles.emitter = coreSphere;
    flareParticles.particleEmitterType = sunEmitter;
    coronaParticles.emitter = coreSphere;
    coronaParticles.particleEmitterType = sunEmitter;
    starsParticles.emitter = stars;
    starsParticles.particleEmitterType = starsEmitter;
    starsParticles.color1 = new math_1.Color4(0.898, 0.737, 0.718, 1.0);
    starsParticles.color2 = new math_1.Color4(0.584, 0.831, 0.894, 1.0);
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
    starsParticles.minSize = 0.15;
    starsParticles.maxSize = 0.3;
    flareParticles.addSizeGradient(0, 0);
    flareParticles.addSizeGradient(1, 1);
    surfaceParticles.minLifeTime = 8.0;
    surfaceParticles.maxLifeTime = 8.0;
    flareParticles.minLifeTime = 10.0;
    flareParticles.maxLifeTime = 10.0;
    coronaParticles.minLifeTime = 2.0;
    coronaParticles.maxLifeTime = 2.0;
    starsParticles.minLifeTime = 999999;
    starsParticles.maxLifeTime = 999999;
    surfaceParticles.emitRate = 200;
    flareParticles.emitRate = 1;
    coronaParticles.emitRate = 300;
    starsParticles.manualEmitCount = 500;
    starsParticles.maxEmitPower = 0.0;
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
    starsParticles.minAngularSpeed = 0.0;
    starsParticles.maxAngularSpeed = 0.0;
    surfaceParticles.minEmitPower = 0;
    surfaceParticles.maxEmitPower = 0;
    surfaceParticles.updateSpeed = 0.005;
    flareParticles.minEmitPower = 0.001;
    flareParticles.maxEmitPower = 0.01;
    coronaParticles.minEmitPower = 0.0;
    coronaParticles.maxEmitPower = 0.0;
    starsParticles.minEmitPower = 0.0;
    starsParticles.maxAngularSpeed = 0.0;
    surfaceParticles.isBillboardBased = false;
    flareParticles.isBillboardBased = true;
    coronaParticles.isBillboardBased = true;
    starsParticles.isBillboardBased = true;
    starsParticles.renderingGroupId = 0;
    coronaParticles.renderingGroupId = 0;
    flareParticles.renderingGroupId = 0;
    surfaceParticles.renderingGroupId = 0;
    coreSphere.renderingGroupId = 0;
    surfaceParticles.start();
    flareParticles.start();
    coronaParticles.start();
    return scene;
}
exports.createSun = createSun;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var engine_1 = __webpack_require__(/*! @babylonjs/core/Engines/engine */ "./node_modules/@babylonjs/core/Engines/engine.js");
var math_1 = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
var mesh_1 = __webpack_require__(/*! @babylonjs/core/Meshes/mesh */ "./node_modules/@babylonjs/core/Meshes/mesh.js");
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
    var nebula = new nebula_1.NebulaBackground(scene);
    stars_1.createStars(scene);
    sun_1.createSun(scene);
    var planet = mesh_1.Mesh.CreateSphere("sphere-1", 16, 1, scene);
    var planetMaterial = new core_1.StandardMaterial("planetMAterial", scene);
    planetMaterial.ambientTexture = new core_1.Texture("https://i.imgur.com/wlnx1yQ.jpg", scene, true, false);
    planetMaterial.specularColor = math_1.Color3.Black();
    planetMaterial.emissiveColor = new math_1.Color3(1, 1, 1);
    planet.position = new math_1.Vector3(0, 0, 0);
    planet.scaling.x = 1;
    planet.scaling.y = 1;
    planet.scaling.z = 1;
    planet.material = planetMaterial;
    var dt = 0;
    scene.registerBeforeRender(function () {
        planet.position.x = Math.cos(dt) * 10;
        planet.position.z = Math.sin(dt) * 7;
        planet.position.y = 0;
        planet.rotation.y -= 0.01;
        dt += 0.005;
    });
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvY29tcG9uZW50cy9uZWJ1bGEudHMiLCJ3ZWJwYWNrOi8veHZlcnNlLy4vc3JjL2NvbXBvbmVudHMvc2NlbmUudHMiLCJ3ZWJwYWNrOi8veHZlcnNlLy4vc3JjL2NvbXBvbmVudHMvc3RhcnMudHMiLCJ3ZWJwYWNrOi8veHZlcnNlLy4vc3JjL2NvbXBvbmVudHMvc3VuLnRzIiwid2VicGFjazovL3h2ZXJzZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EscUhBQWtEO0FBQ2xELHNKQUFvRTtBQUNwRSxrS0FBNEU7QUFDNUUsMkxBQTRGO0FBRzVGO0lBR0ksMEJBQVksS0FBWTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLFdBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHVDQUFrQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFDN0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsS0FBSztRQUUzQyxJQUFNLEtBQUssR0FBRztZQUNWLG1D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LGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBLGdCQUFnQiwyQkFBMkI7V0FDM0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLDRDQUE0QztXQUM1QztXQUNBLEU7Ozs7O1VDcEZBO1VBQ0EiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoXCJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmUnXG5pbXBvcnQgeyBDdWJlVGV4dHVyZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvY3ViZVRleHR1cmUnXG5pbXBvcnQgeyBCYWNrZ3JvdW5kTWF0ZXJpYWwgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0ZXJpYWxzL0JhY2tncm91bmQvYmFja2dyb3VuZE1hdGVyaWFsJ1xuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvc2NlbmUnXG5cbmV4cG9ydCBjbGFzcyBOZWJ1bGFCYWNrZ3JvdW5kIHtcbiAgICBza3lib3g6IE1lc2hcbiAgICBza3lib3hNYXRlcmlhbDogQmFja2dyb3VuZE1hdGVyaWFsXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFNjZW5lKSB7XG4gICAgICAgIHRoaXMuc2t5Ym94ID0gTWVzaC5DcmVhdGVCb3goXCJza3lCb3hcIiwgMTAwMDAuMCwgc2NlbmUpXG4gICAgICAgIHRoaXMuc2t5Ym94TWF0ZXJpYWwgPSBuZXcgQmFja2dyb3VuZE1hdGVyaWFsKFwic2t5Qm94XCIsIHNjZW5lKVxuICAgICAgICB0aGlzLnNreWJveE1hdGVyaWFsLmJhY2tGYWNlQ3VsbGluZyA9IGZhbHNlXG4gICAgICAgIC8vIHRoaXMuc2t5Ym94TWF0ZXJpYWwuZGlzYWJsZUxpZ2h0aW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBbXG4gICAgICAgICAgICBcInNyYy90ZXh0dXJlcy9zcGFjZS9zcGFjZV9sZWZ0LmpwZ1wiLFxuICAgICAgICAgICAgXCJzcmMvdGV4dHVyZXMvc3BhY2Uvc3BhY2VfdXAuanBnXCIsXG4gICAgICAgICAgICBcInNyYy90ZXh0dXJlcy9zcGFjZS9zcGFjZV9mcm9udC5qcGdcIixcbiAgICAgICAgICAgIFwic3JjL3RleHR1cmVzL3NwYWNlL3NwYWNlX3JpZ2h0LmpwZ1wiLFxuICAgICAgICAgICAgXCJzcmMvdGV4dHVyZXMvc3BhY2Uvc3BhY2VfZG93bi5qcGdcIixcbiAgICAgICAgICAgIFwic3JjL3RleHR1cmVzL3NwYWNlL3NwYWNlX2JhY2suanBnXCJcbiAgICAgICAgXVxuICAgICAgICB0aGlzLnNreWJveE1hdGVyaWFsLnJlZmxlY3Rpb25UZXh0dXJlID0gQ3ViZVRleHR1cmUuQ3JlYXRlRnJvbUltYWdlcyhmaWxlcywgc2NlbmUpXG4gICAgICAgIHRoaXMuc2t5Ym94TWF0ZXJpYWwucmVmbGVjdGlvblRleHR1cmUuY29vcmRpbmF0ZXNNb2RlID0gVGV4dHVyZS5TS1lCT1hfTU9ERVxuICAgICAgICB0aGlzLnNreWJveC5tYXRlcmlhbCA9IHRoaXMuc2t5Ym94TWF0ZXJpYWxcbiAgICAgICAgdGhpcy5za3lib3guaW5maW5pdGVEaXN0YW5jZSA9IHRydWVcbiAgICB9XG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvc2NlbmUnO1xuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0VuZ2luZXMvZW5naW5lJ1xuaW1wb3J0IHsgQ29sb3IzLCBDb2xvcjQsIFZlY3RvcjMgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0aHMvbWF0aCc7XG5pbXBvcnQgeyBGcmVlQ2FtZXJhIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0NhbWVyYXMvZnJlZUNhbWVyYSc7XG5pbXBvcnQgeyBVbml2ZXJzYWxDYW1lcmEgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvQ2FtZXJhcy91bml2ZXJzYWxDYW1lcmEnXG5pbXBvcnQgeyBIZW1pc3BoZXJpY0xpZ2h0IH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0xpZ2h0cy9oZW1pc3BoZXJpY0xpZ2h0J1xuXG5pbXBvcnQgXCJAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hCdWlsZGVyXCI7XG5cbmludGVyZmFjZSBJU2NlbmVPdXRwdXQge1xuICAgIHNjZW5lOiBTY2VuZSxcbiAgICBjYW1lcmE6IEZyZWVDYW1lcmEgfCBVbml2ZXJzYWxDYW1lcmEsXG4gICAgbGlnaHQ6IEhlbWlzcGhlcmljTGlnaHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNjZW5lKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGVuZ2luZTogRW5naW5lKTogSVNjZW5lT3V0cHV0IHtcblxuICAgIC8vIFNjZW5lXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgU2NlbmUoZW5naW5lKTtcblxuICAgIHNjZW5lLmNsZWFyQ29sb3IgPSBuZXcgQ29sb3I0KDAsIDAsIDAsIDEpXG5cbiAgICAvLyBDYW1lcmFcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgRnJlZUNhbWVyYShcInh2ZXJzZVwiLCBuZXcgVmVjdG9yMygwLCAtMSwgLTMwKSwgc2NlbmUpXG4gICAgLyogdmFyIGNhbWVyYSA9IG5ldyBCQUJZTE9OLkFyY1JvdGF0ZUNhbWVyYShcImNhbWVyYTFcIiwgMCwgMCwgMCwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAtMCksIHNjZW5lKTtcbiAgICAgY2FtZXJhLnNldFBvc2l0aW9uKG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMTQwMCwgNTApKTtcbiAgICAgY2FtZXJhLndoZWVsUHJlY2lzaW9uID0gMTsgKi9cblxuICAgIC8vY2FtZXJhLnNldFRhcmdldChWZWN0b3IzLlplcm8oKSk7XG5cbiAgICBjYW1lcmEuYXR0YWNoQ29udHJvbChjYW52YXMsIHRydWUpO1xuXG4gICAgLy8gTGlnaHRcbiAgICBsZXQgbGlnaHQgPSBuZXcgSGVtaXNwaGVyaWNMaWdodChcImxpZ2h0XCIsIG5ldyBWZWN0b3IzKDEwMCwgMjAwLCAzMDApLCBzY2VuZSk7XG4gICAgbGlnaHQuaW50ZW5zaXR5ID0gMTtcbiAgICBsaWdodC5zcGVjdWxhciA9IENvbG9yMy5XaGl0ZSgpLy9uZXcgQ29sb3IzKDAuOTUsIDAuMTUsIDAuMTEpIFxuXG4gICAgcmV0dXJuIHsgc2NlbmUsIGNhbWVyYSwgbGlnaHQgfVxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL3NjZW5lJztcbmltcG9ydCB7IFZlY3RvcjMsIENvbG9yNCwgTWF0cml4IH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGhzL21hdGgnO1xuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hcIlxuaW1wb3J0IHsgUGFydGljbGVTeXN0ZW0gfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvUGFydGljbGVzL3BhcnRpY2xlU3lzdGVtJ1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZSdcbmltcG9ydCB7IFNwaGVyZVBhcnRpY2xlRW1pdHRlciB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9QYXJ0aWNsZXMvRW1pdHRlclR5cGVzL3NwaGVyZVBhcnRpY2xlRW1pdHRlcidcbmltcG9ydCB7IEdsb3dMYXllciB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9MYXllcnMvZ2xvd0xheWVyJ1xuaW1wb3J0IHsgUGFydGljbGUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RhcnMoc2NlbmU6IFNjZW5lKSB7XG4gICAgLy8gUGFydGljbGVTeXN0ZW0gIFNwaGVyZVBhcnRpY2xlRW1pdHRlclxuICAgIGNvbnN0IGJhc2VTdGFyTW9kZWwgPSBNZXNoLkNyZWF0ZUJveChcImVtaXR0ZXJcIiwgMC4wMSwgc2NlbmUpXG4gICAgY29uc3Qgc3RhcnNQYXJ0aWNsZXMgPSBuZXcgUGFydGljbGVTeXN0ZW0oXCJzdGFyUGFydGljbGVzXCIsIDcwMDAsIHNjZW5lKVxuICAgIC8vIGNvbnN0IGdsID0gbmV3IEdsb3dMYXllcihcInN0YXJHbG93XCIsIHNjZW5lLCB7IGJsdXJLZXJuZWxTaXplOiA2NCB9KTtcblxuICAgIHN0YXJzUGFydGljbGVzLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1BhdHJpY2tSeWFuTVMvQmFieWxvbkpTdGV4dHVyZXMvbWFzdGVyL1BhcnRpY2xlU3lzdGVtcy9TdW4vVF9TdGFyLnBuZ1wiLCBzY2VuZSlcbiAgICBcbiAgICBjb25zdCBtaW5EaXN0YW5jZSA9IDBcbiAgICBjb25zdCBzY2FsZSA9IDQwXG4gICAgY29uc3QgaW5kaWNhdG9yRnVuY3Rpb24gPSAoKSA9PiBNYXRoLnJhbmRvbSgpIDwgLjUgPyAtMTogMVxuICAgIGNvbnN0IGdldFBvc2l0aW9uID0gKCkgPT4gbWluRGlzdGFuY2UgKyAoTWF0aC5yYW5kb20oKSAqIChzY2FsZSAqIGluZGljYXRvckZ1bmN0aW9uKCkpKVxuICAgIGNvbnN0IGdldFJhbmRvbVBvc2l0aW9uID0gKCkgPT4gW2dldFBvc2l0aW9uKCksIGdldFBvc2l0aW9uKCksIGdldFBvc2l0aW9uKCldXG4gICAgc3RhcnNQYXJ0aWNsZXMuc3RhcnRQb3NpdGlvbkZ1bmN0aW9uID0gKHdvcmxkTWF0cml4OiBNYXRyaXgsIHBvc2l0aW9uVG9VcGRhdGU6IFZlY3RvcjMsIHBhcnRpY2xlOiBQYXJ0aWNsZSwgaXNMb2NhbDogYm9vbGVhbik6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBbeCwgeSwgel0gPSBnZXRSYW5kb21Qb3NpdGlvbigpXG4gICAgICAgIFZlY3RvcjMuVHJhbnNmb3JtQ29vcmRpbmF0ZXNGcm9tRmxvYXRzVG9SZWYoeCwgeSwgeiwgd29ybGRNYXRyaXgsIHBvc2l0aW9uVG9VcGRhdGUpXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnNFbWl0dGVyID0gbmV3IFNwaGVyZVBhcnRpY2xlRW1pdHRlcigpXG4gICAgc3RhcnNFbWl0dGVyLnJhZGl1cyA9IDMwXG4gICAgc3RhcnNFbWl0dGVyLnJhZGl1c1JhbmdlID0gMVxuICAgIHN0YXJzRW1pdHRlci5zdGFydFBvc2l0aW9uRnVuY3Rpb24gPSAod29ybGRNYXRyaXg6IE1hdHJpeCwgcG9zaXRpb25Ub1VwZGF0ZTogVmVjdG9yMywgcGFydGljbGU6IFBhcnRpY2xlLCBpc0xvY2FsOiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IFt4LCB5LCB6XSA9IGdldFJhbmRvbVBvc2l0aW9uKClcbiAgICAgICAgVmVjdG9yMy5UcmFuc2Zvcm1Db29yZGluYXRlc0Zyb21GbG9hdHNUb1JlZih4LCB5LCB6LCB3b3JsZE1hdHJpeCwgcG9zaXRpb25Ub1VwZGF0ZSlcbiAgICB9XG5cbiAgICBzdGFyc1BhcnRpY2xlcy5lbWl0dGVyID0gYmFzZVN0YXJNb2RlbFxuICAgIC8vIHN0YXJzUGFydGljbGVzLmVtaXR0ZXIgPSBWZWN0b3IzLlplcm8oKVxuICAgIHN0YXJzUGFydGljbGVzLnBhcnRpY2xlRW1pdHRlclR5cGUgPSBzdGFyc0VtaXR0ZXJcblxuICAgIHN0YXJzUGFydGljbGVzLmNvbG9yMSA9IG5ldyBDb2xvcjQoMC44OTgsIDAuNzM3LCAwLjcxOCwgMS4wKTtcbiAgICBzdGFyc1BhcnRpY2xlcy5jb2xvcjIgPSBuZXcgQ29sb3I0KDAuNTg0LCAwLjgzMSwgMC44OTQsIDEuMCk7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWluRW1pdEJveCA9IG5ldyBWZWN0b3IzKDEwLCAxMCwgMTApXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4RW1pdEJveCA9IG5ldyBWZWN0b3IzKDEwMCwgMTAwLCAxMDApXG4gICAgc3RhcnNQYXJ0aWNsZXMubWluTGlmZVRpbWUgPSA5OTk5OTlcbiAgICBzdGFyc1BhcnRpY2xlcy5tYXhMaWZlVGltZSA9IDk5OTk5OVxuICAgIHN0YXJzUGFydGljbGVzLm1hbnVhbEVtaXRDb3VudCA9IDUwMDtcbiAgICBzdGFyc1BhcnRpY2xlcy5tYXhFbWl0UG93ZXIgPSAwLjA7XG4gICAgc3RhcnNQYXJ0aWNsZXMubWluU2l6ZSA9IDAuMTUvLzAuMTU7XG4gICAgc3RhcnNQYXJ0aWNsZXMubWF4U2l6ZSA9IC43Ly8wLjM7XG4gICAgc3RhcnNQYXJ0aWNsZXMuYmxlbmRNb2RlID0gUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX1NUQU5EQVJEXG4gICAgc3RhcnNQYXJ0aWNsZXMuZ3Jhdml0eSA9IG5ldyBWZWN0b3IzKDAsIDAsIDApXG4gICAgc3RhcnNQYXJ0aWNsZXMubWluQW5ndWxhclNwZWVkID0gMC4wXG4gICAgc3RhcnNQYXJ0aWNsZXMubWF4QW5ndWxhclNwZWVkID0gMC4wXG4gICAgc3RhcnNQYXJ0aWNsZXMuaXNCaWxsYm9hcmRCYXNlZCA9IHRydWVcbiAgICBzdGFyc1BhcnRpY2xlcy5yZW5kZXJpbmdHcm91cElkID0gMDtcbiAgICBzdGFyc1BhcnRpY2xlcy5zdGFydCgpXG5cbiAgICByZXR1cm4gc2NlbmU7XG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvc2NlbmUnO1xuaW1wb3J0IHsgVmVjdG9yMywgQ29sb3I0LCBDb2xvcjMgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0aHMvbWF0aCc7XG5pbXBvcnQgeyBNZXNoIH0gZnJvbSBcIkBiYWJ5bG9uanMvY29yZS9NZXNoZXMvbWVzaFwiXG5pbXBvcnQgeyBNZXNoQnVpbGRlciB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NZXNoZXMvbWVzaEJ1aWxkZXInXG5pbXBvcnQgeyBQYXJ0aWNsZVN5c3RlbSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9QYXJ0aWNsZXMvcGFydGljbGVTeXN0ZW0nXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlJ1xuaW1wb3J0IHsgU3RhbmRhcmRNYXRlcmlhbH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGVyaWFscy9zdGFuZGFyZE1hdGVyaWFsJ1xuaW1wb3J0IHsgU3BoZXJlUGFydGljbGVFbWl0dGVyIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL1BhcnRpY2xlcy9FbWl0dGVyVHlwZXMvc3BoZXJlUGFydGljbGVFbWl0dGVyJ1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdW4oc2NlbmU6IFNjZW5lKSB7XG4gICAgLy8gRW1pdHRlciBvYmplY3RcbiAgICB2YXIgc3RhcnMgPSBNZXNoLkNyZWF0ZUJveChcImVtaXR0ZXJcIiwgMC4wMSwgc2NlbmUpO1xuXG4gICAgLy8gQ3JlYXRlIGEgcGFydGljbGUgc3lzdGVtXG4gICAgdmFyIHN1cmZhY2VQYXJ0aWNsZXMgPSBuZXcgUGFydGljbGVTeXN0ZW0oXCJzdXJmYWNlUGFydGljbGVzXCIsIDE2MDAsIHNjZW5lKTtcbiAgICB2YXIgZmxhcmVQYXJ0aWNsZXMgPSBuZXcgUGFydGljbGVTeXN0ZW0oXCJmbGFyZVBhcnRpY2xlc1wiLCAyMCwgc2NlbmUpO1xuICAgIHZhciBjb3JvbmFQYXJ0aWNsZXMgPSBuZXcgUGFydGljbGVTeXN0ZW0oXCJjb3JvbmFQYXJ0aWNsZXNcIiwgNjAwLCBzY2VuZSk7XG4gICAgdmFyIHN0YXJzUGFydGljbGVzID0gbmV3IFBhcnRpY2xlU3lzdGVtKFwic3RhcnNQYXJ0aWNsZXNcIiwgNTAwLCBzY2VuZSk7XG5cbiAgICAvLyBUZXh0dXJlIG9mIGVhY2ggcGFydGljbGVcbiAgICBzdXJmYWNlUGFydGljbGVzLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1BhdHJpY2tSeWFuTVMvQmFieWxvbkpTdGV4dHVyZXMvbWFzdGVyL1BhcnRpY2xlU3lzdGVtcy9TdW4vVF9TdW5TdXJmYWNlLnBuZ1wiLCBzY2VuZSk7XG4gICAgZmxhcmVQYXJ0aWNsZXMucGFydGljbGVUZXh0dXJlID0gbmV3IFRleHR1cmUoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUGF0cmlja1J5YW5NUy9CYWJ5bG9uSlN0ZXh0dXJlcy9tYXN0ZXIvUGFydGljbGVTeXN0ZW1zL1N1bi9UX1N1bkZsYXJlLnBuZ1wiLCBzY2VuZSk7XG4gICAgY29yb25hUGFydGljbGVzLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1BhdHJpY2tSeWFuTVMvQmFieWxvbkpTdGV4dHVyZXMvbWFzdGVyL1BhcnRpY2xlU3lzdGVtcy9TdW4vVF9TdGFyLnBuZ1wiLCBzY2VuZSk7XG4gICAgc3RhcnNQYXJ0aWNsZXMucGFydGljbGVUZXh0dXJlID0gbmV3IFRleHR1cmUoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUGF0cmlja1J5YW5NUy9CYWJ5bG9uSlN0ZXh0dXJlcy9tYXN0ZXIvUGFydGljbGVTeXN0ZW1zL1N1bi9UX1N0YXIucG5nXCIsIHNjZW5lKTtcblxuICAgIC8vIENyZWF0ZSBjb3JlIHNwaGVyZVxuICAgIHZhciBjb3JlU3BoZXJlID0gTWVzaEJ1aWxkZXIuQ3JlYXRlU3BoZXJlKFwiY29yZVNwaGVyZVwiLCB7IGRpYW1ldGVyOiAyLjAxLCBzZWdtZW50czogNjQgfSwgc2NlbmUpO1xuXG4gICAgLy8gQ3JlYXRlIGNvcmUgbWF0ZXJpYWxcbiAgICB2YXIgY29yZU1hdCA9IG5ldyBTdGFuZGFyZE1hdGVyaWFsKFwiY29yZU1hdFwiLCBzY2VuZSlcbiAgICBjb3JlTWF0LmVtaXNzaXZlQ29sb3IgPSBuZXcgQ29sb3IzKDAuMzc3MywgMC4wOTMwLCAwLjAyNjYpO1xuXG4gICAgLy8gQXNzaWduIGNvcmUgbWF0ZXJpYWwgdG8gc3BoZXJlXG4gICAgY29yZVNwaGVyZS5tYXRlcmlhbCA9IGNvcmVNYXQ7XG5cbiAgICAvLyBQcmUtd2FybVxuICAgIHN1cmZhY2VQYXJ0aWNsZXMucHJlV2FybVN0ZXBPZmZzZXQgPSAxMDtcbiAgICBzdXJmYWNlUGFydGljbGVzLnByZVdhcm1DeWNsZXMgPSAxMDA7XG5cbiAgICBmbGFyZVBhcnRpY2xlcy5wcmVXYXJtU3RlcE9mZnNldCA9IDEwO1xuICAgIGZsYXJlUGFydGljbGVzLnByZVdhcm1DeWNsZXMgPSAxMDA7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMucHJlV2FybVN0ZXBPZmZzZXQgPSAxMDtcbiAgICBjb3JvbmFQYXJ0aWNsZXMucHJlV2FybUN5Y2xlcyA9IDEwMDtcblxuICAgIC8vIEluaXRpYWwgcm90YXRpb25cbiAgICBzdXJmYWNlUGFydGljbGVzLm1pbkluaXRpYWxSb3RhdGlvbiA9IC0yICogTWF0aC5QSTtcbiAgICBzdXJmYWNlUGFydGljbGVzLm1heEluaXRpYWxSb3RhdGlvbiA9IDIgKiBNYXRoLlBJO1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMubWluSW5pdGlhbFJvdGF0aW9uID0gLTIgKiBNYXRoLlBJO1xuICAgIGZsYXJlUGFydGljbGVzLm1heEluaXRpYWxSb3RhdGlvbiA9IDIgKiBNYXRoLlBJO1xuXG4gICAgY29yb25hUGFydGljbGVzLm1pbkluaXRpYWxSb3RhdGlvbiA9IC0yICogTWF0aC5QSTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMubWF4SW5pdGlhbFJvdGF0aW9uID0gMiAqIE1hdGguUEk7XG5cbiAgICAvLyBXaGVyZSB0aGUgc3VuIHBhcnRpY2xlcyBjb21lIGZyb21cbiAgICB2YXIgc3VuRW1pdHRlciA9IG5ldyBTcGhlcmVQYXJ0aWNsZUVtaXR0ZXIoKTtcbiAgICBzdW5FbWl0dGVyLnJhZGl1cyA9IDE7XG4gICAgc3VuRW1pdHRlci5yYWRpdXNSYW5nZSA9IDA7IC8vIGVtaXQgb25seSBmcm9tIHNoYXBlIHN1cmZhY2VcblxuICAgIC8vIC8vIFdoZXJlIHRoZSBzdGFycyBwYXJ0aWNsZXMgY29tZSBmcm9tXG4gICAgdmFyIHN0YXJzRW1pdHRlciA9IG5ldyBTcGhlcmVQYXJ0aWNsZUVtaXR0ZXIoKTtcbiAgICBzdGFyc0VtaXR0ZXIucmFkaXVzID0gMjA7XG4gICAgc3RhcnNFbWl0dGVyLnJhZGl1c1JhbmdlID0gMDsgLy8gZW1pdCBvbmx5IGZyb20gc2hhcGUgc3VyZmFjZVxuXG4gICAgLy8gQXNzaWduIHBhcnRpY2xlcyB0byBlbWl0dGVyc1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMuZW1pdHRlciA9IGNvcmVTcGhlcmU7IC8vIHRoZSBzdGFydGluZyBvYmplY3QsIHRoZSBlbWl0dGVyXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5wYXJ0aWNsZUVtaXR0ZXJUeXBlID0gc3VuRW1pdHRlcjtcblxuICAgIGZsYXJlUGFydGljbGVzLmVtaXR0ZXIgPSBjb3JlU3BoZXJlOyAvLyB0aGUgc3RhcnRpbmcgb2JqZWN0LCB0aGUgZW1pdHRlclxuICAgIGZsYXJlUGFydGljbGVzLnBhcnRpY2xlRW1pdHRlclR5cGUgPSBzdW5FbWl0dGVyO1xuXG4gICAgY29yb25hUGFydGljbGVzLmVtaXR0ZXIgPSBjb3JlU3BoZXJlOyAvLyB0aGUgc3RhcnRpbmcgb2JqZWN0LCB0aGUgZW1pdHRlclxuICAgIGNvcm9uYVBhcnRpY2xlcy5wYXJ0aWNsZUVtaXR0ZXJUeXBlID0gc3VuRW1pdHRlcjtcblxuICAgIHN0YXJzUGFydGljbGVzLmVtaXR0ZXIgPSBzdGFyczsgLy8gdGhlIHN0YXJ0aW5nIG9iamVjdCwgdGhlIGVtaXR0ZXJcbiAgICBzdGFyc1BhcnRpY2xlcy5wYXJ0aWNsZUVtaXR0ZXJUeXBlID0gc3RhcnNFbWl0dGVyO1xuXG4gICAgLy8gUmFuZG9tIHN0YXJ0aW5nIGNvbG9yXG4gICAgc3RhcnNQYXJ0aWNsZXMuY29sb3IxID0gbmV3IENvbG9yNCgwLjg5OCwgMC43MzcsIDAuNzE4LCAxLjApO1xuICAgIHN0YXJzUGFydGljbGVzLmNvbG9yMiA9IG5ldyBDb2xvcjQoMC41ODQsIDAuODMxLCAwLjg5NCwgMS4wKTtcblxuICAgIC8vIENvbG9yIGdyYWRpZW50IG92ZXIgdGltZVxuICAgIHN1cmZhY2VQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgwLCBuZXcgQ29sb3I0KDAuODUwOSwgMC40Nzg0LCAwLjEwMTksIDAuMCkpO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgwLjQsIG5ldyBDb2xvcjQoMC42MjU5LCAwLjMwNTYsIDAuMDYxOSwgMC41KSk7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAuNSwgbmV3IENvbG9yNCgwLjYwMzksIDAuMjg4NywgMC4wNTc5LCAwLjUpKTtcbiAgICBzdXJmYWNlUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMS4wLCBuZXcgQ29sb3I0KDAuMzIwNywgMC4wNzEzLCAwLjAwNzUsIDAuMCkpO1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgwLCBuZXcgQ29sb3I0KDEsIDAuOTYxMiwgMC41MTQxLCAwLjApKTtcbiAgICBmbGFyZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAuMjUsIG5ldyBDb2xvcjQoMC45MDU4LCAwLjcxNTIsIDAuMzgyNSwgMS4wKSk7XG4gICAgZmxhcmVQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgxLjAsIG5ldyBDb2xvcjQoMC42MzIwLCAwLjAsIDAuMCwgMC4wKSk7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgwLCBuZXcgQ29sb3I0KDAuODUwOSwgMC40Nzg0LCAwLjEwMTksIDAuMCkpO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAuNSwgbmV3IENvbG9yNCgwLjYwMzksIDAuMjg4NywgMC4wNTc5LCAwLjEyKSk7XG4gICAgY29yb25hUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMS4wLCBuZXcgQ29sb3I0KDAuMzIwNywgMC4wNzEzLCAwLjAwNzUsIDAuMCkpO1xuXG4gICAgLy8gU2l6ZSBvZiBlYWNoIHBhcnRpY2xlIChyYW5kb20gYmV0d2Vlbi4uLlxuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWluU2l6ZSA9IDAuNDtcbiAgICBzdXJmYWNlUGFydGljbGVzLm1heFNpemUgPSAwLjc7XG5cbiAgICBmbGFyZVBhcnRpY2xlcy5taW5TY2FsZVggPSAwLjU7XG4gICAgZmxhcmVQYXJ0aWNsZXMubWluU2NhbGVZID0gMC41O1xuICAgIGZsYXJlUGFydGljbGVzLm1heFNjYWxlWCA9IDEuMDtcbiAgICBmbGFyZVBhcnRpY2xlcy5tYXhTY2FsZVkgPSAxLjA7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMubWluU2NhbGVYID0gMC41O1xuICAgIGNvcm9uYVBhcnRpY2xlcy5taW5TY2FsZVkgPSAwLjc1O1xuICAgIGNvcm9uYVBhcnRpY2xlcy5tYXhTY2FsZVggPSAxLjI7XG4gICAgY29yb25hUGFydGljbGVzLm1heFNjYWxlWSA9IDMuMDtcblxuICAgIHN0YXJzUGFydGljbGVzLm1pblNpemUgPSAwLjE1O1xuICAgIHN0YXJzUGFydGljbGVzLm1heFNpemUgPSAwLjM7XG5cbiAgICAvLyBTaXplIG92ZXIgbGlmZXRpbWVcbiAgICBmbGFyZVBhcnRpY2xlcy5hZGRTaXplR3JhZGllbnQoMCwgMCk7XG4gICAgZmxhcmVQYXJ0aWNsZXMuYWRkU2l6ZUdyYWRpZW50KDEsIDEpO1xuXG4gICAgLy8gTGlmZSB0aW1lIG9mIGVhY2ggcGFydGljbGUgKHJhbmRvbSBiZXR3ZWVuLi4uXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5taW5MaWZlVGltZSA9IDguMDtcbiAgICBzdXJmYWNlUGFydGljbGVzLm1heExpZmVUaW1lID0gOC4wO1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMubWluTGlmZVRpbWUgPSAxMC4wO1xuICAgIGZsYXJlUGFydGljbGVzLm1heExpZmVUaW1lID0gMTAuMDtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5taW5MaWZlVGltZSA9IDIuMDtcbiAgICBjb3JvbmFQYXJ0aWNsZXMubWF4TGlmZVRpbWUgPSAyLjA7XG5cbiAgICBzdGFyc1BhcnRpY2xlcy5taW5MaWZlVGltZSA9IDk5OTk5OTtcbiAgICBzdGFyc1BhcnRpY2xlcy5tYXhMaWZlVGltZSA9IDk5OTk5OTtcblxuICAgIC8vIEVtaXNzaW9uIHJhdGVcbiAgICBzdXJmYWNlUGFydGljbGVzLmVtaXRSYXRlID0gMjAwO1xuICAgIGZsYXJlUGFydGljbGVzLmVtaXRSYXRlID0gMTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMuZW1pdFJhdGUgPSAzMDA7XG5cbiAgICAvLyBCdXJzdCByYXRlXG4gICAgc3RhcnNQYXJ0aWNsZXMubWFudWFsRW1pdENvdW50ID0gNTAwO1xuICAgIHN0YXJzUGFydGljbGVzLm1heEVtaXRQb3dlciA9IDAuMDtcblxuICAgIC8vIEJsZW5kIG1vZGUgOiBCTEVORE1PREVfT05FT05FLCBCTEVORE1PREVfU1RBTkRBUkQsIG9yIEJMRU5ETU9ERV9BRERcbiAgICBzdXJmYWNlUGFydGljbGVzLmJsZW5kTW9kZSA9IFBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9BREQ7XG4gICAgZmxhcmVQYXJ0aWNsZXMuYmxlbmRNb2RlID0gUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX0FERDtcbiAgICBjb3JvbmFQYXJ0aWNsZXMuYmxlbmRNb2RlID0gUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX0FERDtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5ibGVuZE1vZGUgPSBQYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfU1RBTkRBUkQ7XG5cbiAgICAvLyBTZXQgdGhlIGdyYXZpdHkgb2YgYWxsIHBhcnRpY2xlc1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMuZ3Jhdml0eSA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xuICAgIGZsYXJlUGFydGljbGVzLmdyYXZpdHkgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMuZ3Jhdml0eSA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLmdyYXZpdHkgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcblxuICAgIC8vIEFuZ3VsYXIgc3BlZWQsIGluIHJhZGlhbnNcbiAgICBzdXJmYWNlUGFydGljbGVzLm1pbkFuZ3VsYXJTcGVlZCA9IC0wLjQ7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5tYXhBbmd1bGFyU3BlZWQgPSAwLjQ7XG5cbiAgICBmbGFyZVBhcnRpY2xlcy5taW5Bbmd1bGFyU3BlZWQgPSAwLjA7XG4gICAgZmxhcmVQYXJ0aWNsZXMubWF4QW5ndWxhclNwZWVkID0gMC4wO1xuXG4gICAgY29yb25hUGFydGljbGVzLm1pbkFuZ3VsYXJTcGVlZCA9IDAuMDtcbiAgICBjb3JvbmFQYXJ0aWNsZXMubWF4QW5ndWxhclNwZWVkID0gMC4wO1xuXG4gICAgc3RhcnNQYXJ0aWNsZXMubWluQW5ndWxhclNwZWVkID0gMC4wO1xuICAgIHN0YXJzUGFydGljbGVzLm1heEFuZ3VsYXJTcGVlZCA9IDAuMDtcblxuICAgIC8vIFNwZWVkXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5taW5FbWl0UG93ZXIgPSAwO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWF4RW1pdFBvd2VyID0gMDtcbiAgICBzdXJmYWNlUGFydGljbGVzLnVwZGF0ZVNwZWVkID0gMC4wMDU7XG5cbiAgICBmbGFyZVBhcnRpY2xlcy5taW5FbWl0UG93ZXIgPSAwLjAwMTtcbiAgICBmbGFyZVBhcnRpY2xlcy5tYXhFbWl0UG93ZXIgPSAwLjAxO1xuXG4gICAgY29yb25hUGFydGljbGVzLm1pbkVtaXRQb3dlciA9IDAuMDtcbiAgICBjb3JvbmFQYXJ0aWNsZXMubWF4RW1pdFBvd2VyID0gMC4wO1xuXG4gICAgc3RhcnNQYXJ0aWNsZXMubWluRW1pdFBvd2VyID0gMC4wO1xuICAgIHN0YXJzUGFydGljbGVzLm1heEFuZ3VsYXJTcGVlZCA9IDAuMDtcblxuICAgIC8vIE5vIGJpbGxib2FyZFxuICAgIHN1cmZhY2VQYXJ0aWNsZXMuaXNCaWxsYm9hcmRCYXNlZCA9IGZhbHNlO1xuICAgIGZsYXJlUGFydGljbGVzLmlzQmlsbGJvYXJkQmFzZWQgPSB0cnVlO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5pc0JpbGxib2FyZEJhc2VkID0gdHJ1ZTtcbiAgICBzdGFyc1BhcnRpY2xlcy5pc0JpbGxib2FyZEJhc2VkID0gdHJ1ZTtcblxuICAgIC8vIFJlbmRlciBPcmRlclxuICAgIHN0YXJzUGFydGljbGVzLnJlbmRlcmluZ0dyb3VwSWQgPSAwO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5yZW5kZXJpbmdHcm91cElkID0gMCAvLzE7XG4gICAgZmxhcmVQYXJ0aWNsZXMucmVuZGVyaW5nR3JvdXBJZCA9IDAgLy8yO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMucmVuZGVyaW5nR3JvdXBJZCA9IDAgLy8zO1xuICAgIGNvcmVTcGhlcmUucmVuZGVyaW5nR3JvdXBJZCA9IDAgLy8zO1xuXG4gICAgLy8gU3RhcnQgdGhlIHBhcnRpY2xlIHN5c3RlbVxuICAgIHN1cmZhY2VQYXJ0aWNsZXMuc3RhcnQoKTtcbiAgICBmbGFyZVBhcnRpY2xlcy5zdGFydCgpO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5zdGFydCgpO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLnN0YXJ0KCk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG59IiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0VuZ2luZXMvZW5naW5lJztcbmltcG9ydCB7IENvbG9yMywgVmVjdG9yMyB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRocy9tYXRoJztcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoXCJcbmltcG9ydCB7IE1lc2hCdWlsZGVyIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlcic7XG5pbXBvcnQgeyBHcmlkTWF0ZXJpYWwgfSBmcm9tICdAYmFieWxvbmpzL21hdGVyaWFscy9ncmlkJ1xuXG5pbXBvcnQgXCJAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hCdWlsZGVyXCI7XG5pbXBvcnQgJ0BiYWJ5bG9uanMvY29yZS9Mb2FkaW5nL2xvYWRpbmdTY3JlZW4nXG5cbmltcG9ydCB7IGNyZWF0ZVN0YXJzIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0YXJzJ1xuaW1wb3J0IHsgY3JlYXRlU2NlbmUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2NlbmUnXG5pbXBvcnQgeyBjcmVhdGVTdW4gfSBmcm9tICcuL2NvbXBvbmVudHMvc3VuJ1xuaW1wb3J0IHsgTmVidWxhQmFja2dyb3VuZCB9IGZyb20gJy4vY29tcG9uZW50cy9uZWJ1bGEnXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsLCBUZXh0dXJlIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlJztcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW5kZXJDYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5cbmNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUoY2FudmFzKTtcbi8vZW5naW5lLmxvYWRpbmdTY3JlZW4gPSBuZXcgQkFCWUxPTi5EZWZhdWx0TG9hZGluZ1NjcmVlbihjYW52YXMsIFwiXCIsIFwiYmxhY2tcIilcblxuZnVuY3Rpb24gY3JlYXRlRGVsYXllZFNjZW5lKCkge1xuICAgIC8vIFNjZW5lXG4gICAgY29uc3QgeyBzY2VuZSB9ID0gY3JlYXRlU2NlbmUoY2FudmFzLCBlbmdpbmUpXG5cbiAgICAvKiB2YXIgZ2wgPSBuZXcgQkFCWUxPTi5HbG93TGF5ZXIoXCJnbG93XCIsIHNjZW5lLCB7XG4gICAgICAgICAgICBtYWluVGV4dHVyZUZpeGVkU2l6ZTogNTEyXG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgKi9cbiAgICAvLyBTdHVmZlxuXG4gICAgLyogR2FsYXh5IEJhY2tncm91bmQgKi9cbiAgICBjb25zdCBuZWJ1bGEgPSBuZXcgTmVidWxhQmFja2dyb3VuZChzY2VuZSlcbiAgICAvL2NvbnN0IHsgU1BTLCBzeXN0ZW1NZXNoOiBzdGFycyB9ID0gY3JlYXRlU3RhcnMoc2NlbmUpXG4gICAgY3JlYXRlU3RhcnMoc2NlbmUpXG4gICAgY3JlYXRlU3VuKHNjZW5lKVxuXG5cbiAgICAvKiB2YXIgbWFrZVNoYWRvd3M9MDtcbiAgICAgdmFyIGxvZD0wOyAqL1xuXG4gICAgLy9sZXQgbWF0ZXJpYWwgPSBuZXcgR3JpZE1hdGVyaWFsKFwiZ3JpZFwiLCBzY2VuZSk7XG4gICAgLy8gLy8gYmFzZSBncm91bmRcbiAgICAvLyAvL2NvbnN0IGdyb3VuZCA9IE1lc2guQ3JlYXRlR3JvdW5kKFwiZ3JvdW5kLTFcIiwgNjAwLCA2MDAsIDIwMCwgc2NlbmUpO1xuICAgIC8vIGNvbnN0IGdyb3VuZCA9IE1lc2hCdWlsZGVyLkNyZWF0ZUdyb3VuZChcImdyb3VuZFwiLCB7IHdpZHRoOiAxMCwgaGVpZ2h0OiAxMCB9KVxuICAgIC8vIGdyb3VuZC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuXG4gICAgbGV0IHBsYW5ldCA9IE1lc2guQ3JlYXRlU3BoZXJlKFwic3BoZXJlLTFcIiwgMTYsIDEsIHNjZW5lKTtcbiAgICAvKiB2YXIgbWF0ID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbChcInBsYW5ldE1hdFwiLCBzY2VuZSk7XG4gICAgbWF0LmFtYmllbnRUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZShcImh0dHBzOi8vaS5pbWd1ci5jb20vd2xueDF5US5qcGdcIiwgc2NlbmUsIHRydWUsIGZhbHNlKTtcbiAgICBzcGhlcmUubWF0ZXJpYWwgPSBtYXQ7ICovXG4gICAgbGV0IHBsYW5ldE1hdGVyaWFsID0gbmV3IFN0YW5kYXJkTWF0ZXJpYWwoXCJwbGFuZXRNQXRlcmlhbFwiLCBzY2VuZSlcbiAgICBwbGFuZXRNYXRlcmlhbC5hbWJpZW50VGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS93bG54MXlRLmpwZ1wiLCBzY2VuZSwgdHJ1ZSwgZmFsc2UpXG4gICAgcGxhbmV0TWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IENvbG9yMy5CbGFjaygpXG4gICAgcGxhbmV0TWF0ZXJpYWwuZW1pc3NpdmVDb2xvciA9IG5ldyBDb2xvcjMoMSwgMSwgMSlcblxuICAgIHBsYW5ldC5wb3NpdGlvbiA9IG5ldyBWZWN0b3IzKDAsIDAsIDApXG4gICAgcGxhbmV0LnNjYWxpbmcueCA9IDFcbiAgICBwbGFuZXQuc2NhbGluZy55ID0gMVxuICAgIHBsYW5ldC5zY2FsaW5nLnogPSAxXG5cbiAgICBwbGFuZXQubWF0ZXJpYWwgPSBwbGFuZXRNYXRlcmlhbDtcblxuICAgIC8qIHZhciB0ZXJyZSA9IEJBQllMT04uTWVzaC5DcmVhdGVTcGhlcmUoJ3RlcnJlJywgMTYsIDIsIHNjZW5lKTtcbiAgICB0ZXJyZS5wb3NpdGlvbi54ID0gMTA7XG5cbiAgICB2YXIgZWFydGhNYXQgPSBuZXcgQkFCWUxPTi5TdGFuZGFyZE1hdGVyaWFsKCdlYXJ0aCcsIHNjZW5lKTtcbiAgICBlYXJ0aE1hdC5kaWZmdXNlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoJ2h0dHBzOi8vMS5icC5ibG9nc3BvdC5jb20vLVVVWGFLNUdDai1rL1Vjc0tKUk1na1ZJL0FBQUFBQUFBQ2ZNL3NlUFBfSDA4SlRRL3MxNjAwLzEuanBnJywgc2NlbmUsIGZhbHNlLCBmYWxzZSk7XG4gICAgZWFydGhNYXQuc3BlY3VsYXJDb2xvciA9IEJBQllMT04uQ29sb3IzLkJsYWNrKCk7XG4gICAgdGVycmUubWF0ZXJpYWwgPSBlYXJ0aE1hdDtcbiAgICB2YXIgc3VuTWF0ID0gbmV3ICBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoJ3N1bicsIHNjZW5lKTtcbiAgICBzdW5NYXQuZGlmZnVzZUNvbG9yID0gQkFCWUxPTi5Db2xvcjMuWWVsbG93KCk7XG4gICAgc3VuTWF0LnNwZWN1bGFyQ29sb3IgPSBCQUJZTE9OLkNvbG9yMy5CbGFjaygpO1xuICAgIHN1bk1hdC5lbWlzc2l2ZUNvbG9yID0gQkFCWUxPTi5Db2xvcjMuWWVsbG93KCk7XG4gICAgc3VuLm1hdGVyaWFsID0gc3VuTWF0O1xuXG4gICAgdmFyIGFscGhhID0gMDtcbiAgICBzY2VuZS5yZWdpc3RlckJlZm9yZVJlbmRlcigoKSA9PiB7XG4gICAgICAgIHRlcnJlLnBvc2l0aW9uLnggPSBNYXRoLmNvcyhhbHBoYSkgKiAxMDtcbiAgICAgICAgdGVycmUucG9zaXRpb24ueiA9IE1hdGguc2luKGFscGhhKSAqIDEwO1xuICAgICAgICB0ZXJyZS5yb3RhdGlvbi55IC09IDAuMDE7XG4gICAgICAgIGFscGhhICs9IDAuMDE7XG4gICAgfSkgKi9cbiAgICBsZXQgZHQgPSAwXG4gICAgc2NlbmUucmVnaXN0ZXJCZWZvcmVSZW5kZXIoKCkgPT4ge1xuICAgICAgICBwbGFuZXQucG9zaXRpb24ueCA9IE1hdGguY29zKGR0KSAqIDEwXG4gICAgICAgIHBsYW5ldC5wb3NpdGlvbi56ID0gTWF0aC5zaW4oZHQpICogN1xuICAgICAgICBwbGFuZXQucG9zaXRpb24ueSA9IDBcbiAgICAgICAgcGxhbmV0LnJvdGF0aW9uLnkgLT0gMC4wMVxuICAgICAgICBkdCArPSAwLjAwNVxuICAgIH0pXG5cbiAgICAvKiBjb25zdCBza3lib3ggPSBNZXNoLkNyZWF0ZUJveChcIkJhY2tncm91bmRTa3lib3hcIiwgNTAwLCBzY2VuZSwgdW5kZWZpbmVkLCBNZXNoLkJBQ0tTSURFKTtcbiAgICAgICAgXG4gICAgLy8gQ3JlYXRlIGFuZCB0d2VhayB0aGUgYmFja2dyb3VuZCBtYXRlcmlhbC5cbiAgICBjb25zdCBiYWNrZ3JvdW5kTWF0ZXJpYWwgPSBuZXcgQkFCWUxPTi5CYWNrZ3JvdW5kTWF0ZXJpYWwoXCJiYWNrZ3JvdW5kTWF0ZXJpYWxcIiwgc2NlbmUpO1xuICAgIGJhY2tncm91bmRNYXRlcmlhbC5yZWZsZWN0aW9uVGV4dHVyZSA9IG5ldyBCQUJZTE9OLkN1YmVUZXh0dXJlKFwidGV4dHVyZXMvVHJvcGljYWxTdW5ueURheVwiLCBzY2VuZSk7XG4gICAgYmFja2dyb3VuZE1hdGVyaWFsLnJlZmxlY3Rpb25UZXh0dXJlLmNvb3JkaW5hdGVzTW9kZSA9IEJBQllMT04uVGV4dHVyZS5TS1lCT1hfTU9ERTtcbiAgICBza3lib3gubWF0ZXJpYWwgPSBiYWNrZ3JvdW5kTWF0ZXJpYWw7IFxuICAgIHZhciBlYXJ0aE1hdGVyaWFsID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbChcImVhcnRoTWF0ZXJpYWxcIiwgc2NlbmUpO1xuICAgICAgICBlYXJ0aC5tYXRlcmlhbCA9IGVhcnRoTWF0ZXJpYWw7XG4gICAgICAgIGVhcnRoTWF0ZXJpYWwuYW1iaWVudENvbG9yID0gbmV3IEJBQllMT04uQ29sb3IzKC44LCAuOCwgMSk7ICovXG4gICAgcmV0dXJuIHNjZW5lXG59XG5cbmxldCBzY2VuZVxuc2V0VGltZW91dCgoKSA9PiB7IHNjZW5lID0gY3JlYXRlRGVsYXllZFNjZW5lKCkgfSwgNjAwKVxuXG5lbmdpbmUucnVuUmVuZGVyTG9vcCgoKSA9PiB7XG4gICAgaWYgKCFzY2VuZSkge1xuICAgICAgICBlbmdpbmUuZGlzcGxheUxvYWRpbmdVSSgpXG4gICAgfVxuICAgIGlmIChzY2VuZSkge1xuICAgICAgICBzY2VuZS5yZW5kZXIoKTtcbiAgICAgICAgZW5naW5lLmhpZGVMb2FkaW5nVUkoKVxuICAgIH1cbn0pIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gdGhlIHN0YXJ0dXAgZnVuY3Rpb25cbi8vIEl0J3MgZW1wdHkgYXMgc29tZSBydW50aW1lIG1vZHVsZSBoYW5kbGVzIHRoZSBkZWZhdWx0IGJlaGF2aW9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSB4ID0+IHt9O1xuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFtcIi4vc3JjL2luZGV4LnRzXCIsXCJ2ZW5kb3JzXCJdXG5dO1xuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxudmFyIGNoZWNrRGVmZXJyZWRNb2R1bGVzID0geCA9PiB7fTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWUsIGV4ZWN1dGVNb2R1bGVzXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3h2ZXJzZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt4dmVyc2VcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpO1xuXG5mdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwoKSB7XG5cdHZhciByZXN1bHQ7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcblx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuXHRcdH1cblx0fVxuXHRpZihkZWZlcnJlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0geCA9PiB7fTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxudmFyIHN0YXJ0dXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLng7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIHJlc2V0IHN0YXJ0dXAgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGNhbGxlZCBhZ2FpbiB3aGVuIG1vcmUgc3RhcnR1cCBjb2RlIGlzIGFkZGVkXG5cdF9fd2VicGFja19yZXF1aXJlX18ueCA9IHN0YXJ0dXAgfHwgKHggPT4ge30pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTsiLCIvLyBydW4gc3RhcnR1cFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=