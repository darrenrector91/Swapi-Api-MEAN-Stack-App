var app = angular.module('hrApp', ['ngRoute']);

// app configuration
app.config(function($routeProvider) {
    console.log('config loaded');
    // define our client side routes
    $routeProvider
        .when('/add', {
            templateUrl: '/views/',
            controller: '    as vm'
        })
        .otherwise(
            { redirectTo: '/reports' }
        );
    
});

