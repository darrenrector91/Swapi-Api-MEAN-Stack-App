starwarsApp.controller("SearchController", ['SwapiService', function (SwapiService) {
  const self = this;

  self.searchResults = SwapiService.searchResults;
  self.resources = SwapiService.resources;

  // run the getResources function
  self.getResources = function () {
    SwapiService.getResources();
  }

  // search function
  self.searchSwapi = function (resource, keyword) {
    SwapiService.searchSwapi(resource, keyword);
  }

  self.getResources();
}]);