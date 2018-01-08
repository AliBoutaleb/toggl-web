toggl.controller('indexController',
    function($scope, $http, $rootScope, $cookies, $location, $q, IndexService){

        // Execute on load
        $scope.init = function () {
            $scope.isAuthenticated();
        };

        // Is user authenticated
        $scope.isAuthenticated = function () {
            var token = $cookies.get('jwt');
            if (token == undefined){
                $rootScope.isAuth = false;
                $location.path("/toggl/");
            }else{
                $scope.getUserByToken($rootScope.token = token);
                if(!$scope.isTokenExpired){
                    $rootScope.token = token;
                    $rootScope.isAuth = true;
                }else{
                    $cookies.remove('jwt');
                    $location.path("/toggl/");
                }
            }
        };

        // Login
        $scope.submit = function() {
            IndexService.authenticate($scope.data)
                .then(function successCallback(response) {
                    $cookies.put('jwt', response.data);
                    $rootScope.isAuth = true;
                    $rootScope.token = response.data;
                    $scope.getUserByToken($rootScope.token);
                }, function errorCallback(response) {
                    console.log("Erreur lors de l'authentification");
                });
        };

        // Get user by token
        $scope.getUserByToken = function(token) {
            IndexService.getUserByToken(token)
            .then(function successCallback(response) {
                console.log(response);
                $scope.isTokenExpired = false;
                // Set user information
                $rootScope.user = [];
                $rootScope.user.id = response.data._id;
                $rootScope.user.full_name = response.data.first_name+" "+response.data.last_name;
            }, function errorCallback(response) {
                console.log("Erreur lors de la récupération du user");
            });
        };
    }
);