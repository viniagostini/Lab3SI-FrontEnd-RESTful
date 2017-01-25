'use strict';

angular.module('toDoList', ['ui.router', 'ngMaterial']).config(function($mdThemingProvider) {
    $mdThemingProvider
        .theme('default')
        .primaryPalette('blue')
        .accentPalette('orange');
});
