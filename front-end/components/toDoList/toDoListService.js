angular.module('toDoList').service('toDoListService', function($http){

    var url = 'http://localhost:8080/tasklists/';

    this.getAllTaskLists = function(){
        return $http.get(url);
    }

})
