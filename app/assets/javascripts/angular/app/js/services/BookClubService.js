bookWormApp.service("BookClubService", [ "$http", "BookClubFactory", function($http, BookClubFactory){
  var self = this;
  API_URL = "http://book-worm-api.herokuapp.com/book-clubs";

  self.getBookClubs = function(){
    return _getDataFromApi()
    .then(_parseApiResponse)
    .then(_createBookClub);
  };

  function _getDataFromApi(){
    return $http.get(API_URL);
  }

  function _parseApiResponse(response){
    return response.data.response.results;
  }

  function _createBookClub(response){
    return response.map(function(bookClub){
      return new BookClubFactory(bookClub.name, bookClub.genre, bookClub.location, bookClub.date, bookClub.time, bookClub.description, bookClub.book);
    });
  }


}]);
