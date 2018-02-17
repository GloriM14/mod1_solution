(function (){
'use strict';
  angular.module('LunchCheck' ,[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController(a){a.meals="",a.totalvalue=0,a.display=function(){var e=function(a){for(var e=0,l=0;l<a.length;l++)e+=a.charCodeAt(l);return e}(a.name);a.totalvalue=e},a.calculateMeals=function(){""!=a.meals?(a.arraymeals=a.meals.split(","),a.Totalmeals=a.checkspaces(a.arraymeals),a.Totalmeals<=3?a.result="Enjoy!":a.result="Too Much!"):a.result="Please enter data first"},a.checkspaces=function(a){for(var e=0,l=0;l<a.length;l++)""!=a[l]&&(e+=1);return e}}
})();
