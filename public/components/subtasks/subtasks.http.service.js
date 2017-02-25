angular.module('toDoList').service('subtaskHttpService', function($http){

    var url = 'https://lab3-si.herokuapp.com/subtasks/';

    this.getAllSubtasks = function (){
        return $http.get(url);
    }

    this.getSubtaskById = function (subtaskId){
        return $http.get(url + subtaskId);
    }

    this.createSubtask = function (subtask){
        return $http.post(url, subtask);
    }

    this.editSubtask = function (subtask){
        return $http.put(url, subtask);
    }

    this.deleteSubtask = function (subtaskId){
        return $http.delete(url + subtaskId);
    }

});