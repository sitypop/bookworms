describe("BookClubFactory", function(){
  beforeEach(module("bookWormApp"));

  var factory;
  var bookClub;

  beforeEach(inject(function(BookClubFactory){
    factory = new BookClubFactory("Name", "Genre", "Location", "Date", "Time", "Description", "Book");
    bookClub = { name: "Name", genre: "Genre", location: "Location", date: "Date", time: "Time", description: "Description", book: "Book" };
  }));

  it("creates a bookClub object with a name", function(){
    expect(factory.name).toEqual(bookClub.name);
  });
});
