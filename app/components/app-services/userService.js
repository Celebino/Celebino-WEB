celebinoApp.factory("UserService", function($http) {

    var urlBase = "http://localhost:8080/Celebino/user";
    var user ;
    // Get all users
    var _getAll = function() {
        return $http.get(urlBase + "/")
    };

    // Get user by id
    var _getById = function(id) {
        return $http.get(urlBase + "/" + id)
    };

    // Get user by email
    var _getByEmail = function(email) {
        return $http.get(urlBase + "/email/" + email)
    };

    // Get user by username
    var _getByUsername = function(username) {
        return $http.get(urlBase + "/username/" + username)
    };

    // insert a user
    var _insertUser = function(user){
		    return $http.post(urlBase + "/", user)
	  };

    // Login user
    var _loginUser = function(login){
      return $http.post(urlBase + "/login", login)
    };

    var _setCurrentUserByEmail = function(email){
      user = email;
    };



    return {
        getAll: _getAll,
        getById: _getById,
        getByEmail: _getByEmail,
        getByUsername: _getByUsername,
        insertUser: _insertUser,
        loginUser: _loginUser,
        setCurrentUserByEmail : _setCurrentUserByEmail
    };
});
