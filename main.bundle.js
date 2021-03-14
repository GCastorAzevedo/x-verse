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
    var camera = new freeCamera_1.FreeCamera("xverse", new math_1.Vector3(0, 0, -10), scene);
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
var grid_1 = __webpack_require__(/*! @babylonjs/materials/grid */ "./node_modules/@babylonjs/materials/grid/index.js");
__webpack_require__(/*! @babylonjs/core/Meshes/meshBuilder */ "./node_modules/@babylonjs/core/Meshes/meshBuilder.js");
__webpack_require__(/*! @babylonjs/core/Loading/loadingScreen */ "./node_modules/@babylonjs/core/Loading/loadingScreen.js");
var stars_1 = __webpack_require__(/*! ./components/stars */ "./src/components/stars.ts");
var scene_1 = __webpack_require__(/*! ./components/scene */ "./src/components/scene.ts");
var sun_1 = __webpack_require__(/*! ./components/sun */ "./src/components/sun.ts");
var nebula_1 = __webpack_require__(/*! ./components/nebula */ "./src/components/nebula.ts");
var canvas = document.getElementById("renderCanvas");
var engine = new engine_1.Engine(canvas);
function createDelayedScene() {
    var scene = scene_1.createScene(canvas, engine).scene;
    var nebula = new nebula_1.NebulaBackground(scene);
    stars_1.createStars(scene);
    sun_1.createSun(scene);
    var material = new grid_1.GridMaterial("grid", scene);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvY29tcG9uZW50cy9uZWJ1bGEudHMiLCJ3ZWJwYWNrOi8veHZlcnNlLy4vc3JjL2NvbXBvbmVudHMvc2NlbmUudHMiLCJ3ZWJwYWNrOi8veHZlcnNlLy4vc3JjL2NvbXBvbmVudHMvc3RhcnMudHMiLCJ3ZWJwYWNrOi8veHZlcnNlLy4vc3JjL2NvbXBvbmVudHMvc3VuLnRzIiwid2VicGFjazovL3h2ZXJzZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EscUhBQWtEO0FBQ2xELHNKQUFvRTtBQUNwRSxrS0FBNEU7QUFDNUUsMkxBQTRGO0FBRzVGO0lBR0ksMEJBQVksS0FBWTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLFdBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHVDQUFrQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFDN0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsS0FBSztRQUUzQyxJQUFNLEtBQUssR0FBRztZQUNWLG1DQUFtQztZQUNuQyxpQ0FBaUM7WUFDakMsb0NBQW9DO1lBQ3BDLG9DQUFv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S0FDekI7QUFDTCxDQUFDLENBQUM7Ozs7Ozs7VUMxRUY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDO1dBQ0E7V0FDQSxnQkFBZ0IsMkJBQTJCO1dBQzNDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSw0Q0FBNEM7V0FDNUM7V0FDQSxFOzs7OztVQ3BGQTtVQUNBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSBcIkBiYWJ5bG9uanMvY29yZS9NZXNoZXMvbWVzaFwiXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlJ1xuaW1wb3J0IHsgQ3ViZVRleHR1cmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2N1YmVUZXh0dXJlJ1xuaW1wb3J0IHsgQmFja2dyb3VuZE1hdGVyaWFsIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGVyaWFscy9CYWNrZ3JvdW5kL2JhY2tncm91bmRNYXRlcmlhbCdcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL3NjZW5lJ1xuXG5leHBvcnQgY2xhc3MgTmVidWxhQmFja2dyb3VuZCB7XG4gICAgc2t5Ym94OiBNZXNoXG4gICAgc2t5Ym94TWF0ZXJpYWw6IEJhY2tncm91bmRNYXRlcmlhbFxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBTY2VuZSkge1xuICAgICAgICB0aGlzLnNreWJveCA9IE1lc2guQ3JlYXRlQm94KFwic2t5Qm94XCIsIDEwMDAwLjAsIHNjZW5lKVxuICAgICAgICB0aGlzLnNreWJveE1hdGVyaWFsID0gbmV3IEJhY2tncm91bmRNYXRlcmlhbChcInNreUJveFwiLCBzY2VuZSlcbiAgICAgICAgdGhpcy5za3lib3hNYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcgPSBmYWxzZVxuICAgICAgICAvLyB0aGlzLnNreWJveE1hdGVyaWFsLmRpc2FibGVMaWdodGluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gW1xuICAgICAgICAgICAgXCJzcmMvdGV4dHVyZXMvc3BhY2Uvc3BhY2VfbGVmdC5qcGdcIixcbiAgICAgICAgICAgIFwic3JjL3RleHR1cmVzL3NwYWNlL3NwYWNlX3VwLmpwZ1wiLFxuICAgICAgICAgICAgXCJzcmMvdGV4dHVyZXMvc3BhY2Uvc3BhY2VfZnJvbnQuanBnXCIsXG4gICAgICAgICAgICBcInNyYy90ZXh0dXJlcy9zcGFjZS9zcGFjZV9yaWdodC5qcGdcIixcbiAgICAgICAgICAgIFwic3JjL3RleHR1cmVzL3NwYWNlL3NwYWNlX2Rvd24uanBnXCIsXG4gICAgICAgICAgICBcInNyYy90ZXh0dXJlcy9zcGFjZS9zcGFjZV9iYWNrLmpwZ1wiXG4gICAgICAgIF1cbiAgICAgICAgdGhpcy5za3lib3hNYXRlcmlhbC5yZWZsZWN0aW9uVGV4dHVyZSA9IEN1YmVUZXh0dXJlLkNyZWF0ZUZyb21JbWFnZXMoZmlsZXMsIHNjZW5lKVxuICAgICAgICB0aGlzLnNreWJveE1hdGVyaWFsLnJlZmxlY3Rpb25UZXh0dXJlLmNvb3JkaW5hdGVzTW9kZSA9IFRleHR1cmUuU0tZQk9YX01PREVcbiAgICAgICAgdGhpcy5za3lib3gubWF0ZXJpYWwgPSB0aGlzLnNreWJveE1hdGVyaWFsXG4gICAgICAgIHRoaXMuc2t5Ym94LmluZmluaXRlRGlzdGFuY2UgPSB0cnVlXG4gICAgfVxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL3NjZW5lJztcbmltcG9ydCB7IEVuZ2luZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9FbmdpbmVzL2VuZ2luZSdcbmltcG9ydCB7IENvbG9yMywgQ29sb3I0LCBWZWN0b3IzIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGhzL21hdGgnO1xuaW1wb3J0IHsgRnJlZUNhbWVyYSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9DYW1lcmFzL2ZyZWVDYW1lcmEnO1xuaW1wb3J0IHsgVW5pdmVyc2FsQ2FtZXJhIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0NhbWVyYXMvdW5pdmVyc2FsQ2FtZXJhJ1xuaW1wb3J0IHsgSGVtaXNwaGVyaWNMaWdodCB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9MaWdodHMvaGVtaXNwaGVyaWNMaWdodCdcblxuaW1wb3J0IFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlclwiO1xuXG5pbnRlcmZhY2UgSVNjZW5lT3V0cHV0IHtcbiAgICBzY2VuZTogU2NlbmUsXG4gICAgY2FtZXJhOiBGcmVlQ2FtZXJhIHwgVW5pdmVyc2FsQ2FtZXJhLFxuICAgIGxpZ2h0OiBIZW1pc3BoZXJpY0xpZ2h0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTY2VuZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBlbmdpbmU6IEVuZ2luZSk6IElTY2VuZU91dHB1dCB7XG5cbiAgICAvLyBTY2VuZVxuICAgIGNvbnN0IHNjZW5lID0gbmV3IFNjZW5lKGVuZ2luZSk7XG5cbiAgICBzY2VuZS5jbGVhckNvbG9yID0gbmV3IENvbG9yNCgwLCAwLCAwLCAxKVxuXG4gICAgLy8gQ2FtZXJhXG4gICAgY29uc3QgY2FtZXJhID0gbmV3IEZyZWVDYW1lcmEoXCJ4dmVyc2VcIiwgbmV3IFZlY3RvcjMoMCwgMCwgLTEwKSwgc2NlbmUpXG4gICAgLyogdmFyIGNhbWVyYSA9IG5ldyBCQUJZTE9OLkFyY1JvdGF0ZUNhbWVyYShcImNhbWVyYTFcIiwgMCwgMCwgMCwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAtMCksIHNjZW5lKTtcbiAgICAgY2FtZXJhLnNldFBvc2l0aW9uKG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMTQwMCwgNTApKTtcbiAgICAgY2FtZXJhLndoZWVsUHJlY2lzaW9uID0gMTsgKi9cblxuICAgIC8vY2FtZXJhLnNldFRhcmdldChWZWN0b3IzLlplcm8oKSk7XG5cbiAgICBjYW1lcmEuYXR0YWNoQ29udHJvbChjYW52YXMsIHRydWUpO1xuXG4gICAgLy8gTGlnaHRcbiAgICBsZXQgbGlnaHQgPSBuZXcgSGVtaXNwaGVyaWNMaWdodChcImxpZ2h0XCIsIG5ldyBWZWN0b3IzKDEwMCwgMjAwLCAzMDApLCBzY2VuZSk7XG4gICAgbGlnaHQuaW50ZW5zaXR5ID0gMTtcbiAgICBsaWdodC5zcGVjdWxhciA9IENvbG9yMy5XaGl0ZSgpLy9uZXcgQ29sb3IzKDAuOTUsIDAuMTUsIDAuMTEpXG5cbiAgICByZXR1cm4geyBzY2VuZSwgY2FtZXJhLCBsaWdodCB9XG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvc2NlbmUnO1xuaW1wb3J0IHsgVmVjdG9yMywgQ29sb3I0LCBNYXRyaXggfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0aHMvbWF0aCc7XG5pbXBvcnQgeyBNZXNoIH0gZnJvbSBcIkBiYWJ5bG9uanMvY29yZS9NZXNoZXMvbWVzaFwiXG5pbXBvcnQgeyBQYXJ0aWNsZVN5c3RlbSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9QYXJ0aWNsZXMvcGFydGljbGVTeXN0ZW0nXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlJ1xuaW1wb3J0IHsgU3BoZXJlUGFydGljbGVFbWl0dGVyIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL1BhcnRpY2xlcy9FbWl0dGVyVHlwZXMvc3BoZXJlUGFydGljbGVFbWl0dGVyJ1xuaW1wb3J0IHsgR2xvd0xheWVyIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0xheWVycy9nbG93TGF5ZXInXG5pbXBvcnQgeyBQYXJ0aWNsZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdGFycyhzY2VuZTogU2NlbmUpIHtcbiAgICAvLyBQYXJ0aWNsZVN5c3RlbSAgU3BoZXJlUGFydGljbGVFbWl0dGVyXG4gICAgY29uc3QgYmFzZVN0YXJNb2RlbCA9IE1lc2guQ3JlYXRlQm94KFwiZW1pdHRlclwiLCAwLjAxLCBzY2VuZSlcbiAgICBjb25zdCBzdGFyc1BhcnRpY2xlcyA9IG5ldyBQYXJ0aWNsZVN5c3RlbShcInN0YXJQYXJ0aWNsZXNcIiwgNzAwMCwgc2NlbmUpXG4gICAgLy8gY29uc3QgZ2wgPSBuZXcgR2xvd0xheWVyKFwic3Rhckdsb3dcIiwgc2NlbmUsIHsgYmx1cktlcm5lbFNpemU6IDY0IH0pO1xuXG4gICAgc3RhcnNQYXJ0aWNsZXMucGFydGljbGVUZXh0dXJlID0gbmV3IFRleHR1cmUoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUGF0cmlja1J5YW5NUy9CYWJ5bG9uSlN0ZXh0dXJlcy9tYXN0ZXIvUGFydGljbGVTeXN0ZW1zL1N1bi9UX1N0YXIucG5nXCIsIHNjZW5lKVxuICAgIFxuICAgIGNvbnN0IG1pbkRpc3RhbmNlID0gMFxuICAgIGNvbnN0IHNjYWxlID0gNDBcbiAgICBjb25zdCBpbmRpY2F0b3JGdW5jdGlvbiA9ICgpID0+IE1hdGgucmFuZG9tKCkgPCAuNSA/IC0xOiAxXG4gICAgY29uc3QgZ2V0UG9zaXRpb24gPSAoKSA9PiBtaW5EaXN0YW5jZSArIChNYXRoLnJhbmRvbSgpICogKHNjYWxlICogaW5kaWNhdG9yRnVuY3Rpb24oKSkpXG4gICAgY29uc3QgZ2V0UmFuZG9tUG9zaXRpb24gPSAoKSA9PiBbZ2V0UG9zaXRpb24oKSwgZ2V0UG9zaXRpb24oKSwgZ2V0UG9zaXRpb24oKV1cbiAgICBzdGFyc1BhcnRpY2xlcy5zdGFydFBvc2l0aW9uRnVuY3Rpb24gPSAod29ybGRNYXRyaXg6IE1hdHJpeCwgcG9zaXRpb25Ub1VwZGF0ZTogVmVjdG9yMywgcGFydGljbGU6IFBhcnRpY2xlLCBpc0xvY2FsOiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IFt4LCB5LCB6XSA9IGdldFJhbmRvbVBvc2l0aW9uKClcbiAgICAgICAgVmVjdG9yMy5UcmFuc2Zvcm1Db29yZGluYXRlc0Zyb21GbG9hdHNUb1JlZih4LCB5LCB6LCB3b3JsZE1hdHJpeCwgcG9zaXRpb25Ub1VwZGF0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBzdGFyc0VtaXR0ZXIgPSBuZXcgU3BoZXJlUGFydGljbGVFbWl0dGVyKClcbiAgICBzdGFyc0VtaXR0ZXIucmFkaXVzID0gMzBcbiAgICBzdGFyc0VtaXR0ZXIucmFkaXVzUmFuZ2UgPSAxXG4gICAgc3RhcnNFbWl0dGVyLnN0YXJ0UG9zaXRpb25GdW5jdGlvbiA9ICh3b3JsZE1hdHJpeDogTWF0cml4LCBwb3NpdGlvblRvVXBkYXRlOiBWZWN0b3IzLCBwYXJ0aWNsZTogUGFydGljbGUsIGlzTG9jYWw6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgW3gsIHksIHpdID0gZ2V0UmFuZG9tUG9zaXRpb24oKVxuICAgICAgICBWZWN0b3IzLlRyYW5zZm9ybUNvb3JkaW5hdGVzRnJvbUZsb2F0c1RvUmVmKHgsIHksIHosIHdvcmxkTWF0cml4LCBwb3NpdGlvblRvVXBkYXRlKVxuICAgIH1cblxuICAgIHN0YXJzUGFydGljbGVzLmVtaXR0ZXIgPSBiYXNlU3Rhck1vZGVsXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMuZW1pdHRlciA9IFZlY3RvcjMuWmVybygpXG4gICAgc3RhcnNQYXJ0aWNsZXMucGFydGljbGVFbWl0dGVyVHlwZSA9IHN0YXJzRW1pdHRlclxuXG4gICAgc3RhcnNQYXJ0aWNsZXMuY29sb3IxID0gbmV3IENvbG9yNCgwLjg5OCwgMC43MzcsIDAuNzE4LCAxLjApO1xuICAgIHN0YXJzUGFydGljbGVzLmNvbG9yMiA9IG5ldyBDb2xvcjQoMC41ODQsIDAuODMxLCAwLjg5NCwgMS4wKTtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5taW5FbWl0Qm94ID0gbmV3IFZlY3RvcjMoMTAsIDEwLCAxMClcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5tYXhFbWl0Qm94ID0gbmV3IFZlY3RvcjMoMTAwLCAxMDAsIDEwMClcbiAgICBzdGFyc1BhcnRpY2xlcy5taW5MaWZlVGltZSA9IDk5OTk5OVxuICAgIHN0YXJzUGFydGljbGVzLm1heExpZmVUaW1lID0gOTk5OTk5XG4gICAgc3RhcnNQYXJ0aWNsZXMubWFudWFsRW1pdENvdW50ID0gNTAwO1xuICAgIHN0YXJzUGFydGljbGVzLm1heEVtaXRQb3dlciA9IDAuMDtcbiAgICBzdGFyc1BhcnRpY2xlcy5taW5TaXplID0gMC4xNS8vMC4xNTtcbiAgICBzdGFyc1BhcnRpY2xlcy5tYXhTaXplID0gLjcvLzAuMztcbiAgICBzdGFyc1BhcnRpY2xlcy5ibGVuZE1vZGUgPSBQYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfU1RBTkRBUkRcbiAgICBzdGFyc1BhcnRpY2xlcy5ncmF2aXR5ID0gbmV3IFZlY3RvcjMoMCwgMCwgMClcbiAgICBzdGFyc1BhcnRpY2xlcy5taW5Bbmd1bGFyU3BlZWQgPSAwLjBcbiAgICBzdGFyc1BhcnRpY2xlcy5tYXhBbmd1bGFyU3BlZWQgPSAwLjBcbiAgICBzdGFyc1BhcnRpY2xlcy5pc0JpbGxib2FyZEJhc2VkID0gdHJ1ZVxuICAgIHN0YXJzUGFydGljbGVzLnJlbmRlcmluZ0dyb3VwSWQgPSAwO1xuICAgIHN0YXJzUGFydGljbGVzLnN0YXJ0KClcblxuICAgIHJldHVybiBzY2VuZTtcbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9zY2VuZSc7XG5pbXBvcnQgeyBWZWN0b3IzLCBDb2xvcjQsIENvbG9yMyB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRocy9tYXRoJztcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoXCJcbmltcG9ydCB7IE1lc2hCdWlsZGVyIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlcidcbmltcG9ydCB7IFBhcnRpY2xlU3lzdGVtIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL1BhcnRpY2xlcy9wYXJ0aWNsZVN5c3RlbSdcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmUnXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWwnXG5pbXBvcnQgeyBTcGhlcmVQYXJ0aWNsZUVtaXR0ZXIgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvUGFydGljbGVzL0VtaXR0ZXJUeXBlcy9zcGhlcmVQYXJ0aWNsZUVtaXR0ZXInXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN1bihzY2VuZTogU2NlbmUpIHtcbiAgICAvLyBFbWl0dGVyIG9iamVjdFxuICAgIHZhciBzdGFycyA9IE1lc2guQ3JlYXRlQm94KFwiZW1pdHRlclwiLCAwLjAxLCBzY2VuZSk7XG5cbiAgICAvLyBDcmVhdGUgYSBwYXJ0aWNsZSBzeXN0ZW1cbiAgICB2YXIgc3VyZmFjZVBhcnRpY2xlcyA9IG5ldyBQYXJ0aWNsZVN5c3RlbShcInN1cmZhY2VQYXJ0aWNsZXNcIiwgMTYwMCwgc2NlbmUpO1xuICAgIHZhciBmbGFyZVBhcnRpY2xlcyA9IG5ldyBQYXJ0aWNsZVN5c3RlbShcImZsYXJlUGFydGljbGVzXCIsIDIwLCBzY2VuZSk7XG4gICAgdmFyIGNvcm9uYVBhcnRpY2xlcyA9IG5ldyBQYXJ0aWNsZVN5c3RlbShcImNvcm9uYVBhcnRpY2xlc1wiLCA2MDAsIHNjZW5lKTtcbiAgICAvLyB2YXIgc3RhcnNQYXJ0aWNsZXMgPSBuZXcgUGFydGljbGVTeXN0ZW0oXCJzdGFyc1BhcnRpY2xlc1wiLCA1MDAsIHNjZW5lKTtcblxuICAgIC8vIFRleHR1cmUgb2YgZWFjaCBwYXJ0aWNsZVxuICAgIHN1cmZhY2VQYXJ0aWNsZXMucGFydGljbGVUZXh0dXJlID0gbmV3IFRleHR1cmUoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUGF0cmlja1J5YW5NUy9CYWJ5bG9uSlN0ZXh0dXJlcy9tYXN0ZXIvUGFydGljbGVTeXN0ZW1zL1N1bi9UX1N1blN1cmZhY2UucG5nXCIsIHNjZW5lKTtcbiAgICBmbGFyZVBhcnRpY2xlcy5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgVGV4dHVyZShcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9QYXRyaWNrUnlhbk1TL0JhYnlsb25KU3RleHR1cmVzL21hc3Rlci9QYXJ0aWNsZVN5c3RlbXMvU3VuL1RfU3VuRmxhcmUucG5nXCIsIHNjZW5lKTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMucGFydGljbGVUZXh0dXJlID0gbmV3IFRleHR1cmUoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUGF0cmlja1J5YW5NUy9CYWJ5bG9uSlN0ZXh0dXJlcy9tYXN0ZXIvUGFydGljbGVTeXN0ZW1zL1N1bi9UX1N0YXIucG5nXCIsIHNjZW5lKTtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgVGV4dHVyZShcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9QYXRyaWNrUnlhbk1TL0JhYnlsb25KU3RleHR1cmVzL21hc3Rlci9QYXJ0aWNsZVN5c3RlbXMvU3VuL1RfU3Rhci5wbmdcIiwgc2NlbmUpO1xuXG4gICAgLy8gQ3JlYXRlIGNvcmUgc3BoZXJlXG4gICAgdmFyIGNvcmVTcGhlcmUgPSBNZXNoQnVpbGRlci5DcmVhdGVTcGhlcmUoXCJjb3JlU3BoZXJlXCIsIHsgZGlhbWV0ZXI6IDIuMDEsIHNlZ21lbnRzOiA2NCB9LCBzY2VuZSk7XG5cbiAgICAvLyBDcmVhdGUgY29yZSBtYXRlcmlhbFxuICAgIHZhciBjb3JlTWF0ID0gbmV3IFN0YW5kYXJkTWF0ZXJpYWwoXCJjb3JlTWF0XCIsIHNjZW5lKVxuICAgIGNvcmVNYXQuZW1pc3NpdmVDb2xvciA9IG5ldyBDb2xvcjMoMC4zNzczLCAwLjA5MzAsIDAuMDI2Nik7XG5cbiAgICAvLyBBc3NpZ24gY29yZSBtYXRlcmlhbCB0byBzcGhlcmVcbiAgICBjb3JlU3BoZXJlLm1hdGVyaWFsID0gY29yZU1hdDtcblxuICAgIC8vIFByZS13YXJtXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5wcmVXYXJtU3RlcE9mZnNldCA9IDEwO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMucHJlV2FybUN5Y2xlcyA9IDEwMDtcblxuICAgIGZsYXJlUGFydGljbGVzLnByZVdhcm1TdGVwT2Zmc2V0ID0gMTA7XG4gICAgZmxhcmVQYXJ0aWNsZXMucHJlV2FybUN5Y2xlcyA9IDEwMDtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5wcmVXYXJtU3RlcE9mZnNldCA9IDEwO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5wcmVXYXJtQ3ljbGVzID0gMTAwO1xuXG4gICAgLy8gSW5pdGlhbCByb3RhdGlvblxuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWluSW5pdGlhbFJvdGF0aW9uID0gLTIgKiBNYXRoLlBJO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWF4SW5pdGlhbFJvdGF0aW9uID0gMiAqIE1hdGguUEk7XG5cbiAgICBmbGFyZVBhcnRpY2xlcy5taW5Jbml0aWFsUm90YXRpb24gPSAtMiAqIE1hdGguUEk7XG4gICAgZmxhcmVQYXJ0aWNsZXMubWF4SW5pdGlhbFJvdGF0aW9uID0gMiAqIE1hdGguUEk7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMubWluSW5pdGlhbFJvdGF0aW9uID0gLTIgKiBNYXRoLlBJO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5tYXhJbml0aWFsUm90YXRpb24gPSAyICogTWF0aC5QSTtcblxuICAgIC8vIFdoZXJlIHRoZSBzdW4gcGFydGljbGVzIGNvbWUgZnJvbVxuICAgIHZhciBzdW5FbWl0dGVyID0gbmV3IFNwaGVyZVBhcnRpY2xlRW1pdHRlcigpO1xuICAgIHN1bkVtaXR0ZXIucmFkaXVzID0gMTtcbiAgICBzdW5FbWl0dGVyLnJhZGl1c1JhbmdlID0gMDsgLy8gZW1pdCBvbmx5IGZyb20gc2hhcGUgc3VyZmFjZVxuXG4gICAgLy8gLy8gV2hlcmUgdGhlIHN0YXJzIHBhcnRpY2xlcyBjb21lIGZyb21cbiAgICAvLyB2YXIgc3RhcnNFbWl0dGVyID0gbmV3IFNwaGVyZVBhcnRpY2xlRW1pdHRlcigpO1xuICAgIC8vIHN0YXJzRW1pdHRlci5yYWRpdXMgPSAyMDtcbiAgICAvLyBzdGFyc0VtaXR0ZXIucmFkaXVzUmFuZ2UgPSAwOyAvLyBlbWl0IG9ubHkgZnJvbSBzaGFwZSBzdXJmYWNlXG5cbiAgICAvLyBBc3NpZ24gcGFydGljbGVzIHRvIGVtaXR0ZXJzXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5lbWl0dGVyID0gY29yZVNwaGVyZTsgLy8gdGhlIHN0YXJ0aW5nIG9iamVjdCwgdGhlIGVtaXR0ZXJcbiAgICBzdXJmYWNlUGFydGljbGVzLnBhcnRpY2xlRW1pdHRlclR5cGUgPSBzdW5FbWl0dGVyO1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMuZW1pdHRlciA9IGNvcmVTcGhlcmU7IC8vIHRoZSBzdGFydGluZyBvYmplY3QsIHRoZSBlbWl0dGVyXG4gICAgZmxhcmVQYXJ0aWNsZXMucGFydGljbGVFbWl0dGVyVHlwZSA9IHN1bkVtaXR0ZXI7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMuZW1pdHRlciA9IGNvcmVTcGhlcmU7IC8vIHRoZSBzdGFydGluZyBvYmplY3QsIHRoZSBlbWl0dGVyXG4gICAgY29yb25hUGFydGljbGVzLnBhcnRpY2xlRW1pdHRlclR5cGUgPSBzdW5FbWl0dGVyO1xuXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMuZW1pdHRlciA9IHN0YXJzOyAvLyB0aGUgc3RhcnRpbmcgb2JqZWN0LCB0aGUgZW1pdHRlclxuICAgIC8vIHN0YXJzUGFydGljbGVzLnBhcnRpY2xlRW1pdHRlclR5cGUgPSBzdGFyc0VtaXR0ZXI7XG5cbiAgICAvLyAvLyBSYW5kb20gc3RhcnRpbmcgY29sb3JcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5jb2xvcjEgPSBuZXcgQ29sb3I0KDAuODk4LCAwLjczNywgMC43MTgsIDEuMCk7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMuY29sb3IyID0gbmV3IENvbG9yNCgwLjU4NCwgMC44MzEsIDAuODk0LCAxLjApO1xuXG4gICAgLy8gQ29sb3IgZ3JhZGllbnQgb3ZlciB0aW1lXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAsIG5ldyBDb2xvcjQoMC44NTA5LCAwLjQ3ODQsIDAuMTAxOSwgMC4wKSk7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAuNCwgbmV3IENvbG9yNCgwLjYyNTksIDAuMzA1NiwgMC4wNjE5LCAwLjUpKTtcbiAgICBzdXJmYWNlUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMC41LCBuZXcgQ29sb3I0KDAuNjAzOSwgMC4yODg3LCAwLjA1NzksIDAuNSkpO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgxLjAsIG5ldyBDb2xvcjQoMC4zMjA3LCAwLjA3MTMsIDAuMDA3NSwgMC4wKSk7XG5cbiAgICBmbGFyZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAsIG5ldyBDb2xvcjQoMSwgMC45NjEyLCAwLjUxNDEsIDAuMCkpO1xuICAgIGZsYXJlUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMC4yNSwgbmV3IENvbG9yNCgwLjkwNTgsIDAuNzE1MiwgMC4zODI1LCAxLjApKTtcbiAgICBmbGFyZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDEuMCwgbmV3IENvbG9yNCgwLjYzMjAsIDAuMCwgMC4wLCAwLjApKTtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAsIG5ldyBDb2xvcjQoMC44NTA5LCAwLjQ3ODQsIDAuMTAxOSwgMC4wKSk7XG4gICAgY29yb25hUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMC41LCBuZXcgQ29sb3I0KDAuNjAzOSwgMC4yODg3LCAwLjA1NzksIDAuMTIpKTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgxLjAsIG5ldyBDb2xvcjQoMC4zMjA3LCAwLjA3MTMsIDAuMDA3NSwgMC4wKSk7XG5cbiAgICAvLyBTaXplIG9mIGVhY2ggcGFydGljbGUgKHJhbmRvbSBiZXR3ZWVuLi4uXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5taW5TaXplID0gMC40O1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWF4U2l6ZSA9IDAuNztcblxuICAgIGZsYXJlUGFydGljbGVzLm1pblNjYWxlWCA9IDAuNTtcbiAgICBmbGFyZVBhcnRpY2xlcy5taW5TY2FsZVkgPSAwLjU7XG4gICAgZmxhcmVQYXJ0aWNsZXMubWF4U2NhbGVYID0gMS4wO1xuICAgIGZsYXJlUGFydGljbGVzLm1heFNjYWxlWSA9IDEuMDtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5taW5TY2FsZVggPSAwLjU7XG4gICAgY29yb25hUGFydGljbGVzLm1pblNjYWxlWSA9IDAuNzU7XG4gICAgY29yb25hUGFydGljbGVzLm1heFNjYWxlWCA9IDEuMjtcbiAgICBjb3JvbmFQYXJ0aWNsZXMubWF4U2NhbGVZID0gMy4wO1xuXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWluU2l6ZSA9IDAuMTU7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4U2l6ZSA9IDAuMztcblxuICAgIC8vIFNpemUgb3ZlciBsaWZldGltZVxuICAgIGZsYXJlUGFydGljbGVzLmFkZFNpemVHcmFkaWVudCgwLCAwKTtcbiAgICBmbGFyZVBhcnRpY2xlcy5hZGRTaXplR3JhZGllbnQoMSwgMSk7XG5cbiAgICAvLyBMaWZlIHRpbWUgb2YgZWFjaCBwYXJ0aWNsZSAocmFuZG9tIGJldHdlZW4uLi5cbiAgICBzdXJmYWNlUGFydGljbGVzLm1pbkxpZmVUaW1lID0gOC4wO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWF4TGlmZVRpbWUgPSA4LjA7XG5cbiAgICBmbGFyZVBhcnRpY2xlcy5taW5MaWZlVGltZSA9IDEwLjA7XG4gICAgZmxhcmVQYXJ0aWNsZXMubWF4TGlmZVRpbWUgPSAxMC4wO1xuXG4gICAgY29yb25hUGFydGljbGVzLm1pbkxpZmVUaW1lID0gMi4wO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5tYXhMaWZlVGltZSA9IDIuMDtcblxuICAgIC8vIHN0YXJzUGFydGljbGVzLm1pbkxpZmVUaW1lID0gOTk5OTk5O1xuICAgIC8vIHN0YXJzUGFydGljbGVzLm1heExpZmVUaW1lID0gOTk5OTk5O1xuXG4gICAgLy8gRW1pc3Npb24gcmF0ZVxuICAgIHN1cmZhY2VQYXJ0aWNsZXMuZW1pdFJhdGUgPSAyMDA7XG4gICAgZmxhcmVQYXJ0aWNsZXMuZW1pdFJhdGUgPSAxO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5lbWl0UmF0ZSA9IDMwMDtcblxuICAgIC8vIC8vIEJ1cnN0IHJhdGVcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5tYW51YWxFbWl0Q291bnQgPSA1MDA7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4RW1pdFBvd2VyID0gMC4wO1xuXG4gICAgLy8gQmxlbmQgbW9kZSA6IEJMRU5ETU9ERV9PTkVPTkUsIEJMRU5ETU9ERV9TVEFOREFSRCwgb3IgQkxFTkRNT0RFX0FERFxuICAgIHN1cmZhY2VQYXJ0aWNsZXMuYmxlbmRNb2RlID0gUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX0FERDtcbiAgICBmbGFyZVBhcnRpY2xlcy5ibGVuZE1vZGUgPSBQYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfQUREO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5ibGVuZE1vZGUgPSBQYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfQUREO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLmJsZW5kTW9kZSA9IFBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9TVEFOREFSRDtcblxuICAgIC8vIFNldCB0aGUgZ3Jhdml0eSBvZiBhbGwgcGFydGljbGVzXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5ncmF2aXR5ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XG4gICAgZmxhcmVQYXJ0aWNsZXMuZ3Jhdml0eSA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5ncmF2aXR5ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMuZ3Jhdml0eSA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xuXG4gICAgLy8gQW5ndWxhciBzcGVlZCwgaW4gcmFkaWFuc1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWluQW5ndWxhclNwZWVkID0gLTAuNDtcbiAgICBzdXJmYWNlUGFydGljbGVzLm1heEFuZ3VsYXJTcGVlZCA9IDAuNDtcblxuICAgIGZsYXJlUGFydGljbGVzLm1pbkFuZ3VsYXJTcGVlZCA9IDAuMDtcbiAgICBmbGFyZVBhcnRpY2xlcy5tYXhBbmd1bGFyU3BlZWQgPSAwLjA7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMubWluQW5ndWxhclNwZWVkID0gMC4wO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5tYXhBbmd1bGFyU3BlZWQgPSAwLjA7XG5cbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5taW5Bbmd1bGFyU3BlZWQgPSAwLjA7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4QW5ndWxhclNwZWVkID0gMC4wO1xuXG4gICAgLy8gU3BlZWRcbiAgICBzdXJmYWNlUGFydGljbGVzLm1pbkVtaXRQb3dlciA9IDA7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5tYXhFbWl0UG93ZXIgPSAwO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMudXBkYXRlU3BlZWQgPSAwLjAwNTtcblxuICAgIGZsYXJlUGFydGljbGVzLm1pbkVtaXRQb3dlciA9IDAuMDAxO1xuICAgIGZsYXJlUGFydGljbGVzLm1heEVtaXRQb3dlciA9IDAuMDE7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMubWluRW1pdFBvd2VyID0gMC4wO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5tYXhFbWl0UG93ZXIgPSAwLjA7XG5cbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5taW5FbWl0UG93ZXIgPSAwLjA7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4QW5ndWxhclNwZWVkID0gMC4wO1xuXG4gICAgLy8gTm8gYmlsbGJvYXJkXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5pc0JpbGxib2FyZEJhc2VkID0gZmFsc2U7XG4gICAgZmxhcmVQYXJ0aWNsZXMuaXNCaWxsYm9hcmRCYXNlZCA9IHRydWU7XG4gICAgY29yb25hUGFydGljbGVzLmlzQmlsbGJvYXJkQmFzZWQgPSB0cnVlO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLmlzQmlsbGJvYXJkQmFzZWQgPSB0cnVlO1xuXG4gICAgLy8gUmVuZGVyIE9yZGVyXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMucmVuZGVyaW5nR3JvdXBJZCA9IDA7XG4gICAgY29yb25hUGFydGljbGVzLnJlbmRlcmluZ0dyb3VwSWQgPSAxO1xuICAgIGZsYXJlUGFydGljbGVzLnJlbmRlcmluZ0dyb3VwSWQgPSAyO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMucmVuZGVyaW5nR3JvdXBJZCA9IDM7XG4gICAgY29yZVNwaGVyZS5yZW5kZXJpbmdHcm91cElkID0gMztcblxuICAgIC8vIFN0YXJ0IHRoZSBwYXJ0aWNsZSBzeXN0ZW1cbiAgICBzdXJmYWNlUGFydGljbGVzLnN0YXJ0KCk7XG4gICAgZmxhcmVQYXJ0aWNsZXMuc3RhcnQoKTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMuc3RhcnQoKTtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5zdGFydCgpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xufSIsImltcG9ydCB7IEVuZ2luZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9FbmdpbmVzL2VuZ2luZSc7XG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGhzL21hdGgnO1xuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hcIlxuaW1wb3J0IHsgTWVzaEJ1aWxkZXIgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hCdWlsZGVyJztcbmltcG9ydCB7IEdyaWRNYXRlcmlhbCB9IGZyb20gJ0BiYWJ5bG9uanMvbWF0ZXJpYWxzL2dyaWQnXG5cbmltcG9ydCBcIkBiYWJ5bG9uanMvY29yZS9NZXNoZXMvbWVzaEJ1aWxkZXJcIjtcbmltcG9ydCAnQGJhYnlsb25qcy9jb3JlL0xvYWRpbmcvbG9hZGluZ1NjcmVlbidcblxuaW1wb3J0IHsgY3JlYXRlU3RhcnMgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RhcnMnXG5pbXBvcnQgeyBjcmVhdGVTY2VuZSB9IGZyb20gJy4vY29tcG9uZW50cy9zY2VuZSdcbmltcG9ydCB7IGNyZWF0ZVN1biB9IGZyb20gJy4vY29tcG9uZW50cy9zdW4nXG5pbXBvcnQgeyBOZWJ1bGFCYWNrZ3JvdW5kIH0gZnJvbSAnLi9jb21wb25lbnRzL25lYnVsYSdcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW5kZXJDYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5cbmNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUoY2FudmFzKTtcbi8vZW5naW5lLmxvYWRpbmdTY3JlZW4gPSBuZXcgQkFCWUxPTi5EZWZhdWx0TG9hZGluZ1NjcmVlbihjYW52YXMsIFwiXCIsIFwiYmxhY2tcIilcblxuZnVuY3Rpb24gY3JlYXRlRGVsYXllZFNjZW5lKCkge1xuICAgIC8vIFNjZW5lXG4gICAgY29uc3QgeyBzY2VuZSB9ID0gY3JlYXRlU2NlbmUoY2FudmFzLCBlbmdpbmUpXG5cbiAgICAvLyBTdHVmZlxuXG4gICAgLyogR2FsYXh5IEJhY2tncm91bmQgKi9cbiAgICBjb25zdCBuZWJ1bGEgPSBuZXcgTmVidWxhQmFja2dyb3VuZChzY2VuZSlcbiAgICAvL2NvbnN0IHsgU1BTLCBzeXN0ZW1NZXNoOiBzdGFycyB9ID0gY3JlYXRlU3RhcnMoc2NlbmUpXG4gICAgY3JlYXRlU3RhcnMoc2NlbmUpXG4gICAgY3JlYXRlU3VuKHNjZW5lKVxuXG5cbiAgICAvKiB2YXIgbWFrZVNoYWRvd3M9MDtcbiAgICAgdmFyIGxvZD0wOyAqL1xuXG4gICAgbGV0IG1hdGVyaWFsID0gbmV3IEdyaWRNYXRlcmlhbChcImdyaWRcIiwgc2NlbmUpO1xuICAgIC8vIC8vIGJhc2UgZ3JvdW5kXG4gICAgLy8gLy9jb25zdCBncm91bmQgPSBNZXNoLkNyZWF0ZUdyb3VuZChcImdyb3VuZC0xXCIsIDYwMCwgNjAwLCAyMDAsIHNjZW5lKTtcbiAgICAvLyBjb25zdCBncm91bmQgPSBNZXNoQnVpbGRlci5DcmVhdGVHcm91bmQoXCJncm91bmRcIiwgeyB3aWR0aDogMTAsIGhlaWdodDogMTAgfSlcbiAgICAvLyBncm91bmQubWF0ZXJpYWwgPSBtYXRlcmlhbDtcblxuICAgIGxldCBzcGhlcmUgPSBNZXNoLkNyZWF0ZVNwaGVyZShcInNwaGVyZS0xXCIsIDE2LCAxLCBzY2VuZSk7XG5cbiAgICBzcGhlcmUucG9zaXRpb24gPSBuZXcgVmVjdG9yMygyLCA0LCAwKVxuICAgIHNwaGVyZS5zY2FsaW5nLnggPSAxXG4gICAgc3BoZXJlLnNjYWxpbmcueSA9IDFcbiAgICBzcGhlcmUuc2NhbGluZy56ID0gMVxuXG4gICAgc3BoZXJlLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG5cbiAgICAvKiBjb25zdCBza3lib3ggPSBNZXNoLkNyZWF0ZUJveChcIkJhY2tncm91bmRTa3lib3hcIiwgNTAwLCBzY2VuZSwgdW5kZWZpbmVkLCBNZXNoLkJBQ0tTSURFKTtcbiAgICAgICAgXG4gICAgLy8gQ3JlYXRlIGFuZCB0d2VhayB0aGUgYmFja2dyb3VuZCBtYXRlcmlhbC5cbiAgICBjb25zdCBiYWNrZ3JvdW5kTWF0ZXJpYWwgPSBuZXcgQkFCWUxPTi5CYWNrZ3JvdW5kTWF0ZXJpYWwoXCJiYWNrZ3JvdW5kTWF0ZXJpYWxcIiwgc2NlbmUpO1xuICAgIGJhY2tncm91bmRNYXRlcmlhbC5yZWZsZWN0aW9uVGV4dHVyZSA9IG5ldyBCQUJZTE9OLkN1YmVUZXh0dXJlKFwidGV4dHVyZXMvVHJvcGljYWxTdW5ueURheVwiLCBzY2VuZSk7XG4gICAgYmFja2dyb3VuZE1hdGVyaWFsLnJlZmxlY3Rpb25UZXh0dXJlLmNvb3JkaW5hdGVzTW9kZSA9IEJBQllMT04uVGV4dHVyZS5TS1lCT1hfTU9ERTtcbiAgICBza3lib3gubWF0ZXJpYWwgPSBiYWNrZ3JvdW5kTWF0ZXJpYWw7IFxuICAgIHZhciBlYXJ0aE1hdGVyaWFsID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbChcImVhcnRoTWF0ZXJpYWxcIiwgc2NlbmUpO1xuICAgICAgICBlYXJ0aC5tYXRlcmlhbCA9IGVhcnRoTWF0ZXJpYWw7XG4gICAgICAgIGVhcnRoTWF0ZXJpYWwuYW1iaWVudENvbG9yID0gbmV3IEJBQllMT04uQ29sb3IzKC44LCAuOCwgMSk7ICovXG4gICAgcmV0dXJuIHNjZW5lXG59XG5cbmxldCBzY2VuZVxuc2V0VGltZW91dCgoKSA9PiB7IHNjZW5lID0gY3JlYXRlRGVsYXllZFNjZW5lKCkgfSwgNjAwKVxuXG5lbmdpbmUucnVuUmVuZGVyTG9vcCgoKSA9PiB7XG4gICAgaWYgKCFzY2VuZSkge1xuICAgICAgICBlbmdpbmUuZGlzcGxheUxvYWRpbmdVSSgpXG4gICAgfVxuICAgIGlmIChzY2VuZSkge1xuICAgICAgICBzY2VuZS5yZW5kZXIoKTtcbiAgICAgICAgZW5naW5lLmhpZGVMb2FkaW5nVUkoKVxuICAgIH1cbn0pIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gdGhlIHN0YXJ0dXAgZnVuY3Rpb25cbi8vIEl0J3MgZW1wdHkgYXMgc29tZSBydW50aW1lIG1vZHVsZSBoYW5kbGVzIHRoZSBkZWZhdWx0IGJlaGF2aW9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSB4ID0+IHt9O1xuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG52YXIgZGVmZXJyZWRNb2R1bGVzID0gW1xuXHRbXCIuL3NyYy9pbmRleC50c1wiLFwidmVuZG9yc1wiXVxuXTtcbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbnZhciBjaGVja0RlZmVycmVkTW9kdWxlcyA9IHggPT4ge307XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lLCBleGVjdXRlTW9kdWxlc10gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuXHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcblx0fVxuXG5cdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3Rcblx0aWYoZXhlY3V0ZU1vZHVsZXMpIGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuXG5cdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt4dmVyc2VcIl0gPSBzZWxmW1wid2VicGFja0NodW5reHZlcnNlXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTtcblxuZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKCkge1xuXHR2YXIgcmVzdWx0O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcblx0XHR9XG5cdH1cblx0aWYoZGVmZXJyZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCA9IHggPT4ge307XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbnZhciBzdGFydHVwID0gX193ZWJwYWNrX3JlcXVpcmVfXy54O1xuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyByZXNldCBzdGFydHVwIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4gd2hlbiBtb3JlIHN0YXJ0dXAgY29kZSBpcyBhZGRlZFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSBzdGFydHVwIHx8ICh4ID0+IHt9KTtcblx0cmV0dXJuIChjaGVja0RlZmVycmVkTW9kdWxlcyA9IGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCkoKTtcbn07IiwiLy8gcnVuIHN0YXJ0dXBcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9