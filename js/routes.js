angular.module('noServApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('waiterRater', {
        url:'/waiterRater',
        templateUrl: './views/waiterRater.html',
        controller: 'waiterRaterCtrl'
      })
      .state('about', {
        url:'/about',
        templateUrl: './views/about.html'
      })
      .state('home', {
        url:'/'
      });
  });
