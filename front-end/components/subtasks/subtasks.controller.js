angular.module('toDoList').controller('subtasksController', function($scope, $stateParams, subtasksRequestService){
    $scope.task = {};
    var taskId = '';

    $scope.init = function(){
        fillData();
    }

    $scope.selected = [];

    $scope.logOrder = function (order){
        console.log('order: ', order);
    }

    $scope.query = {
        order: '-title',
        limit: 50,
        page: 1
    };

    $scope.defineSubtaskStyle = function(isDone){
        if(isDone){
            return 'line-through';
        }
    }

    $scope.getNumberOfOpenSubtasks = function(subtasks){
        if(subtasks){
            var openSubtasks = subtasks.filter( function(subtask){
                if (! subtask.done){
                    return subtask;
                }
            } );
            return openSubtasks.length;
        }
    }

    $scope.setTaskState = function(task){
        console.log(task.done)
        task.done = !task.done;
        if(task.done){
            task.subTasks.forEach(function (subtask) {
                console.log(subtask)
                subtask.done  = true;
                editSubtask(subtask, function(){
                    fillData();
                })
            })
        }
        editTask(task, function(){
         fillData();
         })
    }

    $scope.setSubtaskState = function(subtask){
        subtask.done = !subtask.done;
        editSubtask(subtask, function(){
            fillData();
        })
    }


    function fillData(){
        taskId = $stateParams.taskId;
        subtasksRequestService.getAllSubtasksByTaskId(taskId, function(response){
            $scope.task = response.data;
        });
    }

    function editSubtask(subtask, callback) {
        subtasksRequestService.editSubtask(subtask, callback);
    }

    function editTask(task, callback) {
        subtasksRequestService.editTask(task, callback);
    }


});