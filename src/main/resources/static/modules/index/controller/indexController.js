toggl.controller('indexController',
    function($scope, $http, $rootScope, $cookies, IndexService){

    // Execute on load
        $scope.init = function () {
            $scope.isAuthentificated();
        };

        // Is user authentificated
        $scope.isAuthentificated = function () {
            var token = $cookies.get('jwt');
            if (token == undefined){
                $rootScope.isAuth = false;
            }else{
                $rootScope.isAuth = true;
                $rootScope.token = token;
            }
        };

        // Login
        $scope.submit = function() {
            IndexService.authentification($scope.data)
            .then(function successCallback(response) {
                $cookies.put('jwt', response.data);
                $rootScope.isAuth = true;
            }, function errorCallback(response) {
                console.log("Erreur lors de l'authentification");
            });
        }
    }
);