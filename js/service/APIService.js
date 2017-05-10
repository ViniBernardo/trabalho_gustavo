angular.module("singlepageapp").factory("APIService",
    function($http){

    var _listarCurso = function(){
        return $http({
            method:"GET",
            url: "http://siscadcpwiv.herokuapp.com/curso/list/"+1+"/"+8
        });
    };

    var _listarDisciplina  = function(){
            return $http({
                method:"GET",
                url: "http://siscadcpwiv.herokuapp.com/disciplina/list/"+1+"/"+8
            });
    };

    var _listarAluno  = function(){
            return $http({
                method:"GET",
                url: "http://siscadcpwiv.herokuapp.com/aluno/list/"+1+"/"+8
            });
    };



        var _listarSemestre = function () {
            return $http ({
                method:"GET",
                url:"http://siscadcpwiv.herokuapp.com/semestre/list",
            })
        }

        var _listarAlunoPorCurso = function (id) {
            return $http({
                method: "GET",
                url: " http://siscadcpwiv.herokuapp.com/aluno/curso/"+id
            });
        };
        var _listarDisciplinaPorCurso = function (id) {
            return $http({
                method: "GET",
                url: " http://siscadcpwiv.herokuapp.com/disciplina/curso/"+id
            });
        };

    var _salvarCurso = function(dados){
        return $http({
            method:"POST",
            url: " http://siscadcpwiv.herokuapp.com/curso/ ",
            data:dados
            });
    };

        var _listarMatriculados = function (semestre,disciplina) {
            return $http ({
                method:"GET",
                url:"http://siscadcpwiv.herokuapp.com/matricula/semestre/disciplina/"+semestre+"/"+disciplina,
            })
        };

    var _salvarDisciplina = function(dados){
            return $http({
                method:"POST",
                url: " http://siscadcpwiv.herokuapp.com/disciplina/ ",
                data:dados
            });
    };

    var _salvarAluno = function(dados){
            return $http({
                method:"POST",
                url: " http://siscadcpwiv.herokuapp.com/aluno/ ",
                data:dados
            });
    };
    //--------------------------------------------------------------------------------
    var _listarAlunoPorPagina  = function(id){
            return $http({
                method:"GET",
                url: "http://siscadcpwiv.herokuapp.com/aluno/list/"+id+"/8"
            });
    };
        var _listarCursoPorPagina  = function(id){
            return $http({
                method:"GET",
                url: "http://siscadcpwiv.herokuapp.com/curso/list/"+id+"/8"
            });
        };
        var _listarDisciplinaPorPagina = function(id){
            return $http({
                method:"GET",
                url: "http://siscadcpwiv.herokuapp.com/disciplina/list/"+id+"/8"
            });
        };

    var _buscarAlunoPorCurso  = function(id){
            return $http({
                method:"GET",
                url: "http://siscadcpwiv.herokuapp.com/aluno/curso/"+id,
            });
    };
        var _salvarMatriculas = function (dados) {
            return $http({
                method:"POST",
                url:"http://siscadcpwiv.herokuapp.com/matricula/",
                data:dados
            });
        };














        return {

            listarCurso: _listarCurso,
            listarDisciplina: _listarDisciplina,
            listarAluno: _listarAluno,
            salvarCurso: _salvarCurso,
            salvarDisciplina: _salvarDisciplina,
            salvarAluno: _salvarAluno,
            listarAlunoPorCurso: _listarAlunoPorCurso,
            listarDisciplinaPorCurso: _listarDisciplinaPorCurso,
            listarSemestres : _listarSemestre,
            buscarAlunoPorCurso : _buscarAlunoPorCurso,
            listarAlunoPorPagina : _listarAlunoPorPagina,
            listarCursoPorPagina : _listarCursoPorPagina,
            listarDisciplinaPorPagina : _listarDisciplinaPorPagina,
            listarMatriculados : _listarMatriculados,
            salvarMatriculas : _salvarMatriculas
        }
});
