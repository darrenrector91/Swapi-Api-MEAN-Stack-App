console.log('client loaded!');

const starwarsApp = angular.module('starwarsApp', ['ngRoute', 'ngMaterial'])

starwarsApp.config(function ($routeProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('orange')
        .warnPalette('red')
        .accentPalette('lime')
        .backgroundPalette('grey')
        .dark();
    // app configuration
    $routeProvider
        .when('/search', {
            templateUrl: '/views/search.html',
            controller: 'SearchController as vm'
        })
        .when('/favorites', {
            templateUrl: '/views/favorites.html',
            controller: 'FavoritesController as vm'
        })
        .otherwise({
            redirectTo: '/search'
        });
});