function () {
    'use strict';

    angular
        .module('celebinoApp')
        .factory('GardenService', GardenService);

    GardenService.$inject = ['$http'];
    var baseUrl = 'http://localhost:8080/Celebino/garden';
    function GardenService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Create = Create;


        return service;

        function GetAll() {
            return $http.get(baseUrl + '/').then(handleSuccess, handleError('Error getting all gardens'));
        }

        function GetById(id) {
            return $http.get('/' + id).then(handleSuccess, handleError('Error getting garden by id'));
        }

        function Create(garden) {
            return $http.post('/', garden).then(handleSuccess, handleError('Error creating garden'));
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
