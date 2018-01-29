starwarsApp.controller("SearchController", ['SwapiService', function (SwapiService) {
  const self = this;

  self.searchResults = SwapiService.searchResults;
  self.resources = SwapiService.resources;

  // get resources function
  self.getResources = function () {
    SwapiService.getResources();
  }

  // search function
  self.searchSwapi = function (resource, keyword) {
    SwapiService.searchSwapi(resource, keyword);
  }

  // favorite increment function
  self.favoriteAdd = function(favorite, incrementFavorite) {
    SwapiService.favoriteAdd(favorite, incrementFavorite);
  }

  // favorites count total function
  self.favoriteCount = function() {
    SwapiService.favoriteCount();
  }

  self.getResources();
}]);