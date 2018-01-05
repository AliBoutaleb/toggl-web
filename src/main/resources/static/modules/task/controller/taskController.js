toggl.controller('taskController', function($scope, $rootScope, TaskService) {

    // Execute on load
    $scope.init = function () {
        $scope.tasks = [];
        $scope.selectedTask = [];
        $scope.selectedTask.title = "none";
        $scope.startTime = Date.now() - $scope.timerToMilliseconds(0,0,0);
        $scope.listTasks();
    };

    // List task
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

    // Save a task
    $scope.updateTask = function () {
        $scope.selectedTask.timer = $scope.millisecondsToTimer(Date.now()-$scope.startTime);
        TaskService.updateTask($rootScope.token, $scope.selectedTask)
        .then(function successCallback(response) {
            console.log(response.data);
        }, function errorCallback(response) {
            console.log("Erreur lors de la mise à jour de la tâche");
        });
    };

    // Select a task
    $scope.selectTask = function (index) {
        $scope.selectedTask = $scope.tasks[index];
        $scope.selectedTaskTime = $scope.selectedTask.timer.split(':');
        $scope.startTime = Date.now() - $scope.timerToMilliseconds($scope.selectedTaskTime[0],$scope.selectedTaskTime[1],$scope.selectedTaskTime[2]);
        $scope.startTimer();
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

    // Stop timer
    $scope.stopTimer = function (){
        $scope.$broadcast('timer-stop');
        $scope.timerRunning = false;
    };

    // Convert timer to ms
    $scope.timerToMilliseconds = function (hours, minutes, seconds){
        return (hours*1000*60*60)+(minutes*1000*60)+(seconds*1000);
    }

    // Convert ms to timer (hh:mm:ss)
    $scope.millisecondsToTimer = function (duration) {
        var milliseconds = parseInt((duration%1000)/100)
            , seconds = parseInt((duration/1000)%60)
            , minutes = parseInt((duration/(1000*60))%60)
            , hours = parseInt((duration/(1000*60*60))%24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
    }
});