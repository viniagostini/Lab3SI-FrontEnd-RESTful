angular.module('toDoList').service('subtasksRequestService', function(tasksRequestService, subtaskHttpService) {

    this.getAllSubtasksByTaskId = function (taskId, callback) {
        return tasksRequestService.getTaskById(taskId, callback);
    }
    
    this.editTask = function (task, callback) {
        tasksRequestService.editTask(task,callback);
    }

    this.getAllSubtasks = function (callback){
        subtaskHttpService.getAllSubtasks.then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }

    }

    this.getSubtaskById = function (subtaskId, callback){
        subtaskHttpService.getSubtaskById(subtaskId).then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }
    }

    this.createSubtask = function (subtask, callback){
        subtaskHttpService.createSubtask(subtask).then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }
    }

    this.editSubtask = function (subtask, callback){
        subtaskHttpService.editSubtask(subtask).then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }
    }

    this.deleteSubtask = function (subtaskId, callback){
        subtaskHttpService.deleteSubtask(subtaskId).then(success,err);

        function success(response){
            callback(response);
        }
        function err(response){
            console.log(response);
        }
    }


})
