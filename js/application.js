'use strict';

var app = angular.module( 'app' , ['ngRoute','controllersSite','controllersNavigation'] );

app.config( [ '$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
	
	// ============== Site =====================

	$routeProvider.when( '/podglad' , {
		controller : 'podglad' ,
		templateUrl : 'partials/site/podglad.html'
	});

	
	// ============== AdminP =====================

	$routeProvider.when( '/admin/shop' , {
		controller : 'shopEdit' ,
		templateUrl : 'partials/admin/shopEdit.html'
	});

	
	// ============== Default =====================

	$routeProvider.otherwise({
		redirectTo: '/podglad'
	});
}]);

