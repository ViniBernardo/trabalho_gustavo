angular.module("singlepageapp").controller("homeController", function ($scope, APIService, $location) {



    $scope.disci = [];
    $scope.curs = [];
    $scope.aul = [];
    $scope.matriculados = [];
    $scope.semestres = [];
    $scope.alunosMatricular = [];
    $scope.alunosParaCadastro = [];
    $scope.tamanhoVetorCurso;


    // listar cursos
    var listarCurso = function ()  {

        var sucesso = function (dados) {
            $scope.curs = dados.data;
            $scope.tamanhoVetorCurso = dados.data.length;
        };

        var erro = function (err) {
            alert("Erro listar Cursos");
        }

        APIService.listarCurso().then(sucesso,erro);
    }


    // chamando do form ce curso na view matricula
    $scope.listarDisciplinaPorCurso = function (curso) {

        alert(curso);
        var sucesso = function (dados) {
            $scope.disci = dados.data;
        };

        var erro = function (err) {
            alert("Erro ao encontra curso na matricula");
        };

        APIService.listarDisciplinaPorCurso(curso).then(sucesso,erro);

    }

    // listar semestre
    $scope.listarSemestre = function () {

        var sucesso = function (dados) {
            $scope.semestres = dados.data;
        };

        var erro = function (err) {
            alert("Erro ao listar semestres");
        };

        APIService.listarSemestres().then(sucesso,erro);
    }

    // listar alunos por curso
    $scope.listarAlunoPorCurso = function (curso) {
        //alert(curso);
        var sucesso = function (dados) {
            $scope.aul = dados.data;
        };

        var erro = function (err) {
            alert("Erro ao listar os alunos");
        };

        APIService.listarAlunoPorCurso(curso).then(sucesso,erro);

    }

    // listar alunos matriculados
    $scope.listarMatriculados = function (semestre,disciplina) {
        //alert(disciplina+"/"+semestre);
        var sucesso = function (dados) {
            $scope.matriculados = dados.data;
        };

        var erro = function (err) {
            alert("Erro ao listar os alunos Matriculados");
        };

        APIService.listarMatriculados(semestre,disciplina).then(sucesso,erro);

    }

    //matriculando alunos
    $scope.matricular = function () {
        $scope.alunosParaCadastro = [];
        for (var i = 0; i < $scope.alunosMatricular.length; i++) {
            $scope.alunosParaCadastro.push($scope.alunosMatricular[i]);
        }
    }

    $scope.marcado = function (alunoCheck) {
        return $scope.alunosMatricular.indexOf(alunoCheck) > -1;
    }

    $scope.checkBox = function (aluno) {
        var index = $scope.alunosMatricular.indexOf(aluno);

        if (index > -1) {
            $scope.alunosMatricular.splice(index,1);
        } else {
            $scope.alunosMatricular.push(aluno);
        }
    };


    $scope.cadastrarAluno = function (disciplina, semestre) {

        alert (disciplina + " " + semestre);

        $scope.vetorCadastro = [];

        for (var i = 0; i < $scope.alunosParaCadastro.length; i++) {
            var referencia = {};

            referencia.DisciplinaId = disciplina,
                referencia.AlunoId = $scope.alunosParaCadastro[i].id,
                referencia.SemestreId = semestre

            $scope.vetorCadastro.push(referencia);
        }

        var sucesso = function () {
            alert("Matriculado com Sucesso");

        };

        var erro = function () {
            alert("Erro de Cadastro");
        };

        APIService.salvarMatriculas($scope.vetorCadastro).then(sucesso,erro);
    };

    listarCurso ();
});