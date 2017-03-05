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
/******/ 	__webpack_require__.p = "https://alejandro-martinez/shop/dist/";

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Products_ProductsCtrl__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Common_Routes__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Products_ProductsSvc__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Categories_CategoriesSvc__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Products_ProductsDtv__ = __webpack_require__(68);
__webpack_require__(70);

// Controllers




// Services



//Directives


/* harmony default export */ __webpack_exports__["default"] = angular.module('app', ['ngRoute']).config(__WEBPACK_IMPORTED_MODULE_2__Common_Routes__["a" /* default */]).constant("Config", function () {
	var baseURL = "https://api.mercadolibre.com/";
	return {
		apiBaseURL: baseURL,
		apiURL: baseURL + "sites/MLA/"
	};
}()).controller('CategoriesCtrl', __WEBPACK_IMPORTED_MODULE_0__Categories_CategoriesCtrl__["a" /* CategoriesCtrl */]).controller('ProductsCtrl', __WEBPACK_IMPORTED_MODULE_1__Products_ProductsCtrl__["a" /* ProductsCtrl */]).service('ProductsSvc', __WEBPACK_IMPORTED_MODULE_3__Products_ProductsSvc__["a" /* ProductsSvc */]).service('CategoriesSvc', __WEBPACK_IMPORTED_MODULE_4__Categories_CategoriesSvc__["a" /* CategoriesSvc */]).directive('productDetail', () => new __WEBPACK_IMPORTED_MODULE_5__Products_ProductsDtv__["a" /* ProductsDtv */]());

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CategoriesCtrl {
	constructor(CategoriesSvc, $rootScope, $routeParams) {
		this.categoriesSvc = CategoriesSvc;

		// Brings product's categories from MercadoLibre Api
		this.categoriesSvc.getAll().then(categories => {
			this.categories = categories.data;
			$rootScope.$emit("CATEGORIES_LOADED", categories.data);
		});
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CategoriesCtrl;


CategoriesCtrl.$inject = ['CategoriesSvc', '$rootScope', '$routeParams'];

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CategoriesSvc {
	constructor($http, Config) {
		this.http = $http;
		this.config = Config;
	}
	getAll() {
		return this.http.get(this.config.apiURL + "categories");
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
    templateUrl: '/modules/Products/index.html',
    controller: 'ProductsCtrl as $ctrl'
  }).when('/Products/:category_id', {
    templateUrl: '/modules/Products/index.html',
    controller: 'ProductsCtrl as $ctrl'
  }).otherwise({ redirectTo: '/' });
}

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ProductsCtrl {
	constructor(ProductsSvc, CategoriesSvc, $rootScope, $routeParams) {
		this.productsSvc = ProductsSvc;

		if (angular.isDefined($routeParams.category_id)) {
			this.getByCategory($routeParams.category_id);
		}

		$rootScope.$on("CATEGORIES_LOADED", (ev, categories) => {
			this.getByCategory(categories[0].id);
		});
	}
	// Brings product's filtered by category from MercadoLibre Api
	getByCategory(category_id) {
		this.productsSvc.getByCategory(category_id).then(products => {
			this.products = products.data.results;
		});
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProductsCtrl;


ProductsCtrl.$inject = ['ProductsSvc', 'CategoriesSvc', '$rootScope', '$routeParams'];

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ProductsDtv {
    constructor() {
        this.restrict = 'E';
        this.replace = true;
        this.templateUrl = '/modules/Products/product_detail.html';
        this.scope = {};
    }

    controller($scope, ProductsSvc) {
        $scope.productsSvc = ProductsSvc;
    }

    link(scope, element, attrs) {

        scope.productsSvc.getProductPictures(scope.$parent.product.id).then(product => {
            // Add main image 
            scope.$parent.product.image = product.data.pictures[0].secure_url;
            scope.product = scope.$parent.product;

            // Fake rating and reviews values
            scope.product.reviews = Math.floor(Math.random() * 50) + 1;
            scope.product.rating = new Array(Math.floor(Math.random() * 5) + 1);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProductsDtv;


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ProductsSvc {
	constructor($http, Config) {
		this.http = $http;
		this.config = Config;
	}
	getByCategory(category_id) {
		var limit = 10;
		return this.http.get(this.config.apiURL + "hot_items/search?limit=" + limit + "&category=" + category_id);
	}
	getProductPictures(product_id) {
		return this.http.get(this.config.apiBaseURL + "items/" + product_id);
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProductsSvc;


/***/ }),

/***/ 70:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });