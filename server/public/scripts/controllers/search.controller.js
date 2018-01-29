starwarsApp.controller("SearchController", ['SwapiService', function (SwapiService) {
  const self = this;

  self.results = SwapiService.results;
  self.resources = SwapiService.resources;

  // search
  self.search = function (resource, keyword) {
    SwapiService.search(resource, keyword);
  }

  // run the getResources function
  self.getResources = function () {
    SwapiService.getResources();
  }

  self.getResources();
}]);