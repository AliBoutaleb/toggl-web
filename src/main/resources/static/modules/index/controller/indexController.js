toggl.controller('indexController',
    function($scope, $http, $rootScope, IndexService){
        $rootScope.isAuth = false;
        $rootScope.token;
        $scope.data = {};

        // Login
        $scope.submit = function() {
            IndexService.authentification($scope.data)
            .then(function successCallback(response) {
                $rootScope.token = response.data;
                $rootScope.isAuth = true;
            }, function errorCallback(response) {
                console.log("Erreur lors de l'authentification");
            });
        }
    }
);