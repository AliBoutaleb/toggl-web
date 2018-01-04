toggl.controller('taskController', function($scope, $rootScope, TaskService) {

    $scope.init = function () {
        $scope.tasks = [];
        $scope.selectedTask = [];
        $scope.selectedTask.title = "none";
        $scope.setTimeOnTimer(0,0,0);
        $scope.listTasks();
    };

    // List tasks
    $scope.listTasks = function () {
        TaskService.listTasks($rootScope.token)
        .then(function successCallback(response) {
            $scope.tasks = response.data;
        }, function errorCallback(response) {
            console.log("Erreur lors de la récupération des tâches");
        });
    };

    // Add a task
    $scope.addTask = function () {
        $scope.tasks.push({'title': '', 'owner': '', 'dueDate': ''});
    };

    // Select a task
    $scope.selectTask = function (index) {
        $scope.selectedTask = $scope.tasks[index];
        $scope.selectedTaskTime = $scope.selectedTask.timer.split(':');
        $scope.setTimeOnTimer($scope.selectedTaskTime[0],$scope.selectedTaskTime[1],$scope.selectedTaskTime[2]);
        $scope.stopTimer();
    };

    // Set time on timer
    $scope.setTimeOnTimer = function (hours, minutes, seconds){
        $scope.seconds = seconds;
        $scope.minutes = minutes;
        $scope.hours = hours;
        $scope.startTime = Date.now()-$scope.seconds*1000-$scope.minutes*60*1000-$scope.hours*60*60*1000;
    };

    // Start timer
    $scope.startTimer = function (){
        $scope.$broadcast('timer-start');
        $scope.timerRunning = true;
    };

    // Resume timer
    $scope.resumeTimer = function (){
        $scope.$broadcast('timer-resume');
        $scope.timerRunning = true;
    };

    // Stop Timer
    $scope.stopTimer = function (){
        $scope.$broadcast('timer-stop');
        $scope.timerRunning = false;
    };
});