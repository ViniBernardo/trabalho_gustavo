angular.module("singlepageapp").controller("alunoController", function ($scope, APIService, $location) {



    $scope.aul = [];

    $scope.pagina= 1;

    $scope.disci = [];

    $scope.irPara = function(caminho){
        $location.url(caminho);
    };


    var listarAluno = function(){

        var sucesso = function(dados){
            $scope.aul = dados.data;
        };

        var erro = function(err){
            alert("Erro"+err);
        };

        APIService.listarAluno().then(sucesso,erro);
    };



//--------------------------------------------------------------
    $scope.proxPag = function(pagina){
        $scope.pagina = pagina+1;
        APIService.listarAlunoPorPagina($scope.pagina).then(function(dados){
            if (!dados.data.length == 0) {
                $scope.aul = dados.data;
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
                $scope.aul = dados.data;
            };
        },function (err){
            alert("Deu tilt");
        });
    };



//--------------------------------------------------

    $scope.listarAlunosPorCurso = function (curso) {
        //alert(curso);
        var sucesso = function (dados) {
            $scope.aul = dados.data;
        };

        var erro = function (err) {
            alert("Erro ao listar os alunos");
        };

        APIService.listarAlunoPorCurso(curso).then(sucesso,erro);

    }









    $scope.salvarAluno = function(aluno){

        APIService.salvarAluno(aluno).then(function(aluno){
            alert("cadastrada com sucesso");
            $location.url("/cadastroDeAluno");
        },function(err){
            alert("Deu tilt");
        });
    }

    var listarCurso = function(){

        var sucesso = function(dados){
            $scope.curs = dados.data;
        };

        var erro = function(err){
            alert("Erro"+err);
        };

        APIService.listarCurso().then(sucesso,erro);
    };

    listarAluno();
    listarCurso();


});