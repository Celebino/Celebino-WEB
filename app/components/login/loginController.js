celebinoApp.controller('loginController', function (UserService, $scope, $state, $mdToast) {

  $scope.users = [];

  $scope.funcao = function(){
    console.log("oi");
  };

  $scope.login = function(){
    UserService.loginUser($scope.input)
      .then(function (response) {
        // Chamado quando a resposta contém status de sucesso.
        // Exibir toas com mensagem de sucesso ou erro.
        var toast = $mdToast.simple()
            .textContent('Garden(a) cadastrado(a) com sucesso.')
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
