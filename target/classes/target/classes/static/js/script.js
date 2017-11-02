'use strict';

var togglApp = angular.module('togglApp', ['ngRoute','togglControllers']);

togglApp.config(['$routeProvider',"$locationProvider",
    function($routeProvider,$locationProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        // Système de routage
        var contextPath="/toggl/";

        $routeProvider
            .when(contextPath, {
                template: 'index.html',
                controller: 'indexController'
            })
            //---------------- Authentification
            .when(contextPath+'login', {
                templateUrl: 'views/authentification/login.html',
                controller: 'loginController'
            })
            //---------------- Menu
            .when(contextPath+'dashboard', {
                templateUrl: 'views/menu/dashboard.html',
                controller: 'dashboardController'
            })
            .when(contextPath+'project', {
                templateUrl: 'views/menu/project.html',
                controller: 'projectController'
            })
            .when(contextPath+'client', {
                templateUrl: 'views/menu/client.html',
                controller: 'clientController'
            })
            .when(contextPath+'team', {
                templateUrl: 'views/menu/team.html',
                controller: 'teamController'
            })
            .when(contextPath+'workspace', {
                templateUrl: 'views/menu/workspace.html',
                controller: 'workspaceController'
            })
            .otherwise({
                redirectTo: '/error'
            });
    }
]);

var togglControllers = angular.module('togglControllers', []);

togglControllers.controller('loginController', ['$scope',
    function($scope){
    }
]);

togglControllers.controller('dashboardController', ['$scope',
    function($scope){
    $scope.message="Hello";
    }
]);

togglControllers.controller('projectController', ['$scope',
    function($scope){
    }
]);

togglControllers.controller('clientController', ['$scope',
    function($scope){
    }
]);

togglControllers.controller('teamController', ['$scope',
    function($scope){
    }
]);

togglControllers.controller('workspaceController', ['$scope',
    function($scope){
    }
]);

// togglControllers.controller('contactController', ['$scope','$routeParams',
//     function($scope, $routeParams){
//         console.log("contactC");
//         $scope.message = "Laissez-nous un message sur la page de contact !";
//         $scope.msg = $routeParams.msg;
//     }
// ]);