describe("BookClubController", function(){
  beforeEach(module("bookWormApp"));

  var controller, httpBackend, BookClubFactory;

  var apiUrl = "/book_clubs.json";

  var apiResponse = [
    {
    name: "name",
    genre: "genre",
    location: "location",
    date: "date",
    time: "time",
    description: "description",
    book: "book"
    }
  ];

  beforeEach(inject(function($controller, $httpBackend, _BookClubFactory_){
    controller = $controller("BookClubController");
    httpBackend = $httpBackend;
    BookClubFactory = _BookClubFactory_;
  }));

  describe("#getBookClubs", function(){
    // var bookClub = new BookClubFactory("name", "genre", "location", "date", "time", "description", "book");

    it("returns a list of book clubs", function(){
      httpBackend.expectGET(apiUrl).respond(apiResponse);
      controller.getBookClubs();
      httpBackend.flush();
      expect(controller.bookClubs.length).toEqual(1);
      // expect(controller.bookClubs[0]).toEqual(bookClub);
    });
  });

});
