Routes.$inject = ['$routeProvider'];

export default function Routes( $routeProvider) {
  	$routeProvider.when('/', {
      templateUrl: '/modules/Home/home.html', 
      controller: 'HomeCtrl as $ctrl'
    })
    .when('/Products/:category_id', {
      templateUrl: '/modules/Products/index.html', 
      controller:  'ProductsCtrl as $ctrl'
    })
    .otherwise({ redirectTo: '/' });
}