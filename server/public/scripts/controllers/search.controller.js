starwarsApp.controller("SearchController", ['SwapiService', function (SwapiService, $mdToast, $mdAnimate) {
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
    self.searchSwapi = " ";
    
  }

  // favorite add function
  self.favoriteAdd = function(favorite) {
    SwapiService.favoriteAdd(favorite);
  }

  // favorites count total function
  self.favoriteCount = function() {
    SwapiService.favoriteCount();
  }

  self.getResources();
}]);