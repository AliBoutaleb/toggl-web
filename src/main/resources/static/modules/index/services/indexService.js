toggl.service("IndexService",  function($http){

    this.authentification = function(data) {
        return $http({
            method : 'POST',
            url : ip_api+'/auth/login',
            data : data
        });
    }
});