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
var canvas = document.getElementById("renderCanvas");
var engine = new engine_1.Engine(canvas);
var scene = scene_1.createScene(canvas, engine).scene;
var _a = stars_1.createStars(scene), SPS = _a.SPS, stars = _a.systemMesh;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvY29tcG9uZW50cy9zY2VuZS50cyIsIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvY29tcG9uZW50cy9zdGFycy50cyIsIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3h2ZXJzZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3h2ZXJzZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwR0FBOEM7QUFDOUMsbUhBQTZEO0FBQzdELHlJQUFnRTtBQUVoRSx5SkFBMEU7QUFDMUUsd0lBQXlEO0FBRXpELHNIQUE0QztBQVE1QyxTQUFnQixXQUFXLENBQUMsTUFBeUIsRUFBRSxNQUFzQjtJQUd6RSxJQUFNLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVoQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFHakQsSUFBTSxNQUFNLEdBQUcsSUFBSSx1QkFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLGNBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDO0lBT3RFLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBR25DLElBQUksS0FBSyxHQUFHLElBQUksbUNBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksY0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0UsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDcEIsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLGFBQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztJQUU3QyxPQUFPLEVBQUUsS0FBSyxTQUFFLE1BQU0sVUFBRSxLQUFLLFNBQUU7QUFDbkMsQ0FBQztBQXZCRCxrQ0F1QkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDRCxtSEFBcUQ7QUFFckQsMElBQWdFO0FBQ2hFLHdJQUF5RDtBQVF6RCxTQUFnQixXQUFXLENBQUMsS0FBWTtJQUlwQyxJQUFNLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDakIsSUFBTSxJQUFJLEdBQUcsS0FBSztJQUNsQixJQUFNLFdBQVcsR0FBRyxLQUFLO0lBQ3pCLElBQU0sWUFBWSxHQUFHLEVBQUU7SUFFdkIsSUFBTSxpQkFBaUIsR0FBRyxjQUFNLFdBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQTNCLENBQTJCO0lBQzNELElBQU0sV0FBVyxHQUFHLGNBQU0sa0JBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsRUFBNUQsQ0FBNEQ7SUFDdEYsSUFBTSxZQUFZLEdBQUcsVUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDaEMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLGNBQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQztRQUM1RSxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFHdkQsQ0FBQztJQUVELElBQU0sRUFBRSxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFHNUUsSUFBTSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDO0lBQzNFLFdBQVcsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7SUFDaEQsSUFBTSxPQUFPLEdBQUcseUJBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxDQUFDO0lBQzdGLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3hELE9BQU8sQ0FBQyxRQUFRLEdBQUcsV0FBVztJQUc5QixJQUFNLFlBQVksR0FBRyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUM7SUFDN0UsWUFBWSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDN0QsWUFBWSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUNuRCxJQUFNLFFBQVEsR0FBRyx5QkFBVyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLENBQUM7SUFDOUYsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDekQsUUFBUSxDQUFDLFFBQVEsR0FBRyxZQUFZO0lBS2hDLElBQU0sY0FBYyxHQUFHLElBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQztJQUNoRixjQUFjLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUM1RCxjQUFjLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQ3JELElBQU0sVUFBVSxHQUFHLHlCQUFXLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssQ0FBQztJQUNoRyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztJQUMzRCxVQUFVLENBQUMsUUFBUSxHQUFHLGNBQWM7SUFHcEMsSUFBTSxjQUFjLEdBQUcsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDO0lBQ2hGLGNBQWMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ2hFLGNBQWMsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFDckQsSUFBTSxVQUFVLEdBQUcseUJBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxDQUFDO0lBQ2hHLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQzNELFVBQVUsQ0FBQyxRQUFRLEdBQUcsY0FBYztJQUdwQyxJQUFNLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUM7SUFDOUUsYUFBYSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUNwRCxhQUFhLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQ3BELElBQU0sU0FBUyxHQUFHLHlCQUFXLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssQ0FBQztJQUMvRixTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztJQUMxRCxTQUFTLENBQUMsUUFBUSxHQUFHLGFBQWE7SUFFbEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFFdkcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLENBQUM7SUFDOUQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLENBQUM7SUFDaEUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLENBQUM7SUFDaEUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLENBQUM7SUFDL0QsSUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLFNBQVMsRUFBRTtJQUdsQyxPQUFPLEVBQUUsR0FBRyxPQUFFLFVBQVUsY0FBRSxVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLEVBQUU7QUFDbEcsQ0FBQztBQXZFRCxrQ0F1RUM7Ozs7Ozs7Ozs7Ozs7QUNuRkQsNkhBQXdEO0FBRXhELG1IQUE2RDtBQUk3RCxxSEFBa0Q7QUFDbEQsMElBQWlFO0FBR2pFLHVIQUF3RDtBQUV4RCxzSEFBNEM7QUFFNUMseUZBQWdEO0FBQ2hELHlGQUFnRDtBQUVoRCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBc0IsQ0FBQztBQUU1RSxJQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUcxQixTQUFLLEdBQUssbUJBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQWhDLENBQWdDO0FBSXZDLFNBQTZCLG1CQUFXLENBQUMsS0FBSyxDQUFDLEVBQTdDLEdBQUcsV0FBYyxLQUFLLGdCQUF1QjtBQUtyRCxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBSS9DLElBQU0sTUFBTSxHQUFHLHlCQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQzVFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBRTNCLElBQUksTUFBTSxHQUFHLFdBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFekQsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLGNBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0QyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUVwQixNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQWEzQixNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ2pCLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNuQixDQUFDLENBQUM7Ozs7Ozs7VUM1REY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBLGdCQUFnQiwyQkFBMkI7V0FDM0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLDRDQUE0QztXQUM1QztXQUNBLEU7Ozs7O1VDcEZBO1VBQ0EiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9zY2VuZSc7XG5pbXBvcnQgeyBDb2xvcjMsIFZlY3RvcjMgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0aHMvbWF0aCc7XG5pbXBvcnQgeyBGcmVlQ2FtZXJhIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0NhbWVyYXMvZnJlZUNhbWVyYSc7XG5pbXBvcnQgeyBVbml2ZXJzYWxDYW1lcmEgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvQ2FtZXJhcy91bml2ZXJzYWxDYW1lcmEnXG5pbXBvcnQgeyBIZW1pc3BoZXJpY0xpZ2h0IH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0xpZ2h0cy9oZW1pc3BoZXJpY0xpZ2h0J1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL0xlZ2FjeS9sZWdhY3lcIjtcblxuaW1wb3J0IFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlclwiO1xuXG5pbnRlcmZhY2UgSVNjZW5lT3V0cHV0IHtcbiAgICBzY2VuZTogU2NlbmUsXG4gICAgY2FtZXJhOiBGcmVlQ2FtZXJhIHwgVW5pdmVyc2FsQ2FtZXJhLFxuICAgIGxpZ2h0OiBIZW1pc3BoZXJpY0xpZ2h0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTY2VuZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBlbmdpbmU6IEJBQllMT04uRW5naW5lKTogSVNjZW5lT3V0cHV0IHtcblxuICAgIC8vIFNjZW5lXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgU2NlbmUoZW5naW5lKTtcblxuICAgIHNjZW5lLmNsZWFyQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMCwgMCwgMCwgMSlcblxuICAgIC8vIENhbWVyYVxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBGcmVlQ2FtZXJhKFwieHZlcnNlXCIsIG5ldyBWZWN0b3IzKDAsIDUsIC0xMCksIHNjZW5lKVxuICAgIC8qIHZhciBjYW1lcmEgPSBuZXcgQkFCWUxPTi5BcmNSb3RhdGVDYW1lcmEoXCJjYW1lcmExXCIsIDAsIDAsIDAsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgLTApLCBzY2VuZSk7XG4gICAgIGNhbWVyYS5zZXRQb3NpdGlvbihuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDE0MDAsIDUwKSk7XG4gICAgIGNhbWVyYS53aGVlbFByZWNpc2lvbiA9IDE7ICovXG5cbiAgICAvL2NhbWVyYS5zZXRUYXJnZXQoVmVjdG9yMy5aZXJvKCkpO1xuXG4gICAgY2FtZXJhLmF0dGFjaENvbnRyb2woY2FudmFzLCB0cnVlKTtcblxuICAgIC8vIExpZ2h0XG4gICAgbGV0IGxpZ2h0ID0gbmV3IEhlbWlzcGhlcmljTGlnaHQoXCJsaWdodFwiLCBuZXcgVmVjdG9yMygxMDAsIDIwMCwgMzAwKSwgc2NlbmUpO1xuICAgIGxpZ2h0LmludGVuc2l0eSA9IDE7XG4gICAgbGlnaHQuc3BlY3VsYXIgPSBuZXcgQ29sb3IzKDAuOTUsIDAuMTUsIDAuMTEpXG5cbiAgICByZXR1cm4geyBzY2VuZSwgY2FtZXJhLCBsaWdodCB9XG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvc2NlbmUnO1xuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRocy9tYXRoJztcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoXCJcbmltcG9ydCB7IE1lc2hCdWlsZGVyIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlcidcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSBcIkBiYWJ5bG9uanMvY29yZS9MZWdhY3kvbGVnYWN5XCI7XG5cbmludGVyZmFjZSBJQ29uc3RlbGxhdGlvbk91dHB1dCB7XG4gICAgU1BTOiBCQUJZTE9OLlNvbGlkUGFydGljbGVTeXN0ZW0sXG4gICAgc3lzdGVtTWVzaDogTWVzaCxcbiAgICBiYXNlTW9kZWxzOiBNZXNoW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0YXJzKHNjZW5lOiBTY2VuZSk6IElDb25zdGVsbGF0aW9uT3V0cHV0IHtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvKiBCYWNrZ3JvdW5kIHN0YXJzICovXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgY29uc3QgbmIgPSAxMDAwMDtcbiAgICBjb25zdCBmYWN0ID0gMjAwMDBcbiAgICBjb25zdCBtaW5EaXN0YW5jZSA9IDEwMDAwXG4gICAgY29uc3Qgc3RhckRpYW1ldGVyID0gMTVcblxuICAgIGNvbnN0IGluZGljYXRvckZ1bmN0aW9uID0gKCkgPT4gTWF0aC5yYW5kb20oKSA8IC41ID8gLTEgOiAxXG4gICAgY29uc3QgZ2V0UG9zaXRpb24gPSAoKSA9PiBtaW5EaXN0YW5jZSArIChNYXRoLnJhbmRvbSgpICogKGZhY3QgKiBpbmRpY2F0b3JGdW5jdGlvbigpKSlcbiAgICBjb25zdCBzdGFyUG9zaXRpb24gPSAocGFydGljbGUsIGksIHMpID0+IHtcbiAgICAgICAgcGFydGljbGUucG9zaXRpb24gPSBuZXcgVmVjdG9yMyhnZXRQb3NpdGlvbigpLCBnZXRQb3NpdGlvbigpLCBnZXRQb3NpdGlvbigpKVxuICAgICAgICBwYXJ0aWNsZS5jb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yNCgxLCAxLCAwLjMsIDEuMClcbiAgICAgICAgLy9nbC5hZGRJbmNsdWRlZE9ubHlNZXNoKHBhcnRpY2xlKVxuICAgICAgICAvL2dsLmludGVuc2l0eSA9IDEwXG4gICAgfVxuXG4gICAgY29uc3QgZ2wgPSBuZXcgQkFCWUxPTi5HbG93TGF5ZXIoXCJzdGFyR2xvd1wiLCBzY2VuZSwgeyBibHVyS2VybmVsU2l6ZTogNjQgfSk7XG5cbiAgICAvLyBSZWQgc3RhcnNcbiAgICBjb25zdCByZWRNYXRlcmlhbCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoXCJyZWRTdGFyc01hdGVyaWFsXCIsIHNjZW5lKVxuICAgIHJlZE1hdGVyaWFsLmVtaXNzaXZlQ29sb3IgPSBCQUJZTE9OLkNvbG9yMy5SZWQoKVxuICAgIGNvbnN0IHJlZFN0YXIgPSBNZXNoQnVpbGRlci5DcmVhdGVTcGhlcmUoXCJzXCIsIHsgc2VnbWVudHM6IDYsIGRpYW1ldGVyOiBzdGFyRGlhbWV0ZXIgfSwgc2NlbmUpXG4gICAgcmVkU3Rhci5wb3NpdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMTAwMCwgMTAwMCwgMTAwMClcbiAgICByZWRTdGFyLm1hdGVyaWFsID0gcmVkTWF0ZXJpYWxcblxuICAgIC8vIEJsdWUgc3RhcnNcbiAgICBjb25zdCBibHVlTWF0ZXJpYWwgPSBuZXcgQkFCWUxPTi5TdGFuZGFyZE1hdGVyaWFsKFwiYmx1ZVN0YXJzTWF0ZXJpYWxcIiwgc2NlbmUpXG4gICAgYmx1ZU1hdGVyaWFsLmVtaXNzaXZlQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjMoMC43LCAwLjk2LCAxKVxuICAgIGJsdWVNYXRlcmlhbC5zcGVjdWxhckNvbG9yID0gQkFCWUxPTi5Db2xvcjMuV2hpdGUoKVxuICAgIGNvbnN0IGJsdWVTdGFyID0gTWVzaEJ1aWxkZXIuQ3JlYXRlU3BoZXJlKFwic1wiLCB7IHNlZ21lbnRzOiA2LCBkaWFtZXRlcjogc3RhckRpYW1ldGVyIH0sIHNjZW5lKVxuICAgIGJsdWVTdGFyLnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygxMDAwLCAxMDAwLCAxMDAwKVxuICAgIGJsdWVTdGFyLm1hdGVyaWFsID0gYmx1ZU1hdGVyaWFsXG5cbiAgICAvLyBZZWxsb3cgc3RhcnNcbiAgICAvKnRoaXMubWF0LmRpZmZ1c2VUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZShcInRleHR1cmVzL21pc2MuanBnXCIsIHNjZW5lKTtcbiAgICB0aGlzLm1hdC5lbWlzc2l2ZVRleHR1cmUgPSB0aGlzLm1hdC5kaWZmdXNlVGV4dHVyZTsgKi9cbiAgICBjb25zdCB5ZWxsb3dNYXRlcmlhbCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoXCJ5ZWxsb3dTdGFyTWF0ZXJpYWxcIiwgc2NlbmUpXG4gICAgeWVsbG93TWF0ZXJpYWwuZW1pc3NpdmVDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMygxLCAxLCAwLjYpXG4gICAgeWVsbG93TWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IEJBQllMT04uQ29sb3IzLldoaXRlKClcbiAgICBjb25zdCB5ZWxsb3dTdGFyID0gTWVzaEJ1aWxkZXIuQ3JlYXRlU3BoZXJlKFwic1wiLCB7IHNlZ21lbnRzOiA2LCBkaWFtZXRlcjogc3RhckRpYW1ldGVyIH0sIHNjZW5lKVxuICAgIHllbGxvd1N0YXIucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDEwMDAsIDEwMDAsIDEwMDApXG4gICAgeWVsbG93U3Rhci5tYXRlcmlhbCA9IHllbGxvd01hdGVyaWFsXG5cbiAgICAvLyBPcmFuZ2Ugc3RhcnNcbiAgICBjb25zdCBvcmFuZ2VNYXRlcmlhbCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoXCJvcmFuZ2VTdGFyTWF0ZXJpYWxcIiwgc2NlbmUpXG4gICAgb3JhbmdlTWF0ZXJpYWwuZW1pc3NpdmVDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMyguOTYsIC43NSwgLjI2KVxuICAgIG9yYW5nZU1hdGVyaWFsLnNwZWN1bGFyQ29sb3IgPSBCQUJZTE9OLkNvbG9yMy5XaGl0ZSgpXG4gICAgY29uc3Qgb3JhbmdlU3RhciA9IE1lc2hCdWlsZGVyLkNyZWF0ZVNwaGVyZShcInNcIiwgeyBzZWdtZW50czogNiwgZGlhbWV0ZXI6IHN0YXJEaWFtZXRlciB9LCBzY2VuZSlcbiAgICBvcmFuZ2VTdGFyLnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygxMDAwLCAxMDAwLCAxMDAwKVxuICAgIG9yYW5nZVN0YXIubWF0ZXJpYWwgPSBvcmFuZ2VNYXRlcmlhbFxuXG4gICAgLy8gV2hpdGUgc3RhcnNcbiAgICBjb25zdCB3aGl0ZU1hdGVyaWFsID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbChcIndoaXRlU3Rhck1hdGVyaWFsXCIsIHNjZW5lKVxuICAgIHdoaXRlTWF0ZXJpYWwuZW1pc3NpdmVDb2xvciA9IEJBQllMT04uQ29sb3IzLldoaXRlKClcbiAgICB3aGl0ZU1hdGVyaWFsLnNwZWN1bGFyQ29sb3IgPSBCQUJZTE9OLkNvbG9yMy5XaGl0ZSgpXG4gICAgY29uc3Qgd2hpdGVTdGFyID0gTWVzaEJ1aWxkZXIuQ3JlYXRlU3BoZXJlKFwic1wiLCB7IHNlZ21lbnRzOiA2LCBkaWFtZXRlcjogc3RhckRpYW1ldGVyIH0sIHNjZW5lKVxuICAgIHdoaXRlU3Rhci5wb3NpdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMTAwMCwgMTAwMCwgMTAwMClcbiAgICB3aGl0ZVN0YXIubWF0ZXJpYWwgPSB3aGl0ZU1hdGVyaWFsXG5cbiAgICBjb25zdCBTUFMgPSBuZXcgQkFCWUxPTi5Tb2xpZFBhcnRpY2xlU3lzdGVtKCdTUFMnLCBzY2VuZSwgeyB1c2VNb2RlbE1hdGVyaWFsOiB0cnVlLCB1cGRhdGFibGU6IGZhbHNlIH0pXG4gICAgLy9TUFMuYWRkU2hhcGUocmVkU3RhciwgbmIsIHsgcG9zaXRpb25GdW5jdGlvbjogc3RhclBvc2l0aW9uIH0pXG4gICAgU1BTLmFkZFNoYXBlKGJsdWVTdGFyLCBuYiwgeyBwb3NpdGlvbkZ1bmN0aW9uOiBzdGFyUG9zaXRpb24gfSlcbiAgICBTUFMuYWRkU2hhcGUoeWVsbG93U3RhciwgbmIsIHsgcG9zaXRpb25GdW5jdGlvbjogc3RhclBvc2l0aW9uIH0pXG4gICAgU1BTLmFkZFNoYXBlKG9yYW5nZVN0YXIsIG5iLCB7IHBvc2l0aW9uRnVuY3Rpb246IHN0YXJQb3NpdGlvbiB9KVxuICAgIFNQUy5hZGRTaGFwZSh3aGl0ZVN0YXIsIG5iLCB7IHBvc2l0aW9uRnVuY3Rpb246IHN0YXJQb3NpdGlvbiB9KVxuICAgIGNvbnN0IHN5c3RlbU1lc2ggPSBTUFMuYnVpbGRNZXNoKClcbiAgICAvLyBzdGFyU3BoZXJlLmRpc3Bvc2UoKVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHJldHVybiB7IFNQUywgc3lzdGVtTWVzaCwgYmFzZU1vZGVsczogW3JlZFN0YXIsIGJsdWVTdGFyLCB5ZWxsb3dTdGFyLCBvcmFuZ2VTdGFyLCB3aGl0ZVN0YXJdIH1cbn0iLCJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvRW5naW5lcy9lbmdpbmUnO1xuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvc2NlbmUnO1xuaW1wb3J0IHsgQ29sb3IzLCBWZWN0b3IzIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGhzL21hdGgnO1xuaW1wb3J0IHsgRnJlZUNhbWVyYSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9DYW1lcmFzL2ZyZWVDYW1lcmEnO1xuaW1wb3J0IHsgVW5pdmVyc2FsQ2FtZXJhIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0NhbWVyYXMvdW5pdmVyc2FsQ2FtZXJhJ1xuaW1wb3J0IHsgSGVtaXNwaGVyaWNMaWdodCB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9MaWdodHMvaGVtaXNwaGVyaWNMaWdodCdcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoXCJcbmltcG9ydCB7IE1lc2hCdWlsZGVyIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlcic7XG5pbXBvcnQgeyBUZXJyYWluTWF0ZXJpYWwgfSBmcm9tICdAYmFieWxvbmpzL21hdGVyaWFscy90ZXJyYWluJ1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL0xlZ2FjeS9sZWdhY3lcIjtcbmltcG9ydCB7IEdyaWRNYXRlcmlhbCB9IGZyb20gJ0BiYWJ5bG9uanMvbWF0ZXJpYWxzL2dyaWQnXG5cbmltcG9ydCBcIkBiYWJ5bG9uanMvY29yZS9NZXNoZXMvbWVzaEJ1aWxkZXJcIjtcblxuaW1wb3J0IHsgY3JlYXRlU3RhcnMgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RhcnMnXG5pbXBvcnQgeyBjcmVhdGVTY2VuZSB9IGZyb20gJy4vY29tcG9uZW50cy9zY2VuZSdcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW5kZXJDYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5cbmNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUoY2FudmFzKTtcblxuLy8gU2NlbmVcbmNvbnN0IHsgc2NlbmUgfSA9IGNyZWF0ZVNjZW5lKGNhbnZhcywgZW5naW5lKVxuXG4vLyBTdHVmZlxuXG5jb25zdCB7IFNQUywgc3lzdGVtTWVzaDogc3RhcnMgfSA9IGNyZWF0ZVN0YXJzKHNjZW5lKVxuXG4vKiB2YXIgbWFrZVNoYWRvd3M9MDtcbiB2YXIgbG9kPTA7ICovXG5cbmxldCBtYXRlcmlhbCA9IG5ldyBHcmlkTWF0ZXJpYWwoXCJncmlkXCIsIHNjZW5lKTtcblxuLy8gYmFzZSBncm91bmRcbi8vY29uc3QgZ3JvdW5kID0gTWVzaC5DcmVhdGVHcm91bmQoXCJncm91bmQtMVwiLCA2MDAsIDYwMCwgMjAwLCBzY2VuZSk7XG5jb25zdCBncm91bmQgPSBNZXNoQnVpbGRlci5DcmVhdGVHcm91bmQoXCJncm91bmRcIiwgeyB3aWR0aDogMTAsIGhlaWdodDogMTAgfSlcbmdyb3VuZC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuXG5sZXQgc3BoZXJlID0gTWVzaC5DcmVhdGVTcGhlcmUoXCJzcGhlcmUtMVwiLCAxNiwgMSwgc2NlbmUpO1xuXG5zcGhlcmUucG9zaXRpb24gPSBuZXcgVmVjdG9yMygyLCA0LCAwKVxuc3BoZXJlLnNjYWxpbmcueCA9IDFcbnNwaGVyZS5zY2FsaW5nLnkgPSAxXG5zcGhlcmUuc2NhbGluZy56ID0gMVxuXG5zcGhlcmUubWF0ZXJpYWwgPSBtYXRlcmlhbDtcblxuLyogY29uc3Qgc2t5Ym94ID0gTWVzaC5DcmVhdGVCb3goXCJCYWNrZ3JvdW5kU2t5Ym94XCIsIDUwMCwgc2NlbmUsIHVuZGVmaW5lZCwgTWVzaC5CQUNLU0lERSk7XG4gICAgXG4vLyBDcmVhdGUgYW5kIHR3ZWFrIHRoZSBiYWNrZ3JvdW5kIG1hdGVyaWFsLlxuY29uc3QgYmFja2dyb3VuZE1hdGVyaWFsID0gbmV3IEJBQllMT04uQmFja2dyb3VuZE1hdGVyaWFsKFwiYmFja2dyb3VuZE1hdGVyaWFsXCIsIHNjZW5lKTtcbmJhY2tncm91bmRNYXRlcmlhbC5yZWZsZWN0aW9uVGV4dHVyZSA9IG5ldyBCQUJZTE9OLkN1YmVUZXh0dXJlKFwidGV4dHVyZXMvVHJvcGljYWxTdW5ueURheVwiLCBzY2VuZSk7XG5iYWNrZ3JvdW5kTWF0ZXJpYWwucmVmbGVjdGlvblRleHR1cmUuY29vcmRpbmF0ZXNNb2RlID0gQkFCWUxPTi5UZXh0dXJlLlNLWUJPWF9NT0RFO1xuc2t5Ym94Lm1hdGVyaWFsID0gYmFja2dyb3VuZE1hdGVyaWFsOyBcbnZhciBlYXJ0aE1hdGVyaWFsID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbChcImVhcnRoTWF0ZXJpYWxcIiwgc2NlbmUpO1xuICAgIGVhcnRoLm1hdGVyaWFsID0gZWFydGhNYXRlcmlhbDtcbiAgICBlYXJ0aE1hdGVyaWFsLmFtYmllbnRDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMyguOCwgLjgsIDEpOyAqL1xuXG5lbmdpbmUucnVuUmVuZGVyTG9vcCgoKSA9PiB7XG4gICAgc2NlbmUucmVuZGVyKCk7XG59KSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIHRoZSBzdGFydHVwIGZ1bmN0aW9uXG4vLyBJdCdzIGVtcHR5IGFzIHNvbWUgcnVudGltZSBtb2R1bGUgaGFuZGxlcyB0aGUgZGVmYXVsdCBiZWhhdmlvclxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0geCA9PiB7fTtcbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG52YXIgZGVmZXJyZWRNb2R1bGVzID0gW1xuXHRbXCIuL3NyYy9pbmRleC50c1wiLFwidmVuZG9yc1wiXVxuXTtcbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbnZhciBjaGVja0RlZmVycmVkTW9kdWxlcyA9IHggPT4ge307XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lLCBleGVjdXRlTW9kdWxlc10gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuXHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcblx0fVxuXG5cdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3Rcblx0aWYoZXhlY3V0ZU1vZHVsZXMpIGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuXG5cdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt4dmVyc2VcIl0gPSBzZWxmW1wid2VicGFja0NodW5reHZlcnNlXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTtcblxuZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKCkge1xuXHR2YXIgcmVzdWx0O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcblx0XHR9XG5cdH1cblx0aWYoZGVmZXJyZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCA9IHggPT4ge307XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbnZhciBzdGFydHVwID0gX193ZWJwYWNrX3JlcXVpcmVfXy54O1xuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyByZXNldCBzdGFydHVwIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4gd2hlbiBtb3JlIHN0YXJ0dXAgY29kZSBpcyBhZGRlZFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSBzdGFydHVwIHx8ICh4ID0+IHt9KTtcblx0cmV0dXJuIChjaGVja0RlZmVycmVkTW9kdWxlcyA9IGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCkoKTtcbn07IiwiLy8gcnVuIHN0YXJ0dXBcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9