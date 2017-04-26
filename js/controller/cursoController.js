angular.module("singlepageapp").controller("cursoController", function ($scope, APIService, $location) {

    $scope.salvarCurso = function(curso){

        APIService.salvarCurso(curso).then(function(curso){
            alert("cadastrada com sucesso");
            $location.url("/cadastroDeCurso");
        },function(err){
            alert("Deu tilt");
        });
    }

});