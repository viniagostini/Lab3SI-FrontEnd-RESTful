angular.module('toDoList').controller('tasksController', function($scope, $stateParams, tasksRequestService, customDialogFactory){

    $scope.taskList = {};
    var taskListId;

    $scope.init = function(){
        fillData();
    }

    function fillData(){
        taskListId = $stateParams.taskListId;
        getAllTasksByTaskListId(taskListId, function(response){
            console.log(response.data);
            $scope.taskList = response.data;
        });
    }

    $scope.createTask = function(event){
        function DialogController($scope, $mdDialog, taskCategoryRequestService) {
            $scope.title = 'Create a Task';
            $scope.priorities  = ['LOW', 'MEDIUM', 'HIGH']
            $scope.categories = {};
            taskCategoryRequestService.getAllTaskCategories(function(response){
                $scope.categories = response.data;
            });
            $scope.submit = function(task) {
                task.createdAt = new Date();
                task.taskList = {};
                task.taskList.id = taskListId;
                console.log(task);
                createTask(task, function (response) {
                     console.log(response);
                    $mdDialog.hide();
                     fillData();
                 });
            };
        }
        customDialogFactory.show(event,'components/tasks/templates/create.task.html', DialogController);
    }

    function getAllTasksByTaskListId(taskListId, callback){
        tasksRequestService.getAllTasksByTaskListId(taskListId, callback);
    }

    function getAllTasks (callback){
        tasksRequestService.getAllTasks(callback);
    }

    function getTaskById (taskId, callback){
        tasksRequestService.getTaskById(taskId, callback);
    }

    function createTask  (task, callback){
        tasksRequestService.createTask(task, callback);
    }

    function editTask (task, callback){
        tasksRequestService.editTask(task, callback);
    }

    function deleteTask (taskId, callback){
        tasksRequestService.deleteTask(taskId, callback);
    }

});