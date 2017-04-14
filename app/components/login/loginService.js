celebinoApp.factory("LoginService", function($http) {

    var urlBase = "http://localhost:8080/user";
    var currentUser;

    // Login user
    var _loginUser = function(login){
      return $http.post(urlBase + "/login", login)
    };

    var _getCurrentUser = function(){

    };

    return {
        loginUser: _loginUser
    };

});
