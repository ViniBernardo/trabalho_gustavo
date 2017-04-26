angular.module("singlepageapp").controller("Controller", function ($scope, APIService, $location) {


    $scope.curs = [];
    $scope.pagina = 1;

    $scope.irPara = function(caminho){
        $location.url(caminho);
    };
    $scope.proxPag = function(pagina){
        $scope.pagina = pagina+1;
        APIService.listarAlunoPorPagina($scope.pagina).then(function(dados){
            if (!dados.data.length == 0) {
                $scope.curs = dados.data;
            };
        },function (err){
            alert("Deu tilt");
        });
    };

    $scope.voltarPag = function(pagina){
        $scope.pagina = pagina-1;
        if ($scope.pagina == 0) {
            $scope.pagina = 1;
        }
        APIService.listarAlunoPorPagina($scope.pagina).then(function(dados){
            if (!dados.data.length == 0) {
                $scope.curs = dados.data;
            };
        },function (err){
            alert("Deu tilt");
        });
    };

    var listarCurso = function(){

        var sucesso = function(dados){
            $scope.curs = dados.data;
        };

        var erro = function(err){
            alert("Erro"+err);
        };

       APIService.listarCurso().then(sucesso,erro);
    };


    listarCurso();




});



