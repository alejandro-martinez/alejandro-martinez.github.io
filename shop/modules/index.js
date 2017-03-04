require("../style.sass");

// Controllers
import { CategoriesCtrl } from "./Categories/CategoriesCtrl";
import { ProductsCtrl } from "./Products/ProductsCtrl";
import { HomeCtrl } from './Home/HomeCtrl';
import Routes from './Common/Routes';

// Services
import { ProductsSvc } from "./Products/ProductsSvc";
import { CategoriesSvc } from "./Categories/CategoriesSvc";

export default angular.module('app', ['ngRoute'])
	.config( Routes )
	.controller('HomeCtrl', HomeCtrl )
	.controller('CategoriesCtrl', CategoriesCtrl )
	.controller('ProductsCtrl', ProductsCtrl )
	.service('ProductsSvc', ProductsSvc )
	.service('CategoriesSvc', CategoriesSvc );