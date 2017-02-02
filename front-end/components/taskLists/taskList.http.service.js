angular.module('toDoList').service('taskListHttpService', function($http){

    var url = 'http://localhost:8080/tasklists/';

    this.getAllTaskLists = function (){
        return $http.get(url);
    }

    this.getTaskListById = function (taskLisId){
        return $http.get(url + taskLisId);
    }

    this.createTaskList = function (taskList){
        return $http.post(url, taskList);
    }

    this.editTaskList = function (taskList){
        return $http.put(url, taskList);
    }

    this.deleteTaskList = function (taskListId){
        return $http.delete(url + taskListId);
    }

});