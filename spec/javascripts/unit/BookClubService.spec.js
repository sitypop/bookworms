describe("BookClubService", function(){
  beforeEach(module("bookWormApp"));

  var BookClubService, BookClubFactory, httpBackend;

  var apiUrl = "/book_clubs.json";

  var apiResponse = [
    {
    name: "name",
    genre: "genre",
    location: "location",
    day: "day",
    time: "time",
    description: "description",
    book: "book"
    }
  ];

  beforeEach(inject(function($httpBackend, _BookClubService_, _BookClubFactory_){
    httpBackend = $httpBackend;
    BookClubService = _BookClubService_;
    BookClubFactory = _BookClubFactory_;
  }));

  it("receives book club data from the API", function(){
    var bookClub = new BookClubFactory("name", "genre", "location", "day", "time", "description", "book");

    httpBackend.expectGET(apiUrl).respond(apiResponse);

    BookClubService.getBookClubs().then(function(response){
      expect(response[0]).toEqual(bookClub);
    });


    httpBackend.flush();
  });
});
