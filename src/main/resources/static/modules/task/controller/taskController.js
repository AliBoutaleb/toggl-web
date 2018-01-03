toggl.controller('taskController', function($scope, $rootScope, TaskService) {

    $scope.init = function () {
        $scope.tasks = [];
        $scope.listTasks();
    };

    // List tasks
    $scope.listTasks = function () {
        TaskService.listTasks($rootScope.token)
        .then(function successCallback(response) {
            console.log(response.data);
            $scope.tasks = response.data;
        }, function errorCallback(response) {
            console.log("Erreur lors de la récupération des tâches");
        });
    };

    // Add a task
    $scope.addTask = function (){
        $scope.tasks.push({'title':'', 'owner':'', 'dueDate':''});
    }

});