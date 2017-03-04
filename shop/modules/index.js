require("../style.sass");

// Controllers
import { CategoriesCtrl } from "./Categories/CategoriesCtrl";
import { ProductsCtrl } from "./Products/ProductsCtrl";
import { HomeCtrl } from './Home/HomeCtrl';
import Routes from './Common/Routes';

// Services
import { ProductsSvc } from "./Products/ProductsSvc";
import { CategoriesSvc } from "./Categories/CategoriesSvc";

//Directives
import { ProductsDtv} from "./Products/ProductsDtv"

export default angular.module('app', ['ngRoute'])
	.config( Routes )
	.constant("Config", {
		apiBaseURL: "https://api.mercadolibre.com/",
		apiURL: "https://api.mercadolibre.com/sites/MLA/"
	})
	.controller('HomeCtrl', HomeCtrl )
	.controller('CategoriesCtrl', CategoriesCtrl )
	.controller('ProductsCtrl', ProductsCtrl )
	.service('ProductsSvc', ProductsSvc )
	.service('CategoriesSvc', CategoriesSvc )
	.directive('productDetail', () => new ProductsDtv)