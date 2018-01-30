starwarsApp.service('SwapiService', ['$http', function ($http) {
    console.log('swapi service loaded');

    const self = this;

    self.resources = {
        list: []
    };

    self.searchResults = {
        list: []
    };

    self.favorites = [];

    // get resources function
    self.getResources = function () {
        $http({
            method: 'GET',
            url: 'https://swapi.co/api/'
        }).then(function (response) {
            self.resources.list = response.data;
        })
    };

    // search results function
    self.searchSwapi = function (resource, keyword) {
        $http({
            method: 'GET',
            url: 'https://swapi.co/api/' + resource + '/?search=' + keyword
        }).then(function (response) {
            self.searchResults.list = response.data.results;
            console.log('self.searchResults.list', self.searchResults.list);
        })
    };

    // post favorite function
    self.favoriteAdd = function(favorite) {
        $http.post('/favorites', favorite)
            .then(function(response){
                console.log('posted to favorites', response);
                self.getFavorites();
            })
            .catch(function(response){
                console.log('error on POST request', response);
            });
    }
    
    // get favorites 
    self.getFavorites = function() {
        $http.get('/favorites')
            .then(function(response){
                console.log('get', response);
                
                self.favorites = response.data;
            })
            .catch(function(response){
                console.log('error on GET request');
            })
    }

    self.getFavorites();

}]);