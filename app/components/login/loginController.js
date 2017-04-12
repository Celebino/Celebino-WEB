celebinoApp.controller('loginController', function (UserService, $scope, $state) {

  $scope.users = [];
  var user = response.data;


  $scope.login = function(user){
    UserService.getByEmail(email)
        .then(function (response) {
          user = response.data;
        });
    if ($scope.user = user){
       $state.transitionTo('dashboard');
    }
    else{

    }


  }
});
