myApp.service('SwapiService', ['$http', function($http){
	//console.log('swapi service loaded');

	const self = this;
	
	self.message = "Hello from the SwapiService!";

	// create an array inside an object
	self.searchResults = {list: []};
    self.favorites = {list: []};
    self.resources = {list: []};
    self.favoriteCount = {count: []};

	// search swapi for selected resource and typed keyword
	self.searchSwapi = function (resource, keyword){
		$http({
			method: 'GET',
			url: 'https://swapi.co/api/' + resource + '/?search=' + keyword
			}).then(function(response) {
                self.searchResults.list = response.data.results;
                console.log('self.searchResults.list', self.searchResults.list);
			})
    };
    
	// get resources
	self.getResources = function (){
		$http({
			method: 'GET',
			url: 'https://swapi.co/api/'
			}).then(function(response) {
                self.resources.list = response.data;
			})
	};

	// post favorited search result
    self.addToFavorites = function(favorite) {
        $http.post('/favorites', favorite)
            .then(function(response){
                // update favorite by calling the self.getFavorite() function
                self.getFavoriteCount();
            })
            .catch(function(response){
                console.log('error on POST request');
            });
	}
	
	// get favorites 
    self.getFavorites = function() {
        $http.get('/favorites')
            .then(function(response){
                self.favorites.list = response.data;
                
            })
            .catch(function(response){
                console.log('error on GET request');
            })
	}
	
    // delete favorite by Id
    self.deleteFavorite = function (favoriteId) {
        $http.delete(`/favorites/${favoriteId}`)
        .then(function (response) {
            self.getFavorites();  
            self.getFavoriteCount();
        })
        .catch(function (response) {
            console.log('error on deleteFavorite :', response);
        })
    }

    self.getFavoriteCount = function() {
        $http.get('/favorites/favoriteCount')
            .then(function (response) {
                // console.log('successful getFavoriteCount request: ', response.data.count);
                self.favoriteCount.count = response.data.count;
            })
            .catch(function (response) {
                console.log('error on getFavoriteCount request :', response);
            })
    }

    self.getFavoriteCount();
	self.getFavorites();
}]);