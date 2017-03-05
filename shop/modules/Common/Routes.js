Routes.$inject = ['$routeProvider'];

export default function Routes( $routeProvider) {
  	$routeProvider.when('/', {
      templateUrl: '/modules/Products/index.html', 
      controller: 'ProductsCtrl as $ctrl'
    })
    .when('/Products/:category_id', {
      templateUrl: '/modules/Products/index.html', 
      controller:  'ProductsCtrl as $ctrl'
    })
    .otherwise({ redirectTo: '/' });
}