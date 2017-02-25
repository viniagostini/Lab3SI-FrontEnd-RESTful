angular.module('toDoList')

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise( function($injector) {
        var $state = $injector.get("$state");
        $state.go('about');
    });

    $stateProvider

        .state('todolist', {
            url:'/todolist',
            templateUrl: 'public/components/toDoList/toDoList.html',
            controller: 'toDoListCtlr'
        })

        .state('taskcategory', {
            url:'/taskcategory',
            templateUrl: 'public/components/category/taskCategory.html',
            controller: 'taskCategoryController'
        })

        .state('tasklist', {
            url:'/tasklist',
            templateUrl: 'public/components/taskLists/taskList.html',
            controller: 'taskListController'
        })

        .state('tasks', {
            url:'/tasks/:taskListId',
            templateUrl: 'public/components/tasks/tasks.html',
            controller: 'tasksController'
        })

        .state('tasksFromCategory', {
            url:'/tasksFomCategory/:taskCategoryId',
            templateUrl: 'public/components/tasks/tasks.html',
            controller: 'tasksFromCategoryController'
        })

        .state('subtasks', {
            url:'/subtasks/:taskId',
            templateUrl: 'public/components/subtasks/subtasks.html',
            controller: 'subtasksController'
        })

        .state('about', {
            url:'/about',
            templateUrl: 'public/components/about/about.html'
        })

});