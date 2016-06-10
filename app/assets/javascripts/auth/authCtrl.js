angular.module('bookWormApp').controller('AuthCtrl', ['$scope', '$state', 'Auth',
    function($scope, $state, Auth) {

    $scope.login = function() {
        Auth.login($scope.user).then(function(){
          $state.go('index');
        });
      };

      $scope.register = function() {
        Auth.register($scope.user).then(function(){
          $state.go('index');
        });
      };
  }]);
