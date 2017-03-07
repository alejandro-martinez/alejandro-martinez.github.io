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
/******/ 	return __webpack_require__(__webpack_require__.s = 125);
/******/ })
/************************************************************************/
/******/ ({

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Categories_CategoriesCtrl__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Products_ProductsCtrl__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Common_Routes__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Products_ProductsSvc__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Categories_CategoriesSvc__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Common_PagerDtv__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Products_ProductsDtv__ = __webpack_require__(69);
__webpack_require__(71);

// Controllers




// Services



//Directives



/* harmony default export */ __webpack_exports__["default"] = angular.module('app', ['ngRoute']).config(__WEBPACK_IMPORTED_MODULE_2__Common_Routes__["a" /* default */]).constant("Config", function () {
	var baseURL = "https://api.mercadolibre.com/";
	return {
		apiBaseURL: baseURL,
		apiURL: baseURL + "sites/MLA/"
	};
}()).controller('CategoriesCtrl', __WEBPACK_IMPORTED_MODULE_0__Categories_CategoriesCtrl__["a" /* CategoriesCtrl */]).controller('ProductsCtrl', __WEBPACK_IMPORTED_MODULE_1__Products_ProductsCtrl__["a" /* ProductsCtrl */]).service('ProductsSvc', __WEBPACK_IMPORTED_MODULE_3__Products_ProductsSvc__["a" /* ProductsSvc */]).service('CategoriesSvc', __WEBPACK_IMPORTED_MODULE_4__Categories_CategoriesSvc__["a" /* CategoriesSvc */]).directive('pager', () => new __WEBPACK_IMPORTED_MODULE_5__Common_PagerDtv__["a" /* PagerDtv */]()).directive('productDetail', () => new __WEBPACK_IMPORTED_MODULE_6__Products_ProductsDtv__["a" /* ProductsDtv */]());

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CategoriesCtrl {
	constructor(CategoriesSvc, $rootScope, $routeParams) {
		this.categoriesSvc = CategoriesSvc;

		// Brings product's categories from MercadoLibre Api
		this.categoriesSvc.getAll().then(categories => {
			console.log("Categories");
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
class PagerDtv {
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.templateUrl = 'modules/Common/pager.html';
    this.scope = {
      data: '=',
      pagination: '='
    };
  }

  controller($scope, $rootScope, $timeout) {

    $scope.currentPage = 1;

    $scope.$watch("currentPage", () => {
      // Wait for the change on the currentPage
      $timeout(() => {
        if ($scope.currentPage !== 1) {
          $scope.pagination.offset = $scope.currentPage * $scope.pagination.offset;
          $rootScope.$emit("PAGE_CHANGED", $scope.currentPage);
        }
      }, 1);
    });

    // Build the array of number pages, if there is available data
    if ($scope.data && $scope.data.results) {

      // Sets the offset with the number of items of the actual page	
      $scope.pagination.offset = $scope.data.results.length;
      $scope.totalPages = $scope.data.paging.total / $scope.pagination.itemsPerPage;

      $scope.pagedItems = function () {
        var tmp_array = [];
        if ($scope.currentPage <= $scope.totalPages) {
          for (let i = $scope.currentPage; i < $scope.currentPage + $scope.pagination.itemsPerPage; i++) {
            tmp_array.push(i);
          }
        }
        return tmp_array;
      };
    }

    $scope.prevPage = function () {
      if ($scope.currentPage >= 10) $scope.currentPage -= 10;
    };

    $scope.nextPage = function () {
      $scope.currentPage += 10;
    };

    $scope.setPage = function (_page) {
      console.log("NEW pageee", _page);
      $scope.currentPage = _page;
    };
  }

  link(scope, element, attrs) {}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PagerDtv;


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Routes;
Routes.$inject = ['$routeProvider'];

function Routes($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'modules/Products/index.html',
    controller: 'ProductsCtrl as $ctrl'
  }).when('/Products/:category_id', {
    templateUrl: 'modules/Products/index.html',
    controller: 'ProductsCtrl as $ctrl'
  }).otherwise({ redirectTo: '/' });
}

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ProductsCtrl {
	constructor(ProductsSvc, CategoriesSvc, $rootScope, $routeParams) {
		this.productsSvc = ProductsSvc;
		this.data_loaded = false;
		this.filter_category = 0;

		this.pagination = {
			currentPage: 1,
			offset: 0,
			itemsPerPage: 12
		};

		if (angular.isDefined($routeParams.category_id)) {
			this.filter_category = $routeParams.category_id;
			this.getByCategory();
		}

		$rootScope.$on("CATEGORIES_LOADED", (ev, categories) => {
			this.filter_category = categories[0].id;
			this.getByCategory(categories[0].id);
		});

		$rootScope.$on("PAGE_CHANGED", (ev, data) => {
			if (this.pagination.offset > 0) {
				this.getByCategory();
			}
		});
	}
	loadImages() {
		var ids = [];
		this.products.results.map(p => {
			ids.push(p.id);
		});

		this.productsSvc.getProductPictures(ids.join(",")).then(products => {
			console.log(products.data);
			// Add images to products on the page
			this.products.results.map(p => {
				let product_with_image = products.data.filter(o => {
					return o.id === p.id;
				});

				p.image = product_with_image[0].pictures[0].url;
			});
		});
	}
	// Brings product's filtered by category from MercadoLibre Api
	getByCategory() {

		this.productsSvc.getByCategory(this.filter_category, this.pagination).then(products => {

			// Add random rating and reviews values
			products.data.results.map(p => {
				p.reviews = Math.floor(Math.random() * 50) + 1;
				p.rating = new Array(Math.floor(Math.random() * 5) + 1);
			});

			this.products = products.data;

			this.data_loaded = true;

			this.loadImages();
		});
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProductsCtrl;


ProductsCtrl.$inject = ['ProductsSvc', 'CategoriesSvc', '$rootScope', '$routeParams'];

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ProductsDtv {
    constructor() {
        this.restrict = 'E';
        this.replace = true;
        this.templateUrl = 'modules/Products/product_detail.html';
        this.scope = {};
    }

    controller($scope, ProductsSvc) {
        $scope.productsSvc = ProductsSvc;
    }

    link(scope, element, attrs) {
        scope.product = scope.$parent.product;
        /*
        scope.productsSvc.getProductPictures( scope.$parent.product.id ).then(( product ) => {
        	// Add main image 
        	scope.$parent.product.image = product.data.pictures[0].secure_url;
        	scope.product = scope.$parent.product;
        		
        })*/
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProductsDtv;


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ProductsSvc {
	constructor($http, Config) {
		this.http = $http;
		this.config = Config;
	}
	getByCategory(category_id, queryParams) {
		return this.http.get(this.config.apiURL + "search?category=" + category_id + "&limit=" + queryParams.itemsPerPage + "&offset=" + queryParams.offset);
	}
	getProductPictures(product_ids) {
		return this.http.get(this.config.apiBaseURL + "items?ids=" + product_ids);
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProductsSvc;


/***/ }),

/***/ 71:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });