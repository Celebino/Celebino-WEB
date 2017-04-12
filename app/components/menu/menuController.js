celebinoApp.controller('MenuController', function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
});
