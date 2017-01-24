angular.module('toDoList')

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.otherwise({redirectTo: '/todolist'});

    $routeProvider.when('/todolist', {
        templateUrl: 'components/toDoList/toDoList.html',
        controller: 'toDoListCtlr'
    });

}])