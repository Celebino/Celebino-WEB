celebinoApp.controller('formController', function (GardenService, $scope, $state, $mdToast) {


  $scope.insertGarden = function () {

      GardenService.insertGarden($scope.garden)
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
              // Handle error here
              var toast = $mdToast.simple()
                  .textContent('Problema no cadastro do Garden.')
                  .position('top right')
                  .action('Ok')
                  .hideDelay(6000);
              $mdToast.show(toast);
          });
  };
});
