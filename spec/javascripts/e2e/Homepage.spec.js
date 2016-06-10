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
    browser.get('/#/');
    expect(browser.getTitle()).toEqual("Bookworm | Your first stop for book clubs");
  });

  it("should display a list of bookclub names", function(){
    browser.get('/#/');
    var bookClubName = $$(".book-club-name").first();
    expect(bookClubName.getText()).toEqual("name");
  });

  it("should display a list of bookclub genres", function(){
    browser.get('/#/');
    var bookClubGenre = $$(".book-club-genre").first();
    expect(bookClubGenre.getText()).toEqual("genre");
  });

  it("should display a list of bookclub locations", function(){
    browser.get('/#/');
    var bookClubLocation = $$(".book-club-location").first();
    expect(bookClubLocation.getText()).toEqual("location");
  });

  it("should display a list of bookclub days", function(){
    browser.get('/#/');
    var bookClubDay = $$(".book-club-day").first();
    expect(bookClubDay.getText()).toEqual("day");
  });

  it("should display a list of bookclub times", function(){
    browser.get('/#/');
    var bookClubTime = $$(".book-club-time").first();
    expect(bookClubTime.getText()).toEqual("time");
  });

  it("should add a book club", function() {
    browser.get('/#/book-clubs/new');
    $('#name').sendKeys('name');
    $('#genre').sendKeys('genre');
    $('#location').sendKeys('location');
    $('#description').sendKeys('description');
    $('#day').sendKeys('day');
    $('#time').sendKeys('21:21');
    $('#book').sendKeys('book');
    $('#submit').click();
    browser.get('/#/');
    var bookClubName = $$(".book-club-name").last();
    expect(bookClubName.getText()).toEqual("name");
  });




});
