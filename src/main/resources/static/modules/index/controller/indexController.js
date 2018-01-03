toggl.controller('indexController',
    function($scope, $http, $rootScope, IndexService){
        $rootScope.isAuth = false;
        $scope.data = {};
        $scope.token;

        // Login
        $scope.submit = function() {
            console.log($scope.data);
            IndexService.authentification($scope.data)
            .then(function successCallback(response) {
                $scope.token = response.data;
                $rootScope.isAuth = true;
            }, function errorCallback(response) {
                console.log("Erreur lors de l'authentification");
            });
        }
    }
);