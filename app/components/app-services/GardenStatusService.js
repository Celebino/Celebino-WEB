celebinoApp.factory("GardenStatusService", function($http) {

    var urlBase = "http://localhost:8080/Celebino/gardenstatus";

    var _getAll = function() {
        return $http.get(urlBase + "/")
    };

    var _insertGarden = function(garden){
		return $http.post(urlBase + "/", garden)
	};

    var _getByGardenId = function(id){
		return $http.get(urlBase + "/garden/" + encodeURI(id))
	};

    return {
        getAll: _getAll,
        insertGarden: _insertGarden,
        getByGardenId: _getByGardenId
    };
});
