

angular.module("singlepageapp")
    .config(["$routeProvider", function ($routeProvider) {

        $routeProvider.when("/", {
            templateUrl: "view/home.html",
            controller: "homeController"
        });
        $routeProvider.when("/cadastroDeMatricula", {
            templateUrl: "view/cadastro-de-Matricula.html",
            controller: "homeController"
        });



        $routeProvider.when("/cadastroDeCurso", {
            templateUrl: "view/cadastro-de-curso.html",
            controller: "Controller"
        });
        $routeProvider.when("/adicionarCurso", {
            templateUrl: "view/adicionar-curso.html",
            controller:"cursoController"
        });
        $routeProvider.when("/cadastroDeDisciplina", {
            templateUrl: "view/cadastro-de-disciplina.html",
            controller: "disciplinaContrller"
        });
        $routeProvider.when("/adicionarDisciplina", {
            templateUrl: "view/adiciona-disciplina.html",
            controller:"disciplinaContrller"
        });
        $routeProvider.when("/cadastroDeAluno", {
            templateUrl: "view/cadastro-de-aluno.html",
            controller: "alunoController"
        });
        $routeProvider.when("/adicionarAluno", {
            templateUrl: "view/adiciona-aluno.html",
            controller:"alunoController"
        });


    }]);