'use strict';
angular.module('toDoList').config(function($mdThemingProvider) {
    $mdThemingProvider
        .theme('default')
        .primaryPalette('teal')
        .accentPalette('brown');
});
