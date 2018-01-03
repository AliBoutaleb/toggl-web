toggl.controller('taskController', ['$scope',
    function($scope){
        $scope.tasks=[];
        $scope.timerRunning = true;

        $scope.startTimer = function (){
            $scope.$broadcast('timer-start');
            $scope.timerRunning = true;
        };

        $scope.stopTimer = function (){
            $scope.$broadcast('timer-stop');
            $scope.timerRunning = false;
        };

        $scope.$on('timer-stopped', function (event, data){
            console.log('Timer Stopped - data = ', data);
        });

        // Add timer
        $scope.addTask = function() {
            $scope.tasks.push({libelle:"", project:"", team:"", performer:""})
            timer.setSeconds(30);
        }
        // Save timers
        $scope.Tasks = function() {
            return $http({
                method : 'POST',
                url : contextPath + '/saveTasks',
                data : data
            })
                .then(function successCallback(response) {
                    document.location.href = contextPath;
                }, function errorCallback(response) {
                    console.log("Erreur lors de la mise à jour des tâches");
                });
        }
        // Delete timer
        $scope.deleteTask = function($index){
            $scope.tasks.splice($index, 1);
        }
    }
]);