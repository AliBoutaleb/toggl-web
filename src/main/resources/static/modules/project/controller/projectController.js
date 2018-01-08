toggl.controller('projectController', function($scope, $rootScope, $http, ProjectService){

        $scope.init = function() {
            $scope.listProjects();
        }

        // List projects
        $scope.listProjects = function() {
            ProjectService.listProjects($rootScope.token)
                .then(function successCallback(response) {
                    $scope.projects = [];
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
);