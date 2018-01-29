starwarsApp.controller("FavoritesController", ['SwapiService', function (SwapiService) {
    const self = this;

    self.vote = 0;

    //increase vote by 1
    self.voteUp = function () {

        self.vote += 1;
        return self.vote;
    }
}]);