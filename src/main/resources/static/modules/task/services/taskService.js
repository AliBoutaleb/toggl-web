toggl.service("TaskService",  function($http){

    // List tasks
    this.listTasks = function(token) {
        return $http({
            method : 'GET',
            url : ip_api+'/tasks/',
            headers: {
                'Content-Type': "application/json",
                'Authorization' : token
            }
        });
    }

    // Update task
    this.updateTask = function(token, task) {
        console.log(task);
        return $http({
            method : 'PUT',
            url : ip_api+'/tasks/'+task._id,
            headers: {
                'Content-Type': "application/json",
                'Authorization' : token
            },
            data : task
        });
    }
});