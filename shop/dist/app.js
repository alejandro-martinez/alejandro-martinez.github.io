/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 124);
/******/ })
/************************************************************************/
/******/ ({

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Categories_CategoriesCtrl__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Products_ProductsCtrl__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Home_HomeCtrl__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Common_Routes__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Products_ProductsSvc__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Categories_CategoriesSvc__ = __webpack_require__(65);
__webpack_require__(70);

// Controllers





// Services



/* harmony default export */ __webpack_exports__["default"] = angular.module('app', ['ngRoute']).config(__WEBPACK_IMPORTED_MODULE_3__Common_Routes__["a" /* default */]).controller('HomeCtrl', __WEBPACK_IMPORTED_MODULE_2__Home_HomeCtrl__["a" /* HomeCtrl */]).controller('CategoriesCtrl', __WEBPACK_IMPORTED_MODULE_0__Categories_CategoriesCtrl__["a" /* CategoriesCtrl */]).controller('ProductsCtrl', __WEBPACK_IMPORTED_MODULE_1__Products_ProductsCtrl__["a" /* ProductsCtrl */]).service('ProductsSvc', __WEBPACK_IMPORTED_MODULE_4__Products_ProductsSvc__["a" /* ProductsSvc */]).service('CategoriesSvc', __WEBPACK_IMPORTED_MODULE_5__Categories_CategoriesSvc__["a" /* CategoriesSvc */]);

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CategoriesCtrl {
	constructor(CategoriesSvc, $routeParams) {
		this.categoriesSvc = CategoriesSvc;

		// Brings product's categories from MercadoLibre Api

		this.categoriesSvc.getAll().then(categories => {
			this.categories = categories.data;
		});
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = CategoriesCtrl;


CategoriesCtrl.$inject = ['CategoriesSvc', '$routeParams'];

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CategoriesSvc {
	constructor($http) {
		this.http = $http;
	}
	getAll() {
		return this.http.get("https://api.mercadolibre.com/sites/MLA/categories");
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CategoriesSvc;


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Routes;
Routes.$inject = ['$routeProvider'];

function Routes($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/modules/Home/home.html',
    controller: 'HomeCtrl as $ctrl'
  }).when('/Products/:category_id', {
    templateUrl: '/modules/Products/index.html',
    controller: 'ProductsCtrl as $ctrl'
  }).otherwise({ redirectTo: '/' });
}

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class HomeCtrl {
	constructor(ProductsSvc, CategoriesSvc) {
		this.productsSvc = ProductsSvc;
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = HomeCtrl;


HomeCtrl.$inject = ['ProductsSvc', 'CategoriesSvc'];

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ProductsCtrl {
	constructor(ProductsSvc, $routeParams) {
		this.productsSvc = ProductsSvc;

		// Brings product's filtered by category from MercadoLibre Api
		this.productsSvc.getByCategory($routeParams.category_id).then(products => {
			this.products = products.data.results;
		});
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProductsCtrl;


ProductsCtrl.$inject = ['ProductsSvc', '$routeParams'];

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ProductsSvc {
	constructor($http) {
		this.http = $http;
	}
	getByCategory(category_id) {
		return this.http.get("https://api.mercadolibre.com/sites/MLA/hot_items/search?limit=15&category=" + category_id);
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProductsSvc;


ProductsSvc.$inject = ['$http'];

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });