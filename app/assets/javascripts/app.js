var bookWormApp = angular.module("bookWormApp", ['Devise','ui.router', 'templates']);

bookWormApp.config(function(AuthProvider,$stateProvider, $urlRouterProvider) {
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
    controller : 'AuthCtrl',
    onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('index');
        });
      }]
  })

  .state('sign-in', {
    url: '/users/sign-in',
    templateUrl: '/assets/templates/users/_sign-in.html',
    controller : 'AuthCtrl',
    onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('index');
        });
      }]
  });
});
