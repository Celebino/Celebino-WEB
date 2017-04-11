function () {
    'use strict';

    angular
        .module('celebinoApp')
        .factory('GardenStatusService', GardenStatusService);

    GardenStatusService.$inject = ['$http'];
    var baseUrl = 'http://localhost:8080/Celebino/gardenstatus';
    function GardenStatusService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Create = Create;


        return service;

        function GetAll() {
            return $http.get(baseUrl + '/').then(handleSuccess, handleError('Error getting all garden status'));
        }

        function GetById(id) {
            return $http.get('/' + id).then(handleSuccess, handleError('Error getting garden status by id'));
        }

        function Create(gardenStatus) {
            return $http.post('/', gardenStatus).then(handleSuccess, handleError('Error creating garden status'));
        }



        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
