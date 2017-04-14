celebinoApp.factory("GardenService", function($http) {

    var urlBase = "http://localhost:8080/Celebino/garden";

    var _getAll = function() {
        return $http.get(urlBase + "/")
    };

    var _getByUser = function(user) {
        return $http.get(urlBase + "/user/" + user)
    };

    var _insertGarden = function(garden){
		return $http.post(urlBase + "/", garden)
	};

  

    return {
        getAll: _getAll,
        insertGarden: _insertGarden,
        getByUser: _getByUser
    };
});
