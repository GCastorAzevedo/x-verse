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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvY29tcG9uZW50cy9uZWJ1bGEudHMiLCJ3ZWJwYWNrOi8veHZlcnNlLy4vc3JjL2NvbXBvbmVudHMvc2NlbmUudHMiLCJ3ZWJwYWNrOi8veHZlcnNlLy4vc3JjL2NvbXBvbmVudHMvc3RhcnMudHMiLCJ3ZWJwYWNrOi8veHZlcnNlLy4vc3JjL2NvbXBvbmVudHMvc3VuLnRzIiwid2VicGFjazovL3h2ZXJzZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EscUhBQWtEO0FBQ2xELHNKQUFvRTtBQUNwRSxrS0FBNEU7QUFDNUUsMkxBQTRGO0FBRzVGO0lBR0ksMEJBQVksS0FBWTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLFdBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHVDQUFrQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFDN0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsS0FBSztRQUUzQyxJQUFNLEtBQUssR0FBRztZQUNWLG1D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Q0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDO1dBQ0E7V0FDQSxnQkFBZ0IsMkJBQTJCO1dBQzNDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSw0Q0FBNEM7V0FDNUM7V0FDQSxFOzs7OztVQ3BGQTtVQUNBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSBcIkBiYWJ5bG9uanMvY29yZS9NZXNoZXMvbWVzaFwiXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlJ1xuaW1wb3J0IHsgQ3ViZVRleHR1cmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2N1YmVUZXh0dXJlJ1xuaW1wb3J0IHsgQmFja2dyb3VuZE1hdGVyaWFsIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGVyaWFscy9CYWNrZ3JvdW5kL2JhY2tncm91bmRNYXRlcmlhbCdcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL3NjZW5lJ1xuXG5leHBvcnQgY2xhc3MgTmVidWxhQmFja2dyb3VuZCB7XG4gICAgc2t5Ym94OiBNZXNoXG4gICAgc2t5Ym94TWF0ZXJpYWw6IEJhY2tncm91bmRNYXRlcmlhbFxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBTY2VuZSkge1xuICAgICAgICB0aGlzLnNreWJveCA9IE1lc2guQ3JlYXRlQm94KFwic2t5Qm94XCIsIDEwMDAwLjAsIHNjZW5lKVxuICAgICAgICB0aGlzLnNreWJveE1hdGVyaWFsID0gbmV3IEJhY2tncm91bmRNYXRlcmlhbChcInNreUJveFwiLCBzY2VuZSlcbiAgICAgICAgdGhpcy5za3lib3hNYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcgPSBmYWxzZVxuICAgICAgICAvLyB0aGlzLnNreWJveE1hdGVyaWFsLmRpc2FibGVMaWdodGluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gW1xuICAgICAgICAgICAgXCJzcmMvdGV4dHVyZXMvc3BhY2Uvc3BhY2VfbGVmdC5qcGdcIixcbiAgICAgICAgICAgIFwic3JjL3RleHR1cmVzL3NwYWNlL3NwYWNlX3VwLmpwZ1wiLFxuICAgICAgICAgICAgXCJzcmMvdGV4dHVyZXMvc3BhY2Uvc3BhY2VfZnJvbnQuanBnXCIsXG4gICAgICAgICAgICBcInNyYy90ZXh0dXJlcy9zcGFjZS9zcGFjZV9yaWdodC5qcGdcIixcbiAgICAgICAgICAgIFwic3JjL3RleHR1cmVzL3NwYWNlL3NwYWNlX2Rvd24uanBnXCIsXG4gICAgICAgICAgICBcInNyYy90ZXh0dXJlcy9zcGFjZS9zcGFjZV9iYWNrLmpwZ1wiXG4gICAgICAgIF1cbiAgICAgICAgdGhpcy5za3lib3hNYXRlcmlhbC5yZWZsZWN0aW9uVGV4dHVyZSA9IEN1YmVUZXh0dXJlLkNyZWF0ZUZyb21JbWFnZXMoZmlsZXMsIHNjZW5lKVxuICAgICAgICB0aGlzLnNreWJveE1hdGVyaWFsLnJlZmxlY3Rpb25UZXh0dXJlLmNvb3JkaW5hdGVzTW9kZSA9IFRleHR1cmUuU0tZQk9YX01PREVcbiAgICAgICAgdGhpcy5za3lib3gubWF0ZXJpYWwgPSB0aGlzLnNreWJveE1hdGVyaWFsXG4gICAgICAgIHRoaXMuc2t5Ym94LmluZmluaXRlRGlzdGFuY2UgPSB0cnVlXG4gICAgfVxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL3NjZW5lJztcbmltcG9ydCB7IEVuZ2luZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9FbmdpbmVzL2VuZ2luZSdcbmltcG9ydCB7IENvbG9yMywgQ29sb3I0LCBWZWN0b3IzIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGhzL21hdGgnO1xuaW1wb3J0IHsgRnJlZUNhbWVyYSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9DYW1lcmFzL2ZyZWVDYW1lcmEnO1xuaW1wb3J0IHsgVW5pdmVyc2FsQ2FtZXJhIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0NhbWVyYXMvdW5pdmVyc2FsQ2FtZXJhJ1xuaW1wb3J0IHsgSGVtaXNwaGVyaWNMaWdodCB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9MaWdodHMvaGVtaXNwaGVyaWNMaWdodCdcblxuaW1wb3J0IFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlclwiO1xuXG5pbnRlcmZhY2UgSVNjZW5lT3V0cHV0IHtcbiAgICBzY2VuZTogU2NlbmUsXG4gICAgY2FtZXJhOiBGcmVlQ2FtZXJhIHwgVW5pdmVyc2FsQ2FtZXJhLFxuICAgIGxpZ2h0OiBIZW1pc3BoZXJpY0xpZ2h0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTY2VuZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBlbmdpbmU6IEVuZ2luZSk6IElTY2VuZU91dHB1dCB7XG5cbiAgICAvLyBTY2VuZVxuICAgIGNvbnN0IHNjZW5lID0gbmV3IFNjZW5lKGVuZ2luZSk7XG5cbiAgICBzY2VuZS5jbGVhckNvbG9yID0gbmV3IENvbG9yNCgwLCAwLCAwLCAxKVxuXG4gICAgLy8gQ2FtZXJhXG4gICAgY29uc3QgY2FtZXJhID0gbmV3IEZyZWVDYW1lcmEoXCJ4dmVyc2VcIiwgbmV3IFZlY3RvcjMoMCwgLTEsIC0zMCksIHNjZW5lKVxuICAgIC8qIHZhciBjYW1lcmEgPSBuZXcgQkFCWUxPTi5BcmNSb3RhdGVDYW1lcmEoXCJjYW1lcmExXCIsIDAsIDAsIDAsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgLTApLCBzY2VuZSk7XG4gICAgIGNhbWVyYS5zZXRQb3NpdGlvbihuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDE0MDAsIDUwKSk7XG4gICAgIGNhbWVyYS53aGVlbFByZWNpc2lvbiA9IDE7ICovXG5cbiAgICAvL2NhbWVyYS5zZXRUYXJnZXQoVmVjdG9yMy5aZXJvKCkpO1xuXG4gICAgY2FtZXJhLmF0dGFjaENvbnRyb2woY2FudmFzLCB0cnVlKTtcblxuICAgIC8vIExpZ2h0XG4gICAgbGV0IGxpZ2h0ID0gbmV3IEhlbWlzcGhlcmljTGlnaHQoXCJsaWdodFwiLCBuZXcgVmVjdG9yMygxMDAsIDIwMCwgMzAwKSwgc2NlbmUpO1xuICAgIGxpZ2h0LmludGVuc2l0eSA9IDE7XG4gICAgbGlnaHQuc3BlY3VsYXIgPSBDb2xvcjMuV2hpdGUoKS8vbmV3IENvbG9yMygwLjk1LCAwLjE1LCAwLjExKSBcblxuICAgIHJldHVybiB7IHNjZW5lLCBjYW1lcmEsIGxpZ2h0IH1cbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9zY2VuZSc7XG5pbXBvcnQgeyBWZWN0b3IzLCBDb2xvcjQsIE1hdHJpeCB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRocy9tYXRoJztcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoXCJcbmltcG9ydCB7IFBhcnRpY2xlU3lzdGVtIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL1BhcnRpY2xlcy9wYXJ0aWNsZVN5c3RlbSdcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmUnXG5pbXBvcnQgeyBTcGhlcmVQYXJ0aWNsZUVtaXR0ZXIgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvUGFydGljbGVzL0VtaXR0ZXJUeXBlcy9zcGhlcmVQYXJ0aWNsZUVtaXR0ZXInXG5pbXBvcnQgeyBHbG93TGF5ZXIgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTGF5ZXJzL2dsb3dMYXllcidcbmltcG9ydCB7IFBhcnRpY2xlIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0YXJzKHNjZW5lOiBTY2VuZSkge1xuICAgIC8vIFBhcnRpY2xlU3lzdGVtICBTcGhlcmVQYXJ0aWNsZUVtaXR0ZXJcbiAgICBjb25zdCBiYXNlU3Rhck1vZGVsID0gTWVzaC5DcmVhdGVCb3goXCJlbWl0dGVyXCIsIDAuMDEsIHNjZW5lKVxuICAgIGNvbnN0IHN0YXJzUGFydGljbGVzID0gbmV3IFBhcnRpY2xlU3lzdGVtKFwic3RhclBhcnRpY2xlc1wiLCA3MDAwLCBzY2VuZSlcbiAgICAvLyBjb25zdCBnbCA9IG5ldyBHbG93TGF5ZXIoXCJzdGFyR2xvd1wiLCBzY2VuZSwgeyBibHVyS2VybmVsU2l6ZTogNjQgfSk7XG5cbiAgICBzdGFyc1BhcnRpY2xlcy5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgVGV4dHVyZShcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9QYXRyaWNrUnlhbk1TL0JhYnlsb25KU3RleHR1cmVzL21hc3Rlci9QYXJ0aWNsZVN5c3RlbXMvU3VuL1RfU3Rhci5wbmdcIiwgc2NlbmUpXG4gICAgXG4gICAgY29uc3QgbWluRGlzdGFuY2UgPSAwXG4gICAgY29uc3Qgc2NhbGUgPSA0MFxuICAgIGNvbnN0IGluZGljYXRvckZ1bmN0aW9uID0gKCkgPT4gTWF0aC5yYW5kb20oKSA8IC41ID8gLTE6IDFcbiAgICBjb25zdCBnZXRQb3NpdGlvbiA9ICgpID0+IG1pbkRpc3RhbmNlICsgKE1hdGgucmFuZG9tKCkgKiAoc2NhbGUgKiBpbmRpY2F0b3JGdW5jdGlvbigpKSlcbiAgICBjb25zdCBnZXRSYW5kb21Qb3NpdGlvbiA9ICgpID0+IFtnZXRQb3NpdGlvbigpLCBnZXRQb3NpdGlvbigpLCBnZXRQb3NpdGlvbigpXVxuICAgIHN0YXJzUGFydGljbGVzLnN0YXJ0UG9zaXRpb25GdW5jdGlvbiA9ICh3b3JsZE1hdHJpeDogTWF0cml4LCBwb3NpdGlvblRvVXBkYXRlOiBWZWN0b3IzLCBwYXJ0aWNsZTogUGFydGljbGUsIGlzTG9jYWw6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgW3gsIHksIHpdID0gZ2V0UmFuZG9tUG9zaXRpb24oKVxuICAgICAgICBWZWN0b3IzLlRyYW5zZm9ybUNvb3JkaW5hdGVzRnJvbUZsb2F0c1RvUmVmKHgsIHksIHosIHdvcmxkTWF0cml4LCBwb3NpdGlvblRvVXBkYXRlKVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJzRW1pdHRlciA9IG5ldyBTcGhlcmVQYXJ0aWNsZUVtaXR0ZXIoKVxuICAgIHN0YXJzRW1pdHRlci5yYWRpdXMgPSAzMFxuICAgIHN0YXJzRW1pdHRlci5yYWRpdXNSYW5nZSA9IDFcbiAgICBzdGFyc0VtaXR0ZXIuc3RhcnRQb3NpdGlvbkZ1bmN0aW9uID0gKHdvcmxkTWF0cml4OiBNYXRyaXgsIHBvc2l0aW9uVG9VcGRhdGU6IFZlY3RvcjMsIHBhcnRpY2xlOiBQYXJ0aWNsZSwgaXNMb2NhbDogYm9vbGVhbik6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBbeCwgeSwgel0gPSBnZXRSYW5kb21Qb3NpdGlvbigpXG4gICAgICAgIFZlY3RvcjMuVHJhbnNmb3JtQ29vcmRpbmF0ZXNGcm9tRmxvYXRzVG9SZWYoeCwgeSwgeiwgd29ybGRNYXRyaXgsIHBvc2l0aW9uVG9VcGRhdGUpXG4gICAgfVxuXG4gICAgc3RhcnNQYXJ0aWNsZXMuZW1pdHRlciA9IGJhc2VTdGFyTW9kZWxcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5lbWl0dGVyID0gVmVjdG9yMy5aZXJvKClcbiAgICBzdGFyc1BhcnRpY2xlcy5wYXJ0aWNsZUVtaXR0ZXJUeXBlID0gc3RhcnNFbWl0dGVyXG5cbiAgICBzdGFyc1BhcnRpY2xlcy5jb2xvcjEgPSBuZXcgQ29sb3I0KDAuODk4LCAwLjczNywgMC43MTgsIDEuMCk7XG4gICAgc3RhcnNQYXJ0aWNsZXMuY29sb3IyID0gbmV3IENvbG9yNCgwLjU4NCwgMC44MzEsIDAuODk0LCAxLjApO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLm1pbkVtaXRCb3ggPSBuZXcgVmVjdG9yMygxMCwgMTAsIDEwKVxuICAgIC8vIHN0YXJzUGFydGljbGVzLm1heEVtaXRCb3ggPSBuZXcgVmVjdG9yMygxMDAsIDEwMCwgMTAwKVxuICAgIHN0YXJzUGFydGljbGVzLm1pbkxpZmVUaW1lID0gOTk5OTk5XG4gICAgc3RhcnNQYXJ0aWNsZXMubWF4TGlmZVRpbWUgPSA5OTk5OTlcbiAgICBzdGFyc1BhcnRpY2xlcy5tYW51YWxFbWl0Q291bnQgPSA1MDA7XG4gICAgc3RhcnNQYXJ0aWNsZXMubWF4RW1pdFBvd2VyID0gMC4wO1xuICAgIHN0YXJzUGFydGljbGVzLm1pblNpemUgPSAwLjE1Ly8wLjE1O1xuICAgIHN0YXJzUGFydGljbGVzLm1heFNpemUgPSAuNy8vMC4zO1xuICAgIHN0YXJzUGFydGljbGVzLmJsZW5kTW9kZSA9IFBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9TVEFOREFSRFxuICAgIHN0YXJzUGFydGljbGVzLmdyYXZpdHkgPSBuZXcgVmVjdG9yMygwLCAwLCAwKVxuICAgIHN0YXJzUGFydGljbGVzLm1pbkFuZ3VsYXJTcGVlZCA9IDAuMFxuICAgIHN0YXJzUGFydGljbGVzLm1heEFuZ3VsYXJTcGVlZCA9IDAuMFxuICAgIHN0YXJzUGFydGljbGVzLmlzQmlsbGJvYXJkQmFzZWQgPSB0cnVlXG4gICAgc3RhcnNQYXJ0aWNsZXMucmVuZGVyaW5nR3JvdXBJZCA9IDA7XG4gICAgc3RhcnNQYXJ0aWNsZXMuc3RhcnQoKVxuXG4gICAgcmV0dXJuIHNjZW5lO1xufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL3NjZW5lJztcbmltcG9ydCB7IFZlY3RvcjMsIENvbG9yNCwgQ29sb3IzIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGhzL21hdGgnO1xuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hcIlxuaW1wb3J0IHsgTWVzaEJ1aWxkZXIgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hCdWlsZGVyJ1xuaW1wb3J0IHsgUGFydGljbGVTeXN0ZW0gfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvUGFydGljbGVzL3BhcnRpY2xlU3lzdGVtJ1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZSdcbmltcG9ydCB7IFN0YW5kYXJkTWF0ZXJpYWx9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRlcmlhbHMvc3RhbmRhcmRNYXRlcmlhbCdcbmltcG9ydCB7IFNwaGVyZVBhcnRpY2xlRW1pdHRlciB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9QYXJ0aWNsZXMvRW1pdHRlclR5cGVzL3NwaGVyZVBhcnRpY2xlRW1pdHRlcidcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3VuKHNjZW5lOiBTY2VuZSkge1xuICAgIC8vIEVtaXR0ZXIgb2JqZWN0XG4gICAgdmFyIHN0YXJzID0gTWVzaC5DcmVhdGVCb3goXCJlbWl0dGVyXCIsIDAuMDEsIHNjZW5lKTtcblxuICAgIC8vIENyZWF0ZSBhIHBhcnRpY2xlIHN5c3RlbVxuICAgIHZhciBzdXJmYWNlUGFydGljbGVzID0gbmV3IFBhcnRpY2xlU3lzdGVtKFwic3VyZmFjZVBhcnRpY2xlc1wiLCAxNjAwLCBzY2VuZSk7XG4gICAgdmFyIGZsYXJlUGFydGljbGVzID0gbmV3IFBhcnRpY2xlU3lzdGVtKFwiZmxhcmVQYXJ0aWNsZXNcIiwgMjAsIHNjZW5lKTtcbiAgICB2YXIgY29yb25hUGFydGljbGVzID0gbmV3IFBhcnRpY2xlU3lzdGVtKFwiY29yb25hUGFydGljbGVzXCIsIDYwMCwgc2NlbmUpO1xuICAgIC8vIHZhciBzdGFyc1BhcnRpY2xlcyA9IG5ldyBQYXJ0aWNsZVN5c3RlbShcInN0YXJzUGFydGljbGVzXCIsIDUwMCwgc2NlbmUpO1xuXG4gICAgLy8gVGV4dHVyZSBvZiBlYWNoIHBhcnRpY2xlXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgVGV4dHVyZShcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9QYXRyaWNrUnlhbk1TL0JhYnlsb25KU3RleHR1cmVzL21hc3Rlci9QYXJ0aWNsZVN5c3RlbXMvU3VuL1RfU3VuU3VyZmFjZS5wbmdcIiwgc2NlbmUpO1xuICAgIGZsYXJlUGFydGljbGVzLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1BhdHJpY2tSeWFuTVMvQmFieWxvbkpTdGV4dHVyZXMvbWFzdGVyL1BhcnRpY2xlU3lzdGVtcy9TdW4vVF9TdW5GbGFyZS5wbmdcIiwgc2NlbmUpO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgVGV4dHVyZShcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9QYXRyaWNrUnlhbk1TL0JhYnlsb25KU3RleHR1cmVzL21hc3Rlci9QYXJ0aWNsZVN5c3RlbXMvU3VuL1RfU3Rhci5wbmdcIiwgc2NlbmUpO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1BhdHJpY2tSeWFuTVMvQmFieWxvbkpTdGV4dHVyZXMvbWFzdGVyL1BhcnRpY2xlU3lzdGVtcy9TdW4vVF9TdGFyLnBuZ1wiLCBzY2VuZSk7XG5cbiAgICAvLyBDcmVhdGUgY29yZSBzcGhlcmVcbiAgICB2YXIgY29yZVNwaGVyZSA9IE1lc2hCdWlsZGVyLkNyZWF0ZVNwaGVyZShcImNvcmVTcGhlcmVcIiwgeyBkaWFtZXRlcjogMi4wMSwgc2VnbWVudHM6IDY0IH0sIHNjZW5lKTtcblxuICAgIC8vIENyZWF0ZSBjb3JlIG1hdGVyaWFsXG4gICAgdmFyIGNvcmVNYXQgPSBuZXcgU3RhbmRhcmRNYXRlcmlhbChcImNvcmVNYXRcIiwgc2NlbmUpXG4gICAgY29yZU1hdC5lbWlzc2l2ZUNvbG9yID0gbmV3IENvbG9yMygwLjM3NzMsIDAuMDkzMCwgMC4wMjY2KTtcblxuICAgIC8vIEFzc2lnbiBjb3JlIG1hdGVyaWFsIHRvIHNwaGVyZVxuICAgIGNvcmVTcGhlcmUubWF0ZXJpYWwgPSBjb3JlTWF0O1xuXG4gICAgLy8gUHJlLXdhcm1cbiAgICBzdXJmYWNlUGFydGljbGVzLnByZVdhcm1TdGVwT2Zmc2V0ID0gMTA7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5wcmVXYXJtQ3ljbGVzID0gMTAwO1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMucHJlV2FybVN0ZXBPZmZzZXQgPSAxMDtcbiAgICBmbGFyZVBhcnRpY2xlcy5wcmVXYXJtQ3ljbGVzID0gMTAwO1xuXG4gICAgY29yb25hUGFydGljbGVzLnByZVdhcm1TdGVwT2Zmc2V0ID0gMTA7XG4gICAgY29yb25hUGFydGljbGVzLnByZVdhcm1DeWNsZXMgPSAxMDA7XG5cbiAgICAvLyBJbml0aWFsIHJvdGF0aW9uXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5taW5Jbml0aWFsUm90YXRpb24gPSAtMiAqIE1hdGguUEk7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5tYXhJbml0aWFsUm90YXRpb24gPSAyICogTWF0aC5QSTtcblxuICAgIGZsYXJlUGFydGljbGVzLm1pbkluaXRpYWxSb3RhdGlvbiA9IC0yICogTWF0aC5QSTtcbiAgICBmbGFyZVBhcnRpY2xlcy5tYXhJbml0aWFsUm90YXRpb24gPSAyICogTWF0aC5QSTtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5taW5Jbml0aWFsUm90YXRpb24gPSAtMiAqIE1hdGguUEk7XG4gICAgY29yb25hUGFydGljbGVzLm1heEluaXRpYWxSb3RhdGlvbiA9IDIgKiBNYXRoLlBJO1xuXG4gICAgLy8gV2hlcmUgdGhlIHN1biBwYXJ0aWNsZXMgY29tZSBmcm9tXG4gICAgdmFyIHN1bkVtaXR0ZXIgPSBuZXcgU3BoZXJlUGFydGljbGVFbWl0dGVyKCk7XG4gICAgc3VuRW1pdHRlci5yYWRpdXMgPSAxO1xuICAgIHN1bkVtaXR0ZXIucmFkaXVzUmFuZ2UgPSAwOyAvLyBlbWl0IG9ubHkgZnJvbSBzaGFwZSBzdXJmYWNlXG5cbiAgICAvLyAvLyBXaGVyZSB0aGUgc3RhcnMgcGFydGljbGVzIGNvbWUgZnJvbVxuICAgIC8vIHZhciBzdGFyc0VtaXR0ZXIgPSBuZXcgU3BoZXJlUGFydGljbGVFbWl0dGVyKCk7XG4gICAgLy8gc3RhcnNFbWl0dGVyLnJhZGl1cyA9IDIwO1xuICAgIC8vIHN0YXJzRW1pdHRlci5yYWRpdXNSYW5nZSA9IDA7IC8vIGVtaXQgb25seSBmcm9tIHNoYXBlIHN1cmZhY2VcblxuICAgIC8vIEFzc2lnbiBwYXJ0aWNsZXMgdG8gZW1pdHRlcnNcbiAgICBzdXJmYWNlUGFydGljbGVzLmVtaXR0ZXIgPSBjb3JlU3BoZXJlOyAvLyB0aGUgc3RhcnRpbmcgb2JqZWN0LCB0aGUgZW1pdHRlclxuICAgIHN1cmZhY2VQYXJ0aWNsZXMucGFydGljbGVFbWl0dGVyVHlwZSA9IHN1bkVtaXR0ZXI7XG5cbiAgICBmbGFyZVBhcnRpY2xlcy5lbWl0dGVyID0gY29yZVNwaGVyZTsgLy8gdGhlIHN0YXJ0aW5nIG9iamVjdCwgdGhlIGVtaXR0ZXJcbiAgICBmbGFyZVBhcnRpY2xlcy5wYXJ0aWNsZUVtaXR0ZXJUeXBlID0gc3VuRW1pdHRlcjtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5lbWl0dGVyID0gY29yZVNwaGVyZTsgLy8gdGhlIHN0YXJ0aW5nIG9iamVjdCwgdGhlIGVtaXR0ZXJcbiAgICBjb3JvbmFQYXJ0aWNsZXMucGFydGljbGVFbWl0dGVyVHlwZSA9IHN1bkVtaXR0ZXI7XG5cbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5lbWl0dGVyID0gc3RhcnM7IC8vIHRoZSBzdGFydGluZyBvYmplY3QsIHRoZSBlbWl0dGVyXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMucGFydGljbGVFbWl0dGVyVHlwZSA9IHN0YXJzRW1pdHRlcjtcblxuICAgIC8vIC8vIFJhbmRvbSBzdGFydGluZyBjb2xvclxuICAgIC8vIHN0YXJzUGFydGljbGVzLmNvbG9yMSA9IG5ldyBDb2xvcjQoMC44OTgsIDAuNzM3LCAwLjcxOCwgMS4wKTtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5jb2xvcjIgPSBuZXcgQ29sb3I0KDAuNTg0LCAwLjgzMSwgMC44OTQsIDEuMCk7XG5cbiAgICAvLyBDb2xvciBncmFkaWVudCBvdmVyIHRpbWVcbiAgICBzdXJmYWNlUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMCwgbmV3IENvbG9yNCgwLjg1MDksIDAuNDc4NCwgMC4xMDE5LCAwLjApKTtcbiAgICBzdXJmYWNlUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMC40LCBuZXcgQ29sb3I0KDAuNjI1OSwgMC4zMDU2LCAwLjA2MTksIDAuNSkpO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgwLjUsIG5ldyBDb2xvcjQoMC42MDM5LCAwLjI4ODcsIDAuMDU3OSwgMC41KSk7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDEuMCwgbmV3IENvbG9yNCgwLjMyMDcsIDAuMDcxMywgMC4wMDc1LCAwLjApKTtcblxuICAgIGZsYXJlUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMCwgbmV3IENvbG9yNCgxLCAwLjk2MTIsIDAuNTE0MSwgMC4wKSk7XG4gICAgZmxhcmVQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgwLjI1LCBuZXcgQ29sb3I0KDAuOTA1OCwgMC43MTUyLCAwLjM4MjUsIDEuMCkpO1xuICAgIGZsYXJlUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMS4wLCBuZXcgQ29sb3I0KDAuNjMyMCwgMC4wLCAwLjAsIDAuMCkpO1xuXG4gICAgY29yb25hUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMCwgbmV3IENvbG9yNCgwLjg1MDksIDAuNDc4NCwgMC4xMDE5LCAwLjApKTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgwLjUsIG5ldyBDb2xvcjQoMC42MDM5LCAwLjI4ODcsIDAuMDU3OSwgMC4xMikpO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDEuMCwgbmV3IENvbG9yNCgwLjMyMDcsIDAuMDcxMywgMC4wMDc1LCAwLjApKTtcblxuICAgIC8vIFNpemUgb2YgZWFjaCBwYXJ0aWNsZSAocmFuZG9tIGJldHdlZW4uLi5cbiAgICBzdXJmYWNlUGFydGljbGVzLm1pblNpemUgPSAwLjQ7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5tYXhTaXplID0gMC43O1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMubWluU2NhbGVYID0gMC41O1xuICAgIGZsYXJlUGFydGljbGVzLm1pblNjYWxlWSA9IDAuNTtcbiAgICBmbGFyZVBhcnRpY2xlcy5tYXhTY2FsZVggPSAxLjA7XG4gICAgZmxhcmVQYXJ0aWNsZXMubWF4U2NhbGVZID0gMS4wO1xuXG4gICAgY29yb25hUGFydGljbGVzLm1pblNjYWxlWCA9IDAuNTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMubWluU2NhbGVZID0gMC43NTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMubWF4U2NhbGVYID0gMS4yO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5tYXhTY2FsZVkgPSAzLjA7XG5cbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5taW5TaXplID0gMC4xNTtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5tYXhTaXplID0gMC4zO1xuXG4gICAgLy8gU2l6ZSBvdmVyIGxpZmV0aW1lXG4gICAgZmxhcmVQYXJ0aWNsZXMuYWRkU2l6ZUdyYWRpZW50KDAsIDApO1xuICAgIGZsYXJlUGFydGljbGVzLmFkZFNpemVHcmFkaWVudCgxLCAxKTtcblxuICAgIC8vIExpZmUgdGltZSBvZiBlYWNoIHBhcnRpY2xlIChyYW5kb20gYmV0d2Vlbi4uLlxuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWluTGlmZVRpbWUgPSA4LjA7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5tYXhMaWZlVGltZSA9IDguMDtcblxuICAgIGZsYXJlUGFydGljbGVzLm1pbkxpZmVUaW1lID0gMTAuMDtcbiAgICBmbGFyZVBhcnRpY2xlcy5tYXhMaWZlVGltZSA9IDEwLjA7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMubWluTGlmZVRpbWUgPSAyLjA7XG4gICAgY29yb25hUGFydGljbGVzLm1heExpZmVUaW1lID0gMi4wO1xuXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWluTGlmZVRpbWUgPSA5OTk5OTk7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4TGlmZVRpbWUgPSA5OTk5OTk7XG5cbiAgICAvLyBFbWlzc2lvbiByYXRlXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5lbWl0UmF0ZSA9IDIwMDtcbiAgICBmbGFyZVBhcnRpY2xlcy5lbWl0UmF0ZSA9IDE7XG4gICAgY29yb25hUGFydGljbGVzLmVtaXRSYXRlID0gMzAwO1xuXG4gICAgLy8gLy8gQnVyc3QgcmF0ZVxuICAgIC8vIHN0YXJzUGFydGljbGVzLm1hbnVhbEVtaXRDb3VudCA9IDUwMDtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5tYXhFbWl0UG93ZXIgPSAwLjA7XG5cbiAgICAvLyBCbGVuZCBtb2RlIDogQkxFTkRNT0RFX09ORU9ORSwgQkxFTkRNT0RFX1NUQU5EQVJELCBvciBCTEVORE1PREVfQUREXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5ibGVuZE1vZGUgPSBQYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfQUREO1xuICAgIGZsYXJlUGFydGljbGVzLmJsZW5kTW9kZSA9IFBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9BREQ7XG4gICAgY29yb25hUGFydGljbGVzLmJsZW5kTW9kZSA9IFBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9BREQ7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMuYmxlbmRNb2RlID0gUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX1NUQU5EQVJEO1xuXG4gICAgLy8gU2V0IHRoZSBncmF2aXR5IG9mIGFsbCBwYXJ0aWNsZXNcbiAgICBzdXJmYWNlUGFydGljbGVzLmdyYXZpdHkgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcbiAgICBmbGFyZVBhcnRpY2xlcy5ncmF2aXR5ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XG4gICAgY29yb25hUGFydGljbGVzLmdyYXZpdHkgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5ncmF2aXR5ID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XG5cbiAgICAvLyBBbmd1bGFyIHNwZWVkLCBpbiByYWRpYW5zXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5taW5Bbmd1bGFyU3BlZWQgPSAtMC40O1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWF4QW5ndWxhclNwZWVkID0gMC40O1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMubWluQW5ndWxhclNwZWVkID0gMC4wO1xuICAgIGZsYXJlUGFydGljbGVzLm1heEFuZ3VsYXJTcGVlZCA9IDAuMDtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5taW5Bbmd1bGFyU3BlZWQgPSAwLjA7XG4gICAgY29yb25hUGFydGljbGVzLm1heEFuZ3VsYXJTcGVlZCA9IDAuMDtcblxuICAgIC8vIHN0YXJzUGFydGljbGVzLm1pbkFuZ3VsYXJTcGVlZCA9IDAuMDtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5tYXhBbmd1bGFyU3BlZWQgPSAwLjA7XG5cbiAgICAvLyBTcGVlZFxuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWluRW1pdFBvd2VyID0gMDtcbiAgICBzdXJmYWNlUGFydGljbGVzLm1heEVtaXRQb3dlciA9IDA7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy51cGRhdGVTcGVlZCA9IDAuMDA1O1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMubWluRW1pdFBvd2VyID0gMC4wMDE7XG4gICAgZmxhcmVQYXJ0aWNsZXMubWF4RW1pdFBvd2VyID0gMC4wMTtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5taW5FbWl0UG93ZXIgPSAwLjA7XG4gICAgY29yb25hUGFydGljbGVzLm1heEVtaXRQb3dlciA9IDAuMDtcblxuICAgIC8vIHN0YXJzUGFydGljbGVzLm1pbkVtaXRQb3dlciA9IDAuMDtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5tYXhBbmd1bGFyU3BlZWQgPSAwLjA7XG5cbiAgICAvLyBObyBiaWxsYm9hcmRcbiAgICBzdXJmYWNlUGFydGljbGVzLmlzQmlsbGJvYXJkQmFzZWQgPSBmYWxzZTtcbiAgICBmbGFyZVBhcnRpY2xlcy5pc0JpbGxib2FyZEJhc2VkID0gdHJ1ZTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMuaXNCaWxsYm9hcmRCYXNlZCA9IHRydWU7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMuaXNCaWxsYm9hcmRCYXNlZCA9IHRydWU7XG5cbiAgICAvLyBSZW5kZXIgT3JkZXJcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5yZW5kZXJpbmdHcm91cElkID0gMDtcbiAgICBjb3JvbmFQYXJ0aWNsZXMucmVuZGVyaW5nR3JvdXBJZCA9IDE7XG4gICAgZmxhcmVQYXJ0aWNsZXMucmVuZGVyaW5nR3JvdXBJZCA9IDI7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5yZW5kZXJpbmdHcm91cElkID0gMztcbiAgICBjb3JlU3BoZXJlLnJlbmRlcmluZ0dyb3VwSWQgPSAzO1xuXG4gICAgLy8gU3RhcnQgdGhlIHBhcnRpY2xlIHN5c3RlbVxuICAgIHN1cmZhY2VQYXJ0aWNsZXMuc3RhcnQoKTtcbiAgICBmbGFyZVBhcnRpY2xlcy5zdGFydCgpO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5zdGFydCgpO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLnN0YXJ0KCk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG59IiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0VuZ2luZXMvZW5naW5lJztcbmltcG9ydCB7IENvbG9yMywgVmVjdG9yMyB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRocy9tYXRoJztcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoXCJcbmltcG9ydCB7IE1lc2hCdWlsZGVyIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlcic7XG5pbXBvcnQgeyBHcmlkTWF0ZXJpYWwgfSBmcm9tICdAYmFieWxvbmpzL21hdGVyaWFscy9ncmlkJ1xuXG5pbXBvcnQgXCJAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hCdWlsZGVyXCI7XG5pbXBvcnQgJ0BiYWJ5bG9uanMvY29yZS9Mb2FkaW5nL2xvYWRpbmdTY3JlZW4nXG5cbmltcG9ydCB7IGNyZWF0ZVN0YXJzIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0YXJzJ1xuaW1wb3J0IHsgY3JlYXRlU2NlbmUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2NlbmUnXG5pbXBvcnQgeyBjcmVhdGVTdW4gfSBmcm9tICcuL2NvbXBvbmVudHMvc3VuJ1xuaW1wb3J0IHsgTmVidWxhQmFja2dyb3VuZCB9IGZyb20gJy4vY29tcG9uZW50cy9uZWJ1bGEnXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsLCBUZXh0dXJlIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlJztcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW5kZXJDYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5cbmNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUoY2FudmFzKTtcbi8vZW5naW5lLmxvYWRpbmdTY3JlZW4gPSBuZXcgQkFCWUxPTi5EZWZhdWx0TG9hZGluZ1NjcmVlbihjYW52YXMsIFwiXCIsIFwiYmxhY2tcIilcblxuZnVuY3Rpb24gY3JlYXRlRGVsYXllZFNjZW5lKCkge1xuICAgIC8vIFNjZW5lXG4gICAgY29uc3QgeyBzY2VuZSB9ID0gY3JlYXRlU2NlbmUoY2FudmFzLCBlbmdpbmUpXG5cbiAgICAvKiB2YXIgZ2wgPSBuZXcgQkFCWUxPTi5HbG93TGF5ZXIoXCJnbG93XCIsIHNjZW5lLCB7XG4gICAgICAgICAgICBtYWluVGV4dHVyZUZpeGVkU2l6ZTogNTEyXG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgKi9cbiAgICAvLyBTdHVmZlxuXG4gICAgLyogR2FsYXh5IEJhY2tncm91bmQgKi9cbiAgICBjb25zdCBuZWJ1bGEgPSBuZXcgTmVidWxhQmFja2dyb3VuZChzY2VuZSlcbiAgICAvL2NvbnN0IHsgU1BTLCBzeXN0ZW1NZXNoOiBzdGFycyB9ID0gY3JlYXRlU3RhcnMoc2NlbmUpXG4gICAgY3JlYXRlU3RhcnMoc2NlbmUpXG4gICAgY3JlYXRlU3VuKHNjZW5lKVxuXG5cbiAgICAvKiB2YXIgbWFrZVNoYWRvd3M9MDtcbiAgICAgdmFyIGxvZD0wOyAqL1xuXG4gICAgLy9sZXQgbWF0ZXJpYWwgPSBuZXcgR3JpZE1hdGVyaWFsKFwiZ3JpZFwiLCBzY2VuZSk7XG4gICAgLy8gLy8gYmFzZSBncm91bmRcbiAgICAvLyAvL2NvbnN0IGdyb3VuZCA9IE1lc2guQ3JlYXRlR3JvdW5kKFwiZ3JvdW5kLTFcIiwgNjAwLCA2MDAsIDIwMCwgc2NlbmUpO1xuICAgIC8vIGNvbnN0IGdyb3VuZCA9IE1lc2hCdWlsZGVyLkNyZWF0ZUdyb3VuZChcImdyb3VuZFwiLCB7IHdpZHRoOiAxMCwgaGVpZ2h0OiAxMCB9KVxuICAgIC8vIGdyb3VuZC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuXG4gICAgbGV0IHBsYW5ldCA9IE1lc2guQ3JlYXRlU3BoZXJlKFwic3BoZXJlLTFcIiwgMTYsIDEsIHNjZW5lKTtcbiAgICAvKiB2YXIgbWF0ID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbChcInBsYW5ldE1hdFwiLCBzY2VuZSk7XG4gICAgbWF0LmFtYmllbnRUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZShcImh0dHBzOi8vaS5pbWd1ci5jb20vd2xueDF5US5qcGdcIiwgc2NlbmUsIHRydWUsIGZhbHNlKTtcbiAgICBzcGhlcmUubWF0ZXJpYWwgPSBtYXQ7ICovXG4gICAgbGV0IHBsYW5ldE1hdGVyaWFsID0gbmV3IFN0YW5kYXJkTWF0ZXJpYWwoXCJwbGFuZXRNQXRlcmlhbFwiLCBzY2VuZSlcbiAgICBwbGFuZXRNYXRlcmlhbC5hbWJpZW50VGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS93bG54MXlRLmpwZ1wiLCBzY2VuZSwgdHJ1ZSwgZmFsc2UpXG4gICAgcGxhbmV0TWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IENvbG9yMy5CbGFjaygpXG4gICAgcGxhbmV0TWF0ZXJpYWwuZW1pc3NpdmVDb2xvciA9IG5ldyBDb2xvcjMoMSwgMSwgMSlcblxuICAgIHBsYW5ldC5wb3NpdGlvbiA9IG5ldyBWZWN0b3IzKDAsIDAsIDApXG4gICAgcGxhbmV0LnNjYWxpbmcueCA9IDFcbiAgICBwbGFuZXQuc2NhbGluZy55ID0gMVxuICAgIHBsYW5ldC5zY2FsaW5nLnogPSAxXG5cbiAgICBwbGFuZXQubWF0ZXJpYWwgPSBwbGFuZXRNYXRlcmlhbDtcblxuICAgIC8qIHZhciB0ZXJyZSA9IEJBQllMT04uTWVzaC5DcmVhdGVTcGhlcmUoJ3RlcnJlJywgMTYsIDIsIHNjZW5lKTtcbiAgICB0ZXJyZS5wb3NpdGlvbi54ID0gMTA7XG5cbiAgICB2YXIgZWFydGhNYXQgPSBuZXcgQkFCWUxPTi5TdGFuZGFyZE1hdGVyaWFsKCdlYXJ0aCcsIHNjZW5lKTtcbiAgICBlYXJ0aE1hdC5kaWZmdXNlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoJ2h0dHBzOi8vMS5icC5ibG9nc3BvdC5jb20vLVVVWGFLNUdDai1rL1Vjc0tKUk1na1ZJL0FBQUFBQUFBQ2ZNL3NlUFBfSDA4SlRRL3MxNjAwLzEuanBnJywgc2NlbmUsIGZhbHNlLCBmYWxzZSk7XG4gICAgZWFydGhNYXQuc3BlY3VsYXJDb2xvciA9IEJBQllMT04uQ29sb3IzLkJsYWNrKCk7XG4gICAgdGVycmUubWF0ZXJpYWwgPSBlYXJ0aE1hdDtcbiAgICB2YXIgc3VuTWF0ID0gbmV3ICBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoJ3N1bicsIHNjZW5lKTtcbiAgICBzdW5NYXQuZGlmZnVzZUNvbG9yID0gQkFCWUxPTi5Db2xvcjMuWWVsbG93KCk7XG4gICAgc3VuTWF0LnNwZWN1bGFyQ29sb3IgPSBCQUJZTE9OLkNvbG9yMy5CbGFjaygpO1xuICAgIHN1bk1hdC5lbWlzc2l2ZUNvbG9yID0gQkFCWUxPTi5Db2xvcjMuWWVsbG93KCk7XG4gICAgc3VuLm1hdGVyaWFsID0gc3VuTWF0O1xuXG4gICAgdmFyIGFscGhhID0gMDtcbiAgICBzY2VuZS5yZWdpc3RlckJlZm9yZVJlbmRlcigoKSA9PiB7XG4gICAgICAgIHRlcnJlLnBvc2l0aW9uLnggPSBNYXRoLmNvcyhhbHBoYSkgKiAxMDtcbiAgICAgICAgdGVycmUucG9zaXRpb24ueiA9IE1hdGguc2luKGFscGhhKSAqIDEwO1xuICAgICAgICB0ZXJyZS5yb3RhdGlvbi55IC09IDAuMDE7XG4gICAgICAgIGFscGhhICs9IDAuMDE7XG4gICAgfSkgKi9cbiAgICBsZXQgZHQgPSAwXG4gICAgc2NlbmUucmVnaXN0ZXJCZWZvcmVSZW5kZXIoKCkgPT4ge1xuICAgICAgICBwbGFuZXQucG9zaXRpb24ueCA9IE1hdGguY29zKGR0KSAqIDEwXG4gICAgICAgIHBsYW5ldC5wb3NpdGlvbi56ID0gTWF0aC5zaW4oZHQpICogN1xuICAgICAgICBwbGFuZXQucG9zaXRpb24ueSA9IDBcbiAgICAgICAgcGxhbmV0LnJvdGF0aW9uLnkgLT0gMC4wMVxuICAgICAgICBkdCArPSAwLjAwNVxuICAgIH0pXG5cbiAgICAvKiBjb25zdCBza3lib3ggPSBNZXNoLkNyZWF0ZUJveChcIkJhY2tncm91bmRTa3lib3hcIiwgNTAwLCBzY2VuZSwgdW5kZWZpbmVkLCBNZXNoLkJBQ0tTSURFKTtcbiAgICAgICAgXG4gICAgLy8gQ3JlYXRlIGFuZCB0d2VhayB0aGUgYmFja2dyb3VuZCBtYXRlcmlhbC5cbiAgICBjb25zdCBiYWNrZ3JvdW5kTWF0ZXJpYWwgPSBuZXcgQkFCWUxPTi5CYWNrZ3JvdW5kTWF0ZXJpYWwoXCJiYWNrZ3JvdW5kTWF0ZXJpYWxcIiwgc2NlbmUpO1xuICAgIGJhY2tncm91bmRNYXRlcmlhbC5yZWZsZWN0aW9uVGV4dHVyZSA9IG5ldyBCQUJZTE9OLkN1YmVUZXh0dXJlKFwidGV4dHVyZXMvVHJvcGljYWxTdW5ueURheVwiLCBzY2VuZSk7XG4gICAgYmFja2dyb3VuZE1hdGVyaWFsLnJlZmxlY3Rpb25UZXh0dXJlLmNvb3JkaW5hdGVzTW9kZSA9IEJBQllMT04uVGV4dHVyZS5TS1lCT1hfTU9ERTtcbiAgICBza3lib3gubWF0ZXJpYWwgPSBiYWNrZ3JvdW5kTWF0ZXJpYWw7IFxuICAgIHZhciBlYXJ0aE1hdGVyaWFsID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbChcImVhcnRoTWF0ZXJpYWxcIiwgc2NlbmUpO1xuICAgICAgICBlYXJ0aC5tYXRlcmlhbCA9IGVhcnRoTWF0ZXJpYWw7XG4gICAgICAgIGVhcnRoTWF0ZXJpYWwuYW1iaWVudENvbG9yID0gbmV3IEJBQllMT04uQ29sb3IzKC44LCAuOCwgMSk7ICovXG4gICAgcmV0dXJuIHNjZW5lXG59XG5cbmxldCBzY2VuZVxuc2V0VGltZW91dCgoKSA9PiB7IHNjZW5lID0gY3JlYXRlRGVsYXllZFNjZW5lKCkgfSwgNjAwKVxuXG5lbmdpbmUucnVuUmVuZGVyTG9vcCgoKSA9PiB7XG4gICAgaWYgKCFzY2VuZSkge1xuICAgICAgICBlbmdpbmUuZGlzcGxheUxvYWRpbmdVSSgpXG4gICAgfVxuICAgIGlmIChzY2VuZSkge1xuICAgICAgICBzY2VuZS5yZW5kZXIoKTtcbiAgICAgICAgZW5naW5lLmhpZGVMb2FkaW5nVUkoKVxuICAgIH1cbn0pIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gdGhlIHN0YXJ0dXAgZnVuY3Rpb25cbi8vIEl0J3MgZW1wdHkgYXMgc29tZSBydW50aW1lIG1vZHVsZSBoYW5kbGVzIHRoZSBkZWZhdWx0IGJlaGF2aW9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSB4ID0+IHt9O1xuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFtcIi4vc3JjL2luZGV4LnRzXCIsXCJ2ZW5kb3JzXCJdXG5dO1xuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxudmFyIGNoZWNrRGVmZXJyZWRNb2R1bGVzID0geCA9PiB7fTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWUsIGV4ZWN1dGVNb2R1bGVzXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3h2ZXJzZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt4dmVyc2VcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpO1xuXG5mdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwoKSB7XG5cdHZhciByZXN1bHQ7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcblx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuXHRcdH1cblx0fVxuXHRpZihkZWZlcnJlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0geCA9PiB7fTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxudmFyIHN0YXJ0dXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLng7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIHJlc2V0IHN0YXJ0dXAgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGNhbGxlZCBhZ2FpbiB3aGVuIG1vcmUgc3RhcnR1cCBjb2RlIGlzIGFkZGVkXG5cdF9fd2VicGFja19yZXF1aXJlX18ueCA9IHN0YXJ0dXAgfHwgKHggPT4ge30pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTsiLCIvLyBydW4gc3RhcnR1cFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=