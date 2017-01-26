angular.module('toDoList').controller('taskListController', function($scope, taskListRequestService, customDialogFactory){

    $scope.taskLists = [];
    $scope.init = function() {
        fillData();
    }

    function fillData (){
        function callback (response){
            console.log(response.data);
            $scope.taskLists = response.data;
        }
        getAllTaskLists(callback);
    }

    $scope.createTaskList = function(event){
        console.log('adsf')
        function DialogController($scope, $mdDialog, $mdColorPalette) {
            $scope.title = 'Create a Task List';
            $scope.colors = Object.keys($mdColorPalette);
            $scope.submit = function(taskList) {
                taskList.createdAt = new Date();
                console.log(taskList);
                createTaskList(taskList, function (response) {
                    console.log(response);
                    fillData();
                    $mdDialog.hide();
                })
            };
        }
        customDialogFactory.show(event,'components/taskList/templates/create.taskList.html', DialogController);
    }

    $scope.editTaskList = function(event, taskList){
        function DialogController($scope, $mdDialog, $mdColorPalette) {
            $scope.title = 'Edit a Task List';
            $scope.colors = Object.keys($mdColorPalette);
            $scope.taskList = taskList;
            $scope.submit = function(taskList) {
                console.log(taskList);
                editTaskList(taskList, function (response) {
                    console.log(response);
                    fillData();
                    $mdDialog.hide();
                })
            };
        }
        customDialogFactory.show(event,'components/taskList/templates/create.taskList.html', DialogController);
    }

    $scope.deleteTaskList = function (taskListId) {
        deleteTaskList(taskListId, function (){
            fillData();
        });
    }

    function getAllTaskLists (callback){
        taskListRequestService.getAllTaskLists(callback);
    }

    function getTaskListById (taskListId, callback){
        taskListRequestService.getTaskListById(taskListId, callback);
    }

    function createTaskList (taskList, callback){
        taskListRequestService.createTaskList(taskList, callback);
    }

    function editTaskList (taskList, callback){
        taskListRequestService.editTaskList(taskList, callback);
    }

    function deleteTaskList (taskListId, callback){
        taskListRequestService.deleteTaskList(taskListId, callback);
    }

});