require("../style.sass");

// Controllers
import { HomeCtrl } from './Home/HomeCtrl';
import Config from './Home/Config';

// Services
import { ProductsSvc } from "./Products/ProductsSvc";
import { CategoriesSvc } from "./Categories/CategoriesSvc";

export default angular.module('app', ['ngRoute'])
	.config( Config )
	.controller('HomeCtrl', HomeCtrl )
	.service('ProductsSvc', ProductsSvc )
	.service('CategoriesSvc', CategoriesSvc );