starwarsApp.service('SwapiService', ['$http', function ($http) {
    console.log('swapi service loaded');

    const self = this;

    self.message = "Hello from the SwapiService!";

    self.resources = {
        list: []
    };

    // get resources
    self.getResources = function () {
        $http({
            method: 'GET',
            url: 'https://swapi.co/api/'
        }).then(function (response) {
            self.resources.list = response.data;
        })
    };


}]);