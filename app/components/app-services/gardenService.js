celebinoApp.factory("GardenService", function($http) {

    var urlBase = "http://localhost:8080/Celebino/garden";

    var _getAll = function() {
        return $http.get(urlBase + "/")
    };

    var _insertGarden = function(garden){
		return $http.post(urlBase + "/", garden)
	};

    var _consultarAlunoByNome = function(nome){
		return $http.get(urlBase + "/aluno/listar/nome/" + encodeURI(nome))
	};

    return {
        getAll: _getAll,
        insertGarden: _insertGarden,
        consultarAlunoByNome: _consultarAlunoByNome
    };
});
