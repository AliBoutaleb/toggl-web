'use strict';

var togglApp = angular.module('togglApp', ['ngRoute','togglControllers','timer']);

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
            .when(contextPath+'timer', {
                templateUrl: 'views/menu/timer.html',
                controller: 'timerController'
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

togglControllers.controller('indexController', ['$scope',
    function($scope){
    }
]);

togglControllers.controller('loginController', ['$scope',
    function($scope){
    }
]);

togglControllers.controller('timerController', ['$scope',
    function($scope){
        $scope.tasks=[];
        $scope.timerRunning = true;

        $scope.startTimer = function (){
            $scope.$broadcast('timer-start');
            $scope.timerRunning = true;
        };

        $scope.stopTimer = function (){
            $scope.$broadcast('timer-stop');
            $scope.timerRunning = false;
        };

        $scope.$on('timer-stopped', function (event, data){
            console.log('Timer Stopped - data = ', data);
        });

        // Add timer
        $scope.addTask = function() {
            $scope.tasks.push({libelle:"", project:"", team:"", performer:""})
            timer.setSeconds(30);
        }
        // Save timers
        $scope.Tasks = function() {
            return $http({
                method : 'POST',
                url : contextPath + '/saveTasks',
                data : data
            })
                .then(function successCallback(response) {
                    document.location.href = contextPath;
                }, function errorCallback(response) {
                    console.log("Erreur lors de la mise à jour des tâches");
                });
        }
        // Delete timer
        $scope.deleteTask = function($index){
            $scope.tasks.splice($index, 1);
        }
    }
]);

togglControllers.controller('projectController', ['$scope',
    function($scope){
        $scope.projects=[];

        // Add project
        $scope.addProject = function() {
            $scope.projects.push({libelle:"", creator:"", status:"", team:""})
        }
        // Save projects
        $scope.saveProjects = function() {
            return $http({
                method : 'POST',
                url : contextPath + '/saveProject',
                data : data
            })
            .then(function successCallback(response) {
                document.location.href = contextPath;
            }, function errorCallback(response) {
                console.log("Erreur lors de la mise à jour des projets");
            });
        }
        // Delete project
        $scope.deleteProject = function($index){
            $scope.projects.splice($index, 1);
        }
    }
]);

togglControllers.controller('clientController', ['$scope',
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