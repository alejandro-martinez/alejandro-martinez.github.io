Config.$inject = ['$routeProvider'];

export default function Config( $routeProvider) {
  	$routeProvider.when('/', {
      templateUrl: '/modules/Home/home.html', 
      controller: 'HomeCtrl as $ctrl'
    })
    .when('/tags/:tagId', {
      templateUrl: '/partials/template2.html', 
      controller:  'ctrl2'
    })
    .when('/another', {
      templateUrl: '/partials/template1.html', 
      controller:  'ctrl1'
    })
    .otherwise({ redirectTo: '/' });
}