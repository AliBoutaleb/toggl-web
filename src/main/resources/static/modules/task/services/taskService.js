toggl.service("TaskService",  function($http){

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
});