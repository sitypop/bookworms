describe ('users', function (){

  it("users can sign up", function() {
    browser.get('/#/users/sign-up');
    $('#email').sendKeys('mail@mail.com');
    $('#password').sendKeys('123456');
    $('#sign-up').click();
    var logOutButton = $('#log-out-button');
    expect(logOutButton.isPresent()).toBeTruthy();
  });
});
