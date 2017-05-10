angular.module("singlepageapp").controller("disciplinaContrller", function ($scope, APIService, $location) {



    $scope.disci = [];
    $scope.pagina = 1;

    $scope.irPara = function(caminho){
        $location.url(caminho);
    };


    var listarDisciplina = function(){

        var sucesso = function(dados){
            $scope.disci = dados.data;
        };

        var erro = function(err){
            alert("Erro"+err);
        };

        APIService.listarDisciplina().then(sucesso,erro);
    };

    $scope.salvarDisciplina = function(disciplina){

        APIService.salvarDisciplina(disciplina).then(function(disciplina){
            alert("cadastrada com sucesso");
            $location.url("/cadastroDeDisciplina");
        },function(err){
            alert("Deu tilt");
        });
    }

    $scope.listarDisciplinaPorCurso = function (curso) {
        //alert(curso);
        var sucesso = function (dados) {
            $scope.disci = dados.data;
        };

        var erro = function (err) {
            alert("Erro ao listar as disciplinas");
        };

        APIService.listarDisciplinaPorCurso(curso).then(sucesso,erro);

    }


    $scope.proxPag = function(pagina){
        $scope.pagina = pagina+1;
        APIService.listarDisciplinaPorPagina($scope.pagina).then(function(dados){
            if (!dados.data.length == 0) {
                $scope.disci = dados.data;
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
                $scope.disci = dados.data;
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

    listarDisciplina();
    listarCurso();



});

