'use strict';

var togglApp = angular.module('togglApp', ['ngRoute','timer']);

togglApp.config(['$httpProvider','$routeProvider','$locationProvider',
    function($httpProvider, $routeProvider,$locationProvider) {

        $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.cache = false;

        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider
            .when(contextPath, {
                templateUrl: 'modules/login/views/login.html',
                controller: 'loginController'
            })
            .when(contextPath+'task', {
                templateUrl: 'modules/task/views/task.html',
                controller: 'taskController'
            })
            .when(contextPath+'project', {
                templateUrl: 'modules/project/views/project.html',
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

togglApp.controller('indexController', ['$scope',
    function($scope){
        $scope.contextPath="/toggl/";
    }
]);







togglApp.controller('clientController', ['$scope',
    function($scope){
        $scope.clients=[];

        // Add Client
        $scope.addClient = function() {
            $scope.clients.push({last_name:"", first_name:"", email:""})
        }
        // Save clients
        $scope.saveclients = function() {
            return $http({
                method : 'POST',
                url : contextPath + '/saveClient',
                data : data
            })
                .then(function successCallback(response) {
                    document.location.href = contextPath;
                }, function errorCallback(response) {
                    console.log("Erreur lors de la mise à jour des clients");
                });
        }
        // Delete client
        $scope.deleteClient = function($index){
            $scope.clients.splice($index, 1);
        }
    }
]);



togglApp.controller('workspaceController', ['$scope',
    function($scope){
    }
]);

// togglControllers.modules('contactController', ['$scope','$routeParams',
//     function($scope, $routeParams){
//         console.log("contactC");
//         $scope.message = "Laissez-nous un message sur la page de contact !";
//         $scope.msg = $routeParams.msg;
//     }
// ]);