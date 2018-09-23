'use strict';

var controllersNavigation = angular.module( 'controllersNavigation' , [] );


controllersNavigation.controller('navigation', ['$scope', '$location', '$interval',function($scope,$location,$interval){
	
	 var actualTime = new Date;	
   var endPromo = new Date(2018,8,24,0,0,0);
   var diffrent=endPromo.getTime() -actualTime.getTime();
   var diffrentTime = function(){
    //console.log(actualTime);  
    $scope.Timer = $interval(function(){
    //console.log(actualTime);
    //console.log(endPromo);
    diffrent-=1000;
    if(diffrent>0){
      //console.log(diffrent);
    var sek=diffrent/1000;
    var min=sek/60;
    var godz=min/60;
    var dni=godz/24;

    var sekLeft=Math.floor(sek%60)
    var minLeft=Math.floor(min%60)
    var godzLeft=Math.floor(godz%24)
    var dniLeft=Math.floor(dni);

    if (minLeft < 10)
      minLeft = "0" + minLeft;
    if (sekLeft < 10)
      sekLeft = "0" + sekLeft;
    if (godzLeft < 10)
      godzLeft = "0" + godzLeft;


    var arr=[];
    arr.push(sekLeft);
    arr.push(minLeft);
    arr.push(godzLeft);
    arr.push(dniLeft);
    $scope.left=arr;}
    else
      console.log("Promocja zakończyła się!")
    //console.log(arr);
    /*$scope.left=[{
      "sek":sekLeft,
      "min":minLeft,
      "godz":godzLeft,
      "dni":dniLeft
    }];*/
    //console.log($scope.left);
  },1000);
   };
   diffrentTime();
		$scope.navigation = function(){
				return 'partials/site/navigation.html' ;
			}
			
			var date = new Date; var seconds = date.getSeconds(); var minutes = date.getMinutes(); var hours = date.getHours();
			//console.log(date,hours,minutes,seconds);
      

			var hands = [
      {
        hand: 'hours',
        degree: (hours * 30) + (minutes / 2)
      },
      {
        hand: 'minutes',
        degree: (minutes * 6)
      },
      {
        hand: 'seconds',
        degree: (seconds * 6)
      }
    ];

for (var j = 0; j < hands.length; j++) {
 var elements = document.querySelectorAll('.' + hands[j].hand); 
 for (var k = 0; k < elements.length; k++) {
  elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)'; elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
  if (hands[j].hand === 'minutes'){
   elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle); }
 } 
};
			//var hands = [ { hand: 'hours', angle: (hours * 30) + (minutes / 2) }, { hand: 'minutes', angle: (minutes * 6) }, { hand: 'seconds', angle: (seconds * 6) } ]; // Loop through each of these hands to set their angle for (var j = 0; j < hands.length; j++) { var elements = document.querySelectorAll('.' + hands[j].hand); for (var k = 0; k < elements.length; k++) { elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)'; elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)'; // If this is a minute hand, note the seconds position (to calculate minute position later) if (hands[j].hand === 'minutes') { elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle); } } } }
}]);

