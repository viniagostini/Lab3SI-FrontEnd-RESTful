angular.module('toDoList').factory('customDialogFactory', function($mdDialog){
    var parentEl = angular.element(document.body);

    function show($event, templateUrl, controller){
        return  $mdDialog.show({
            parent: parentEl,
            targetEvent: $event,
            templateUrl: templateUrl,
            controller: controller,
            clickOutsideToClose: true,
            hasBackdrop: true
        });
    }
    return {
        show: show
    }
});