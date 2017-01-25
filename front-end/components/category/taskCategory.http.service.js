angular.module('toDoList').service('taskCategoryHttpService', function($http){

    var url = 'http://localhost:8080/taskcategories/';

    this.getAllTaskCategories = function (){
        return $http.get(url);
    }

    this.getTaskCategoryById = function (categoryId){
        return $http.get(url + categoryId);
    }

    this.createTaskCategory = function (category){
        return $http.post(url, category);
    }

    this.editTaskCategory = function (category){
        return $http.put(url, category);
    }

    this.deleteTaskCategory = function (categoryId){
        return $http.delete(url + categoryId);
    }

});