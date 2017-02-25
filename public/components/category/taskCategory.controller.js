angular.module('toDoList').controller('taskCategoryController', function($scope, taskCategoryRequestService, customDialogFactory) {

    $scope.taskCategories = [];

    $scope.init = function(){
        fillData();
    }

    function fillData (){
        function callback (response){
            console.log(response.data)
            $scope.taskCategories = response.data;
        }
        getAllTaskCategories(callback);
    }

    $scope.deleteTaskCategory = function(categoryId){
        deleteTaskCategory(categoryId, function () {
            fillData();
        });
    }

    $scope.creaTaskCategory = function(event){
        function DialogController($scope, $mdDialog, $mdColorPalette) {
            $scope.title = 'Create a Task Category';
            $scope.colors = Object.keys($mdColorPalette);
            $scope.submit = function(category) {
                console.log(category);
                createTaskCategory(category, function (response) {
                    console.log(response);
                    fillData();
                    $mdDialog.hide();
                })
            };
        }
        customDialogFactory.show(event,'public/components/category/templates/create.taskCategory.html', DialogController);
    }

    $scope.editTaskCategory = function (event, category){
        function DialogController($scope, $mdDialog, $mdColorPalette) {
            $scope.category = category;
            $scope.title = 'Edit a Task Category';
            $scope.colors = Object.keys($mdColorPalette);
            $scope.submit = function(category) {
                console.log(category);
                editTaskCategory(category, function (response) {
                    console.log(response);
                    fillData();
                    $mdDialog.hide();
                })
            };
        }
        customDialogFactory.show(event,'public/components/category/templates/create.taskCategory.html', DialogController);
    }

    function Category(id, name, color){
        this.id = id;
        this.name = name;
        this.color = color;
    }

    function getAllTaskCategories (callback){
        taskCategoryRequestService.getAllTaskCategories(callback);
    }

     function getTaskCategoryById (categoryId, callback){
        taskCategoryRequestService.getTaskCategoryById(categoryId, callback);
    }

    function createTaskCategory  (category, callback){
        taskCategoryRequestService.createTaskCategory(category, callback);
    }

    function editTaskCategory (category, callback){
        taskCategoryRequestService.editTaskCategory(category, callback);
    }
    
    function deleteTaskCategory (categoryId, callback){
        taskCategoryRequestService.deleteTaskCategory(categoryId, callback);
    }
});
