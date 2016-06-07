describe("homepage", function(){

  var mock = require('protactor-http-mock');

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
    expect(browser.getTitle()).toEqual("Bookworm | Your first stop for book clubs");
  });


});
