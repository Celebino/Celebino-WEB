celebinoApp.controller('gardenController', function (GardenService, $scope, $state, $mdToast) {


    $scope.gardens = [];

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

    $scope.getGardens = function () {
        GardenService.getAll()
            .then(function (response) {
                $scope.gardens = response.data;
            });
    };



    $scope.limparFormulario = function () {

        // Reinicializa as variáveis nome e alunos.
        $scope.nome = "";
        angular.copy({}, $scope.gardens);

        // Reinicializa o estado do campo para os eventos e validação.
        // É necessário indicar o atributo name no formulário <form>
        $scope.formPesquisa.$setPristine();
        $scope.formPesquisa.$setValidity();
    }

    $scope.redirecionar = function () {
        $state.transitionTo('home');
    };
});
