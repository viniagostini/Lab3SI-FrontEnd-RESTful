angular.module('toDoList').service('taskCategoryRequestService', function(taskCategoryHttpService){

    this.getAllTaskCategories = function (callback){
        taskCategoryHttpService.getAllTaskCategories().then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }

    }

    this.getTaskCategoryById = function (categoryId, callback){
        taskCategoryHttpService.getTaskCategoryById(categoryId).then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }
    }

    this.createTaskCategory = function (category, callback){
        taskCategoryHttpService.createTaskCategory(category).then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }
    }

    this.editTaskCategory = function (category, callback){
        taskCategoryHttpService.editTaskCategory(category).then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }
    }

    this.deleteTaskCategory = function (categoryId, callback){
        taskCategoryHttpService.deleteTaskCategory(categoryId).then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }
    }

});