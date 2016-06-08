describe("homepage", function(){

  var mock = require('protractor-http-mock');

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

  beforeEach(function(){
    mock([{
      request: {
        path: apiUrl,
        method: 'GET'
      },
      response: {
        data: apiResponse
      }
    }]);
  });

  afterEach(function(){
    mock.teardown();
  });

  it("should get home page title", function(){
    browser.get('/');
    expect(browser.getTitle()).toEqual("string Bookworm | Your first stop for book clubs");
  });

  it("should display a list of bookclub names", function(){
    browser.get('/');
    var bookClubName = $$(".book-club-name").first();
    expect(bookClubName.getText()).toEqual("name");
  });

  it("should display a list of bookclub genres", function(){
    browser.get('/');
    var bookClubGenre = $$(".book-club-genre").first();
    expect(bookClubGenre.getText()).toEqual("genre");
  });

  it("should display a list of bookclub locations", function(){
    browser.get('/');
    var bookClubGenre = $$(".book-club-location").first();
    expect(bookClubGenre.getText()).toEqual("location");
  });

  it("should display a list of bookclub days", function(){
    browser.get('/');
    var bookClubGenre = $$(".book-club-day").first();
    expect(bookClubGenre.getText()).toEqual("day");
  });

  it("should display a list of bookclub times", function(){
    browser.get('/');
    var bookClubGenre = $$(".book-club-time").first();
    expect(bookClubGenre.getText()).toEqual("time");
  });








});
