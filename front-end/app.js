'use strict';

angular.module('toDoList', ['ui.router', 'ngMaterial','md.data.table']).config(function($mdThemingProvider) {
    $mdThemingProvider
        .theme('default')
        .primaryPalette('blue')
        .accentPalette('orange');
});
