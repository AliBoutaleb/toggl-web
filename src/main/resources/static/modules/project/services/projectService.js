toggl.service("ProjectService",  function($http){

    this.listProjects = function(token) {
        return $http({
            method : 'GET',
            url : ip_api+'/projects',
            headers: {
                'Content-Type': "application/json",
                'Authorization' : token
            }
        });
    }
});