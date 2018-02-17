(function (){
'use strict';
  angular.module('LunchCheck' ,[])
.controller('LunchCheckController', function($scope){
$scope.meals = "";
$scope.totalvalue=0;
$scope.display= function(){
  var totalnumer=calculatenumeric($scope.name);
  $scope.totalvalue=totalnumer;
};

function calculatenumeric(string){
  var totalstring=0;
  for(var i=0; i< string.length; i++){
    totalstring += string.charCodeAt(i);
  }
  return totalstring
}
$scope.calculateMeals= function(){

 if ($scope.meals!=""){
   $scope.arraymeals= splitString($scope.meals);
   $scope.Totalmeals= $scope.checkspaces($scope.arraymeals);
    if($scope.Totalmeals<=3){
      $scope.result="Enjoy!";
    }else{
        $scope.result="Too Much!";
    }
  }else{
    $scope.result="Please enter data first";
  }
};
function splitString(meals) {
  var arraymeals= meals.split(",");
  return arraymeals
}

$scope.checkspaces= function(array){
  var totalws=0
  for(var i=0; i< array.length; i++){
    if(array[i]!=""){
      totalws= totalws + 1;
    }
  }
    return totalws;
}
});

})();
