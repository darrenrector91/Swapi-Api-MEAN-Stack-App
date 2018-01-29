starwarsApp.service('SwapiService', ['$http', function ($http) {
    console.log('swapi service loaded');

    const self = this;

    self.resources = {
        list: []
    };

    self.search = {
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

    // search function
    self.search = function (resource, keyword) {
        $http({
            method: 'GET',
            url: 'https://swapi.co/api/' + resource + '/?search=' + keyword
        }).then(function (response) {
            self.search.list = response.data.results;
            console.log('self.search.list', self.search.list);
        })
    };




}]);