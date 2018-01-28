app.service('SwapiService',['$http', function($http) {
    console.log('swapi service loaded');

    var self = this;

    self.randomGif = {};
    self.results = {
        list: []
    };


    self.search = function (searchTerm) {
        console.log(searchTerm);

        $http({
            method: 'GET',
            url: 'https://swapi.co/api/?format=api'
        }).then(function (response) {
            self.results = response.data;
            console.log('search response.data', response.data);

        })
    };

    self.random = function () {
        const API = '9kgWDRBP1kAe1sv8wHRAd3FCkvRj9x7D'

        $http({
            method: 'GET',
            url: 'http://api.giphy.com/v1/gifs/random?api_key=' + API
        }).then(function (response) {
            console.log(response.data);
            
            //console.log('response', response.data.data);
            self.randomGif.result = response.data.data;
            console.log('self.randomGif', self.randomGif);

        });
    };
}])