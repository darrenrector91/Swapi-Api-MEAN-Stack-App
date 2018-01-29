starwarsApp.controller("SearchController", ['SwapiService', function (SwapiService) {
  const self = this;

  self.message = SwapiService.message;

  self.searchResults = SwapiService.searchResults;
  self.resources = SwapiService.resources;

  // run the searchSwapi function
  self.searchSwapi = function (resource, keyword) {
    SwapiService.searchSwapi(resource, keyword);
  }

  // run the getResources function
  self.getResources = function () {
    SwapiService.getResources();
  }

  self.getResources();
}]);