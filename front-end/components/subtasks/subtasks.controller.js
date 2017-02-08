angular.module('toDoList').controller('subtasksController', function($scope, $stateParams, subtasksRequestService, customDialogFactory, $state){
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

    $scope.createSubtask = function (event) {
        function DialogController($scope, $mdDialog) {
            $scope.title = 'Create a Subtask';
            $scope.submit = function(subtask) {
                createSubtask(subtask, function (response) {
                    console.log(response);
                    $mdDialog.hide();
                    fillData();
                });
            };
        }
        customDialogFactory.show(event,'components/subtasks/templates/create.subtask.html', DialogController);
    }

    $scope.editSubtask = function (event, subtask) {
        function DialogController($scope, $mdDialog) {
            $scope.title = 'Create a Subtask';
            $scope.subtask = subtask;
            $scope.submit = function(sub) {
                editSubtask(sub, function (response) {
                    console.log(response);
                    $mdDialog.hide();
                    fillData();
                });
            };
        }
        customDialogFactory.show(event,'components/subtasks/templates/create.subtask.html', DialogController);
    }

    $scope.deleteSubtask = function (subtaskId) {
        deleteSubtask(subtaskId, function (response) {
            fillData();
            console.log(response);
        })
    }

    $scope.returnToTaskListView = function(){
        $state.go('tasks', { taskListId: $scope.task.taskList.id});
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

    function createSubtask(subtask, callback) {
        subtask.task = $scope.task;
        subtasksRequestService.createSubtask(subtask, callback);
    }

    function deleteSubtask(subtaskId, callback){
        subtasksRequestService.deleteSubtask(subtaskId, callback);
    }

});