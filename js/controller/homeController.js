/*angular.module("singlepageapp").controller("homeController", function ($scope, petRastreioAPIService, $location) {
    $scope.coordenada = {};

    $scope.coords = [];

    $scope.irPara = function(caminho){
        $location.url(caminho);
    };

    var atualizarCoordenada = function(){
        // Callback de Sucesso
        var sucesso = function(dados){
            $scope.coordenada = dados.data;
        };

        // Callback de erro
        var erro = function(err){
            alert("Erro "+err);
        };

        petRastreioAPIService.ultimaCoordenada().then(sucesso,erro);
    };

    var listarCoordenadas = function(){

        var sucesso = function(dados){
            $scope.coords = dados.data;
        };

        var erro = function(err){
            alert("Erro"+err);
        };

        petRastreioAPIService.listarCoordenadas(10).then(sucesso,erro);
    };

    listarCoordenadas();
    atualizarCoordenada();
});*/