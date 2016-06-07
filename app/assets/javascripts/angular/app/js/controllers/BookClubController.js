bookWormApp.controller("BookClubController", ["BookClubService", function(BookClubService){
  var self = this;

  self.getBookClubs = function(){
    BookClubService.getBookClubs().then(function(bookClubs){
      self.bookClubs = bookClubs;
    });
  };

}]);
