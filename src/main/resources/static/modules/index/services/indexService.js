toggl.service("IndexService",  function($http){

    this.authenticate = function(data) {
        return $http({
            method : 'POST',
            url : ip_api+'/auth/login',
            headers: {
                'Content-Type': "application/json",
            },
            data : data
        });
    }

    this.getUserByToken = function(token) {
        return $http({
            method : 'GET',
            url : ip_api+'/users/',
            headers: {
                'Content-Type': "application/json",
                'Authorization' : token
            }
        });
    }
});