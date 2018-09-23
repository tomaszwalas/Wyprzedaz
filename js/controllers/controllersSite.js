'use strict';

var controllersSite = angular.module( 'controllersSite' , [] );


controllersSite.controller('about', ['$scope','$location', '$http', function($scope,$location,$http){
		
		document.title = 'Projekt1';
		console.log('o nas');
		if(/^\/shop/.test( $location.path())){
			console.log('sklep');
			$("#slider").addClass('slider1').removeClass('slider2');
		}
			
		else{
			$("#slider").addClass('slider2').removeClass('slider1');
			console.log('inny');
		}

}]);



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
