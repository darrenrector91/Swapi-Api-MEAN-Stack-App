starwarsApp.service('SwapiService', ['$http', function ($http) {
    console.log('swapi service loaded');

    const self = this;

    self.resources = {
        list: []
    };

    self.searchResults = {
        list: []
    };

    // getResources function
    self.getResources = function () {
        $http({
            method: 'GET',
            url: 'https://swapi.co/api/'
        }).then(function (response) {
            self.resources.list = response.data;
        })
    };

    // searchResults function
    self.searchSwapi = function (resource, keyword) {
        $http({
            method: 'GET',
            url: 'https://swapi.co/api/' + resource + '/?search=' + keyword
        }).then(function (response) {
            self.searchResults.list = response.data.results;
            console.log('self.searchResults.list', self.searchResults.list);
        })
    };




}]);