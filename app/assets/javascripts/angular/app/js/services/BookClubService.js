bookWormApp.service("BookClubService", [ "$http", "BookClubFactory", function($http, BookClubFactory){
  var self = this;
  API_URL = "/book_clubs.json";


  self.getBookClubs = function(){
    return _getDataFromApi()
    .then(_createBookClub);
  };

  function _getDataFromApi(){
    return $http.get(API_URL);
  }

  function _createBookClub(response){
    return response.data.map(function(bookClub){
      return new BookClubFactory(bookClub.name, bookClub.genre, bookClub.location, bookClub.day, bookClub.time, bookClub.description, bookClub.book);
    });
  }


}]);
