// Entry point angular app

import { HomeCtrl } from './Home/HomeCtrl';

import { ProductsSvc } from './Products/ProductsSvc';


angular.module('app', [])
	.controller('HomeCtrl', HomeCtrl)
	.service('ProductsSvc', HomeCtrl);