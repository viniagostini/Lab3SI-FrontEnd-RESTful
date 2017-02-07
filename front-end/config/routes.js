angular.module('toDoList')

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise( function($injector) {
        var $state = $injector.get("$state");
        $state.go('about');
    });

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

        .state('tasksFromCategory', {
            url:'/tasksFomCategory/:taskCategoryId',
            templateUrl: '../components/tasks/tasks.html',
            controller: 'tasksFromCategoryController'
        })

        .state('subtasks', {
            url:'/subtasks/:taskId',
            templateUrl: '../components/subtasks/subtasks.html',
            controller: 'subtasksController'
        })

        .state('about', {
            url:'/about',
            templateUrl: '../components/about/about.html'
        })

});