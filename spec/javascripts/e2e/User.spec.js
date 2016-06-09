describe ('users', function (){

  it("users can sign up", function() {
    browser.get('/#/users/sign-up');
    $('#email').sendKeys('mail@mail.com');
    $('#password').sendKeys('123456');
    $('#sign-up').click();
    var logOutButton = $('#log-out-button');
    expect(logOutButton.isPresent()).toBeTruthy();
  });


  it("users can sign in", function() {
    browser.get('/#/users/sign-up');
    $('#email').sendKeys('mail@mail.com');
    $('#password').sendKeys('123456');
    $('#sign-up').click();
    $('#log-out-button').click();
    $('#log-in-button').click();
    // browser.get('/#/users/sign-in');
    $('#email').sendKeys('mail@mail.com');
    $('#password').sendKeys('123456');
    $('#sign-in').click();
    var logOutButton = $('#log-out-button');
    expect(logOutButton.isPresent()).toBeTruthy();
  });


});
