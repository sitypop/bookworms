bookWormApp.factory("BookClubFactory", function(){
  var bookClub = function(name, genre, location, day, time, description, book){
    this.name = name;
    this.genre = genre;
    this.location = location;
    this.day = day;
    this.time = time;
    this.description = description;
    this.book = book;
  };
  return bookClub;
});
