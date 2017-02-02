angular.module('toDoList')

.config(['$stateProvider', function($stateProvider) {
    $stateProvider

        .state('todolist', {
            url:'/todolist',
            templateUrl: '../components/toDoList/toDoList.html',
            controller: 'toDoListCtlr'
        })

        .state('taskcategory', {
            url:'/taskcategory',
            templateUrl: '../components/category/taskCategory.html',
            controller: 'taskCategoryController'
        })

        .state('tasklist', {
            url:'/tasklist',
            templateUrl: '../components/taskLists/taskList.html',
            controller: 'taskListController'
        })

        .state('tasks', {
            url:'/tasks/:taskListId',
            templateUrl: '../components/tasks/tasks.html',
            controller: 'tasksController'
        })

        .state("otherwise", {
            url: "*path",
            templateUrl: '../components/category/taskCategory.html'
        })
}])