require("../style.sass");

import { HomeCtrl } from './Home/HomeCtrl';

import { ProductsSvc } from './Products/ProductsSvc';

export default angular.module('app', [])
	.controller('HomeCtrl', HomeCtrl)
	.service('ProductsSvc', ProductsSvc);