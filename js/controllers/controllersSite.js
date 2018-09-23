'use strict';

var controllersSite = angular.module( 'controllersSite' , [] );


controllersSite.controller('podglad', ['$scope','$location', '$http', '$routeParams', function($scope,$location,$http,$routeParams){
	

		document.title = 'Projekt1'; 
		$scope.number=4;
		
		$scope.show = function show( number ) {
			$scope.number=number;
			$http.get('example.json').
		success( function(data){
			data.list=data.list.slice(0,number);
			$scope.products = data;
		}).error( function(data){
			console.log('blad polaczenia z API')
		});
		
	}
	$scope.show(4);

		$scope.strona = function strona( products,page ) {
$http.get('example.json'). // SYmulacja pobrania danych z backednu
		success( function(data){
			page=page-1;
			data.list=data.list.slice(page*$scope.number,(page*$scope.number)+$scope.number);
			$scope.products = data;
		}).error( function(data){
			console.log('blad polaczenia z API')
		});
		}

		

}]);
