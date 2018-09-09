angular.module('alurapic').controller('FotosController', function ($scope, $http) {
    /** carregamento manual das fotos
     $scope.fotos = [
     {
            titulo: 'Leão',
            url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
        },

     {
            titulo: 'Leão2',
            url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
        },

     {
            titulo: 'Leão3',
            url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
        }
     ];

     // carregamento dinamico das fotos
     $scope.fotos = [];

     var promisse = $http.get('v1/fotos');

     promisse.then(function (retorno) {
        $scope.fotos = retorno.data;

    }).catch(function (error) {
        console.log(error);

    })
     */



    $http.get('v1/fotos').success(function (fotos) {
        $scope.fotos = fotos;

    }).error(function (erro) {
        console.log(erro);

    })
});