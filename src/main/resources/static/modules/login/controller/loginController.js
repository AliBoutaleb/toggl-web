togglApp.controller('loginController', ['$scope', '$http', '$rootScope',
    function($scope, $http, $rootScope){
        $rootScope.isAuth = false;
        $scope.loginData = {};
        $scope.token;

        // Login
        $scope.submit = function() {
            return $http({
                method : 'POST',
                url : 'login',
                data : $scope.loginData
            })
            .then(function successCallback(response) {
                $scope.token = response.data;
                $rootScope.isAuth = true;
                //document.location.href = '/index';
            }, function errorCallback(response) {
                console.log("Erreur lors de l'authentification");
            });
        }
    }
]);