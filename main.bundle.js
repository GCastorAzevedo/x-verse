/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/scene.ts":
/*!*********************************!*\
  !*** ./src/components/scene.ts ***!
  \*********************************/
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
exports.createScene = void 0;
var scene_1 = __webpack_require__(/*! @babylonjs/core/scene */ "./node_modules/@babylonjs/core/scene.js");
var math_1 = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
var freeCamera_1 = __webpack_require__(/*! @babylonjs/core/Cameras/freeCamera */ "./node_modules/@babylonjs/core/Cameras/freeCamera.js");
var hemisphericLight_1 = __webpack_require__(/*! @babylonjs/core/Lights/hemisphericLight */ "./node_modules/@babylonjs/core/Lights/hemisphericLight.js");
var BABYLON = __importStar(__webpack_require__(/*! @babylonjs/core/Legacy/legacy */ "./node_modules/@babylonjs/core/Legacy/legacy.js"));
__webpack_require__(/*! @babylonjs/core/Meshes/meshBuilder */ "./node_modules/@babylonjs/core/Meshes/meshBuilder.js");
function createScene(canvas, engine) {
    var scene = new scene_1.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);
    var camera = new freeCamera_1.FreeCamera("xverse", new math_1.Vector3(0, 5, -10), scene);
    camera.attachControl(canvas, true);
    var light = new hemisphericLight_1.HemisphericLight("light", new math_1.Vector3(100, 200, 300), scene);
    light.intensity = 1;
    light.specular = new math_1.Color3(0.95, 0.15, 0.11);
    return { scene: scene, camera: camera, light: light };
}
exports.createScene = createScene;


/***/ }),

/***/ "./src/components/stars.ts":
/*!*********************************!*\
  !*** ./src/components/stars.ts ***!
  \*********************************/
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
exports.createStars = void 0;
var math_1 = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
var meshBuilder_1 = __webpack_require__(/*! @babylonjs/core/Meshes/meshBuilder */ "./node_modules/@babylonjs/core/Meshes/meshBuilder.js");
var BABYLON = __importStar(__webpack_require__(/*! @babylonjs/core/Legacy/legacy */ "./node_modules/@babylonjs/core/Legacy/legacy.js"));
function createStars(scene) {
    var nb = 10000;
    var fact = 20000;
    var minDistance = 10000;
    var starDiameter = 15;
    var indicatorFunction = function () { return Math.random() < .5 ? -1 : 1; };
    var getPosition = function () { return minDistance + (Math.random() * (fact * indicatorFunction())); };
    var starPosition = function (particle, i, s) {
        particle.position = new math_1.Vector3(getPosition(), getPosition(), getPosition());
        particle.color = new BABYLON.Color4(1, 1, 0.3, 1.0);
    };
    var gl = new BABYLON.GlowLayer("starGlow", scene, { blurKernelSize: 64 });
    var redMaterial = new BABYLON.StandardMaterial("redStarsMaterial", scene);
    redMaterial.emissiveColor = BABYLON.Color3.Red();
    var redStar = meshBuilder_1.MeshBuilder.CreateSphere("s", { segments: 6, diameter: starDiameter }, scene);
    redStar.position = new BABYLON.Vector3(1000, 1000, 1000);
    redStar.material = redMaterial;
    var blueMaterial = new BABYLON.StandardMaterial("blueStarsMaterial", scene);
    blueMaterial.emissiveColor = new BABYLON.Color3(0.7, 0.96, 1);
    blueMaterial.specularColor = BABYLON.Color3.White();
    var blueStar = meshBuilder_1.MeshBuilder.CreateSphere("s", { segments: 6, diameter: starDiameter }, scene);
    blueStar.position = new BABYLON.Vector3(1000, 1000, 1000);
    blueStar.material = blueMaterial;
    var yellowMaterial = new BABYLON.StandardMaterial("yellowStarMaterial", scene);
    yellowMaterial.emissiveColor = new BABYLON.Color3(1, 1, 0.6);
    yellowMaterial.specularColor = BABYLON.Color3.White();
    var yellowStar = meshBuilder_1.MeshBuilder.CreateSphere("s", { segments: 6, diameter: starDiameter }, scene);
    yellowStar.position = new BABYLON.Vector3(1000, 1000, 1000);
    yellowStar.material = yellowMaterial;
    var orangeMaterial = new BABYLON.StandardMaterial("orangeStarMaterial", scene);
    orangeMaterial.emissiveColor = new BABYLON.Color3(.96, .75, .26);
    orangeMaterial.specularColor = BABYLON.Color3.White();
    var orangeStar = meshBuilder_1.MeshBuilder.CreateSphere("s", { segments: 6, diameter: starDiameter }, scene);
    orangeStar.position = new BABYLON.Vector3(1000, 1000, 1000);
    orangeStar.material = orangeMaterial;
    var whiteMaterial = new BABYLON.StandardMaterial("whiteStarMaterial", scene);
    whiteMaterial.emissiveColor = BABYLON.Color3.White();
    whiteMaterial.specularColor = BABYLON.Color3.White();
    var whiteStar = meshBuilder_1.MeshBuilder.CreateSphere("s", { segments: 6, diameter: starDiameter }, scene);
    whiteStar.position = new BABYLON.Vector3(1000, 1000, 1000);
    whiteStar.material = whiteMaterial;
    var SPS = new BABYLON.SolidParticleSystem('SPS', scene, { useModelMaterial: true, updatable: false });
    SPS.addShape(blueStar, nb, { positionFunction: starPosition });
    SPS.addShape(yellowStar, nb, { positionFunction: starPosition });
    SPS.addShape(orangeStar, nb, { positionFunction: starPosition });
    SPS.addShape(whiteStar, nb, { positionFunction: starPosition });
    var systemMesh = SPS.buildMesh();
    return { SPS: SPS, systemMesh: systemMesh, baseModels: [redStar, blueStar, yellowStar, orangeStar, whiteStar] };
}
exports.createStars = createStars;


/***/ }),

/***/ "./src/components/sun.ts":
/*!*******************************!*\
  !*** ./src/components/sun.ts ***!
  \*******************************/
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
exports.createSun = void 0;
var BABYLON = __importStar(__webpack_require__(/*! @babylonjs/core/Legacy/legacy */ "./node_modules/@babylonjs/core/Legacy/legacy.js"));
function createSun(scene) {
    var stars = BABYLON.Mesh.CreateBox("emitter", 0.01, scene);
    var surfaceParticles = new BABYLON.ParticleSystem("surfaceParticles", 1600, scene);
    var flareParticles = new BABYLON.ParticleSystem("flareParticles", 20, scene);
    var coronaParticles = new BABYLON.ParticleSystem("coronaParticles", 600, scene);
    surfaceParticles.particleTexture = new BABYLON.Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_SunSurface.png", scene);
    flareParticles.particleTexture = new BABYLON.Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_SunFlare.png", scene);
    coronaParticles.particleTexture = new BABYLON.Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_Star.png", scene);
    var coreSphere = BABYLON.MeshBuilder.CreateSphere("coreSphere", { diameter: 2.01, segments: 64 }, scene);
    var coreMat = new BABYLON.StandardMaterial("coreMat", scene);
    coreMat.emissiveColor = new BABYLON.Color3(0.3773, 0.0930, 0.0266);
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
    var sunEmitter = new BABYLON.SphereParticleEmitter();
    sunEmitter.radius = 1;
    sunEmitter.radiusRange = 0;
    var starsEmitter = new BABYLON.SphereParticleEmitter();
    starsEmitter.radius = 20;
    starsEmitter.radiusRange = 0;
    surfaceParticles.emitter = coreSphere;
    surfaceParticles.particleEmitterType = sunEmitter;
    flareParticles.emitter = coreSphere;
    flareParticles.particleEmitterType = sunEmitter;
    coronaParticles.emitter = coreSphere;
    coronaParticles.particleEmitterType = sunEmitter;
    surfaceParticles.addColorGradient(0, new BABYLON.Color4(0.8509, 0.4784, 0.1019, 0.0));
    surfaceParticles.addColorGradient(0.4, new BABYLON.Color4(0.6259, 0.3056, 0.0619, 0.5));
    surfaceParticles.addColorGradient(0.5, new BABYLON.Color4(0.6039, 0.2887, 0.0579, 0.5));
    surfaceParticles.addColorGradient(1.0, new BABYLON.Color4(0.3207, 0.0713, 0.0075, 0.0));
    flareParticles.addColorGradient(0, new BABYLON.Color4(1, 0.9612, 0.5141, 0.0));
    flareParticles.addColorGradient(0.25, new BABYLON.Color4(0.9058, 0.7152, 0.3825, 1.0));
    flareParticles.addColorGradient(1.0, new BABYLON.Color4(0.6320, 0.0, 0.0, 0.0));
    coronaParticles.addColorGradient(0, new BABYLON.Color4(0.8509, 0.4784, 0.1019, 0.0));
    coronaParticles.addColorGradient(0.5, new BABYLON.Color4(0.6039, 0.2887, 0.0579, 0.12));
    coronaParticles.addColorGradient(1.0, new BABYLON.Color4(0.3207, 0.0713, 0.0075, 0.0));
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
    surfaceParticles.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;
    flareParticles.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;
    coronaParticles.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;
    surfaceParticles.gravity = new BABYLON.Vector3(0, 0, 0);
    flareParticles.gravity = new BABYLON.Vector3(0, 0, 0);
    coronaParticles.gravity = new BABYLON.Vector3(0, 0, 0);
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
var stars_1 = __webpack_require__(/*! ./components/stars */ "./src/components/stars.ts");
var scene_1 = __webpack_require__(/*! ./components/scene */ "./src/components/scene.ts");
var sun_1 = __webpack_require__(/*! ./components/sun */ "./src/components/sun.ts");
var canvas = document.getElementById("renderCanvas");
var engine = new engine_1.Engine(canvas);
function createDelayedScene() {
    var scene = scene_1.createScene(canvas, engine).scene;
    var _a = stars_1.createStars(scene), SPS = _a.SPS, stars = _a.systemMesh;
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
setTimeout(function () { scene = createDelayedScene(); }, 6000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvY29tcG9uZW50cy9zY2VuZS50cyIsIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvY29tcG9uZW50cy9zdGFycy50cyIsIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvY29tcG9uZW50cy9zdW4udHMiLCJ3ZWJwYWNrOi8veHZlcnNlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3h2ZXJzZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3h2ZXJzZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3h2ZXJzZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3h2ZXJzZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3h2ZXJzZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEdBQThDO0FBQzlDLG1IQUE2RDtBQUM3RCx5SUFBZ0U7QUFFaEUseUpBQTBFO0FBQzFFLHdJQUF5RDtBQUV6RCxzSEFBNEM7QUFRNUMsU0FBZ0IsV0FBVyxDQUFDLE1BQXlCLEVBQUUsTUFBc0I7SUFHekUsSUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFaEMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBR2pELElBQU0sTUFBTSxHQUFHLElBQUksdUJBQVUsQ0FBQyxRQUFRLEVBQUUsSUFB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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBLGdCQUFnQiwyQkFBMkI7V0FDM0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLDRDQUE0QztXQUM1QztXQUNBLEU7Ozs7O1VDcEZBO1VBQ0EiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9zY2VuZSc7XG5pbXBvcnQgeyBDb2xvcjMsIFZlY3RvcjMgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0aHMvbWF0aCc7XG5pbXBvcnQgeyBGcmVlQ2FtZXJhIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0NhbWVyYXMvZnJlZUNhbWVyYSc7XG5pbXBvcnQgeyBVbml2ZXJzYWxDYW1lcmEgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvQ2FtZXJhcy91bml2ZXJzYWxDYW1lcmEnXG5pbXBvcnQgeyBIZW1pc3BoZXJpY0xpZ2h0IH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0xpZ2h0cy9oZW1pc3BoZXJpY0xpZ2h0J1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL0xlZ2FjeS9sZWdhY3lcIjtcblxuaW1wb3J0IFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlclwiO1xuXG5pbnRlcmZhY2UgSVNjZW5lT3V0cHV0IHtcbiAgICBzY2VuZTogU2NlbmUsXG4gICAgY2FtZXJhOiBGcmVlQ2FtZXJhIHwgVW5pdmVyc2FsQ2FtZXJhLFxuICAgIGxpZ2h0OiBIZW1pc3BoZXJpY0xpZ2h0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTY2VuZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBlbmdpbmU6IEJBQllMT04uRW5naW5lKTogSVNjZW5lT3V0cHV0IHtcblxuICAgIC8vIFNjZW5lXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgU2NlbmUoZW5naW5lKTtcblxuICAgIHNjZW5lLmNsZWFyQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMCwgMCwgMCwgMSlcblxuICAgIC8vIENhbWVyYVxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBGcmVlQ2FtZXJhKFwieHZlcnNlXCIsIG5ldyBWZWN0b3IzKDAsIDUsIC0xMCksIHNjZW5lKVxuICAgIC8qIHZhciBjYW1lcmEgPSBuZXcgQkFCWUxPTi5BcmNSb3RhdGVDYW1lcmEoXCJjYW1lcmExXCIsIDAsIDAsIDAsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgLTApLCBzY2VuZSk7XG4gICAgIGNhbWVyYS5zZXRQb3NpdGlvbihuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDE0MDAsIDUwKSk7XG4gICAgIGNhbWVyYS53aGVlbFByZWNpc2lvbiA9IDE7ICovXG5cbiAgICAvL2NhbWVyYS5zZXRUYXJnZXQoVmVjdG9yMy5aZXJvKCkpO1xuXG4gICAgY2FtZXJhLmF0dGFjaENvbnRyb2woY2FudmFzLCB0cnVlKTtcblxuICAgIC8vIExpZ2h0XG4gICAgbGV0IGxpZ2h0ID0gbmV3IEhlbWlzcGhlcmljTGlnaHQoXCJsaWdodFwiLCBuZXcgVmVjdG9yMygxMDAsIDIwMCwgMzAwKSwgc2NlbmUpO1xuICAgIGxpZ2h0LmludGVuc2l0eSA9IDE7XG4gICAgbGlnaHQuc3BlY3VsYXIgPSBuZXcgQ29sb3IzKDAuOTUsIDAuMTUsIDAuMTEpXG5cbiAgICByZXR1cm4geyBzY2VuZSwgY2FtZXJhLCBsaWdodCB9XG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvc2NlbmUnO1xuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRocy9tYXRoJztcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoXCJcbmltcG9ydCB7IE1lc2hCdWlsZGVyIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlcidcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSBcIkBiYWJ5bG9uanMvY29yZS9MZWdhY3kvbGVnYWN5XCI7XG5cbmludGVyZmFjZSBJQ29uc3RlbGxhdGlvbk91dHB1dCB7XG4gICAgU1BTOiBCQUJZTE9OLlNvbGlkUGFydGljbGVTeXN0ZW0sXG4gICAgc3lzdGVtTWVzaDogTWVzaCxcbiAgICBiYXNlTW9kZWxzOiBNZXNoW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0YXJzKHNjZW5lOiBTY2VuZSk6IElDb25zdGVsbGF0aW9uT3V0cHV0IHtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvKiBCYWNrZ3JvdW5kIHN0YXJzICovXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgY29uc3QgbmIgPSAxMDAwMDtcbiAgICBjb25zdCBmYWN0ID0gMjAwMDBcbiAgICBjb25zdCBtaW5EaXN0YW5jZSA9IDEwMDAwXG4gICAgY29uc3Qgc3RhckRpYW1ldGVyID0gMTVcblxuICAgIGNvbnN0IGluZGljYXRvckZ1bmN0aW9uID0gKCkgPT4gTWF0aC5yYW5kb20oKSA8IC41ID8gLTEgOiAxXG4gICAgY29uc3QgZ2V0UG9zaXRpb24gPSAoKSA9PiBtaW5EaXN0YW5jZSArIChNYXRoLnJhbmRvbSgpICogKGZhY3QgKiBpbmRpY2F0b3JGdW5jdGlvbigpKSlcbiAgICBjb25zdCBzdGFyUG9zaXRpb24gPSAocGFydGljbGUsIGksIHMpID0+IHtcbiAgICAgICAgcGFydGljbGUucG9zaXRpb24gPSBuZXcgVmVjdG9yMyhnZXRQb3NpdGlvbigpLCBnZXRQb3NpdGlvbigpLCBnZXRQb3NpdGlvbigpKVxuICAgICAgICBwYXJ0aWNsZS5jb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yNCgxLCAxLCAwLjMsIDEuMClcbiAgICAgICAgLy9nbC5hZGRJbmNsdWRlZE9ubHlNZXNoKHBhcnRpY2xlKVxuICAgICAgICAvL2dsLmludGVuc2l0eSA9IDEwXG4gICAgfVxuXG4gICAgY29uc3QgZ2wgPSBuZXcgQkFCWUxPTi5HbG93TGF5ZXIoXCJzdGFyR2xvd1wiLCBzY2VuZSwgeyBibHVyS2VybmVsU2l6ZTogNjQgfSk7XG5cbiAgICAvLyBSZWQgc3RhcnNcbiAgICBjb25zdCByZWRNYXRlcmlhbCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoXCJyZWRTdGFyc01hdGVyaWFsXCIsIHNjZW5lKVxuICAgIHJlZE1hdGVyaWFsLmVtaXNzaXZlQ29sb3IgPSBCQUJZTE9OLkNvbG9yMy5SZWQoKVxuICAgIGNvbnN0IHJlZFN0YXIgPSBNZXNoQnVpbGRlci5DcmVhdGVTcGhlcmUoXCJzXCIsIHsgc2VnbWVudHM6IDYsIGRpYW1ldGVyOiBzdGFyRGlhbWV0ZXIgfSwgc2NlbmUpXG4gICAgcmVkU3Rhci5wb3NpdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMTAwMCwgMTAwMCwgMTAwMClcbiAgICByZWRTdGFyLm1hdGVyaWFsID0gcmVkTWF0ZXJpYWxcblxuICAgIC8vIEJsdWUgc3RhcnNcbiAgICBjb25zdCBibHVlTWF0ZXJpYWwgPSBuZXcgQkFCWUxPTi5TdGFuZGFyZE1hdGVyaWFsKFwiYmx1ZVN0YXJzTWF0ZXJpYWxcIiwgc2NlbmUpXG4gICAgYmx1ZU1hdGVyaWFsLmVtaXNzaXZlQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjMoMC43LCAwLjk2LCAxKVxuICAgIGJsdWVNYXRlcmlhbC5zcGVjdWxhckNvbG9yID0gQkFCWUxPTi5Db2xvcjMuV2hpdGUoKVxuICAgIGNvbnN0IGJsdWVTdGFyID0gTWVzaEJ1aWxkZXIuQ3JlYXRlU3BoZXJlKFwic1wiLCB7IHNlZ21lbnRzOiA2LCBkaWFtZXRlcjogc3RhckRpYW1ldGVyIH0sIHNjZW5lKVxuICAgIGJsdWVTdGFyLnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygxMDAwLCAxMDAwLCAxMDAwKVxuICAgIGJsdWVTdGFyLm1hdGVyaWFsID0gYmx1ZU1hdGVyaWFsXG5cbiAgICAvLyBZZWxsb3cgc3RhcnNcbiAgICAvKnRoaXMubWF0LmRpZmZ1c2VUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZShcInRleHR1cmVzL21pc2MuanBnXCIsIHNjZW5lKTtcbiAgICB0aGlzLm1hdC5lbWlzc2l2ZVRleHR1cmUgPSB0aGlzLm1hdC5kaWZmdXNlVGV4dHVyZTsgKi9cbiAgICBjb25zdCB5ZWxsb3dNYXRlcmlhbCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoXCJ5ZWxsb3dTdGFyTWF0ZXJpYWxcIiwgc2NlbmUpXG4gICAgeWVsbG93TWF0ZXJpYWwuZW1pc3NpdmVDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMygxLCAxLCAwLjYpXG4gICAgeWVsbG93TWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IEJBQllMT04uQ29sb3IzLldoaXRlKClcbiAgICBjb25zdCB5ZWxsb3dTdGFyID0gTWVzaEJ1aWxkZXIuQ3JlYXRlU3BoZXJlKFwic1wiLCB7IHNlZ21lbnRzOiA2LCBkaWFtZXRlcjogc3RhckRpYW1ldGVyIH0sIHNjZW5lKVxuICAgIHllbGxvd1N0YXIucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDEwMDAsIDEwMDAsIDEwMDApXG4gICAgeWVsbG93U3Rhci5tYXRlcmlhbCA9IHllbGxvd01hdGVyaWFsXG5cbiAgICAvLyBPcmFuZ2Ugc3RhcnNcbiAgICBjb25zdCBvcmFuZ2VNYXRlcmlhbCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoXCJvcmFuZ2VTdGFyTWF0ZXJpYWxcIiwgc2NlbmUpXG4gICAgb3JhbmdlTWF0ZXJpYWwuZW1pc3NpdmVDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMyguOTYsIC43NSwgLjI2KVxuICAgIG9yYW5nZU1hdGVyaWFsLnNwZWN1bGFyQ29sb3IgPSBCQUJZTE9OLkNvbG9yMy5XaGl0ZSgpXG4gICAgY29uc3Qgb3JhbmdlU3RhciA9IE1lc2hCdWlsZGVyLkNyZWF0ZVNwaGVyZShcInNcIiwgeyBzZWdtZW50czogNiwgZGlhbWV0ZXI6IHN0YXJEaWFtZXRlciB9LCBzY2VuZSlcbiAgICBvcmFuZ2VTdGFyLnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygxMDAwLCAxMDAwLCAxMDAwKVxuICAgIG9yYW5nZVN0YXIubWF0ZXJpYWwgPSBvcmFuZ2VNYXRlcmlhbFxuXG4gICAgLy8gV2hpdGUgc3RhcnNcbiAgICBjb25zdCB3aGl0ZU1hdGVyaWFsID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbChcIndoaXRlU3Rhck1hdGVyaWFsXCIsIHNjZW5lKVxuICAgIHdoaXRlTWF0ZXJpYWwuZW1pc3NpdmVDb2xvciA9IEJBQllMT04uQ29sb3IzLldoaXRlKClcbiAgICB3aGl0ZU1hdGVyaWFsLnNwZWN1bGFyQ29sb3IgPSBCQUJZTE9OLkNvbG9yMy5XaGl0ZSgpXG4gICAgY29uc3Qgd2hpdGVTdGFyID0gTWVzaEJ1aWxkZXIuQ3JlYXRlU3BoZXJlKFwic1wiLCB7IHNlZ21lbnRzOiA2LCBkaWFtZXRlcjogc3RhckRpYW1ldGVyIH0sIHNjZW5lKVxuICAgIHdoaXRlU3Rhci5wb3NpdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMTAwMCwgMTAwMCwgMTAwMClcbiAgICB3aGl0ZVN0YXIubWF0ZXJpYWwgPSB3aGl0ZU1hdGVyaWFsXG5cbiAgICBjb25zdCBTUFMgPSBuZXcgQkFCWUxPTi5Tb2xpZFBhcnRpY2xlU3lzdGVtKCdTUFMnLCBzY2VuZSwgeyB1c2VNb2RlbE1hdGVyaWFsOiB0cnVlLCB1cGRhdGFibGU6IGZhbHNlIH0pXG4gICAgLy9TUFMuYWRkU2hhcGUocmVkU3RhciwgbmIsIHsgcG9zaXRpb25GdW5jdGlvbjogc3RhclBvc2l0aW9uIH0pXG4gICAgU1BTLmFkZFNoYXBlKGJsdWVTdGFyLCBuYiwgeyBwb3NpdGlvbkZ1bmN0aW9uOiBzdGFyUG9zaXRpb24gfSlcbiAgICBTUFMuYWRkU2hhcGUoeWVsbG93U3RhciwgbmIsIHsgcG9zaXRpb25GdW5jdGlvbjogc3RhclBvc2l0aW9uIH0pXG4gICAgU1BTLmFkZFNoYXBlKG9yYW5nZVN0YXIsIG5iLCB7IHBvc2l0aW9uRnVuY3Rpb246IHN0YXJQb3NpdGlvbiB9KVxuICAgIFNQUy5hZGRTaGFwZSh3aGl0ZVN0YXIsIG5iLCB7IHBvc2l0aW9uRnVuY3Rpb246IHN0YXJQb3NpdGlvbiB9KVxuICAgIGNvbnN0IHN5c3RlbU1lc2ggPSBTUFMuYnVpbGRNZXNoKClcbiAgICAvLyBzdGFyU3BoZXJlLmRpc3Bvc2UoKVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHJldHVybiB7IFNQUywgc3lzdGVtTWVzaCwgYmFzZU1vZGVsczogW3JlZFN0YXIsIGJsdWVTdGFyLCB5ZWxsb3dTdGFyLCBvcmFuZ2VTdGFyLCB3aGl0ZVN0YXJdIH1cbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9zY2VuZSc7XG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGhzL21hdGgnO1xuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hcIlxuaW1wb3J0IHsgTWVzaEJ1aWxkZXIgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hCdWlsZGVyJ1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL0xlZ2FjeS9sZWdhY3lcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3VuKHNjZW5lOiBTY2VuZSkge1xuICAgIC8vIEVtaXR0ZXIgb2JqZWN0XG4gICAgdmFyIHN0YXJzID0gQkFCWUxPTi5NZXNoLkNyZWF0ZUJveChcImVtaXR0ZXJcIiwgMC4wMSwgc2NlbmUpO1xuXG4gICAgLy8gQ3JlYXRlIGEgcGFydGljbGUgc3lzdGVtXG4gICAgdmFyIHN1cmZhY2VQYXJ0aWNsZXMgPSBuZXcgQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbShcInN1cmZhY2VQYXJ0aWNsZXNcIiwgMTYwMCwgc2NlbmUpO1xuICAgIHZhciBmbGFyZVBhcnRpY2xlcyA9IG5ldyBCQUJZTE9OLlBhcnRpY2xlU3lzdGVtKFwiZmxhcmVQYXJ0aWNsZXNcIiwgMjAsIHNjZW5lKTtcbiAgICB2YXIgY29yb25hUGFydGljbGVzID0gbmV3IEJBQllMT04uUGFydGljbGVTeXN0ZW0oXCJjb3JvbmFQYXJ0aWNsZXNcIiwgNjAwLCBzY2VuZSk7XG4gICAgLy8gdmFyIHN0YXJzUGFydGljbGVzID0gbmV3IEJBQllMT04uUGFydGljbGVTeXN0ZW0oXCJzdGFyc1BhcnRpY2xlc1wiLCA1MDAsIHNjZW5lKTtcblxuICAgIC8vIFRleHR1cmUgb2YgZWFjaCBwYXJ0aWNsZVxuICAgIHN1cmZhY2VQYXJ0aWNsZXMucGFydGljbGVUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZShcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9QYXRyaWNrUnlhbk1TL0JhYnlsb25KU3RleHR1cmVzL21hc3Rlci9QYXJ0aWNsZVN5c3RlbXMvU3VuL1RfU3VuU3VyZmFjZS5wbmdcIiwgc2NlbmUpO1xuICAgIGZsYXJlUGFydGljbGVzLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUGF0cmlja1J5YW5NUy9CYWJ5bG9uSlN0ZXh0dXJlcy9tYXN0ZXIvUGFydGljbGVTeXN0ZW1zL1N1bi9UX1N1bkZsYXJlLnBuZ1wiLCBzY2VuZSk7XG4gICAgY29yb25hUGFydGljbGVzLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUGF0cmlja1J5YW5NUy9CYWJ5bG9uSlN0ZXh0dXJlcy9tYXN0ZXIvUGFydGljbGVTeXN0ZW1zL1N1bi9UX1N0YXIucG5nXCIsIHNjZW5lKTtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1BhdHJpY2tSeWFuTVMvQmFieWxvbkpTdGV4dHVyZXMvbWFzdGVyL1BhcnRpY2xlU3lzdGVtcy9TdW4vVF9TdGFyLnBuZ1wiLCBzY2VuZSk7XG5cbiAgICAvLyBDcmVhdGUgY29yZSBzcGhlcmVcbiAgICB2YXIgY29yZVNwaGVyZSA9IEJBQllMT04uTWVzaEJ1aWxkZXIuQ3JlYXRlU3BoZXJlKFwiY29yZVNwaGVyZVwiLCB7IGRpYW1ldGVyOiAyLjAxLCBzZWdtZW50czogNjQgfSwgc2NlbmUpO1xuXG4gICAgLy8gQ3JlYXRlIGNvcmUgbWF0ZXJpYWxcbiAgICB2YXIgY29yZU1hdCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoXCJjb3JlTWF0XCIsIHNjZW5lKVxuICAgIGNvcmVNYXQuZW1pc3NpdmVDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMygwLjM3NzMsIDAuMDkzMCwgMC4wMjY2KTtcblxuICAgIC8vIEFzc2lnbiBjb3JlIG1hdGVyaWFsIHRvIHNwaGVyZVxuICAgIGNvcmVTcGhlcmUubWF0ZXJpYWwgPSBjb3JlTWF0O1xuXG4gICAgLy8gUHJlLXdhcm1cbiAgICBzdXJmYWNlUGFydGljbGVzLnByZVdhcm1TdGVwT2Zmc2V0ID0gMTA7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5wcmVXYXJtQ3ljbGVzID0gMTAwO1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMucHJlV2FybVN0ZXBPZmZzZXQgPSAxMDtcbiAgICBmbGFyZVBhcnRpY2xlcy5wcmVXYXJtQ3ljbGVzID0gMTAwO1xuXG4gICAgY29yb25hUGFydGljbGVzLnByZVdhcm1TdGVwT2Zmc2V0ID0gMTA7XG4gICAgY29yb25hUGFydGljbGVzLnByZVdhcm1DeWNsZXMgPSAxMDA7XG5cbiAgICAvLyBJbml0aWFsIHJvdGF0aW9uXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5taW5Jbml0aWFsUm90YXRpb24gPSAtMiAqIE1hdGguUEk7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5tYXhJbml0aWFsUm90YXRpb24gPSAyICogTWF0aC5QSTtcblxuICAgIGZsYXJlUGFydGljbGVzLm1pbkluaXRpYWxSb3RhdGlvbiA9IC0yICogTWF0aC5QSTtcbiAgICBmbGFyZVBhcnRpY2xlcy5tYXhJbml0aWFsUm90YXRpb24gPSAyICogTWF0aC5QSTtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5taW5Jbml0aWFsUm90YXRpb24gPSAtMiAqIE1hdGguUEk7XG4gICAgY29yb25hUGFydGljbGVzLm1heEluaXRpYWxSb3RhdGlvbiA9IDIgKiBNYXRoLlBJO1xuXG4gICAgLy8gV2hlcmUgdGhlIHN1biBwYXJ0aWNsZXMgY29tZSBmcm9tXG4gICAgdmFyIHN1bkVtaXR0ZXIgPSBuZXcgQkFCWUxPTi5TcGhlcmVQYXJ0aWNsZUVtaXR0ZXIoKTtcbiAgICBzdW5FbWl0dGVyLnJhZGl1cyA9IDE7XG4gICAgc3VuRW1pdHRlci5yYWRpdXNSYW5nZSA9IDA7IC8vIGVtaXQgb25seSBmcm9tIHNoYXBlIHN1cmZhY2VcblxuICAgIC8vIFdoZXJlIHRoZSBzdGFycyBwYXJ0aWNsZXMgY29tZSBmcm9tXG4gICAgdmFyIHN0YXJzRW1pdHRlciA9IG5ldyBCQUJZTE9OLlNwaGVyZVBhcnRpY2xlRW1pdHRlcigpO1xuICAgIHN0YXJzRW1pdHRlci5yYWRpdXMgPSAyMDtcbiAgICBzdGFyc0VtaXR0ZXIucmFkaXVzUmFuZ2UgPSAwOyAvLyBlbWl0IG9ubHkgZnJvbSBzaGFwZSBzdXJmYWNlXG5cbiAgICAvLyBBc3NpZ24gcGFydGljbGVzIHRvIGVtaXR0ZXJzXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5lbWl0dGVyID0gY29yZVNwaGVyZTsgLy8gdGhlIHN0YXJ0aW5nIG9iamVjdCwgdGhlIGVtaXR0ZXJcbiAgICBzdXJmYWNlUGFydGljbGVzLnBhcnRpY2xlRW1pdHRlclR5cGUgPSBzdW5FbWl0dGVyO1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMuZW1pdHRlciA9IGNvcmVTcGhlcmU7IC8vIHRoZSBzdGFydGluZyBvYmplY3QsIHRoZSBlbWl0dGVyXG4gICAgZmxhcmVQYXJ0aWNsZXMucGFydGljbGVFbWl0dGVyVHlwZSA9IHN1bkVtaXR0ZXI7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMuZW1pdHRlciA9IGNvcmVTcGhlcmU7IC8vIHRoZSBzdGFydGluZyBvYmplY3QsIHRoZSBlbWl0dGVyXG4gICAgY29yb25hUGFydGljbGVzLnBhcnRpY2xlRW1pdHRlclR5cGUgPSBzdW5FbWl0dGVyO1xuXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMuZW1pdHRlciA9IHN0YXJzOyAvLyB0aGUgc3RhcnRpbmcgb2JqZWN0LCB0aGUgZW1pdHRlclxuICAgIC8vIHN0YXJzUGFydGljbGVzLnBhcnRpY2xlRW1pdHRlclR5cGUgPSBzdGFyc0VtaXR0ZXI7XG5cbiAgICAvLyAvLyBSYW5kb20gc3RhcnRpbmcgY29sb3JcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5jb2xvcjEgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMC44OTgsIDAuNzM3LCAwLjcxOCwgMS4wKTtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5jb2xvcjIgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMC41ODQsIDAuODMxLCAwLjg5NCwgMS4wKTtcblxuICAgIC8vIENvbG9yIGdyYWRpZW50IG92ZXIgdGltZVxuICAgIHN1cmZhY2VQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgwLCBuZXcgQkFCWUxPTi5Db2xvcjQoMC44NTA5LCAwLjQ3ODQsIDAuMTAxOSwgMC4wKSk7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAuNCwgbmV3IEJBQllMT04uQ29sb3I0KDAuNjI1OSwgMC4zMDU2LCAwLjA2MTksIDAuNSkpO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgwLjUsIG5ldyBCQUJZTE9OLkNvbG9yNCgwLjYwMzksIDAuMjg4NywgMC4wNTc5LCAwLjUpKTtcbiAgICBzdXJmYWNlUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMS4wLCBuZXcgQkFCWUxPTi5Db2xvcjQoMC4zMjA3LCAwLjA3MTMsIDAuMDA3NSwgMC4wKSk7XG5cbiAgICBmbGFyZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAsIG5ldyBCQUJZTE9OLkNvbG9yNCgxLCAwLjk2MTIsIDAuNTE0MSwgMC4wKSk7XG4gICAgZmxhcmVQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgwLjI1LCBuZXcgQkFCWUxPTi5Db2xvcjQoMC45MDU4LCAwLjcxNTIsIDAuMzgyNSwgMS4wKSk7XG4gICAgZmxhcmVQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgxLjAsIG5ldyBCQUJZTE9OLkNvbG9yNCgwLjYzMjAsIDAuMCwgMC4wLCAwLjApKTtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAsIG5ldyBCQUJZTE9OLkNvbG9yNCgwLjg1MDksIDAuNDc4NCwgMC4xMDE5LCAwLjApKTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgwLjUsIG5ldyBCQUJZTE9OLkNvbG9yNCgwLjYwMzksIDAuMjg4NywgMC4wNTc5LCAwLjEyKSk7XG4gICAgY29yb25hUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMS4wLCBuZXcgQkFCWUxPTi5Db2xvcjQoMC4zMjA3LCAwLjA3MTMsIDAuMDA3NSwgMC4wKSk7XG5cbiAgICAvLyBTaXplIG9mIGVhY2ggcGFydGljbGUgKHJhbmRvbSBiZXR3ZWVuLi4uXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5taW5TaXplID0gMC40O1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWF4U2l6ZSA9IDAuNztcblxuICAgIGZsYXJlUGFydGljbGVzLm1pblNjYWxlWCA9IDAuNTtcbiAgICBmbGFyZVBhcnRpY2xlcy5taW5TY2FsZVkgPSAwLjU7XG4gICAgZmxhcmVQYXJ0aWNsZXMubWF4U2NhbGVYID0gMS4wO1xuICAgIGZsYXJlUGFydGljbGVzLm1heFNjYWxlWSA9IDEuMDtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5taW5TY2FsZVggPSAwLjU7XG4gICAgY29yb25hUGFydGljbGVzLm1pblNjYWxlWSA9IDAuNzU7XG4gICAgY29yb25hUGFydGljbGVzLm1heFNjYWxlWCA9IDEuMjtcbiAgICBjb3JvbmFQYXJ0aWNsZXMubWF4U2NhbGVZID0gMy4wO1xuXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWluU2l6ZSA9IDAuMTU7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4U2l6ZSA9IDAuMztcblxuICAgIC8vIFNpemUgb3ZlciBsaWZldGltZVxuICAgIGZsYXJlUGFydGljbGVzLmFkZFNpemVHcmFkaWVudCgwLCAwKTtcbiAgICBmbGFyZVBhcnRpY2xlcy5hZGRTaXplR3JhZGllbnQoMSwgMSk7XG5cbiAgICAvLyBMaWZlIHRpbWUgb2YgZWFjaCBwYXJ0aWNsZSAocmFuZG9tIGJldHdlZW4uLi5cbiAgICBzdXJmYWNlUGFydGljbGVzLm1pbkxpZmVUaW1lID0gOC4wO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWF4TGlmZVRpbWUgPSA4LjA7XG5cbiAgICBmbGFyZVBhcnRpY2xlcy5taW5MaWZlVGltZSA9IDEwLjA7XG4gICAgZmxhcmVQYXJ0aWNsZXMubWF4TGlmZVRpbWUgPSAxMC4wO1xuXG4gICAgY29yb25hUGFydGljbGVzLm1pbkxpZmVUaW1lID0gMi4wO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5tYXhMaWZlVGltZSA9IDIuMDtcblxuICAgIC8vIHN0YXJzUGFydGljbGVzLm1pbkxpZmVUaW1lID0gOTk5OTk5O1xuICAgIC8vIHN0YXJzUGFydGljbGVzLm1heExpZmVUaW1lID0gOTk5OTk5O1xuXG4gICAgLy8gRW1pc3Npb24gcmF0ZVxuICAgIHN1cmZhY2VQYXJ0aWNsZXMuZW1pdFJhdGUgPSAyMDA7XG4gICAgZmxhcmVQYXJ0aWNsZXMuZW1pdFJhdGUgPSAxO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5lbWl0UmF0ZSA9IDMwMDtcblxuICAgIC8vIC8vIEJ1cnN0IHJhdGVcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5tYW51YWxFbWl0Q291bnQgPSA1MDA7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4RW1pdFBvd2VyID0gMC4wO1xuXG4gICAgLy8gQmxlbmQgbW9kZSA6IEJMRU5ETU9ERV9PTkVPTkUsIEJMRU5ETU9ERV9TVEFOREFSRCwgb3IgQkxFTkRNT0RFX0FERFxuICAgIHN1cmZhY2VQYXJ0aWNsZXMuYmxlbmRNb2RlID0gQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfQUREO1xuICAgIGZsYXJlUGFydGljbGVzLmJsZW5kTW9kZSA9IEJBQllMT04uUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX0FERDtcbiAgICBjb3JvbmFQYXJ0aWNsZXMuYmxlbmRNb2RlID0gQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfQUREO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLmJsZW5kTW9kZSA9IEJBQllMT04uUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX1NUQU5EQVJEO1xuXG4gICAgLy8gU2V0IHRoZSBncmF2aXR5IG9mIGFsbCBwYXJ0aWNsZXNcbiAgICBzdXJmYWNlUGFydGljbGVzLmdyYXZpdHkgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApO1xuICAgIGZsYXJlUGFydGljbGVzLmdyYXZpdHkgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5ncmF2aXR5ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKTtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5ncmF2aXR5ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKTtcblxuICAgIC8vIEFuZ3VsYXIgc3BlZWQsIGluIHJhZGlhbnNcbiAgICBzdXJmYWNlUGFydGljbGVzLm1pbkFuZ3VsYXJTcGVlZCA9IC0wLjQ7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5tYXhBbmd1bGFyU3BlZWQgPSAwLjQ7XG5cbiAgICBmbGFyZVBhcnRpY2xlcy5taW5Bbmd1bGFyU3BlZWQgPSAwLjA7XG4gICAgZmxhcmVQYXJ0aWNsZXMubWF4QW5ndWxhclNwZWVkID0gMC4wO1xuXG4gICAgY29yb25hUGFydGljbGVzLm1pbkFuZ3VsYXJTcGVlZCA9IDAuMDtcbiAgICBjb3JvbmFQYXJ0aWNsZXMubWF4QW5ndWxhclNwZWVkID0gMC4wO1xuXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWluQW5ndWxhclNwZWVkID0gMC4wO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLm1heEFuZ3VsYXJTcGVlZCA9IDAuMDtcblxuICAgIC8vIFNwZWVkXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5taW5FbWl0UG93ZXIgPSAwO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWF4RW1pdFBvd2VyID0gMDtcbiAgICBzdXJmYWNlUGFydGljbGVzLnVwZGF0ZVNwZWVkID0gMC4wMDU7XG5cbiAgICBmbGFyZVBhcnRpY2xlcy5taW5FbWl0UG93ZXIgPSAwLjAwMTtcbiAgICBmbGFyZVBhcnRpY2xlcy5tYXhFbWl0UG93ZXIgPSAwLjAxO1xuXG4gICAgY29yb25hUGFydGljbGVzLm1pbkVtaXRQb3dlciA9IDAuMDtcbiAgICBjb3JvbmFQYXJ0aWNsZXMubWF4RW1pdFBvd2VyID0gMC4wO1xuXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWluRW1pdFBvd2VyID0gMC4wO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLm1heEFuZ3VsYXJTcGVlZCA9IDAuMDtcblxuICAgIC8vIE5vIGJpbGxib2FyZFxuICAgIHN1cmZhY2VQYXJ0aWNsZXMuaXNCaWxsYm9hcmRCYXNlZCA9IGZhbHNlO1xuICAgIGZsYXJlUGFydGljbGVzLmlzQmlsbGJvYXJkQmFzZWQgPSB0cnVlO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5pc0JpbGxib2FyZEJhc2VkID0gdHJ1ZTtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5pc0JpbGxib2FyZEJhc2VkID0gdHJ1ZTtcblxuICAgIC8vIFJlbmRlciBPcmRlclxuICAgIC8vIHN0YXJzUGFydGljbGVzLnJlbmRlcmluZ0dyb3VwSWQgPSAwO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5yZW5kZXJpbmdHcm91cElkID0gMTtcbiAgICBmbGFyZVBhcnRpY2xlcy5yZW5kZXJpbmdHcm91cElkID0gMjtcbiAgICBzdXJmYWNlUGFydGljbGVzLnJlbmRlcmluZ0dyb3VwSWQgPSAzO1xuICAgIGNvcmVTcGhlcmUucmVuZGVyaW5nR3JvdXBJZCA9IDM7XG5cbiAgICAvLyBTdGFydCB0aGUgcGFydGljbGUgc3lzdGVtXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5zdGFydCgpO1xuICAgIGZsYXJlUGFydGljbGVzLnN0YXJ0KCk7XG4gICAgY29yb25hUGFydGljbGVzLnN0YXJ0KCk7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMuc3RhcnQoKTtcblxuICAgIHJldHVybiBzY2VuZTtcbn0iLCJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvRW5naW5lcy9lbmdpbmUnO1xuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvc2NlbmUnO1xuaW1wb3J0IHsgQ29sb3IzLCBWZWN0b3IzIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGhzL21hdGgnO1xuaW1wb3J0IHsgRnJlZUNhbWVyYSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9DYW1lcmFzL2ZyZWVDYW1lcmEnO1xuaW1wb3J0IHsgVW5pdmVyc2FsQ2FtZXJhIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0NhbWVyYXMvdW5pdmVyc2FsQ2FtZXJhJ1xuaW1wb3J0IHsgSGVtaXNwaGVyaWNMaWdodCB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9MaWdodHMvaGVtaXNwaGVyaWNMaWdodCdcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoXCJcbmltcG9ydCB7IE1lc2hCdWlsZGVyIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlcic7XG5pbXBvcnQgeyBUZXJyYWluTWF0ZXJpYWwgfSBmcm9tICdAYmFieWxvbmpzL21hdGVyaWFscy90ZXJyYWluJ1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL0xlZ2FjeS9sZWdhY3lcIjtcbmltcG9ydCB7IEdyaWRNYXRlcmlhbCB9IGZyb20gJ0BiYWJ5bG9uanMvbWF0ZXJpYWxzL2dyaWQnXG5cbmltcG9ydCBcIkBiYWJ5bG9uanMvY29yZS9NZXNoZXMvbWVzaEJ1aWxkZXJcIjtcblxuaW1wb3J0IHsgY3JlYXRlU3RhcnMgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RhcnMnXG5pbXBvcnQgeyBjcmVhdGVTY2VuZSB9IGZyb20gJy4vY29tcG9uZW50cy9zY2VuZSdcbmltcG9ydCB7IGNyZWF0ZVN1biB9IGZyb20gJy4vY29tcG9uZW50cy9zdW4nXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVuZGVyQ2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuXG5jb25zdCBlbmdpbmUgPSBuZXcgRW5naW5lKGNhbnZhcyk7XG4vL2VuZ2luZS5sb2FkaW5nU2NyZWVuID0gbmV3IEJBQllMT04uRGVmYXVsdExvYWRpbmdTY3JlZW4oY2FudmFzLCBcIlwiLCBcImJsYWNrXCIpXG5cbmZ1bmN0aW9uIGNyZWF0ZURlbGF5ZWRTY2VuZSgpIHtcbiAgICAvLyBTY2VuZVxuICAgIGNvbnN0IHsgc2NlbmUgfSA9IGNyZWF0ZVNjZW5lKGNhbnZhcywgZW5naW5lKVxuXG4gICAgLy8gU3R1ZmZcbiAgICBjb25zdCB7IFNQUywgc3lzdGVtTWVzaDogc3RhcnMgfSA9IGNyZWF0ZVN0YXJzKHNjZW5lKVxuICAgIGNyZWF0ZVN1bihzY2VuZSlcblxuXG4gICAgLyogdmFyIG1ha2VTaGFkb3dzPTA7XG4gICAgIHZhciBsb2Q9MDsgKi9cblxuICAgIGxldCBtYXRlcmlhbCA9IG5ldyBHcmlkTWF0ZXJpYWwoXCJncmlkXCIsIHNjZW5lKTtcblxuICAgIC8vIGJhc2UgZ3JvdW5kXG4gICAgLy9jb25zdCBncm91bmQgPSBNZXNoLkNyZWF0ZUdyb3VuZChcImdyb3VuZC0xXCIsIDYwMCwgNjAwLCAyMDAsIHNjZW5lKTtcbiAgICBjb25zdCBncm91bmQgPSBNZXNoQnVpbGRlci5DcmVhdGVHcm91bmQoXCJncm91bmRcIiwgeyB3aWR0aDogMTAsIGhlaWdodDogMTAgfSlcbiAgICBncm91bmQubWF0ZXJpYWwgPSBtYXRlcmlhbDtcblxuICAgIGxldCBzcGhlcmUgPSBNZXNoLkNyZWF0ZVNwaGVyZShcInNwaGVyZS0xXCIsIDE2LCAxLCBzY2VuZSk7XG5cbiAgICBzcGhlcmUucG9zaXRpb24gPSBuZXcgVmVjdG9yMygyLCA0LCAwKVxuICAgIHNwaGVyZS5zY2FsaW5nLnggPSAxXG4gICAgc3BoZXJlLnNjYWxpbmcueSA9IDFcbiAgICBzcGhlcmUuc2NhbGluZy56ID0gMVxuXG4gICAgc3BoZXJlLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG5cbiAgICAvKiBjb25zdCBza3lib3ggPSBNZXNoLkNyZWF0ZUJveChcIkJhY2tncm91bmRTa3lib3hcIiwgNTAwLCBzY2VuZSwgdW5kZWZpbmVkLCBNZXNoLkJBQ0tTSURFKTtcbiAgICAgICAgXG4gICAgLy8gQ3JlYXRlIGFuZCB0d2VhayB0aGUgYmFja2dyb3VuZCBtYXRlcmlhbC5cbiAgICBjb25zdCBiYWNrZ3JvdW5kTWF0ZXJpYWwgPSBuZXcgQkFCWUxPTi5CYWNrZ3JvdW5kTWF0ZXJpYWwoXCJiYWNrZ3JvdW5kTWF0ZXJpYWxcIiwgc2NlbmUpO1xuICAgIGJhY2tncm91bmRNYXRlcmlhbC5yZWZsZWN0aW9uVGV4dHVyZSA9IG5ldyBCQUJZTE9OLkN1YmVUZXh0dXJlKFwidGV4dHVyZXMvVHJvcGljYWxTdW5ueURheVwiLCBzY2VuZSk7XG4gICAgYmFja2dyb3VuZE1hdGVyaWFsLnJlZmxlY3Rpb25UZXh0dXJlLmNvb3JkaW5hdGVzTW9kZSA9IEJBQllMT04uVGV4dHVyZS5TS1lCT1hfTU9ERTtcbiAgICBza3lib3gubWF0ZXJpYWwgPSBiYWNrZ3JvdW5kTWF0ZXJpYWw7IFxuICAgIHZhciBlYXJ0aE1hdGVyaWFsID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbChcImVhcnRoTWF0ZXJpYWxcIiwgc2NlbmUpO1xuICAgICAgICBlYXJ0aC5tYXRlcmlhbCA9IGVhcnRoTWF0ZXJpYWw7XG4gICAgICAgIGVhcnRoTWF0ZXJpYWwuYW1iaWVudENvbG9yID0gbmV3IEJBQllMT04uQ29sb3IzKC44LCAuOCwgMSk7ICovXG4gICAgcmV0dXJuIHNjZW5lXG59XG5cbmxldCBzY2VuZVxuc2V0VGltZW91dCgoKSA9PiB7c2NlbmUgPSBjcmVhdGVEZWxheWVkU2NlbmUoKX0sIDYwMDApXG5cbmVuZ2luZS5ydW5SZW5kZXJMb29wKCgpID0+IHtcbiAgICBpZiAoIXNjZW5lKSB7XG4gICAgICAgIGVuZ2luZS5kaXNwbGF5TG9hZGluZ1VJKClcbiAgICB9XG4gICAgaWYgKHNjZW5lKSB7XG4gICAgICAgIHNjZW5lLnJlbmRlcigpO1xuICAgICAgICBlbmdpbmUuaGlkZUxvYWRpbmdVSSgpXG4gICAgfVxufSkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyB0aGUgc3RhcnR1cCBmdW5jdGlvblxuLy8gSXQncyBlbXB0eSBhcyBzb21lIHJ1bnRpbWUgbW9kdWxlIGhhbmRsZXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Jcbl9fd2VicGFja19yZXF1aXJlX18ueCA9IHggPT4ge307XG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxudmFyIGRlZmVycmVkTW9kdWxlcyA9IFtcblx0W1wiLi9zcmMvaW5kZXgudHNcIixcInZlbmRvcnNcIl1cbl07XG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSB4ID0+IHt9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZSwgZXhlY3V0ZU1vZHVsZXNdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcblx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG5cdH1cblxuXHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG5cdGlmKGV4ZWN1dGVNb2R1bGVzKSBkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcblxuXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcblx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5reHZlcnNlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3h2ZXJzZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7XG5cbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSB4ID0+IHt9O1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG52YXIgc3RhcnR1cCA9IF9fd2VicGFja19yZXF1aXJlX18ueDtcbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gc3RhcnR1cCB8fCAoeCA9PiB7fSk7XG5cdHJldHVybiAoY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwpKCk7XG59OyIsIi8vIHJ1biBzdGFydHVwXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==