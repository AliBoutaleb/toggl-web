toggl.controller('projectController', ['$scope', '$http',
    function($scope, $http){
        $scope.initProject = function() {
            $scope.projects = [];
            $scope.users = [];
            $scope.listUsers();
            $scope.listProjects();

        }

        // List users
        $scope.listUsers = function() {
            return $http({
                method : 'GET',
                url : 'http://localhost:8081/users',
            })
                .then(function successCallback(response) {
                    $scope.users = response.data;
                    console.log($scope.users);
                }, function errorCallback(response) {
                    console.log("Erreur lors de la récupération des utilisateurs");
                });
        }

        // List projects
        $scope.listProjects = function() {
            return $http({
                method : 'GET',
                url : 'http://localhost:8081/projects',
            })
                .then(function successCallback(response) {
                    $scope.projects = response.data;
                    console.log($scope.projects);
                }, function errorCallback(response) {
                    console.log("Erreur lors de la récupération des projets");
                });
        }
        // Add project
        $scope.addProject = function() {
            $scope.projects.push({libelle:"", creator:"", status:"", team:""})
        }
        // Save projects
        $scope.saveProjects = function() {
            return $http({
                method : 'POST',
                url : contextPath + '/saveProject',
                data : $scope.projects
            })
                .then(function successCallback(response) {
                    document.location.href = contextPath + 'index';
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