angular.module('noServApp').controller('mainCtrl', function($scope, mainServ){
  $scope.test = mainServ.test;
});
