angular.module('toDoList')

.config(['$stateProvider', function($stateProvider) {
    //TODO: change to state provider
    $stateProvider
        
        .state('todolist', {
            url:'/todolist',
            templateUrl: 'components/toDoList/toDoList.html',
            controller: 'toDoListCtlr'
        })

        .state('taskcategory', {
            url:'/taskcategory',
            templateUrl: 'components/category/taskCategory.html',
            controller: 'taskCategoryController'
        })

        .state("otherwise", {
            url: "*path",
            templateUrl: "components/toDoList/toDoList.html"
        })
}])