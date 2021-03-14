/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    var camera = new freeCamera_1.FreeCamera("xverse", new math_1.Vector3(0, 5, -10), scene);
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
    coronaParticles.renderingGroupId = 1;
    flareParticles.renderingGroupId = 2;
    surfaceParticles.renderingGroupId = 3;
    coreSphere.renderingGroupId = 3;
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
var meshBuilder_1 = __webpack_require__(/*! @babylonjs/core/Meshes/meshBuilder */ "./node_modules/@babylonjs/core/Meshes/meshBuilder.js");
var grid_1 = __webpack_require__(/*! @babylonjs/materials/grid */ "./node_modules/@babylonjs/materials/grid/index.js");
__webpack_require__(/*! @babylonjs/core/Meshes/meshBuilder */ "./node_modules/@babylonjs/core/Meshes/meshBuilder.js");
__webpack_require__(/*! @babylonjs/core/Loading/loadingScreen */ "./node_modules/@babylonjs/core/Loading/loadingScreen.js");
var stars_1 = __webpack_require__(/*! ./components/stars */ "./src/components/stars.ts");
var scene_1 = __webpack_require__(/*! ./components/scene */ "./src/components/scene.ts");
var sun_1 = __webpack_require__(/*! ./components/sun */ "./src/components/sun.ts");
var canvas = document.getElementById("renderCanvas");
var engine = new engine_1.Engine(canvas);
function createDelayedScene() {
    var scene = scene_1.createScene(canvas, engine).scene;
    stars_1.createStars(scene);
    sun_1.createSun(scene);
    var material = new grid_1.GridMaterial("grid", scene);
    var ground = meshBuilder_1.MeshBuilder.CreateGround("ground", { width: 10, height: 10 });
    ground.material = material;
    var sphere = mesh_1.Mesh.CreateSphere("sphere-1", 16, 1, scene);
    sphere.position = new math_1.Vector3(2, 4, 0);
    sphere.scaling.x = 1;
    sphere.scaling.y = 1;
    sphere.scaling.z = 1;
    sphere.material = material;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvY29tcG9uZW50cy9zY2VuZS50cyIsIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvY29tcG9uZW50cy9zdGFycy50cyIsIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvY29tcG9uZW50cy9zdW4udHMiLCJ3ZWJwYWNrOi8veHZlcnNlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3h2ZXJzZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3h2ZXJzZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3h2ZXJzZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3h2ZXJzZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwwR0FBOEM7QUFFOUMsbUhBQXFFO0FBQ3JFLHlJQUFnRTtBQUVoRSx5SkFBMEU7QUFFMUUsc0hBQTRDO0FBUTVDLFNBQWdCLFdBQVcsQ0FBQyxNQUF5QixFQUFFLE1BQWM7SUFHakUsSUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFaEMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLGFBQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFHekMsSUFBTSxNQUFNLEdBQUcsSUFBSSx1QkFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLGNBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDO0lBT3RFLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBR25DLElBQUksS0FBSyxHQUFHLElBQUksbUNBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksY0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0UsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDcEIsS0FBSyxDQUFDLFFBQVEsR0FBRyxhQUFNLENBQUMsS0FBSyxFQUFFO0lBRS9CLE9BQU8sRUFBRSxLQUFLLFNBQUUsTUFBTSxVQUFFLEtBQUssU0FBRTtBQUNuQyxDQUFDO0FBdkJELGtDQXVCQzs7Ozs7Ozs7Ozs7Ozs7QUNyQ0QsbUhBQXFFO0FBQ3JFLHFIQUFrRDtBQUNsRCx5SkFBeUU7QUFDekUsc0pBQW9FO0FBQ3BFLHdNQUFvRztBQUlwRyxTQUFnQixXQUFXLENBQUMsS0FBWTtJQUVwQyxJQUFNLGFBQWEsR0FBRyxXQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO0lBQzVELElBQU0sY0FBYyxHQUFHLElBQUksK0JBQWMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQztJQUd2RSxjQUFjLENBQUMsZUFBZSxHQUFHLElBQUksaUJBQU8sQ0FBQyx5R0FBeUcsRUFBRSxLQUFLLENBQUM7SUFFOUosSUFBTSxXQUFXLEdBQUcsQ0FBQztJQUNyQixJQUFNLEtBQUssR0FBRyxFQUFFO0lBQ2hCLElBQU0saUJBQWlCLEdBQUcsY0FBTSxXQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBMUIsQ0FBMEI7SUFDMUQsSUFBTSxXQUFXLEdBQUcsY0FBTSxrQkFBVyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxHQUFHLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxFQUE3RCxDQUE2RDtJQUN2RixJQUFNLGlCQUFpQixHQUFHLGNBQU0sUUFBQyxXQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUE3QyxDQUE2QztJQUM3RSxjQUFjLENBQUMscUJBQXFCLEdBQUcsVUFBQyxXQUFtQixFQUFFLGdCQUF5QixFQUFFLFFBQWtCLEVBQUUsT0FBZ0I7UUFDbEgsU0FBWSxpQkFBaUIsRUFBRSxFQUE5QixDQUFDLFVBQUUsQ0FBQyxVQUFFLENBQUMsUUFBdUI7UUFDckMsY0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQztJQUN2RixDQUFDO0lBRUQsSUFBTSxZQUFZLEdBQUcsSUFBSSw2Q0FBcUIsRUFBRTtJQUNoRCxZQUFZLENBQUMsTUFBTSxHQUFHLEVBQUU7SUFDeEIsWUFBWSxDQUFDLFdBQVcsR0FBRyxDQUFDO0lBQzVCLFlBQVksQ0FBQyxxQkFBcUIsR0FBRyxVQUFDLFdBQW1CLEVBQUUsZ0JBQXlCLEVBQUUsUUFBa0IsRUFBRSxPQUFnQjtRQUNoSCxTQUFZLGlCQUFpQixFQUFFLEVBQTlCLENBQUMsVUFBRSxDQUFDLFVBQUUsQ0FBQyxRQUF1QjtRQUNyQyxjQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDO0lBQ3ZGLENBQUM7SUFFRCxjQUFjLENBQUMsT0FBTyxHQUFHLGFBQWE7SUFFdEMsY0FBYyxDQUFDLG1CQUFtQixHQUFHLFlBQVk7SUFFakQsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLGFBQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3RCxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksYUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRzdELGNBQWMsQ0FBQyxXQUFXLEdBQUcsTUFBTTtJQUNuQyxjQUFjLENBQUMsV0FBVyxHQUFHLE1BQU07SUFDbkMsY0FBYyxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7SUFDckMsY0FBYyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7SUFDbEMsY0FBYyxDQUFDLE9BQU8sR0FBRyxJQUFJO0lBQzdCLGNBQWMsQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUMzQixjQUFjLENBQUMsU0FBUyxHQUFHLCtCQUFjLENBQUMsa0JBQWtCO0lBQzVELGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0MsY0FBYyxDQUFDLGVBQWUsR0FBRyxHQUFHO0lBQ3BDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsR0FBRztJQUNwQyxjQUFjLENBQUMsZ0JBQWdCLEdBQUcsSUFBSTtJQUN0QyxjQUFjLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLGNBQWMsQ0FBQyxLQUFLLEVBQUU7SUFFdEIsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQWpERCxrQ0FpREM7Ozs7Ozs7Ozs7Ozs7O0FDekRELG1IQUFxRTtBQUNyRSxxSEFBa0Q7QUFDbEQsMElBQWdFO0FBQ2hFLHlKQUF5RTtBQUN6RSxzSkFBb0U7QUFDcEUsK0pBQTRFO0FBQzVFLHdNQUFvRztBQUdwRyxTQUFnQixTQUFTLENBQUMsS0FBWTtJQUVsQyxJQUFJLEtBQUssR0FBRyxXQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFHbkQsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLCtCQUFjLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNFLElBQUksY0FBYyxHQUFHLElBQUksK0JBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckUsSUFBSSxlQUFlLEdBQUcsSUFBSSwrQkFBYyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUl4RSxnQkFBZ0IsQ0FBQyxlQUFlLEdBQUcsSUFBSSxpQkFBTyxDQUFDLCtHQUErRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZLLGNBQWMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxpQkFBTyxDQUFDLDZHQUE2RyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25LLGVBQWUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxpQkFBTyxDQUFDLHlHQUF5RyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBSWhLLElBQUksVUFBVSxHQUFHLHlCQUFXLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBR2pHLElBQUksT0FBTyxHQUFHLElBQUksbUNBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztJQUNwRCxPQUFPLENBQUMsYUFBYSxHQUFHLElBQUksYUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFHM0QsVUFBVSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFHOUIsZ0JBQWdCLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQ3hDLGdCQUFnQixDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7SUFFckMsY0FBYyxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUN0QyxjQUFjLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztJQUVuQyxlQUFlLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQ3ZDLGVBQWUsQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO0lBR3BDLGdCQUFnQixDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkQsZ0JBQWdCLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFFbEQsY0FBYyxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDakQsY0FBYyxDQUFDLGtCQUFrQixHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBRWhELGVBQWUsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2xELGVBQWUsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUdqRCxJQUFJLFVBQVUsR0FBRyxJQUFJLDZDQUFxQixFQUFFLENBQUM7SUFDN0MsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdEIsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFRM0IsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztJQUN0QyxnQkFBZ0IsQ0FBQyxtQkFBbUIsR0FBRyxVQUFVLENBQUM7SUFFbEQsY0FBYyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7SUFDcEMsY0FBYyxDQUFDLG1CQUFtQixHQUFHLFVBQVUsQ0FBQztJQUVoRCxlQUFlLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztJQUNyQyxlQUFlLENBQUMsbUJBQW1CLEdBQUcsVUFBVSxDQUFDO0lBVWpELGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxJQUFJLGFBQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlFLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxJQUFJLGFBQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxJQUFJLGFBQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxJQUFJLGFBQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRWhGLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsSUFBSSxhQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2RSxjQUFjLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksYUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0UsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxJQUFJLGFBQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXhFLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsSUFBSSxhQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3RSxlQUFlLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLElBQUksYUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEYsZUFBZSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxJQUFJLGFBQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRy9FLGdCQUFnQixDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDL0IsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUUvQixjQUFjLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUMvQixjQUFjLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUMvQixjQUFjLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUMvQixjQUFjLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUUvQixlQUFlLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUNoQyxlQUFlLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUNqQyxlQUFlLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUNoQyxlQUFlLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQU1oQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUdyQyxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQ25DLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFFbkMsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDbEMsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFFbEMsZUFBZSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDbEMsZUFBZSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFNbEMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUNoQyxjQUFjLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUM1QixlQUFlLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQU8vQixnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsK0JBQWMsQ0FBQyxhQUFhLENBQUM7SUFDMUQsY0FBYyxDQUFDLFNBQVMsR0FBRywrQkFBYyxDQUFDLGFBQWEsQ0FBQztJQUN4RCxlQUFlLENBQUMsU0FBUyxHQUFHLCtCQUFjLENBQUMsYUFBYSxDQUFDO0lBSXpELGdCQUFnQixDQUFDLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hELGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QyxlQUFlLENBQUMsT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFJL0MsZ0JBQWdCLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQ3hDLGdCQUFnQixDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7SUFFdkMsY0FBYyxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7SUFDckMsY0FBYyxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7SUFFckMsZUFBZSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7SUFDdEMsZUFBZSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7SUFNdEMsZ0JBQWdCLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUNsQyxnQkFBZ0IsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFFckMsY0FBYyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDcEMsY0FBYyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFFbkMsZUFBZSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7SUFDbkMsZUFBZSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7SUFNbkMsZ0JBQWdCLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQzFDLGNBQWMsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFDdkMsZUFBZSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztJQUt4QyxlQUFlLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLGNBQWMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDcEMsZ0JBQWdCLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFHaEMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUd4QixPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBN0xELDhCQTZMQzs7Ozs7Ozs7Ozs7OztBQ3ZNRCw2SEFBd0Q7QUFDeEQsbUhBQXFEO0FBQ3JELHFIQUFrRDtBQUNsRCwwSUFBaUU7QUFDakUsdUhBQXdEO0FBRXhELHNIQUE0QztBQUM1Qyw0SEFBOEM7QUFFOUMseUZBQWdEO0FBQ2hELHlGQUFnRDtBQUNoRCxtRkFBNEM7QUFFNUMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQXNCLENBQUM7QUFFNUUsSUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFHbEMsU0FBUyxrQkFBa0I7SUFFZixTQUFLLEdBQUssbUJBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQWhDLENBQWdDO0lBSTdDLG1CQUFXLENBQUMsS0FBSyxDQUFDO0lBQ2xCLGVBQVMsQ0FBQyxLQUFLLENBQUM7SUFNaEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUkvQyxJQUFNLE1BQU0sR0FBRyx5QkFBVyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUM1RSxNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUUzQixJQUFJLE1BQU0sR0FBRyxXQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXpELE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxjQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFFcEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFZM0IsT0FBTyxLQUFLO0FBQ2hCLENBQUM7QUFFRCxJQUFJLEtBQUs7QUFDVCxVQUFVLENBQUMsY0FBUSxLQUFLLEdBQUcsa0JBQWtCLEVBQUUsRUFBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0FBRXZELE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDakIsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNSLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRTtLQUM1QjtJQUNELElBQUksS0FBSyxFQUFFO1FBQ1AsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsTUFBTSxDQUFDLGFBQWEsRUFBRTtLQUN6QjtBQUNMLENBQUMsQ0FBQzs7Ozs7OztVQ3ZFRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBLGdCQUFnQiwyQkFBMkI7V0FDM0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLDRDQUE0QztXQUM1QztXQUNBLEU7Ozs7O1VDcEZBO1VBQ0EiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9zY2VuZSc7XG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvRW5naW5lcy9lbmdpbmUnXG5pbXBvcnQgeyBDb2xvcjMsIENvbG9yNCwgVmVjdG9yMyB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRocy9tYXRoJztcbmltcG9ydCB7IEZyZWVDYW1lcmEgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvQ2FtZXJhcy9mcmVlQ2FtZXJhJztcbmltcG9ydCB7IFVuaXZlcnNhbENhbWVyYSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9DYW1lcmFzL3VuaXZlcnNhbENhbWVyYSdcbmltcG9ydCB7IEhlbWlzcGhlcmljTGlnaHQgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTGlnaHRzL2hlbWlzcGhlcmljTGlnaHQnXG5cbmltcG9ydCBcIkBiYWJ5bG9uanMvY29yZS9NZXNoZXMvbWVzaEJ1aWxkZXJcIjtcblxuaW50ZXJmYWNlIElTY2VuZU91dHB1dCB7XG4gICAgc2NlbmU6IFNjZW5lLFxuICAgIGNhbWVyYTogRnJlZUNhbWVyYSB8IFVuaXZlcnNhbENhbWVyYSxcbiAgICBsaWdodDogSGVtaXNwaGVyaWNMaWdodFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2NlbmUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZW5naW5lOiBFbmdpbmUpOiBJU2NlbmVPdXRwdXQge1xuXG4gICAgLy8gU2NlbmVcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBTY2VuZShlbmdpbmUpO1xuXG4gICAgc2NlbmUuY2xlYXJDb2xvciA9IG5ldyBDb2xvcjQoMCwgMCwgMCwgMSlcblxuICAgIC8vIENhbWVyYVxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBGcmVlQ2FtZXJhKFwieHZlcnNlXCIsIG5ldyBWZWN0b3IzKDAsIDUsIC0xMCksIHNjZW5lKVxuICAgIC8qIHZhciBjYW1lcmEgPSBuZXcgQkFCWUxPTi5BcmNSb3RhdGVDYW1lcmEoXCJjYW1lcmExXCIsIDAsIDAsIDAsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgLTApLCBzY2VuZSk7XG4gICAgIGNhbWVyYS5zZXRQb3NpdGlvbihuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDE0MDAsIDUwKSk7XG4gICAgIGNhbWVyYS53aGVlbFByZWNpc2lvbiA9IDE7ICovXG5cbiAgICAvL2NhbWVyYS5zZXRUYXJnZXQoVmVjdG9yMy5aZXJvKCkpO1xuXG4gICAgY2FtZXJhLmF0dGFjaENvbnRyb2woY2FudmFzLCB0cnVlKTtcblxuICAgIC8vIExpZ2h0XG4gICAgbGV0IGxpZ2h0ID0gbmV3IEhlbWlzcGhlcmljTGlnaHQoXCJsaWdodFwiLCBuZXcgVmVjdG9yMygxMDAsIDIwMCwgMzAwKSwgc2NlbmUpO1xuICAgIGxpZ2h0LmludGVuc2l0eSA9IDE7XG4gICAgbGlnaHQuc3BlY3VsYXIgPSBDb2xvcjMuV2hpdGUoKS8vbmV3IENvbG9yMygwLjk1LCAwLjE1LCAwLjExKVxuXG4gICAgcmV0dXJuIHsgc2NlbmUsIGNhbWVyYSwgbGlnaHQgfVxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL3NjZW5lJztcbmltcG9ydCB7IFZlY3RvcjMsIENvbG9yNCwgTWF0cml4IH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGhzL21hdGgnO1xuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hcIlxuaW1wb3J0IHsgUGFydGljbGVTeXN0ZW0gfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvUGFydGljbGVzL3BhcnRpY2xlU3lzdGVtJ1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZSdcbmltcG9ydCB7IFNwaGVyZVBhcnRpY2xlRW1pdHRlciB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9QYXJ0aWNsZXMvRW1pdHRlclR5cGVzL3NwaGVyZVBhcnRpY2xlRW1pdHRlcidcbmltcG9ydCB7IEdsb3dMYXllciB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9MYXllcnMvZ2xvd0xheWVyJ1xuaW1wb3J0IHsgUGFydGljbGUsIFJhbmRvbU51bWJlckJsb2NrIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0YXJzKHNjZW5lOiBTY2VuZSkge1xuICAgIC8vIFBhcnRpY2xlU3lzdGVtICBTcGhlcmVQYXJ0aWNsZUVtaXR0ZXJcbiAgICBjb25zdCBiYXNlU3Rhck1vZGVsID0gTWVzaC5DcmVhdGVCb3goXCJlbWl0dGVyXCIsIDAuMDEsIHNjZW5lKVxuICAgIGNvbnN0IHN0YXJzUGFydGljbGVzID0gbmV3IFBhcnRpY2xlU3lzdGVtKFwic3RhclBhcnRpY2xlc1wiLCA3MDAwLCBzY2VuZSlcbiAgICAvLyBjb25zdCBnbCA9IG5ldyBHbG93TGF5ZXIoXCJzdGFyR2xvd1wiLCBzY2VuZSwgeyBibHVyS2VybmVsU2l6ZTogNjQgfSk7XG5cbiAgICBzdGFyc1BhcnRpY2xlcy5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgVGV4dHVyZShcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9QYXRyaWNrUnlhbk1TL0JhYnlsb25KU3RleHR1cmVzL21hc3Rlci9QYXJ0aWNsZVN5c3RlbXMvU3VuL1RfU3Rhci5wbmdcIiwgc2NlbmUpXG4gICAgXG4gICAgY29uc3QgbWluRGlzdGFuY2UgPSAwXG4gICAgY29uc3Qgc2NhbGUgPSA0MFxuICAgIGNvbnN0IGluZGljYXRvckZ1bmN0aW9uID0gKCkgPT4gTWF0aC5yYW5kb20oKSA8IC41ID8gLTE6IDFcbiAgICBjb25zdCBnZXRQb3NpdGlvbiA9ICgpID0+IG1pbkRpc3RhbmNlICsgKE1hdGgucmFuZG9tKCkgKiAoc2NhbGUgKiBpbmRpY2F0b3JGdW5jdGlvbigpKSlcbiAgICBjb25zdCBnZXRSYW5kb21Qb3NpdGlvbiA9ICgpID0+IFtnZXRQb3NpdGlvbigpLCBnZXRQb3NpdGlvbigpLCBnZXRQb3NpdGlvbigpXVxuICAgIHN0YXJzUGFydGljbGVzLnN0YXJ0UG9zaXRpb25GdW5jdGlvbiA9ICh3b3JsZE1hdHJpeDogTWF0cml4LCBwb3NpdGlvblRvVXBkYXRlOiBWZWN0b3IzLCBwYXJ0aWNsZTogUGFydGljbGUsIGlzTG9jYWw6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgW3gsIHksIHpdID0gZ2V0UmFuZG9tUG9zaXRpb24oKVxuICAgICAgICBWZWN0b3IzLlRyYW5zZm9ybUNvb3JkaW5hdGVzRnJvbUZsb2F0c1RvUmVmKHgsIHksIHosIHdvcmxkTWF0cml4LCBwb3NpdGlvblRvVXBkYXRlKVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJzRW1pdHRlciA9IG5ldyBTcGhlcmVQYXJ0aWNsZUVtaXR0ZXIoKVxuICAgIHN0YXJzRW1pdHRlci5yYWRpdXMgPSAzMFxuICAgIHN0YXJzRW1pdHRlci5yYWRpdXNSYW5nZSA9IDFcbiAgICBzdGFyc0VtaXR0ZXIuc3RhcnRQb3NpdGlvbkZ1bmN0aW9uID0gKHdvcmxkTWF0cml4OiBNYXRyaXgsIHBvc2l0aW9uVG9VcGRhdGU6IFZlY3RvcjMsIHBhcnRpY2xlOiBQYXJ0aWNsZSwgaXNMb2NhbDogYm9vbGVhbik6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBbeCwgeSwgel0gPSBnZXRSYW5kb21Qb3NpdGlvbigpXG4gICAgICAgIFZlY3RvcjMuVHJhbnNmb3JtQ29vcmRpbmF0ZXNGcm9tRmxvYXRzVG9SZWYoeCwgeSwgeiwgd29ybGRNYXRyaXgsIHBvc2l0aW9uVG9VcGRhdGUpXG4gICAgfVxuXG4gICAgc3RhcnNQYXJ0aWNsZXMuZW1pdHRlciA9IGJhc2VTdGFyTW9kZWxcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5lbWl0dGVyID0gVmVjdG9yMy5aZXJvKClcbiAgICBzdGFyc1BhcnRpY2xlcy5wYXJ0aWNsZUVtaXR0ZXJUeXBlID0gc3RhcnNFbWl0dGVyXG5cbiAgICBzdGFyc1BhcnRpY2xlcy5jb2xvcjEgPSBuZXcgQ29sb3I0KDAuODk4LCAwLjczNywgMC43MTgsIDEuMCk7XG4gICAgc3RhcnNQYXJ0aWNsZXMuY29sb3IyID0gbmV3IENvbG9yNCgwLjU4NCwgMC44MzEsIDAuODk0LCAxLjApO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLm1pbkVtaXRCb3ggPSBuZXcgVmVjdG9yMygxMCwgMTAsIDEwKVxuICAgIC8vIHN0YXJzUGFydGljbGVzLm1heEVtaXRCb3ggPSBuZXcgVmVjdG9yMygxMDAsIDEwMCwgMTAwKVxuICAgIHN0YXJzUGFydGljbGVzLm1pbkxpZmVUaW1lID0gOTk5OTk5XG4gICAgc3RhcnNQYXJ0aWNsZXMubWF4TGlmZVRpbWUgPSA5OTk5OTlcbiAgICBzdGFyc1BhcnRpY2xlcy5tYW51YWxFbWl0Q291bnQgPSA1MDA7XG4gICAgc3RhcnNQYXJ0aWNsZXMubWF4RW1pdFBvd2VyID0gMC4wO1xuICAgIHN0YXJzUGFydGljbGVzLm1pblNpemUgPSAwLjE1Ly8wLjE1O1xuICAgIHN0YXJzUGFydGljbGVzLm1heFNpemUgPSAuNy8vMC4zO1xuICAgIHN0YXJzUGFydGljbGVzLmJsZW5kTW9kZSA9IFBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9TVEFOREFSRFxuICAgIHN0YXJzUGFydGljbGVzLmdyYXZpdHkgPSBuZXcgVmVjdG9yMygwLCAwLCAwKVxuICAgIHN0YXJzUGFydGljbGVzLm1pbkFuZ3VsYXJTcGVlZCA9IDAuMFxuICAgIHN0YXJzUGFydGljbGVzLm1heEFuZ3VsYXJTcGVlZCA9IDAuMFxuICAgIHN0YXJzUGFydGljbGVzLmlzQmlsbGJvYXJkQmFzZWQgPSB0cnVlXG4gICAgc3RhcnNQYXJ0aWNsZXMucmVuZGVyaW5nR3JvdXBJZCA9IDA7XG4gICAgc3RhcnNQYXJ0aWNsZXMuc3RhcnQoKVxuXG4gICAgcmV0dXJuIHNjZW5lO1xufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL3NjZW5lJztcbmltcG9ydCB7IFZlY3RvcjMsIENvbG9yNCwgQ29sb3IzIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGhzL21hdGgnO1xuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hcIlxuaW1wb3J0IHsgTWVzaEJ1aWxkZXIgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hCdWlsZGVyJ1xuaW1wb3J0IHsgUGFydGljbGVTeXN0ZW0gfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvUGFydGljbGVzL3BhcnRpY2xlU3lzdGVtJ1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZSdcbmltcG9ydCB7IFN0YW5kYXJkTWF0ZXJpYWx9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRlcmlhbHMvc3RhbmRhcmRNYXRlcmlhbCdcbmltcG9ydCB7IFNwaGVyZVBhcnRpY2xlRW1pdHRlciB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9QYXJ0aWNsZXMvRW1pdHRlclR5cGVzL3NwaGVyZVBhcnRpY2xlRW1pdHRlcidcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3VuKHNjZW5lOiBTY2VuZSkge1xuICAgIC8vIEVtaXR0ZXIgb2JqZWN0XG4gICAgdmFyIHN0YXJzID0gTWVzaC5DcmVhdGVCb3goXCJlbWl0dGVyXCIsIDAuMDEsIHNjZW5lKTtcblxuICAgIC8vIENyZWF0ZSBhIHBhcnRpY2xlIHN5c3RlbVxuICAgIHZhciBzdXJmYWNlUGFydGljbGVzID0gbmV3IFBhcnRpY2xlU3lzdGVtKFwic3VyZmFjZVBhcnRpY2xlc1wiLCAxNjAwLCBzY2VuZSk7XG4gICAgdmFyIGZsYXJlUGFydGljbGVzID0gbmV3IFBhcnRpY2xlU3lzdGVtKFwiZmxhcmVQYXJ0aWNsZXNcIiwgMjAsIHNjZW5lKTtcbiAgICB2YXIgY29yb25hUGFydGljbGVzID0gbmV3IFBhcnRpY2xlU3lzdGVtKFwiY29yb25hUGFydGljbGVzXCIsIDYwMCwgc2NlbmUpO1xuICAgIC8vIHZhciBzdGFyc1BhcnRpY2xlcyA9IG5ldyBQYXJ0aWNsZVN5c3RlbShcInN0YXJzUGFydGljbGVzXCIsIDUwMCwgc2NlbmUpO1xuXG4gICAgLy8gVGV4dHVyZSBvZiBlYWNoIHBhcnRpY2xlXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgVGV4dHVyZShcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9QYXRyaWNrUnlhbk1TL0JhYnlsb25KU3RleHR1cmVzL21hc3Rlci9QYXJ0aWNsZVN5c3RlbXMvU3VuL1RfU3VuU3VyZmFjZS5wbmdcIiwgc2NlbmUpO1xuICAgIGZsYXJlUGFydGljbGVzLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1BhdHJpY2tSeWFuTVMvQmFieWxvbkpTdGV4dHVyZXMvbWFzdGVyL1BhcnRpY2xlU3lzdGVtcy9TdW4vVF9TdW5GbGFyZS5wbmdcIiwgc2NlbmUpO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgVGV4dHVyZShcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9QYXRyaWNrUnlhbk1TL0JhYnlsb25KU3RleHR1cmVzL21hc3Rlci9QYXJ0aWNsZVN5c3RlbXMvU3VuL1RfU3Rhci5wbmdcIiwgc2NlbmUpO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1BhdHJpY2tSeWFuTVMvQmFieWxvbkpTdGV4dHVyZXMvbWFzdGVyL1BhcnRpY2xlU3lzdGVtcy9TdW4vVF9TdGFyLnBuZ1wiLCBzY2VuZSk7XG5cbiAgICAvLyBDcmVhdGUgY29yZSBzcGhlcmVcbiAgICB2YXIgY29yZVNwaGVyZSA9IE1lc2hCdWlsZGVyLkNyZWF0ZVNwaGVyZShcImNvcmVTcGhlcmVcIiwgeyBkaWFtZXRlcjogMi4wMSwgc2VnbWVudHM6IDY0IH0sIHNjZW5lKTtcblxuICAgIC8vIENyZWF0ZSBjb3JlIG1hdGVyaWFsXG4gICAgdmFyIGNvcmVNYXQgPSBuZXcgU3RhbmRhcmRNYXRlcmlhbChcImNvcmVNYXRcIiwgc2NlbmUpXG4gICAgY29yZU1hdC5lbWlzc2l2ZUNvbG9yID0gbmV3IENvbG9yMygwLjM3NzMsIDAuMDkzMCwgMC4wMjY2KTtcblxuICAgIC8vIEFzc2lnbiBjb3JlIG1hdGVyaWFsIHRvIHNwaGVyZVxuICAgIGNvcmVTcGhlcmUubWF0ZXJpYWwgPSBjb3JlTWF0O1xuXG4gICAgLy8gUHJlLXdhcm1cbiAgICBzdXJmYWNlUGFydGljbGVzLnByZVdhcm1TdGVwT2Zmc2V0ID0gMTA7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5wcmVXYXJtQ3ljbGVzID0gMTAwO1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMucHJlV2FybVN0ZXBPZmZzZXQgPSAxMDtcbiAgICBmbGFyZVBhcnRpY2xlcy5wcmVXYXJtQ3ljbGVzID0gMTAwO1xuXG4gICAgY29yb25hUGFydGljbGVzLnByZVdhcm1TdGVwT2Zmc2V0ID0gMTA7XG4gICAgY29yb25hUGFydGljbGVzLnByZVdhcm1DeWNsZXMgPSAxMDA7XG5cbiAgICAvLyBJbml0aWFsIHJvdGF0aW9uXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5taW5Jbml0aWFsUm90YXRpb24gPSAtMiAqIE1hdGguUEk7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5tYXhJbml0aWFsUm90YXRpb24gPSAyICogTWF0aC5QSTtcblxuICAgIGZsYXJlUGFydGljbGVzLm1pbkluaXRpYWxSb3RhdGlvbiA9IC0yICogTWF0aC5QSTtcbiAgICBmbGFyZVBhcnRpY2xlcy5tYXhJbml0aWFsUm90YXRpb24gPSAyICogTWF0aC5QSTtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5taW5Jbml0aWFsUm90YXRpb24gPSAtMiAqIE1hdGguUEk7XG4gICAgY29yb25hUGFydGljbGVzLm1heEluaXRpYWxSb3RhdGlvbiA9IDIgKiBNYXRoLlBJO1xuXG4gICAgLy8gV2hlcmUgdGhlIHN1biBwYXJ0aWNsZXMgY29tZSBmcm9tXG4gICAgdmFyIHN1bkVtaXR0ZXIgPSBuZXcgU3BoZXJlUGFydGljbGVFbWl0dGVyKCk7XG4gICAgc3VuRW1pdHRlci5yYWRpdXMgPSAxO1xuICAgIHN1bkVtaXR0ZXIucmFkaXVzUmFuZ2UgPSAwOyAvLyBlbWl0IG9ubHkgZnJvbSBzaGFwZSBzdXJmYWNlXG5cbiAgICAvLyAvLyBXaGVyZSB0aGUgc3RhcnMgcGFydGljbGVzIGNvbWUgZnJvbVxuICAgIC8vIHZhciBzdGFyc0VtaXR0ZXIgPSBuZXcgU3BoZXJlUGFydGljbGVFbWl0dGVyKCk7XG4gICAgLy8gc3RhcnNFbWl0dGVyLnJhZGl1cyA9IDIwO1xuICAgIC8vIHN0YXJzRW1pdHRlci5yYWRpdXNSYW5nZSA9IDA7IC8vIGVtaXQgb25seSBmcm9tIHNoYXBlIHN1cmZhY2VcblxuICAgIC8vIEFzc2lnbiBwYXJ0aWNsZXMgdG8gZW1pdHRlcnNcbiAgICBzdXJmYWNlUGFydGljbGVzLmVtaXR0ZXIgPSBjb3JlU3BoZXJlOyAvLyB0aGUgc3RhcnRpbmcgb2JqZWN0LCB0aGUgZW1pdHRlclxuICAgIHN1cmZhY2VQYXJ0aWNsZXMucGFydGljbGVFbWl0dGVyVHlwZSA9IHN1bkVtaXR0ZXI7XG5cbiAgICBmbGFyZVBhcnRpY2xlcy5lbWl0dGVyID0gY29yZVNwaGVyZTsgLy8gdGhlIHN0YXJ0aW5nIG9iamVjdCwgdGhlIGVtaXR0ZXJcbiAgICBmbGFyZVBhcnRpY2xlcy5wYXJ0aWNsZUVtaXR0ZXJUeXBlID0gc3VuRW1pdHRlcjtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5lbWl0dGVyID0gY29yZVNwaGVyZTsgLy8gdGhlIHN0YXJ0aW5nIG9iamVjdCwgdGhlIGVtaXR0ZXJcbiAgICBjb3JvbmFQYXJ0aWNsZXMucGFydGljbGVFbWl0dGVyVHlwZSA9IHN1bkVtaXR0ZXI7XG5cbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5lbWl0dGVyID0gc3RhcnM7IC8vIHRoZSBzdGFydGluZyBvYmplY3QsIHRoZSBlbWl0dGVyXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMucGFydGljbGVFbWl0dGVyVHlwZSA9IHN0YXJzRW1pdHRlcjtcblxuICAgIC8vIC8vIFJhbmRvbSBzdGFydGluZyBjb2xvclxuICAgIC8vIHN0YXJzUGFydGljbGVzLmNvbG9yMSA9IG5ldyBDb2xvcjQoMC44OTgsIDAuNzM3LCAwLjcxOCwgMS4wKTtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5jb2xvcjIgPSBuZXcgQ29sb3I0KDAuNTg0LCAwLjgzMSwgMC44OTQsIDEuMCk7XG5cbiAgICAvLyBDb2xvciBncmFkaWVudCBvdmVyIHRpbWVcbiAgICBzdXJmYWNlUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMCwgbmV3IENvbG9yNCgwLjg1MDksIDAuNDc4NCwgMC4xMDE5LCAwLjApKTtcbiAgICBzdXJmYWNlUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMC40LCBuZXcgQ29sb3I0KDAuNjI1OSwgMC4zMDU2LCAwLjA2MTksIDAuNSkpO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgwLjUsIG5ldyBDb2xvcjQoMC42MDM5LCAwLjI4ODcsIDAuMDU3OSwgMC41KSk7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDEuMCwgbmV3IENvbG9yNCgwLjMyMDcsIDAuMDcxMywgMC4wMDc1LCAwLjApKTtcblxuICAgIGZsYXJlUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMCwgbmV3IENvbG9yNCgxLCAwLjk2MTIsIDAuNTE0MSwgMC4wKSk7XG4gICAgZmxhcmVQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgwLjI1LCBuZXcgQ29sb3I0KDAuOTA1OCwgMC43MTUyLCAwLjM4MjUsIDEuMCkpO1xuICAgIGZsYXJlUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMS4wLCBuZXcgQ29sb3I0KDAuNjMyMCwgMC4wLCAwLjAsIDAuMCkpO1xuXG4gICAgY29yb25hUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMCwgbmV3IENvbG9yNCgwLjg1MDksIDAuNDc4NCwgMC4xMDE5LCAwLjApKTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgwLjUsIG5ldyBDb2xvcjQoMC42MDM5LCAwLjI4ODcsIDAuMDU3OSwgMC4xMikpO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDEuMCwgbmV3IENvbG9yNCgwLjMyMDcsIDAuMDcxMywgMC4wMDc1LCAwLjApKTtcblxuICAgIC8vIFNpemUgb2YgZWFjaCBwYXJ0aWNsZSAocmFuZG9tIGJldHdlZW4uLi5cbiAgICBzdXJmYWNlUGFydGljbGVzLm1pblNpemUgPSAwLjQ7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5tYXhTaXplID0gMC43O1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMubWluU2NhbGVYID0gMC41O1xuICAgIGZsYXJlUGFydGljbGVzLm1pblNjYWxlWSA9IDAuNTtcbiAgICBmbGFyZVBhcnRpY2xlcy5tYXhTY2FsZVggPSAxLjA7XG4gICAgZmxhcmVQYXJ0aWNsZXMubWF4U2NhbGVZID0gMS4wO1xuXG4gICAgY29yb25hUGFydGljbGVzLm1pblNjYWxlWCA9IDAuNTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMubWluU2NhbGVZID0gMC43NTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMubWF4U2NhbGVYID0gMS4yO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5tYXhTY2FsZVkgPSAzLjA7XG5cbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5taW5TaXplID0gMC4xNTtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5tYXhTaXplID0gMC4zO1xuXG4gICAgLy8gU2l6ZSBvdmVyIGxpZmV0aW1lXG4gICAgZmxhcmVQYXJ0aWNsZXMuYWRkU2l6ZUdyYWRpZW50KDAsIDApO1xuICAgIGZsYXJlUGFydGljbGVzLmFkZFNpemVHcmFkaWVudCgxLCAxKTtcblxuICAgIC8vIExpZmUgdGltZSBvZiBlYWNoIHBhcnRpY2xlIChyYW5kb20gYmV0d2Vlbi4uLlxuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWluTGlmZVRpbWUgPSA4LjA7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5tYXhMaWZlVGltZSA9IDguMDtcblxuICAgIGZsYXJlUGFydGljbGVzLm1pbkxpZmVUaW1lID0gMTAuMDtcbiAgICBmbGFyZVBhcnRpY2xlcy5tYXhMaWZlVGltZSA9IDEwLjA7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMubWluTGlmZVRpbWUgPSAyLjA7XG4gICAgY29yb25hUGFydGljbGVzLm1heExpZmVUaW1lID0gMi4wO1xuXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWluTGlmZVRpbWUgPSA5OTk5OTk7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4TGlmZVRpbWUgPSA5OTk5OTk7XG5cbiAgICAvLyBFbWlzc2lvbiByYXRlXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5lbWl0UmF0ZSA9IDIwMDtcbiAgICBmbGFyZVBhcnRpY2xlcy5lbWl0UmF0ZSA9IDE7XG4gICAgY29yb25hUGFydGljbGVzLmVtaXRSYXRlID0gMzAwO1xuXG4gICAgLy8gLy8gQnVyc3QgcmF0ZVxuICAgIC8vIHN0YXJzUGFydGljbGVzLm1hbnVhbEVtaXRDb3VudCA9IDUwMDtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5tYXhFbWl0UG93ZXIgPSAwLjA7XG5cbiAgICAvLyBCbGVuZCBtb2RlIDogQkxFTkRNT0RFX09ORU9ORSwgQkxFTkRNT0RFX1NUQU5EQVJELCBvciBCTEVORE1PREVfQUREXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5ibGVuZE1vZGUgPSBQYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfQUREO1xuICAgIGZsYXJlUGFydGljbGVzLmJsZW5kTW9kZSA9IFBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9BREQ7XG4gICAgY29yb25hUGFydGljbGVzLmJsZW5kTW9kZSA9IFBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9BREQ7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMuYmxlbmRNb2RlID0gUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX1NUQU5EQVJEO1xuXG4gICAgLy8gU2V0IHRoZSBncmF2aXR5IG9mIGFsbCBwYXJ0aWNsZXNcbiAgICBzdXJmYWNlUGFydGljbGVzLmdyYXZpdHkgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcbiAgICBmbGFyZVBhcnRpY2xlcy5ncmF2aXR5ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XG4gICAgY29yb25hUGFydGljbGVzLmdyYXZpdHkgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5ncmF2aXR5ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XG5cbiAgICAvLyBBbmd1bGFyIHNwZWVkLCBpbiByYWRpYW5zXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5taW5Bbmd1bGFyU3BlZWQgPSAtMC40O1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWF4QW5ndWxhclNwZWVkID0gMC40O1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMubWluQW5ndWxhclNwZWVkID0gMC4wO1xuICAgIGZsYXJlUGFydGljbGVzLm1heEFuZ3VsYXJTcGVlZCA9IDAuMDtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5taW5Bbmd1bGFyU3BlZWQgPSAwLjA7XG4gICAgY29yb25hUGFydGljbGVzLm1heEFuZ3VsYXJTcGVlZCA9IDAuMDtcblxuICAgIC8vIHN0YXJzUGFydGljbGVzLm1pbkFuZ3VsYXJTcGVlZCA9IDAuMDtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5tYXhBbmd1bGFyU3BlZWQgPSAwLjA7XG5cbiAgICAvLyBTcGVlZFxuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWluRW1pdFBvd2VyID0gMDtcbiAgICBzdXJmYWNlUGFydGljbGVzLm1heEVtaXRQb3dlciA9IDA7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy51cGRhdGVTcGVlZCA9IDAuMDA1O1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMubWluRW1pdFBvd2VyID0gMC4wMDE7XG4gICAgZmxhcmVQYXJ0aWNsZXMubWF4RW1pdFBvd2VyID0gMC4wMTtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5taW5FbWl0UG93ZXIgPSAwLjA7XG4gICAgY29yb25hUGFydGljbGVzLm1heEVtaXRQb3dlciA9IDAuMDtcblxuICAgIC8vIHN0YXJzUGFydGljbGVzLm1pbkVtaXRQb3dlciA9IDAuMDtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5tYXhBbmd1bGFyU3BlZWQgPSAwLjA7XG5cbiAgICAvLyBObyBiaWxsYm9hcmRcbiAgICBzdXJmYWNlUGFydGljbGVzLmlzQmlsbGJvYXJkQmFzZWQgPSBmYWxzZTtcbiAgICBmbGFyZVBhcnRpY2xlcy5pc0JpbGxib2FyZEJhc2VkID0gdHJ1ZTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMuaXNCaWxsYm9hcmRCYXNlZCA9IHRydWU7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMuaXNCaWxsYm9hcmRCYXNlZCA9IHRydWU7XG5cbiAgICAvLyBSZW5kZXIgT3JkZXJcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5yZW5kZXJpbmdHcm91cElkID0gMDtcbiAgICBjb3JvbmFQYXJ0aWNsZXMucmVuZGVyaW5nR3JvdXBJZCA9IDE7XG4gICAgZmxhcmVQYXJ0aWNsZXMucmVuZGVyaW5nR3JvdXBJZCA9IDI7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5yZW5kZXJpbmdHcm91cElkID0gMztcbiAgICBjb3JlU3BoZXJlLnJlbmRlcmluZ0dyb3VwSWQgPSAzO1xuXG4gICAgLy8gU3RhcnQgdGhlIHBhcnRpY2xlIHN5c3RlbVxuICAgIHN1cmZhY2VQYXJ0aWNsZXMuc3RhcnQoKTtcbiAgICBmbGFyZVBhcnRpY2xlcy5zdGFydCgpO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5zdGFydCgpO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLnN0YXJ0KCk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG59IiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0VuZ2luZXMvZW5naW5lJztcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0aHMvbWF0aCc7XG5pbXBvcnQgeyBNZXNoIH0gZnJvbSBcIkBiYWJ5bG9uanMvY29yZS9NZXNoZXMvbWVzaFwiXG5pbXBvcnQgeyBNZXNoQnVpbGRlciB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NZXNoZXMvbWVzaEJ1aWxkZXInO1xuaW1wb3J0IHsgR3JpZE1hdGVyaWFsIH0gZnJvbSAnQGJhYnlsb25qcy9tYXRlcmlhbHMvZ3JpZCdcblxuaW1wb3J0IFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlclwiO1xuaW1wb3J0ICdAYmFieWxvbmpzL2NvcmUvTG9hZGluZy9sb2FkaW5nU2NyZWVuJ1xuXG5pbXBvcnQgeyBjcmVhdGVTdGFycyB9IGZyb20gJy4vY29tcG9uZW50cy9zdGFycydcbmltcG9ydCB7IGNyZWF0ZVNjZW5lIH0gZnJvbSAnLi9jb21wb25lbnRzL3NjZW5lJ1xuaW1wb3J0IHsgY3JlYXRlU3VuIH0gZnJvbSAnLi9jb21wb25lbnRzL3N1bidcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW5kZXJDYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5cbmNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUoY2FudmFzKTtcbi8vZW5naW5lLmxvYWRpbmdTY3JlZW4gPSBuZXcgQkFCWUxPTi5EZWZhdWx0TG9hZGluZ1NjcmVlbihjYW52YXMsIFwiXCIsIFwiYmxhY2tcIilcblxuZnVuY3Rpb24gY3JlYXRlRGVsYXllZFNjZW5lKCkge1xuICAgIC8vIFNjZW5lXG4gICAgY29uc3QgeyBzY2VuZSB9ID0gY3JlYXRlU2NlbmUoY2FudmFzLCBlbmdpbmUpXG5cbiAgICAvLyBTdHVmZlxuICAgIC8vY29uc3QgeyBTUFMsIHN5c3RlbU1lc2g6IHN0YXJzIH0gPSBjcmVhdGVTdGFycyhzY2VuZSlcbiAgICBjcmVhdGVTdGFycyhzY2VuZSlcbiAgICBjcmVhdGVTdW4oc2NlbmUpXG5cblxuICAgIC8qIHZhciBtYWtlU2hhZG93cz0wO1xuICAgICB2YXIgbG9kPTA7ICovXG5cbiAgICBsZXQgbWF0ZXJpYWwgPSBuZXcgR3JpZE1hdGVyaWFsKFwiZ3JpZFwiLCBzY2VuZSk7XG5cbiAgICAvLyBiYXNlIGdyb3VuZFxuICAgIC8vY29uc3QgZ3JvdW5kID0gTWVzaC5DcmVhdGVHcm91bmQoXCJncm91bmQtMVwiLCA2MDAsIDYwMCwgMjAwLCBzY2VuZSk7XG4gICAgY29uc3QgZ3JvdW5kID0gTWVzaEJ1aWxkZXIuQ3JlYXRlR3JvdW5kKFwiZ3JvdW5kXCIsIHsgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwIH0pXG4gICAgZ3JvdW5kLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG5cbiAgICBsZXQgc3BoZXJlID0gTWVzaC5DcmVhdGVTcGhlcmUoXCJzcGhlcmUtMVwiLCAxNiwgMSwgc2NlbmUpO1xuXG4gICAgc3BoZXJlLnBvc2l0aW9uID0gbmV3IFZlY3RvcjMoMiwgNCwgMClcbiAgICBzcGhlcmUuc2NhbGluZy54ID0gMVxuICAgIHNwaGVyZS5zY2FsaW5nLnkgPSAxXG4gICAgc3BoZXJlLnNjYWxpbmcueiA9IDFcblxuICAgIHNwaGVyZS5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuXG4gICAgLyogY29uc3Qgc2t5Ym94ID0gTWVzaC5DcmVhdGVCb3goXCJCYWNrZ3JvdW5kU2t5Ym94XCIsIDUwMCwgc2NlbmUsIHVuZGVmaW5lZCwgTWVzaC5CQUNLU0lERSk7XG4gICAgICAgIFxuICAgIC8vIENyZWF0ZSBhbmQgdHdlYWsgdGhlIGJhY2tncm91bmQgbWF0ZXJpYWwuXG4gICAgY29uc3QgYmFja2dyb3VuZE1hdGVyaWFsID0gbmV3IEJBQllMT04uQmFja2dyb3VuZE1hdGVyaWFsKFwiYmFja2dyb3VuZE1hdGVyaWFsXCIsIHNjZW5lKTtcbiAgICBiYWNrZ3JvdW5kTWF0ZXJpYWwucmVmbGVjdGlvblRleHR1cmUgPSBuZXcgQkFCWUxPTi5DdWJlVGV4dHVyZShcInRleHR1cmVzL1Ryb3BpY2FsU3VubnlEYXlcIiwgc2NlbmUpO1xuICAgIGJhY2tncm91bmRNYXRlcmlhbC5yZWZsZWN0aW9uVGV4dHVyZS5jb29yZGluYXRlc01vZGUgPSBCQUJZTE9OLlRleHR1cmUuU0tZQk9YX01PREU7XG4gICAgc2t5Ym94Lm1hdGVyaWFsID0gYmFja2dyb3VuZE1hdGVyaWFsOyBcbiAgICB2YXIgZWFydGhNYXRlcmlhbCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoXCJlYXJ0aE1hdGVyaWFsXCIsIHNjZW5lKTtcbiAgICAgICAgZWFydGgubWF0ZXJpYWwgPSBlYXJ0aE1hdGVyaWFsO1xuICAgICAgICBlYXJ0aE1hdGVyaWFsLmFtYmllbnRDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMyguOCwgLjgsIDEpOyAqL1xuICAgIHJldHVybiBzY2VuZVxufVxuXG5sZXQgc2NlbmVcbnNldFRpbWVvdXQoKCkgPT4geyBzY2VuZSA9IGNyZWF0ZURlbGF5ZWRTY2VuZSgpIH0sIDYwMClcblxuZW5naW5lLnJ1blJlbmRlckxvb3AoKCkgPT4ge1xuICAgIGlmICghc2NlbmUpIHtcbiAgICAgICAgZW5naW5lLmRpc3BsYXlMb2FkaW5nVUkoKVxuICAgIH1cbiAgICBpZiAoc2NlbmUpIHtcbiAgICAgICAgc2NlbmUucmVuZGVyKCk7XG4gICAgICAgIGVuZ2luZS5oaWRlTG9hZGluZ1VJKClcbiAgICB9XG59KSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIHRoZSBzdGFydHVwIGZ1bmN0aW9uXG4vLyBJdCdzIGVtcHR5IGFzIHNvbWUgcnVudGltZSBtb2R1bGUgaGFuZGxlcyB0aGUgZGVmYXVsdCBiZWhhdmlvclxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0geCA9PiB7fTtcbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxudmFyIGRlZmVycmVkTW9kdWxlcyA9IFtcblx0W1wiLi9zcmMvaW5kZXgudHNcIixcInZlbmRvcnNcIl1cbl07XG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSB4ID0+IHt9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZSwgZXhlY3V0ZU1vZHVsZXNdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcblx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG5cdH1cblxuXHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG5cdGlmKGV4ZWN1dGVNb2R1bGVzKSBkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcblxuXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcblx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5reHZlcnNlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3h2ZXJzZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7XG5cbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSB4ID0+IHt9O1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG52YXIgc3RhcnR1cCA9IF9fd2VicGFja19yZXF1aXJlX18ueDtcbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gc3RhcnR1cCB8fCAoeCA9PiB7fSk7XG5cdHJldHVybiAoY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwpKCk7XG59OyIsIi8vIHJ1biBzdGFydHVwXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==