var bookWormApp = angular.module("bookWormApp", ['ui.router', 'templates']);

bookWormApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('index', {
    url: '/',
    templateUrl: '/assets/templates/_index.html',
    controller : 'BookClubController'
  })

  .state('book-clubs-new', {
    url: '/book-clubs/new',
    templateUrl: '/assets/templates/book-clubs/_new.html',
    controller : 'BookClubController'
  })

  .state('book-club', {
    url: '/book-clubs/:id',
    templateUrl: '/assets/templates/book-clubs/_show.html',
    controller : 'BookClubController'
  })

  .state('sign-up', {
    url: '/users/sign-up',
    templateUrl: '/assets/templates/users/_sign-up.html',
    controller : 'BookClubController'
  })

  .state('sign-in', {
    url: '/users/sign-in',
    templateUrl: '/assets/templates/users/_sign-in.html',
    controller : 'BookClubController'
  });
});
