starwarsApp.controller("SearchController", ['SwapiService', function (SwapiService) {
    const self = this;
    self.results = SwapiService.results
    self.btnSearch = function (searchGif) {
      console.log(searchGif);
      SwapiService.search(searchGif);
      self.search = '';
    }
  
  }]);