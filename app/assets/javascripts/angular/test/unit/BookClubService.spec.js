describe("BookClubService", function(){
  beforeEach(module("bookWormApp"));

  var BookClubService, BookClubFactory, httpBackend;

  var apiUrl = "http://book-worm-api.herokuapp.com/book-clubs";

  var apiResponse = {
    "response": {
      "results":[{
        name: "name",
        genre: "genre",
        location: "location",
        date: "date",
        time: "time",
        description: "description",
        book: "book"
      }
    ]}};

  beforeEach(inject(function($httpBackend, _BookClubService_, _BookClubFactory_){
    httpBackend = $httpBackend;
    BookClubService = _BookClubService_;
    BookClubFactory = _BookClubFactory_;
  }));

  it("receives book club data from the API", function(){
    var bookClub = new BookClubFactory("name", "genre", "location", "date", "time", "description", "book");

    httpBackend.expectGET(apiUrl).respond(apiResponse);

    BookClubService.getBookClubs().then(function(response){
      expect(response[0]).toEqual(bookClub);
    });


    httpBackend.flush();
  });


});
