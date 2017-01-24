angular.module('kaizen').service('impedimentsHttpService' , function ($http) {

    var url = '/impediment';
    
    this.getImpediment = function(){
        return $http.get(url);
    }

    this.getImpedimentById = function(impedimentId){
        return $http.get(url + '/' + impedimentId)
    }

    this.createImpediment = function(projectId, impediment){
        return $http.post(url,
        {
            projectId: projectId,
            impediment:impediment
        }
        );
    }

    this.editImpediment = function(impedimentId, impedimentBody){
        return $http.patch(url + '/' + impedimentId, impedimentBody);
    }

    this.deleteImpediment = function(impedimentId){
        return $http.delete(url + '/' + impedimentId);
    }

});