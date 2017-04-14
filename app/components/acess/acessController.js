celebinoApp.controller('acessController', function (UserService, $scope, $state, $mdToast) {


  // Login user
  $scope.login = function(){
    UserService.loginUser($scope.input)
      .then(function (response) {

        // Chamado quando a resposta contém status de sucesso.
        // Exibir toas com mensagem de sucesso ou erro.
        var toast = $mdToast.simple()
            .textContent('Logged.')
            .position('top right')
            .action('Ok')
            .hideDelay(6000);
        $mdToast.show(toast);

        //Save current user in session
        UserService.getByEmail($scope.input.email).then(function(response){
          UserService.setCurrentUserByEmail(response.data);
        });

        // Redirect to home page
        $state.go('home');

    })
    .catch(function (data) {
      var error = getError(data.status);
        // Handle error here
        var toast = $mdToast.simple()
            .textContent(error)
            .position('top right')
            .action('Ok')
            .hideDelay(6000);
        $mdToast.show(toast);
    });
  };

  $scope.signup = function(){
    UserService.insertUser($scope.create)
      .then(function (response) {
        // Chamado quando a resposta contém status de sucesso.
        // Exibir toas com mensagem de sucesso ou erro.
        var toast = $mdToast.simple()
            .textContent('User created with sucess!')
            .position('top right')
            .action('Ok')
            .hideDelay(6000);
        $mdToast.show(toast);
    })
    .catch(function (data) {
      var error = getError(data.status);
        // Handle error here
        var toast = $mdToast.simple()
            .textContent(error)
            .position('top right')
            .action('Ok')
            .hideDelay(6000);
        $mdToast.show(toast);
    });
  };


  // Get error status on login
  function getError(codeError){
      if(codeError == "404"){
        return "Email incorreto!"
      }
      else if(codeError == "401"){
        return "Senha incorreta!"
      }

      return "Algo está errado!"

  }



});
