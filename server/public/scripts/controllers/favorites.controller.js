starwarsApp.controller("FavoritesController", ['SwapiService', function (SwapiService) {
    console.log('FavoritesController loaded');
    
    const self = this;

    self.favorites = SwapiService.favorites;
    self.favoriteCount = SwapiService.favoriteCount;
    self.results = SwapiService.getFavorites;

    // run the getFavorites function
    self.getFavorites = function () {
        SwapiService.getFavorites();
    }

    // delete Favorite
    self.delete = function (favdId) {
        SwapiService.delete(favdId);
    }

    // favorites count total function
    self.favoriteCount = function () {
        SwapiService.favoriteCount();
    }

    self.getFavorites();
}]);