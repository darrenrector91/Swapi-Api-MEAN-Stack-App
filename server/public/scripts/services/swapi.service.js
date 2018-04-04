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

    // post favorite to db function
    self.favoriteAdd = function (favorite) {
        $http.post('/favorites', favorite)
            .then(function (response) {
                console.log('posted to db', response);
                self.getFavorites();
                self.searchResults.list = {};
            })
            .catch(function (response) {
                console.log('error on POST request', response);
            });
    }

    self.getFavorites = function () {
        // get from db
        console.log('service getting favorites');
        $http.get('/favorites')
            .then(function (response) {
                console.log('services getFavorites', response.data);
                self.favorites.list = response.data;
            })
            .catch(function (response) {
                console.log('error services get: ', response);
            });
    };

    self.deleteFavorite = function (_id) {
        $http.delete(`/favorites/${_id}`)
            .then(function (response) {
                console.log('deleted favorite');
                self.getFavorites();
            })
            .catch(function (response) {
                console.log('error on post: ', response);
            });
    };


    self.getFavorites();

}]);