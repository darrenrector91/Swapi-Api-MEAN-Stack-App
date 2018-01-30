starwarsApp.controller("FavoritesController", ['SwapiService', function (SwapiService) {
    const self = this;

    self.favorites = SwapiService.favorites;
    self.favoriteCount = SwapiService.favoriteCount;

    // run the getFavorites function
    self.getFavorites = function () {
        SwapiService.getFavorites();
    }

    // // add favorites
    // self.favoriteAdd = function() {
    //     SwapiService.favoriteAdd();
    // }

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