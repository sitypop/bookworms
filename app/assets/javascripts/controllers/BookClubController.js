bookWormApp.controller("BookClubController", ["BookClubService", function(BookClubService){
  var self = this;

  self.getBookClubs = function(){
    BookClubService.getBookClubs().then(function(bookClubs){
      self.bookClubs = bookClubs;
    });
  };

  self.addBookClub = function(bookClub){
    BookClubService.addBookClub(bookClub);
  };

}]);
