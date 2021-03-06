# Bookworms

![Screenshot](http://imgur.com/SXZwbsD.png)

##Introduction

📚🐛

Bookworms aims to solve the problem of connecting book lovers and aspiring readers to book clubs that suit their needs. The app was built as part of a weeklong project, and was used as an excuse to expose us to new technologies such as AngularJS and utilisation of the Rails asset pipeline. Bookworms allows users to create and join book clubs, filtering by genre, location and time.

## Instructions

To install and use locally:

```
$ git clone git@github.com:sitypop/bookworms.git
$ cd bookworms
$ bundle install
$ bower install
$ npm install
$ rake db:create
$ rake db:migrate
$ rails s
```

Then, in your browser, type in `http://localhost:3000/#/`

Register your details:

![Screenshot](http://imgur.com/79djEa6.png)

Go ahead, create a new bookclub!

![Screenshot](http://imgur.com/MSAWWqe.png)

## Testing

Bookworms uses Karma for unit testing and Protractor for e2e tests.

To run the Karma tests, use:

`karma start test/karma.conf.js`

To run the Protractor tests, you will need to start the webdriver and run a server. In one tab, run:

`http-server app`

In another tab, run:

`webdriver-manager start`

Finally, run Protractor with:

`protractor test/protractor.conf.js`

## Tools

* Rails API
* AngularJS
* Rails asset pipeline
* PostgreSQL database
* Heroku

## Author

Sity Shah
