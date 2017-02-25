angular.module('toDoList').service('taskHttpService', function($http){

    var url = 'https://lab3-si.herokuapp.com/tasks';

    this.getAllTasks = function (){
        return $http.get(url);
    }

    this.getTaskById = function (taskId){
        return $http.get(url + taskId);
    }

    this.createTask = function (task){
        return $http.post(url, task);
    }

    this.editTask = function (task){
        return $http.put(url, task);
    }

    this.deleteTask = function (taskId){
        return $http.delete(url + taskId);
    }

});