bookWormApp.controller("BookClubController", ["$state", "BookClubService", function($state, BookClubService){
  var self = this;

  self.getBookClubs = function(){
    BookClubService.getBookClubs().then(function(bookClubs){
      self.bookClubs = bookClubs;
    });
  };

  self.addBookClub = function(bookClub){
    BookClubService.addBookClub(bookClub).then(function() {
      $state.go('index');
    });
  };
}]);
