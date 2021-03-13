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
        particle.color = new BABYLON.Color4(1, 1, 1, 1.0);
        gl.addIncludedOnlyMesh(particle);
        gl.intensity = 10;
    };
    var starSphere = meshBuilder_1.MeshBuilder.CreateSphere("s", { segments: 6, diameter: starDiameter }, scene);
    starSphere.position = new BABYLON.Vector3(1000, 1000, 1000);
    var gl = new BABYLON.GlowLayer("glow", scene);
    var SPS = new BABYLON.SolidParticleSystem('SPS', scene, { updatable: true });
    SPS.addShape(starSphere, nb, { positionFunction: starPosition });
    var stars = SPS.buildMesh();
    return { SPS: SPS, stars: stars, starSphere: starSphere };
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
var _a = stars_1.createStars(scene), stars = _a.stars, SPS = _a.SPS, starSphere = _a.starSphere;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvY29tcG9uZW50cy9zY2VuZS50cyIsIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvY29tcG9uZW50cy9zdGFycy50cyIsIndlYnBhY2s6Ly94dmVyc2UvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3h2ZXJzZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8veHZlcnNlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3h2ZXJzZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwR0FBOEM7QUFDOUMsbUhBQTZEO0FBQzdELHlJQUFnRTtBQUVoRSx5SkFBMEU7QUFDMUUsd0lBQXlEO0FBRXpELHNIQUE0QztBQVE1QyxTQUFnQixXQUFXLENBQUMsTUFBeUIsRUFBRSxNQUFzQjtJQUd6RSxJQUFNLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVoQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFHakQsSUFBTSxNQUFNLEdBQUcsSUFBSSx1QkFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLGNBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxD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QUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDO1dBQ0E7V0FDQSxnQkFBZ0IsMkJBQTJCO1dBQzNDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSw0Q0FBNEM7V0FDNUM7V0FDQSxFOzs7OztVQ3BGQTtVQUNBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvc2NlbmUnO1xuaW1wb3J0IHsgQ29sb3IzLCBWZWN0b3IzIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL01hdGhzL21hdGgnO1xuaW1wb3J0IHsgRnJlZUNhbWVyYSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9DYW1lcmFzL2ZyZWVDYW1lcmEnO1xuaW1wb3J0IHsgVW5pdmVyc2FsQ2FtZXJhIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0NhbWVyYXMvdW5pdmVyc2FsQ2FtZXJhJ1xuaW1wb3J0IHsgSGVtaXNwaGVyaWNMaWdodCB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9MaWdodHMvaGVtaXNwaGVyaWNMaWdodCdcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSBcIkBiYWJ5bG9uanMvY29yZS9MZWdhY3kvbGVnYWN5XCI7XG5cbmltcG9ydCBcIkBiYWJ5bG9uanMvY29yZS9NZXNoZXMvbWVzaEJ1aWxkZXJcIjtcblxuaW50ZXJmYWNlIElTY2VuZU91dHB1dCB7XG4gICAgc2NlbmU6IFNjZW5lLFxuICAgIGNhbWVyYTogRnJlZUNhbWVyYSB8IFVuaXZlcnNhbENhbWVyYSxcbiAgICBsaWdodDogSGVtaXNwaGVyaWNMaWdodFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2NlbmUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZW5naW5lOiBCQUJZTE9OLkVuZ2luZSk6IElTY2VuZU91dHB1dCB7XG5cbiAgICAvLyBTY2VuZVxuICAgIGNvbnN0IHNjZW5lID0gbmV3IFNjZW5lKGVuZ2luZSk7XG5cbiAgICBzY2VuZS5jbGVhckNvbG9yID0gbmV3IEJBQllMT04uQ29sb3I0KDAsIDAsIDAsIDEpXG5cbiAgICAvLyBDYW1lcmFcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgRnJlZUNhbWVyYShcInh2ZXJzZVwiLCBuZXcgVmVjdG9yMygwLCA1LCAtMTApLCBzY2VuZSlcbiAgICAvKiB2YXIgY2FtZXJhID0gbmV3IEJBQllMT04uQXJjUm90YXRlQ2FtZXJhKFwiY2FtZXJhMVwiLCAwLCAwLCAwLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIC0wKSwgc2NlbmUpO1xuICAgICBjYW1lcmEuc2V0UG9zaXRpb24obmV3IEJBQllMT04uVmVjdG9yMygwLCAxNDAwLCA1MCkpO1xuICAgICBjYW1lcmEud2hlZWxQcmVjaXNpb24gPSAxOyAqL1xuXG4gICAgLy9jYW1lcmEuc2V0VGFyZ2V0KFZlY3RvcjMuWmVybygpKTtcblxuICAgIGNhbWVyYS5hdHRhY2hDb250cm9sKGNhbnZhcywgdHJ1ZSk7XG5cbiAgICAvLyBMaWdodFxuICAgIGxldCBsaWdodCA9IG5ldyBIZW1pc3BoZXJpY0xpZ2h0KFwibGlnaHRcIiwgbmV3IFZlY3RvcjMoMTAwLCAyMDAsIDMwMCksIHNjZW5lKTtcbiAgICBsaWdodC5pbnRlbnNpdHkgPSAxO1xuICAgIGxpZ2h0LnNwZWN1bGFyID0gbmV3IENvbG9yMygwLjk1LCAwLjE1LCAwLjExKVxuXG4gICAgcmV0dXJuIHsgc2NlbmUsIGNhbWVyYSwgbGlnaHQgfVxufSIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTWF0aHMvbWF0aCc7XG5pbXBvcnQgeyBNZXNoQnVpbGRlciB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NZXNoZXMvbWVzaEJ1aWxkZXInXG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gXCJAYmFieWxvbmpzL2NvcmUvTGVnYWN5L2xlZ2FjeVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RhcnMoc2NlbmUpIHtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvKiBCYWNrZ3JvdW5kIHN0YXJzICovXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgY29uc3QgbmIgPSAxMDAwMDtcbiAgICBjb25zdCBmYWN0ID0gMjAwMDBcbiAgICBjb25zdCBtaW5EaXN0YW5jZSA9IDEwMDAwXG4gICAgY29uc3Qgc3RhckRpYW1ldGVyID0gMTVcblxuICAgIGNvbnN0IGluZGljYXRvckZ1bmN0aW9uID0gKCkgPT4gTWF0aC5yYW5kb20oKSA8IC41ID8gLTEgOiAxXG4gICAgY29uc3QgZ2V0UG9zaXRpb24gPSAoKSA9PiBtaW5EaXN0YW5jZSArIChNYXRoLnJhbmRvbSgpICogKGZhY3QgKiBpbmRpY2F0b3JGdW5jdGlvbigpKSlcbiAgICBjb25zdCBzdGFyUG9zaXRpb24gPSAocGFydGljbGUsIGksIHMpID0+IHtcbiAgICAgICAgcGFydGljbGUucG9zaXRpb24gPSBuZXcgVmVjdG9yMyhnZXRQb3NpdGlvbigpLCBnZXRQb3NpdGlvbigpLCBnZXRQb3NpdGlvbigpKVxuICAgICAgICBwYXJ0aWNsZS5jb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yNCgxLCAxLCAxLCAxLjApXG4gICAgICAgIGdsLmFkZEluY2x1ZGVkT25seU1lc2gocGFydGljbGUpXG4gICAgICAgIGdsLmludGVuc2l0eSA9IDEwXG4gICAgfVxuXG4gICAgLy9jb25zdCBzdGFyVHJpYW5nbGUgPSBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZURpc2MoXCJ0XCIsIHt0ZXNzZWxsYXRpb246IDYsIHNpZGVPcmllbnRhdGlvbjogQkFCWUxPTi5NZXNoLkRPVUJMRVNJREV9LCBzY2VuZSk7XG4gICAgY29uc3Qgc3RhclNwaGVyZSA9IE1lc2hCdWlsZGVyLkNyZWF0ZVNwaGVyZShcInNcIiwgeyBzZWdtZW50czogNiwgZGlhbWV0ZXI6IHN0YXJEaWFtZXRlciB9LCBzY2VuZSlcblxuICAgIHN0YXJTcGhlcmUucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDEwMDAsMTAwMCwxMDAwKVxuXG4gICAgY29uc3QgZ2wgPSBuZXcgQkFCWUxPTi5HbG93TGF5ZXIoXCJnbG93XCIsIHNjZW5lKTtcblxuICAgIGNvbnN0IFNQUyA9IG5ldyBCQUJZTE9OLlNvbGlkUGFydGljbGVTeXN0ZW0oJ1NQUycsIHNjZW5lLCB7IHVwZGF0YWJsZTogdHJ1ZSB9KVxuICAgIFNQUy5hZGRTaGFwZShzdGFyU3BoZXJlLCBuYiwgeyBwb3NpdGlvbkZ1bmN0aW9uOiBzdGFyUG9zaXRpb24gfSlcbiAgICBjb25zdCBzdGFycyA9IFNQUy5idWlsZE1lc2goKVxuICAgIC8vIHN0YXJTcGhlcmUuZGlzcG9zZSgpXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgcmV0dXJuIHsgU1BTLCBzdGFycywgc3RhclNwaGVyZSB9XG59IiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL0VuZ2luZXMvZW5naW5lJztcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlL3NjZW5lJztcbmltcG9ydCB7IENvbG9yMywgVmVjdG9yMyB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NYXRocy9tYXRoJztcbmltcG9ydCB7IEZyZWVDYW1lcmEgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvQ2FtZXJhcy9mcmVlQ2FtZXJhJztcbmltcG9ydCB7IFVuaXZlcnNhbENhbWVyYSB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9DYW1lcmFzL3VuaXZlcnNhbENhbWVyYSdcbmltcG9ydCB7IEhlbWlzcGhlcmljTGlnaHQgfSBmcm9tICdAYmFieWxvbmpzL2NvcmUvTGlnaHRzL2hlbWlzcGhlcmljTGlnaHQnXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSBcIkBiYWJ5bG9uanMvY29yZS9NZXNoZXMvbWVzaFwiXG5pbXBvcnQgeyBNZXNoQnVpbGRlciB9IGZyb20gJ0BiYWJ5bG9uanMvY29yZS9NZXNoZXMvbWVzaEJ1aWxkZXInO1xuaW1wb3J0IHsgVGVycmFpbk1hdGVyaWFsIH0gZnJvbSAnQGJhYnlsb25qcy9tYXRlcmlhbHMvdGVycmFpbidcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSBcIkBiYWJ5bG9uanMvY29yZS9MZWdhY3kvbGVnYWN5XCI7XG5pbXBvcnQgeyBHcmlkTWF0ZXJpYWwgfSBmcm9tICdAYmFieWxvbmpzL21hdGVyaWFscy9ncmlkJ1xuXG5pbXBvcnQgXCJAYmFieWxvbmpzL2NvcmUvTWVzaGVzL21lc2hCdWlsZGVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVN0YXJzIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0YXJzJ1xuaW1wb3J0IHsgY3JlYXRlU2NlbmUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2NlbmUnXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVuZGVyQ2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuXG5jb25zdCBlbmdpbmUgPSBuZXcgRW5naW5lKGNhbnZhcyk7XG5cbi8vIFNjZW5lXG5jb25zdCB7IHNjZW5lIH0gPSBjcmVhdGVTY2VuZShjYW52YXMsIGVuZ2luZSlcblxuLy8gU3R1ZmZcblxuY29uc3QgeyBzdGFycywgU1BTLCBzdGFyU3BoZXJlIH0gPSBjcmVhdGVTdGFycyhzY2VuZSlcblxuLyogdmFyIG1ha2VTaGFkb3dzPTA7XG4gdmFyIGxvZD0wOyAqL1xuXG5sZXQgbWF0ZXJpYWwgPSBuZXcgR3JpZE1hdGVyaWFsKFwiZ3JpZFwiLCBzY2VuZSk7XG5cbi8vIGJhc2UgZ3JvdW5kXG4vL2NvbnN0IGdyb3VuZCA9IE1lc2guQ3JlYXRlR3JvdW5kKFwiZ3JvdW5kLTFcIiwgNjAwLCA2MDAsIDIwMCwgc2NlbmUpO1xuY29uc3QgZ3JvdW5kID0gTWVzaEJ1aWxkZXIuQ3JlYXRlR3JvdW5kKFwiZ3JvdW5kXCIsIHsgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwIH0pXG5ncm91bmQubWF0ZXJpYWwgPSBtYXRlcmlhbDtcblxubGV0IHNwaGVyZSA9IE1lc2guQ3JlYXRlU3BoZXJlKFwic3BoZXJlLTFcIiwgMTYsIDEsIHNjZW5lKTtcblxuc3BoZXJlLnBvc2l0aW9uID0gbmV3IFZlY3RvcjMoMiwgNCwgMClcbnNwaGVyZS5zY2FsaW5nLnggPSAxXG5zcGhlcmUuc2NhbGluZy55ID0gMVxuc3BoZXJlLnNjYWxpbmcueiA9IDFcblxuc3BoZXJlLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG5cbi8qIGNvbnN0IHNreWJveCA9IE1lc2guQ3JlYXRlQm94KFwiQmFja2dyb3VuZFNreWJveFwiLCA1MDAsIHNjZW5lLCB1bmRlZmluZWQsIE1lc2guQkFDS1NJREUpO1xuICAgIFxuLy8gQ3JlYXRlIGFuZCB0d2VhayB0aGUgYmFja2dyb3VuZCBtYXRlcmlhbC5cbmNvbnN0IGJhY2tncm91bmRNYXRlcmlhbCA9IG5ldyBCQUJZTE9OLkJhY2tncm91bmRNYXRlcmlhbChcImJhY2tncm91bmRNYXRlcmlhbFwiLCBzY2VuZSk7XG5iYWNrZ3JvdW5kTWF0ZXJpYWwucmVmbGVjdGlvblRleHR1cmUgPSBuZXcgQkFCWUxPTi5DdWJlVGV4dHVyZShcInRleHR1cmVzL1Ryb3BpY2FsU3VubnlEYXlcIiwgc2NlbmUpO1xuYmFja2dyb3VuZE1hdGVyaWFsLnJlZmxlY3Rpb25UZXh0dXJlLmNvb3JkaW5hdGVzTW9kZSA9IEJBQllMT04uVGV4dHVyZS5TS1lCT1hfTU9ERTtcbnNreWJveC5tYXRlcmlhbCA9IGJhY2tncm91bmRNYXRlcmlhbDsgXG52YXIgZWFydGhNYXRlcmlhbCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoXCJlYXJ0aE1hdGVyaWFsXCIsIHNjZW5lKTtcbiAgICBlYXJ0aC5tYXRlcmlhbCA9IGVhcnRoTWF0ZXJpYWw7XG4gICAgZWFydGhNYXRlcmlhbC5hbWJpZW50Q29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjMoLjgsIC44LCAxKTsgKi9cblxuZW5naW5lLnJ1blJlbmRlckxvb3AoKCkgPT4ge1xuICAgIHNjZW5lLnJlbmRlcigpO1xufSkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyB0aGUgc3RhcnR1cCBmdW5jdGlvblxuLy8gSXQncyBlbXB0eSBhcyBzb21lIHJ1bnRpbWUgbW9kdWxlIGhhbmRsZXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Jcbl9fd2VicGFja19yZXF1aXJlX18ueCA9IHggPT4ge307XG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxudmFyIGRlZmVycmVkTW9kdWxlcyA9IFtcblx0W1wiLi9zcmMvaW5kZXgudHNcIixcInZlbmRvcnNcIl1cbl07XG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSB4ID0+IHt9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZSwgZXhlY3V0ZU1vZHVsZXNdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcblx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG5cdH1cblxuXHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG5cdGlmKGV4ZWN1dGVNb2R1bGVzKSBkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcblxuXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcblx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5reHZlcnNlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3h2ZXJzZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7XG5cbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSB4ID0+IHt9O1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG52YXIgc3RhcnR1cCA9IF9fd2VicGFja19yZXF1aXJlX18ueDtcbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gc3RhcnR1cCB8fCAoeCA9PiB7fSk7XG5cdHJldHVybiAoY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwpKCk7XG59OyIsIi8vIHJ1biBzdGFydHVwXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==