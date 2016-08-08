angular.module('noServApp')
  .service('mainServ', function($http){
    this.addData = function(serverData) {
      console.log(serverData);
      return $http({
        method:'POST',
        url: '/serverData',
        data: serverData
      }).then(function(response) {
        return response;
      });
    };
  });
