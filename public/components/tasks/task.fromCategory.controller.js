angular.module('toDoList').controller('tasksFromCategoryController', function($scope, $stateParams, tasksRequestService, customDialogFactory){
    $scope.taskList = {};
    var taskCategoryId;

    $scope.init = function(){
        fillData();
    }

    $scope.setTaskState = function(task){
        task.done = !task.done;
        editTask(task, function(){
            fillData();
        })
    }

    $scope.getNumberOfOpenTasks = function(tasks){
        if(tasks){
            var openTasks = tasks.filter( function(task){
                if (! task.done){
                    return task;
                }
            } );
            return openTasks.length;
        }
    }

    $scope.editTask = function(task, event){
        function DialogController($scope, $mdDialog, taskCategoryRequestService) {
            $scope.task = task;
            $scope.title = 'Edit a Task';
            $scope.priorities  = ['LOW', 'MEDIUM', 'HIGH']
            $scope.categories = {};
            taskCategoryRequestService.getAllTaskCategories(function(response){
                $scope.categories = response.data;
            });
            $scope.submit = function(task) {
                console.log(task)
                editTask(task, function (response) {
                    console.log(response);
                    $mdDialog.hide();
                    fillData();
                });
            };
        }
        customDialogFactory.show(event,'public/components/tasks/templates/create.task.html', DialogController);
    }

    $scope.deleteTask = function(taskId){
        deleteTask(taskId, function(){
            fillData();
        });
    }

    function fillData(){
        taskCategoryId = $stateParams.taskCategoryId;
        getAllTasksByCategoryId(taskCategoryId, function(response){
            console.log(response.data);
            $scope.taskList = response.data;
            $scope.taskList.title = response.data.name;
        });
    }

    function getAllTasksByCategoryId(taskCategoryId, callback){
        tasksRequestService.getAllTasksByCategoryId(taskCategoryId, callback);
    }

    function editTask (task, callback){
        tasksRequestService.editTask(task, callback);
    }

    function deleteTask (taskId, callback){

        tasksRequestService.deleteTask(taskId, callback);
    }

});
