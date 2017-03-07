require("../style.sass");

// Controllers
import { CategoriesCtrl } from "./Categories/CategoriesCtrl";
import { ProductsCtrl } from "./Products/ProductsCtrl";
import Routes from './Common/Routes';

// Services
import { ProductsSvc } from "./Products/ProductsSvc";
import { CategoriesSvc } from "./Categories/CategoriesSvc";

//Directives
import { PagerDtv } from "./Common/PagerDtv";
import { ProductsDtv} from "./Products/ProductsDtv"

export default angular.module('app', ['ngRoute'])
	.config( Routes )
	.constant("Config", function() {
		var baseURL = "https://api.mercadolibre.com/";
		return {	
			apiBaseURL: baseURL,
			apiURL: baseURL + "sites/MLA/"
		}
	}())
	.controller('CategoriesCtrl', CategoriesCtrl )
	.controller('ProductsCtrl', ProductsCtrl )
	.service('ProductsSvc', ProductsSvc )
	.service('CategoriesSvc', CategoriesSvc )
	.directive('pager', () => new PagerDtv)
	.directive('productDetail', () => new ProductsDtv)