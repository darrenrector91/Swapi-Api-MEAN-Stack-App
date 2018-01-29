starwarsApp.controller("FavoritesController", ['SwapiService', function (SwapiService) {
    const self = this;

    // self.vote = 0;

    // //increase vote by 1
    // self.voteUp = function () {

    //     self.vote += 1;
    //     return self.vote;
    // }

    self.favorites = SwapiService.favorites;
    self.favoriteCount = SwapiService.favoriteCount;

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