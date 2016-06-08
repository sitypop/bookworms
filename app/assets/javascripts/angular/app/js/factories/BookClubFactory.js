bookWormApp.factory("BookClubFactory", function(){
  var bookClub = function(name, genre, location, date, time, description, book){
    this.name = name;
    this.genre = genre;
    this.location = location;
    this.date = date;
    this.time = time;
    this.description = description;
    this.book = book;
  };
  return bookClub;
});
