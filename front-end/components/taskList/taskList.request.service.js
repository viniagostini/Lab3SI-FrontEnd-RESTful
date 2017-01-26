angular.module('toDoList').service('taskListRequestService', function(taskListHttpService){

    this.getAllTaskLists = function (callback){
        taskListHttpService.getAllTaskLists().then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }

    }

    this.getTaskListById = function (taskListId, callback){
        taskListHttpService.getTaskListById(taskListId).then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }
    }

    this.createTaskList = function (taskList, callback){
        taskListHttpService.createTaskList(taskList).then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }
    }

    this.editTaskList = function (taskList, callback){
        taskListHttpService.editTaskList(taskList).then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }
    }

    this.deleteTaskList = function (taskListId, callback){
        taskListHttpService.deleteTaskList(taskListId).then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }
    }

});