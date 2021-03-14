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
engine.runRenderLoop(function () {
    scene.render();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvY29tcG9uZW50cy9zY2VuZS50cyIsIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvY29tcG9uZW50cy9zdGFycy50cyIsIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvY29tcG9uZW50cy9zdW4udHMiLCJ3ZWJwYWNrOi8veHZlcnNlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3h2ZXJzZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3h2ZXJzZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3h2ZXJzZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3h2ZXJzZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3h2ZXJzZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly94dmVyc2Uvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEdBQThDO0FBQzlDLG1IQUE2RDtBQUM3RCx5SUFBZ0U7QUFFaEUseUpBQTBFO0FBQzFFLHdJQUF5RDtBQUV6RCxzSEFBNEM7QUFRNUMsU0FBZ0IsV0FBVyxDQUFDLE1BQXlCLEVBQUUsTUFBc0I7SUFHekUsSUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFaEMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBR2pELElBQU0sTUFBTSxHQUFHLElBQUksdUJBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxjQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQztJQU90RSxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUduQyxJQUFJLEtBQUssR0FBRyxJQUFJLG1DQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLGNBQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdFLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxhQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFFN0MsT0FBTyxFQUFFLEtBQUssU0FBRSxNQUFNLFVBQUUsS0FBSyxTQUFFO0FBQ25DLENBQUM7QUF2QkQsa0NBdUJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0QsbUhBQXFEO0FBRXJELDBJQUFnRTtBQUNoRSx3SUFBeUQ7QUFRekQsU0FBZ0IsV0FBVyxDQUFDLEtBQVk7SUFJcEMsSUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLElBQU0sSUFBSSxHQUFHLEtBQUs7SUFDbEIsSUFBTSxXQUFXLEdBQUcsS0FBSztJQUN6QixJQUFNLFlBQVksR0FBRyxFQUFFO0lBRXZCLElBQU0saUJBQWlCLEdBQUcsY0FBTSxXQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUEzQixDQUEyQjtJQUMzRCxJQUFNLFdBQVcsR0FBRyxjQUFNLGtCQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLEVBQTVELENBQTREO0lBQ3RGLElBQU0sWUFBWSxHQUFHLFVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxjQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUM7UUFDNUUsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBR3ZELENBQUM7SUFFRCxJQUFNLEVBQUUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRzVFLElBQU0sV0FBVyxHQUFHLElBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQztJQUMzRSxXQUFXLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO0lBQ2hELElBQU0sT0FBTyxHQUFHLHlCQUFXLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssQ0FBQztJQUM3RixPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztJQUN4RCxPQUFPLENBQUMsUUFBUSxHQUFHLFdBQVc7SUFHOUIsSUFBTSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDO0lBQzdFLFlBQVksQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdELFlBQVksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFDbkQsSUFBTSxRQUFRLEdBQUcseUJBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxDQUFDO0lBQzlGLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3pELFFBQVEsQ0FBQyxRQUFRLEdBQUcsWUFBWTtJQUtoQyxJQUFNLGNBQWMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUM7SUFDaEYsY0FBYyxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDNUQsY0FBYyxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUNyRCxJQUFNLFVBQVUsR0FBRyx5QkFBVyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLENBQUM7SUFDaEcsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDM0QsVUFBVSxDQUFDLFFBQVEsR0FBRyxjQUFjO0lBR3BDLElBQU0sY0FBYyxHQUFHLElBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQztJQUNoRixjQUFjLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUNoRSxjQUFjLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQ3JELElBQU0sVUFBVSxHQUFHLHlCQUFXLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssQ0FBQztJQUNoRyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztJQUMzRCxVQUFVLENBQUMsUUFBUSxHQUFHLGNBQWM7SUFHcEMsSUFBTSxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDO0lBQzlFLGFBQWEsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFDcEQsYUFBYSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUNwRCxJQUFNLFNBQVMsR0FBRyx5QkFBVyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLENBQUM7SUFDL0YsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDMUQsU0FBUyxDQUFDLFFBQVEsR0FBRyxhQUFhO0lBRWxDLElBQU0sR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBRXZHLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxDQUFDO0lBQzlELEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxDQUFDO0lBQ2hFLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxDQUFDO0lBQ2hFLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxDQUFDO0lBQy9ELElBQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEVBQUU7SUFHbEMsT0FBTyxFQUFFLEdBQUcsT0FBRSxVQUFVLGNBQUUsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxFQUFFO0FBQ2xHLENBQUM7QUF2RUQsa0NBdUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUQsd0lBQXlEO0FBR3pELFNBQWdCLFNBQVMsQ0FBQyxLQUFZO0lBRWxDLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFHM0QsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25GLElBQUksY0FBYyxHQUFHLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0UsSUFBSSxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUloRixnQkFBZ0IsQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLCtHQUErRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9LLGNBQWMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLDZHQUE2RyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNLLGVBQWUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLHlHQUF5RyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBSXhLLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBR3pHLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7SUFDNUQsT0FBTyxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUduRSxVQUFVLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUc5QixnQkFBZ0IsQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDeEMsZ0JBQWdCLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztJQUVyQyxjQUFjLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQ3RDLGNBQWMsQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO0lBRW5DLGVBQWUsQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDdkMsZUFBZSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7SUFHcEMsZ0JBQWdCLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuRCxnQkFBZ0IsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUVsRCxjQUFjLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNqRCxjQUFjLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFFaEQsZUFBZSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbEQsZUFBZSxDQUFDLGtCQUFrQixHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBR2pELElBQUksVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDckQsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdEIsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFHM0IsSUFBSSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUN2RCxZQUFZLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUN6QixZQUFZLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUc3QixnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO0lBQ3RDLGdCQUFnQixDQUFDLG1CQUFtQixHQUFHLFVBQVUsQ0FBQztJQUVsRCxjQUFjLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztJQUNwQyxjQUFjLENBQUMsbUJBQW1CLEdBQUcsVUFBVSxDQUFDO0lBRWhELGVBQWUsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO0lBQ3JDLGVBQWUsQ0FBQyxtQkFBbUIsR0FBRyxVQUFVLENBQUM7SUFVakQsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4RixnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEYsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXhGLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0UsY0FBYyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2RixjQUFjLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRWhGLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckYsZUFBZSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RixlQUFlLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBR3ZGLGdCQUFnQixDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDL0IsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUUvQixjQUFjLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUMvQixjQUFjLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUMvQixjQUFjLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUMvQixjQUFjLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUUvQixlQUFlLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUNoQyxlQUFlLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUNqQyxlQUFlLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUNoQyxlQUFlLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQU1oQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUdyQyxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQ25DLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFFbkMsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDbEMsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFFbEMsZUFBZSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDbEMsZUFBZSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFNbEMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUNoQyxjQUFjLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUM1QixlQUFlLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQU8vQixnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7SUFDbEUsY0FBYyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztJQUNoRSxlQUFlLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO0lBSWpFLGdCQUFnQixDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RCxjQUFjLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RELGVBQWUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFJdkQsZ0JBQWdCLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQ3hDLGdCQUFnQixDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7SUFFdkMsY0FBYyxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7SUFDckMsY0FBYyxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7SUFFckMsZUFBZSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7SUFDdEMsZUFBZSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7SUFNdEMsZ0JBQWdCLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUNsQyxnQkFBZ0IsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFFckMsY0FBYyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDcEMsY0FBYyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFFbkMsZUFBZSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7SUFDbkMsZUFBZSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7SUFNbkMsZ0JBQWdCLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQzFDLGNBQWMsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFDdkMsZUFBZSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztJQUt4QyxlQUFlLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLGNBQWMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDcEMsZ0JBQWdCLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFHaEMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUd4QixPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBN0xELDhCQTZMQzs7Ozs7Ozs7Ozs7OztBQ3BNRCw2SEFBd0Q7QUFFeEQsbUhBQTZEO0FBSTdELHFIQUFrRDtBQUNsRCwwSUFBaUU7QUFHakUsdUhBQXdEO0FBRXhELHNIQUE0QztBQUU1Qyx5RkFBZ0Q7QUFDaEQseUZBQWdEO0FBQ2hELG1GQUE0QztBQUU1QyxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBc0IsQ0FBQztBQUU1RSxJQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUcxQixTQUFLLEdBQUssbUJBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQWhDLENBQWdDO0FBSXZDLFNBQTZCLG1CQUFXLENBQUMsS0FBSyxDQUFDLEVBQTdDLEdBQUcsV0FBYyxLQUFLLGdCQUF1QjtBQUNyRCxlQUFTLENBQUMsS0FBSyxDQUFDO0FBTWhCLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFJL0MsSUFBTSxNQUFNLEdBQUcseUJBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDNUUsTUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFFM0IsSUFBSSxNQUFNLEdBQUcsV0FBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUV6RCxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksY0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBRXBCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBYTNCLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDakIsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FBQzs7Ozs7OztVQy9ERjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQztXQUNBO1dBQ0EsZ0JBQWdCLDJCQUEyQjtXQUMzQztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsNENBQTRDO1dBQzVDO1dBQ0EsRTs7Ozs7VUNwRkE7VUFDQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL3NjZW5lJztcbmltcG9ydCB7IENvbG9yMywgVmVjdG9yMyB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRocy9tYXRoJztcbmltcG9ydCB7IEZyZWVDYW1lcmEgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvQ2FtZXJhcy9mcmVlQ2FtZXJhJztcbmltcG9ydCB7IFVuaXZlcnNhbENhbWVyYSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9DYW1lcmFzL3VuaXZlcnNhbENhbWVyYSdcbmltcG9ydCB7IEhlbWlzcGhlcmljTGlnaHQgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTGlnaHRzL2hlbWlzcGhlcmljTGlnaHQnXG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gXCJAYmFieWxvbmpzL2NvcmUvTGVnYWN5L2xlZ2FjeVwiO1xuXG5pbXBvcnQgXCJAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hCdWlsZGVyXCI7XG5cbmludGVyZmFjZSBJU2NlbmVPdXRwdXQge1xuICAgIHNjZW5lOiBTY2VuZSxcbiAgICBjYW1lcmE6IEZyZWVDYW1lcmEgfCBVbml2ZXJzYWxDYW1lcmEsXG4gICAgbGlnaHQ6IEhlbWlzcGhlcmljTGlnaHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNjZW5lKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGVuZ2luZTogQkFCWUxPTi5FbmdpbmUpOiBJU2NlbmVPdXRwdXQge1xuXG4gICAgLy8gU2NlbmVcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBTY2VuZShlbmdpbmUpO1xuXG4gICAgc2NlbmUuY2xlYXJDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLCAwLCAwLCAxKVxuXG4gICAgLy8gQ2FtZXJhXG4gICAgY29uc3QgY2FtZXJhID0gbmV3IEZyZWVDYW1lcmEoXCJ4dmVyc2VcIiwgbmV3IFZlY3RvcjMoMCwgNSwgLTEwKSwgc2NlbmUpXG4gICAgLyogdmFyIGNhbWVyYSA9IG5ldyBCQUJZTE9OLkFyY1JvdGF0ZUNhbWVyYShcImNhbWVyYTFcIiwgMCwgMCwgMCwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAtMCksIHNjZW5lKTtcbiAgICAgY2FtZXJhLnNldFBvc2l0aW9uKG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMTQwMCwgNTApKTtcbiAgICAgY2FtZXJhLndoZWVsUHJlY2lzaW9uID0gMTsgKi9cblxuICAgIC8vY2FtZXJhLnNldFRhcmdldChWZWN0b3IzLlplcm8oKSk7XG5cbiAgICBjYW1lcmEuYXR0YWNoQ29udHJvbChjYW52YXMsIHRydWUpO1xuXG4gICAgLy8gTGlnaHRcbiAgICBsZXQgbGlnaHQgPSBuZXcgSGVtaXNwaGVyaWNMaWdodChcImxpZ2h0XCIsIG5ldyBWZWN0b3IzKDEwMCwgMjAwLCAzMDApLCBzY2VuZSk7XG4gICAgbGlnaHQuaW50ZW5zaXR5ID0gMTtcbiAgICBsaWdodC5zcGVjdWxhciA9IG5ldyBDb2xvcjMoMC45NSwgMC4xNSwgMC4xMSlcblxuICAgIHJldHVybiB7IHNjZW5lLCBjYW1lcmEsIGxpZ2h0IH1cbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9zY2VuZSc7XG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGhzL21hdGgnO1xuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hcIlxuaW1wb3J0IHsgTWVzaEJ1aWxkZXIgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hCdWlsZGVyJ1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL0xlZ2FjeS9sZWdhY3lcIjtcblxuaW50ZXJmYWNlIElDb25zdGVsbGF0aW9uT3V0cHV0IHtcbiAgICBTUFM6IEJBQllMT04uU29saWRQYXJ0aWNsZVN5c3RlbSxcbiAgICBzeXN0ZW1NZXNoOiBNZXNoLFxuICAgIGJhc2VNb2RlbHM6IE1lc2hbXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RhcnMoc2NlbmU6IFNjZW5lKTogSUNvbnN0ZWxsYXRpb25PdXRwdXQge1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8qIEJhY2tncm91bmQgc3RhcnMgKi9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBjb25zdCBuYiA9IDEwMDAwO1xuICAgIGNvbnN0IGZhY3QgPSAyMDAwMFxuICAgIGNvbnN0IG1pbkRpc3RhbmNlID0gMTAwMDBcbiAgICBjb25zdCBzdGFyRGlhbWV0ZXIgPSAxNVxuXG4gICAgY29uc3QgaW5kaWNhdG9yRnVuY3Rpb24gPSAoKSA9PiBNYXRoLnJhbmRvbSgpIDwgLjUgPyAtMSA6IDFcbiAgICBjb25zdCBnZXRQb3NpdGlvbiA9ICgpID0+IG1pbkRpc3RhbmNlICsgKE1hdGgucmFuZG9tKCkgKiAoZmFjdCAqIGluZGljYXRvckZ1bmN0aW9uKCkpKVxuICAgIGNvbnN0IHN0YXJQb3NpdGlvbiA9IChwYXJ0aWNsZSwgaSwgcykgPT4ge1xuICAgICAgICBwYXJ0aWNsZS5wb3NpdGlvbiA9IG5ldyBWZWN0b3IzKGdldFBvc2l0aW9uKCksIGdldFBvc2l0aW9uKCksIGdldFBvc2l0aW9uKCkpXG4gICAgICAgIHBhcnRpY2xlLmNvbG9yID0gbmV3IEJBQllMT04uQ29sb3I0KDEsIDEsIDAuMywgMS4wKVxuICAgICAgICAvL2dsLmFkZEluY2x1ZGVkT25seU1lc2gocGFydGljbGUpXG4gICAgICAgIC8vZ2wuaW50ZW5zaXR5ID0gMTBcbiAgICB9XG5cbiAgICBjb25zdCBnbCA9IG5ldyBCQUJZTE9OLkdsb3dMYXllcihcInN0YXJHbG93XCIsIHNjZW5lLCB7IGJsdXJLZXJuZWxTaXplOiA2NCB9KTtcblxuICAgIC8vIFJlZCBzdGFyc1xuICAgIGNvbnN0IHJlZE1hdGVyaWFsID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbChcInJlZFN0YXJzTWF0ZXJpYWxcIiwgc2NlbmUpXG4gICAgcmVkTWF0ZXJpYWwuZW1pc3NpdmVDb2xvciA9IEJBQllMT04uQ29sb3IzLlJlZCgpXG4gICAgY29uc3QgcmVkU3RhciA9IE1lc2hCdWlsZGVyLkNyZWF0ZVNwaGVyZShcInNcIiwgeyBzZWdtZW50czogNiwgZGlhbWV0ZXI6IHN0YXJEaWFtZXRlciB9LCBzY2VuZSlcbiAgICByZWRTdGFyLnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygxMDAwLCAxMDAwLCAxMDAwKVxuICAgIHJlZFN0YXIubWF0ZXJpYWwgPSByZWRNYXRlcmlhbFxuXG4gICAgLy8gQmx1ZSBzdGFyc1xuICAgIGNvbnN0IGJsdWVNYXRlcmlhbCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoXCJibHVlU3RhcnNNYXRlcmlhbFwiLCBzY2VuZSlcbiAgICBibHVlTWF0ZXJpYWwuZW1pc3NpdmVDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMygwLjcsIDAuOTYsIDEpXG4gICAgYmx1ZU1hdGVyaWFsLnNwZWN1bGFyQ29sb3IgPSBCQUJZTE9OLkNvbG9yMy5XaGl0ZSgpXG4gICAgY29uc3QgYmx1ZVN0YXIgPSBNZXNoQnVpbGRlci5DcmVhdGVTcGhlcmUoXCJzXCIsIHsgc2VnbWVudHM6IDYsIGRpYW1ldGVyOiBzdGFyRGlhbWV0ZXIgfSwgc2NlbmUpXG4gICAgYmx1ZVN0YXIucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDEwMDAsIDEwMDAsIDEwMDApXG4gICAgYmx1ZVN0YXIubWF0ZXJpYWwgPSBibHVlTWF0ZXJpYWxcblxuICAgIC8vIFllbGxvdyBzdGFyc1xuICAgIC8qdGhpcy5tYXQuZGlmZnVzZVRleHR1cmUgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwidGV4dHVyZXMvbWlzYy5qcGdcIiwgc2NlbmUpO1xuICAgIHRoaXMubWF0LmVtaXNzaXZlVGV4dHVyZSA9IHRoaXMubWF0LmRpZmZ1c2VUZXh0dXJlOyAqL1xuICAgIGNvbnN0IHllbGxvd01hdGVyaWFsID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbChcInllbGxvd1N0YXJNYXRlcmlhbFwiLCBzY2VuZSlcbiAgICB5ZWxsb3dNYXRlcmlhbC5lbWlzc2l2ZUNvbG9yID0gbmV3IEJBQllMT04uQ29sb3IzKDEsIDEsIDAuNilcbiAgICB5ZWxsb3dNYXRlcmlhbC5zcGVjdWxhckNvbG9yID0gQkFCWUxPTi5Db2xvcjMuV2hpdGUoKVxuICAgIGNvbnN0IHllbGxvd1N0YXIgPSBNZXNoQnVpbGRlci5DcmVhdGVTcGhlcmUoXCJzXCIsIHsgc2VnbWVudHM6IDYsIGRpYW1ldGVyOiBzdGFyRGlhbWV0ZXIgfSwgc2NlbmUpXG4gICAgeWVsbG93U3Rhci5wb3NpdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMTAwMCwgMTAwMCwgMTAwMClcbiAgICB5ZWxsb3dTdGFyLm1hdGVyaWFsID0geWVsbG93TWF0ZXJpYWxcblxuICAgIC8vIE9yYW5nZSBzdGFyc1xuICAgIGNvbnN0IG9yYW5nZU1hdGVyaWFsID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbChcIm9yYW5nZVN0YXJNYXRlcmlhbFwiLCBzY2VuZSlcbiAgICBvcmFuZ2VNYXRlcmlhbC5lbWlzc2l2ZUNvbG9yID0gbmV3IEJBQllMT04uQ29sb3IzKC45NiwgLjc1LCAuMjYpXG4gICAgb3JhbmdlTWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IEJBQllMT04uQ29sb3IzLldoaXRlKClcbiAgICBjb25zdCBvcmFuZ2VTdGFyID0gTWVzaEJ1aWxkZXIuQ3JlYXRlU3BoZXJlKFwic1wiLCB7IHNlZ21lbnRzOiA2LCBkaWFtZXRlcjogc3RhckRpYW1ldGVyIH0sIHNjZW5lKVxuICAgIG9yYW5nZVN0YXIucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDEwMDAsIDEwMDAsIDEwMDApXG4gICAgb3JhbmdlU3Rhci5tYXRlcmlhbCA9IG9yYW5nZU1hdGVyaWFsXG5cbiAgICAvLyBXaGl0ZSBzdGFyc1xuICAgIGNvbnN0IHdoaXRlTWF0ZXJpYWwgPSBuZXcgQkFCWUxPTi5TdGFuZGFyZE1hdGVyaWFsKFwid2hpdGVTdGFyTWF0ZXJpYWxcIiwgc2NlbmUpXG4gICAgd2hpdGVNYXRlcmlhbC5lbWlzc2l2ZUNvbG9yID0gQkFCWUxPTi5Db2xvcjMuV2hpdGUoKVxuICAgIHdoaXRlTWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IEJBQllMT04uQ29sb3IzLldoaXRlKClcbiAgICBjb25zdCB3aGl0ZVN0YXIgPSBNZXNoQnVpbGRlci5DcmVhdGVTcGhlcmUoXCJzXCIsIHsgc2VnbWVudHM6IDYsIGRpYW1ldGVyOiBzdGFyRGlhbWV0ZXIgfSwgc2NlbmUpXG4gICAgd2hpdGVTdGFyLnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygxMDAwLCAxMDAwLCAxMDAwKVxuICAgIHdoaXRlU3Rhci5tYXRlcmlhbCA9IHdoaXRlTWF0ZXJpYWxcblxuICAgIGNvbnN0IFNQUyA9IG5ldyBCQUJZTE9OLlNvbGlkUGFydGljbGVTeXN0ZW0oJ1NQUycsIHNjZW5lLCB7IHVzZU1vZGVsTWF0ZXJpYWw6IHRydWUsIHVwZGF0YWJsZTogZmFsc2UgfSlcbiAgICAvL1NQUy5hZGRTaGFwZShyZWRTdGFyLCBuYiwgeyBwb3NpdGlvbkZ1bmN0aW9uOiBzdGFyUG9zaXRpb24gfSlcbiAgICBTUFMuYWRkU2hhcGUoYmx1ZVN0YXIsIG5iLCB7IHBvc2l0aW9uRnVuY3Rpb246IHN0YXJQb3NpdGlvbiB9KVxuICAgIFNQUy5hZGRTaGFwZSh5ZWxsb3dTdGFyLCBuYiwgeyBwb3NpdGlvbkZ1bmN0aW9uOiBzdGFyUG9zaXRpb24gfSlcbiAgICBTUFMuYWRkU2hhcGUob3JhbmdlU3RhciwgbmIsIHsgcG9zaXRpb25GdW5jdGlvbjogc3RhclBvc2l0aW9uIH0pXG4gICAgU1BTLmFkZFNoYXBlKHdoaXRlU3RhciwgbmIsIHsgcG9zaXRpb25GdW5jdGlvbjogc3RhclBvc2l0aW9uIH0pXG4gICAgY29uc3Qgc3lzdGVtTWVzaCA9IFNQUy5idWlsZE1lc2goKVxuICAgIC8vIHN0YXJTcGhlcmUuZGlzcG9zZSgpXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgcmV0dXJuIHsgU1BTLCBzeXN0ZW1NZXNoLCBiYXNlTW9kZWxzOiBbcmVkU3RhciwgYmx1ZVN0YXIsIHllbGxvd1N0YXIsIG9yYW5nZVN0YXIsIHdoaXRlU3Rhcl0gfVxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL3NjZW5lJztcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0aHMvbWF0aCc7XG5pbXBvcnQgeyBNZXNoIH0gZnJvbSBcIkBiYWJ5bG9uanMvY29yZS9NZXNoZXMvbWVzaFwiXG5pbXBvcnQgeyBNZXNoQnVpbGRlciB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NZXNoZXMvbWVzaEJ1aWxkZXInXG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gXCJAYmFieWxvbmpzL2NvcmUvTGVnYWN5L2xlZ2FjeVwiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdW4oc2NlbmU6IFNjZW5lKSB7XG4gICAgLy8gRW1pdHRlciBvYmplY3RcbiAgICB2YXIgc3RhcnMgPSBCQUJZTE9OLk1lc2guQ3JlYXRlQm94KFwiZW1pdHRlclwiLCAwLjAxLCBzY2VuZSk7XG5cbiAgICAvLyBDcmVhdGUgYSBwYXJ0aWNsZSBzeXN0ZW1cbiAgICB2YXIgc3VyZmFjZVBhcnRpY2xlcyA9IG5ldyBCQUJZTE9OLlBhcnRpY2xlU3lzdGVtKFwic3VyZmFjZVBhcnRpY2xlc1wiLCAxNjAwLCBzY2VuZSk7XG4gICAgdmFyIGZsYXJlUGFydGljbGVzID0gbmV3IEJBQllMT04uUGFydGljbGVTeXN0ZW0oXCJmbGFyZVBhcnRpY2xlc1wiLCAyMCwgc2NlbmUpO1xuICAgIHZhciBjb3JvbmFQYXJ0aWNsZXMgPSBuZXcgQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbShcImNvcm9uYVBhcnRpY2xlc1wiLCA2MDAsIHNjZW5lKTtcbiAgICAvLyB2YXIgc3RhcnNQYXJ0aWNsZXMgPSBuZXcgQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbShcInN0YXJzUGFydGljbGVzXCIsIDUwMCwgc2NlbmUpO1xuXG4gICAgLy8gVGV4dHVyZSBvZiBlYWNoIHBhcnRpY2xlXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1BhdHJpY2tSeWFuTVMvQmFieWxvbkpTdGV4dHVyZXMvbWFzdGVyL1BhcnRpY2xlU3lzdGVtcy9TdW4vVF9TdW5TdXJmYWNlLnBuZ1wiLCBzY2VuZSk7XG4gICAgZmxhcmVQYXJ0aWNsZXMucGFydGljbGVUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZShcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9QYXRyaWNrUnlhbk1TL0JhYnlsb25KU3RleHR1cmVzL21hc3Rlci9QYXJ0aWNsZVN5c3RlbXMvU3VuL1RfU3VuRmxhcmUucG5nXCIsIHNjZW5lKTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMucGFydGljbGVUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZShcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9QYXRyaWNrUnlhbk1TL0JhYnlsb25KU3RleHR1cmVzL21hc3Rlci9QYXJ0aWNsZVN5c3RlbXMvU3VuL1RfU3Rhci5wbmdcIiwgc2NlbmUpO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUGF0cmlja1J5YW5NUy9CYWJ5bG9uSlN0ZXh0dXJlcy9tYXN0ZXIvUGFydGljbGVTeXN0ZW1zL1N1bi9UX1N0YXIucG5nXCIsIHNjZW5lKTtcblxuICAgIC8vIENyZWF0ZSBjb3JlIHNwaGVyZVxuICAgIHZhciBjb3JlU3BoZXJlID0gQkFCWUxPTi5NZXNoQnVpbGRlci5DcmVhdGVTcGhlcmUoXCJjb3JlU3BoZXJlXCIsIHsgZGlhbWV0ZXI6IDIuMDEsIHNlZ21lbnRzOiA2NCB9LCBzY2VuZSk7XG5cbiAgICAvLyBDcmVhdGUgY29yZSBtYXRlcmlhbFxuICAgIHZhciBjb3JlTWF0ID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbChcImNvcmVNYXRcIiwgc2NlbmUpXG4gICAgY29yZU1hdC5lbWlzc2l2ZUNvbG9yID0gbmV3IEJBQllMT04uQ29sb3IzKDAuMzc3MywgMC4wOTMwLCAwLjAyNjYpO1xuXG4gICAgLy8gQXNzaWduIGNvcmUgbWF0ZXJpYWwgdG8gc3BoZXJlXG4gICAgY29yZVNwaGVyZS5tYXRlcmlhbCA9IGNvcmVNYXQ7XG5cbiAgICAvLyBQcmUtd2FybVxuICAgIHN1cmZhY2VQYXJ0aWNsZXMucHJlV2FybVN0ZXBPZmZzZXQgPSAxMDtcbiAgICBzdXJmYWNlUGFydGljbGVzLnByZVdhcm1DeWNsZXMgPSAxMDA7XG5cbiAgICBmbGFyZVBhcnRpY2xlcy5wcmVXYXJtU3RlcE9mZnNldCA9IDEwO1xuICAgIGZsYXJlUGFydGljbGVzLnByZVdhcm1DeWNsZXMgPSAxMDA7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMucHJlV2FybVN0ZXBPZmZzZXQgPSAxMDtcbiAgICBjb3JvbmFQYXJ0aWNsZXMucHJlV2FybUN5Y2xlcyA9IDEwMDtcblxuICAgIC8vIEluaXRpYWwgcm90YXRpb25cbiAgICBzdXJmYWNlUGFydGljbGVzLm1pbkluaXRpYWxSb3RhdGlvbiA9IC0yICogTWF0aC5QSTtcbiAgICBzdXJmYWNlUGFydGljbGVzLm1heEluaXRpYWxSb3RhdGlvbiA9IDIgKiBNYXRoLlBJO1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMubWluSW5pdGlhbFJvdGF0aW9uID0gLTIgKiBNYXRoLlBJO1xuICAgIGZsYXJlUGFydGljbGVzLm1heEluaXRpYWxSb3RhdGlvbiA9IDIgKiBNYXRoLlBJO1xuXG4gICAgY29yb25hUGFydGljbGVzLm1pbkluaXRpYWxSb3RhdGlvbiA9IC0yICogTWF0aC5QSTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMubWF4SW5pdGlhbFJvdGF0aW9uID0gMiAqIE1hdGguUEk7XG5cbiAgICAvLyBXaGVyZSB0aGUgc3VuIHBhcnRpY2xlcyBjb21lIGZyb21cbiAgICB2YXIgc3VuRW1pdHRlciA9IG5ldyBCQUJZTE9OLlNwaGVyZVBhcnRpY2xlRW1pdHRlcigpO1xuICAgIHN1bkVtaXR0ZXIucmFkaXVzID0gMTtcbiAgICBzdW5FbWl0dGVyLnJhZGl1c1JhbmdlID0gMDsgLy8gZW1pdCBvbmx5IGZyb20gc2hhcGUgc3VyZmFjZVxuXG4gICAgLy8gV2hlcmUgdGhlIHN0YXJzIHBhcnRpY2xlcyBjb21lIGZyb21cbiAgICB2YXIgc3RhcnNFbWl0dGVyID0gbmV3IEJBQllMT04uU3BoZXJlUGFydGljbGVFbWl0dGVyKCk7XG4gICAgc3RhcnNFbWl0dGVyLnJhZGl1cyA9IDIwO1xuICAgIHN0YXJzRW1pdHRlci5yYWRpdXNSYW5nZSA9IDA7IC8vIGVtaXQgb25seSBmcm9tIHNoYXBlIHN1cmZhY2VcblxuICAgIC8vIEFzc2lnbiBwYXJ0aWNsZXMgdG8gZW1pdHRlcnNcbiAgICBzdXJmYWNlUGFydGljbGVzLmVtaXR0ZXIgPSBjb3JlU3BoZXJlOyAvLyB0aGUgc3RhcnRpbmcgb2JqZWN0LCB0aGUgZW1pdHRlclxuICAgIHN1cmZhY2VQYXJ0aWNsZXMucGFydGljbGVFbWl0dGVyVHlwZSA9IHN1bkVtaXR0ZXI7XG5cbiAgICBmbGFyZVBhcnRpY2xlcy5lbWl0dGVyID0gY29yZVNwaGVyZTsgLy8gdGhlIHN0YXJ0aW5nIG9iamVjdCwgdGhlIGVtaXR0ZXJcbiAgICBmbGFyZVBhcnRpY2xlcy5wYXJ0aWNsZUVtaXR0ZXJUeXBlID0gc3VuRW1pdHRlcjtcblxuICAgIGNvcm9uYVBhcnRpY2xlcy5lbWl0dGVyID0gY29yZVNwaGVyZTsgLy8gdGhlIHN0YXJ0aW5nIG9iamVjdCwgdGhlIGVtaXR0ZXJcbiAgICBjb3JvbmFQYXJ0aWNsZXMucGFydGljbGVFbWl0dGVyVHlwZSA9IHN1bkVtaXR0ZXI7XG5cbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5lbWl0dGVyID0gc3RhcnM7IC8vIHRoZSBzdGFydGluZyBvYmplY3QsIHRoZSBlbWl0dGVyXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMucGFydGljbGVFbWl0dGVyVHlwZSA9IHN0YXJzRW1pdHRlcjtcblxuICAgIC8vIC8vIFJhbmRvbSBzdGFydGluZyBjb2xvclxuICAgIC8vIHN0YXJzUGFydGljbGVzLmNvbG9yMSA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLjg5OCwgMC43MzcsIDAuNzE4LCAxLjApO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLmNvbG9yMiA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLjU4NCwgMC44MzEsIDAuODk0LCAxLjApO1xuXG4gICAgLy8gQ29sb3IgZ3JhZGllbnQgb3ZlciB0aW1lXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAsIG5ldyBCQUJZTE9OLkNvbG9yNCgwLjg1MDksIDAuNDc4NCwgMC4xMDE5LCAwLjApKTtcbiAgICBzdXJmYWNlUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMC40LCBuZXcgQkFCWUxPTi5Db2xvcjQoMC42MjU5LCAwLjMwNTYsIDAuMDYxOSwgMC41KSk7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAuNSwgbmV3IEJBQllMT04uQ29sb3I0KDAuNjAzOSwgMC4yODg3LCAwLjA1NzksIDAuNSkpO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgxLjAsIG5ldyBCQUJZTE9OLkNvbG9yNCgwLjMyMDcsIDAuMDcxMywgMC4wMDc1LCAwLjApKTtcblxuICAgIGZsYXJlUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMCwgbmV3IEJBQllMT04uQ29sb3I0KDEsIDAuOTYxMiwgMC41MTQxLCAwLjApKTtcbiAgICBmbGFyZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAuMjUsIG5ldyBCQUJZTE9OLkNvbG9yNCgwLjkwNTgsIDAuNzE1MiwgMC4zODI1LCAxLjApKTtcbiAgICBmbGFyZVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDEuMCwgbmV3IEJBQllMT04uQ29sb3I0KDAuNjMyMCwgMC4wLCAwLjAsIDAuMCkpO1xuXG4gICAgY29yb25hUGFydGljbGVzLmFkZENvbG9yR3JhZGllbnQoMCwgbmV3IEJBQllMT04uQ29sb3I0KDAuODUwOSwgMC40Nzg0LCAwLjEwMTksIDAuMCkpO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5hZGRDb2xvckdyYWRpZW50KDAuNSwgbmV3IEJBQllMT04uQ29sb3I0KDAuNjAzOSwgMC4yODg3LCAwLjA1NzksIDAuMTIpKTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMuYWRkQ29sb3JHcmFkaWVudCgxLjAsIG5ldyBCQUJZTE9OLkNvbG9yNCgwLjMyMDcsIDAuMDcxMywgMC4wMDc1LCAwLjApKTtcblxuICAgIC8vIFNpemUgb2YgZWFjaCBwYXJ0aWNsZSAocmFuZG9tIGJldHdlZW4uLi5cbiAgICBzdXJmYWNlUGFydGljbGVzLm1pblNpemUgPSAwLjQ7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5tYXhTaXplID0gMC43O1xuXG4gICAgZmxhcmVQYXJ0aWNsZXMubWluU2NhbGVYID0gMC41O1xuICAgIGZsYXJlUGFydGljbGVzLm1pblNjYWxlWSA9IDAuNTtcbiAgICBmbGFyZVBhcnRpY2xlcy5tYXhTY2FsZVggPSAxLjA7XG4gICAgZmxhcmVQYXJ0aWNsZXMubWF4U2NhbGVZID0gMS4wO1xuXG4gICAgY29yb25hUGFydGljbGVzLm1pblNjYWxlWCA9IDAuNTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMubWluU2NhbGVZID0gMC43NTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMubWF4U2NhbGVYID0gMS4yO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5tYXhTY2FsZVkgPSAzLjA7XG5cbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5taW5TaXplID0gMC4xNTtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5tYXhTaXplID0gMC4zO1xuXG4gICAgLy8gU2l6ZSBvdmVyIGxpZmV0aW1lXG4gICAgZmxhcmVQYXJ0aWNsZXMuYWRkU2l6ZUdyYWRpZW50KDAsIDApO1xuICAgIGZsYXJlUGFydGljbGVzLmFkZFNpemVHcmFkaWVudCgxLCAxKTtcblxuICAgIC8vIExpZmUgdGltZSBvZiBlYWNoIHBhcnRpY2xlIChyYW5kb20gYmV0d2Vlbi4uLlxuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWluTGlmZVRpbWUgPSA4LjA7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5tYXhMaWZlVGltZSA9IDguMDtcblxuICAgIGZsYXJlUGFydGljbGVzLm1pbkxpZmVUaW1lID0gMTAuMDtcbiAgICBmbGFyZVBhcnRpY2xlcy5tYXhMaWZlVGltZSA9IDEwLjA7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMubWluTGlmZVRpbWUgPSAyLjA7XG4gICAgY29yb25hUGFydGljbGVzLm1heExpZmVUaW1lID0gMi4wO1xuXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWluTGlmZVRpbWUgPSA5OTk5OTk7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4TGlmZVRpbWUgPSA5OTk5OTk7XG5cbiAgICAvLyBFbWlzc2lvbiByYXRlXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5lbWl0UmF0ZSA9IDIwMDtcbiAgICBmbGFyZVBhcnRpY2xlcy5lbWl0UmF0ZSA9IDE7XG4gICAgY29yb25hUGFydGljbGVzLmVtaXRSYXRlID0gMzAwO1xuXG4gICAgLy8gLy8gQnVyc3QgcmF0ZVxuICAgIC8vIHN0YXJzUGFydGljbGVzLm1hbnVhbEVtaXRDb3VudCA9IDUwMDtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5tYXhFbWl0UG93ZXIgPSAwLjA7XG5cbiAgICAvLyBCbGVuZCBtb2RlIDogQkxFTkRNT0RFX09ORU9ORSwgQkxFTkRNT0RFX1NUQU5EQVJELCBvciBCTEVORE1PREVfQUREXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5ibGVuZE1vZGUgPSBCQUJZTE9OLlBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9BREQ7XG4gICAgZmxhcmVQYXJ0aWNsZXMuYmxlbmRNb2RlID0gQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfQUREO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5ibGVuZE1vZGUgPSBCQUJZTE9OLlBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9BREQ7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMuYmxlbmRNb2RlID0gQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfU1RBTkRBUkQ7XG5cbiAgICAvLyBTZXQgdGhlIGdyYXZpdHkgb2YgYWxsIHBhcnRpY2xlc1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMuZ3Jhdml0eSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XG4gICAgZmxhcmVQYXJ0aWNsZXMuZ3Jhdml0eSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XG4gICAgY29yb25hUGFydGljbGVzLmdyYXZpdHkgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLmdyYXZpdHkgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApO1xuXG4gICAgLy8gQW5ndWxhciBzcGVlZCwgaW4gcmFkaWFuc1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMubWluQW5ndWxhclNwZWVkID0gLTAuNDtcbiAgICBzdXJmYWNlUGFydGljbGVzLm1heEFuZ3VsYXJTcGVlZCA9IDAuNDtcblxuICAgIGZsYXJlUGFydGljbGVzLm1pbkFuZ3VsYXJTcGVlZCA9IDAuMDtcbiAgICBmbGFyZVBhcnRpY2xlcy5tYXhBbmd1bGFyU3BlZWQgPSAwLjA7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMubWluQW5ndWxhclNwZWVkID0gMC4wO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5tYXhBbmd1bGFyU3BlZWQgPSAwLjA7XG5cbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5taW5Bbmd1bGFyU3BlZWQgPSAwLjA7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4QW5ndWxhclNwZWVkID0gMC4wO1xuXG4gICAgLy8gU3BlZWRcbiAgICBzdXJmYWNlUGFydGljbGVzLm1pbkVtaXRQb3dlciA9IDA7XG4gICAgc3VyZmFjZVBhcnRpY2xlcy5tYXhFbWl0UG93ZXIgPSAwO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMudXBkYXRlU3BlZWQgPSAwLjAwNTtcblxuICAgIGZsYXJlUGFydGljbGVzLm1pbkVtaXRQb3dlciA9IDAuMDAxO1xuICAgIGZsYXJlUGFydGljbGVzLm1heEVtaXRQb3dlciA9IDAuMDE7XG5cbiAgICBjb3JvbmFQYXJ0aWNsZXMubWluRW1pdFBvd2VyID0gMC4wO1xuICAgIGNvcm9uYVBhcnRpY2xlcy5tYXhFbWl0UG93ZXIgPSAwLjA7XG5cbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5taW5FbWl0UG93ZXIgPSAwLjA7XG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMubWF4QW5ndWxhclNwZWVkID0gMC4wO1xuXG4gICAgLy8gTm8gYmlsbGJvYXJkXG4gICAgc3VyZmFjZVBhcnRpY2xlcy5pc0JpbGxib2FyZEJhc2VkID0gZmFsc2U7XG4gICAgZmxhcmVQYXJ0aWNsZXMuaXNCaWxsYm9hcmRCYXNlZCA9IHRydWU7XG4gICAgY29yb25hUGFydGljbGVzLmlzQmlsbGJvYXJkQmFzZWQgPSB0cnVlO1xuICAgIC8vIHN0YXJzUGFydGljbGVzLmlzQmlsbGJvYXJkQmFzZWQgPSB0cnVlO1xuXG4gICAgLy8gUmVuZGVyIE9yZGVyXG4gICAgLy8gc3RhcnNQYXJ0aWNsZXMucmVuZGVyaW5nR3JvdXBJZCA9IDA7XG4gICAgY29yb25hUGFydGljbGVzLnJlbmRlcmluZ0dyb3VwSWQgPSAxO1xuICAgIGZsYXJlUGFydGljbGVzLnJlbmRlcmluZ0dyb3VwSWQgPSAyO1xuICAgIHN1cmZhY2VQYXJ0aWNsZXMucmVuZGVyaW5nR3JvdXBJZCA9IDM7XG4gICAgY29yZVNwaGVyZS5yZW5kZXJpbmdHcm91cElkID0gMztcblxuICAgIC8vIFN0YXJ0IHRoZSBwYXJ0aWNsZSBzeXN0ZW1cbiAgICBzdXJmYWNlUGFydGljbGVzLnN0YXJ0KCk7XG4gICAgZmxhcmVQYXJ0aWNsZXMuc3RhcnQoKTtcbiAgICBjb3JvbmFQYXJ0aWNsZXMuc3RhcnQoKTtcbiAgICAvLyBzdGFyc1BhcnRpY2xlcy5zdGFydCgpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xufSIsImltcG9ydCB7IEVuZ2luZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9FbmdpbmVzL2VuZ2luZSc7XG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9zY2VuZSc7XG5pbXBvcnQgeyBDb2xvcjMsIFZlY3RvcjMgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0aHMvbWF0aCc7XG5pbXBvcnQgeyBGcmVlQ2FtZXJhIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0NhbWVyYXMvZnJlZUNhbWVyYSc7XG5pbXBvcnQgeyBVbml2ZXJzYWxDYW1lcmEgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvQ2FtZXJhcy91bml2ZXJzYWxDYW1lcmEnXG5pbXBvcnQgeyBIZW1pc3BoZXJpY0xpZ2h0IH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0xpZ2h0cy9oZW1pc3BoZXJpY0xpZ2h0J1xuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hcIlxuaW1wb3J0IHsgTWVzaEJ1aWxkZXIgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hCdWlsZGVyJztcbmltcG9ydCB7IFRlcnJhaW5NYXRlcmlhbCB9IGZyb20gJ0BiYWJ5bG9uanMvbWF0ZXJpYWxzL3RlcnJhaW4nXG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gXCJAYmFieWxvbmpzL2NvcmUvTGVnYWN5L2xlZ2FjeVwiO1xuaW1wb3J0IHsgR3JpZE1hdGVyaWFsIH0gZnJvbSAnQGJhYnlsb25qcy9tYXRlcmlhbHMvZ3JpZCdcblxuaW1wb3J0IFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlclwiO1xuXG5pbXBvcnQgeyBjcmVhdGVTdGFycyB9IGZyb20gJy4vY29tcG9uZW50cy9zdGFycydcbmltcG9ydCB7IGNyZWF0ZVNjZW5lIH0gZnJvbSAnLi9jb21wb25lbnRzL3NjZW5lJ1xuaW1wb3J0IHsgY3JlYXRlU3VuIH0gZnJvbSAnLi9jb21wb25lbnRzL3N1bidcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW5kZXJDYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5cbmNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUoY2FudmFzKTtcblxuLy8gU2NlbmVcbmNvbnN0IHsgc2NlbmUgfSA9IGNyZWF0ZVNjZW5lKGNhbnZhcywgZW5naW5lKVxuXG4vLyBTdHVmZlxuXG5jb25zdCB7IFNQUywgc3lzdGVtTWVzaDogc3RhcnMgfSA9IGNyZWF0ZVN0YXJzKHNjZW5lKVxuY3JlYXRlU3VuKHNjZW5lKVxuXG5cbi8qIHZhciBtYWtlU2hhZG93cz0wO1xuIHZhciBsb2Q9MDsgKi9cblxubGV0IG1hdGVyaWFsID0gbmV3IEdyaWRNYXRlcmlhbChcImdyaWRcIiwgc2NlbmUpO1xuXG4vLyBiYXNlIGdyb3VuZFxuLy9jb25zdCBncm91bmQgPSBNZXNoLkNyZWF0ZUdyb3VuZChcImdyb3VuZC0xXCIsIDYwMCwgNjAwLCAyMDAsIHNjZW5lKTtcbmNvbnN0IGdyb3VuZCA9IE1lc2hCdWlsZGVyLkNyZWF0ZUdyb3VuZChcImdyb3VuZFwiLCB7IHdpZHRoOiAxMCwgaGVpZ2h0OiAxMCB9KVxuZ3JvdW5kLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG5cbmxldCBzcGhlcmUgPSBNZXNoLkNyZWF0ZVNwaGVyZShcInNwaGVyZS0xXCIsIDE2LCAxLCBzY2VuZSk7XG5cbnNwaGVyZS5wb3NpdGlvbiA9IG5ldyBWZWN0b3IzKDIsIDQsIDApXG5zcGhlcmUuc2NhbGluZy54ID0gMVxuc3BoZXJlLnNjYWxpbmcueSA9IDFcbnNwaGVyZS5zY2FsaW5nLnogPSAxXG5cbnNwaGVyZS5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuXG4vKiBjb25zdCBza3lib3ggPSBNZXNoLkNyZWF0ZUJveChcIkJhY2tncm91bmRTa3lib3hcIiwgNTAwLCBzY2VuZSwgdW5kZWZpbmVkLCBNZXNoLkJBQ0tTSURFKTtcbiAgICBcbi8vIENyZWF0ZSBhbmQgdHdlYWsgdGhlIGJhY2tncm91bmQgbWF0ZXJpYWwuXG5jb25zdCBiYWNrZ3JvdW5kTWF0ZXJpYWwgPSBuZXcgQkFCWUxPTi5CYWNrZ3JvdW5kTWF0ZXJpYWwoXCJiYWNrZ3JvdW5kTWF0ZXJpYWxcIiwgc2NlbmUpO1xuYmFja2dyb3VuZE1hdGVyaWFsLnJlZmxlY3Rpb25UZXh0dXJlID0gbmV3IEJBQllMT04uQ3ViZVRleHR1cmUoXCJ0ZXh0dXJlcy9Ucm9waWNhbFN1bm55RGF5XCIsIHNjZW5lKTtcbmJhY2tncm91bmRNYXRlcmlhbC5yZWZsZWN0aW9uVGV4dHVyZS5jb29yZGluYXRlc01vZGUgPSBCQUJZTE9OLlRleHR1cmUuU0tZQk9YX01PREU7XG5za3lib3gubWF0ZXJpYWwgPSBiYWNrZ3JvdW5kTWF0ZXJpYWw7IFxudmFyIGVhcnRoTWF0ZXJpYWwgPSBuZXcgQkFCWUxPTi5TdGFuZGFyZE1hdGVyaWFsKFwiZWFydGhNYXRlcmlhbFwiLCBzY2VuZSk7XG4gICAgZWFydGgubWF0ZXJpYWwgPSBlYXJ0aE1hdGVyaWFsO1xuICAgIGVhcnRoTWF0ZXJpYWwuYW1iaWVudENvbG9yID0gbmV3IEJBQllMT04uQ29sb3IzKC44LCAuOCwgMSk7ICovXG5cbmVuZ2luZS5ydW5SZW5kZXJMb29wKCgpID0+IHtcbiAgICBzY2VuZS5yZW5kZXIoKTtcbn0pIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gdGhlIHN0YXJ0dXAgZnVuY3Rpb25cbi8vIEl0J3MgZW1wdHkgYXMgc29tZSBydW50aW1lIG1vZHVsZSBoYW5kbGVzIHRoZSBkZWZhdWx0IGJlaGF2aW9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSB4ID0+IHt9O1xuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFtcIi4vc3JjL2luZGV4LnRzXCIsXCJ2ZW5kb3JzXCJdXG5dO1xuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxudmFyIGNoZWNrRGVmZXJyZWRNb2R1bGVzID0geCA9PiB7fTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWUsIGV4ZWN1dGVNb2R1bGVzXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3h2ZXJzZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt4dmVyc2VcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpO1xuXG5mdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwoKSB7XG5cdHZhciByZXN1bHQ7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcblx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuXHRcdH1cblx0fVxuXHRpZihkZWZlcnJlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0geCA9PiB7fTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxudmFyIHN0YXJ0dXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLng7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIHJlc2V0IHN0YXJ0dXAgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGNhbGxlZCBhZ2FpbiB3aGVuIG1vcmUgc3RhcnR1cCBjb2RlIGlzIGFkZGVkXG5cdF9fd2VicGFja19yZXF1aXJlX18ueCA9IHN0YXJ0dXAgfHwgKHggPT4ge30pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTsiLCIvLyBydW4gc3RhcnR1cFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=