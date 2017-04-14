celebinoApp.controller('chartsController', function (GardenStatusService, $scope, $state, $mdToast) {

  $scope.gardenStatuss = [];

  $scope.getByGardenId = function (gardenId) {

        console.log("Garden: " + gardenId);
          GardenStatusService.getByGardenId(gardenId)
              .then(function (response) {
                  $scope.gardenStatuss = response.data;
              });

    };



});
