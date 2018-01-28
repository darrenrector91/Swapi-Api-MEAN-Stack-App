console.log('client loaded!');

var app = angular.module('apiApp', ['ngRoute', 'ngMaterial'])
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('orange')
      .warnPalette('red')
      .accentPalette('lime')
      .backgroundPalette('grey')
      .dark();
  });
// app configuration
app.config(function($routeProvider) {
    console.log('config loaded');
    // define our client side routes
    $routeProvider
        .when('/add', {
            templateUrl: '/views/',
            controller: 'API    as vm'
        })
        .otherwise(
            { redirectTo: '/reports' }
        );
    
});

