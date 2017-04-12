/* function () {
    'use strict';

    angular
        .module('celebinoApp')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    var baseUrl = 'http://localhost:8080/Celebino/user';
    function UserService($http) {
        var service = {};

        service.getAll = GetAll;
        service.getById = GetById;
        service.getByUsername = GetByUsername;
        service.getByEmail = GetByEmail;
        service.create = Create;


        return service;

        function getAll() {
            return $http.get(baseUrl + '/').then(handleSuccess, handleError('Error getting all users'));
        }

        function getById(id) {
            return $http.get('/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function getByUsername(username) {
            return $http.get('/username/' +username).then(handleSuccess, handleError('Error getting user by username'));
        }

        function getByEmail(email) {
            return $http.get('/username/' + email).then(handleSuccess, handleError('Error getting user by email'));
        }

        function create(user) {
            return $http.post('/', user).then(handleSuccess, handleError('Error creating user'));
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

})(); */
