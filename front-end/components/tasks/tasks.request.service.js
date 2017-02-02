angular.module('toDoList').service('tasksRequestService', function(taskHttpService, taskListRequestService) {

    this.getAllTasksByTaskListId = function (taskListId, callback) {
        return taskListRequestService.getTaskListById(taskListId, callback);
    }

    this.getAllTasks = function (callback){
        taskListRequestService.getAllTasks.then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }

    }

    this.getTaskById = function (taskId, callback){
        taskHttpService.getTaskById(taskId).then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }
    }

    this.createTask = function (task, callback){
        taskHttpService.createTask(task).then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }
    }

    this.editTask = function (task, callback){
        taskHttpService.editTask(task).then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }
    }

    this.deleteTask = function (taskId, callback){
        taskHttpService.deleteTask(taskId).then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }
    }


})
