'use strict';

var togglApp = angular.module('togglApp', ['ngRoute','Controllers']);

togglApp.config(['$routeProvider',
    function($httpProvider, $routeProvider) {

        // Système de routage
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home/home.html',
                controller: 'homeController'
            })
            .when('/contact/:msg', {
                templateUrl: 'views/home/contact.html',
                controller: 'contactController'
            })
            .otherwise({
                redirectTo: '/home'
            })
        ;
    }
]);

var Controllers = angular.module('Controllers', []);

Controllers.controller('homeController', ['$scope',
    function($scope){
        console.log("homeC");
        $scope.message = "Bienvenue sur la page d'accueil";
    }
]);

Controllers.controller('contactController', ['$scope',
    function($scope, $routeParams){
        console.log("contactC");
        $scope.message = "Laissez-nous un message sur la page de contact !";
        $scope.msg = $routeParams.msg;
    }
]);