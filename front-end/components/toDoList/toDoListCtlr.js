angular.module('toDoList').controller('toDoListCtlr', ['$scope', 'toDoListService'  , function($scope, toDoListService) {

  $scope.title = "To Do List";
  var taskIDAux = 0;
  $scope.tasks = [];
  $scope.listTest = [];

  console.log(toDoListService);

  toDoListService.getAllTaskLists().then(function(response){
    $scope.listTest = response;
    console.log(response);
  });

  function Task (id, title){
    this.id = taskIDAux++;
    this.title = title;
    this.createdAt = new Date();
    this.isDone = false;
  }

  function fillTasks(){
    var task1 = new Task($scope.tasks.length, "Comemorar titulo do Palmeiras");
    $scope.tasks.push(task1);
    var task2 = new Task($scope.tasks.length, "Segunda task");
    $scope.tasks.push(task2);
  }

  $scope.createTask = function(title){
    $scope.tasks.push( new Task($scope.tasks.length, title) );
    $scope.newTaskTitle = '';
  }

  $scope.defineTaskStyle = function(isDone){
    if(isDone){
      return 'line-through';
    }
  }

  $scope.defineProgressBarStyle = function(tasks){
    var doneTasksPercetage = _getDoneTasksPercetage(tasks);
    var DEFAULT_CLASS = 'progress-bar progress-bar-striped active';

    if(doneTasksPercetage >= 75){
      return DEFAULT_CLASS + ' progress-bar-success';
    }else if(doneTasksPercetage >= 50){
      return DEFAULT_CLASS + ' progress-bar-info';
    }else if(doneTasksPercetage >= 25){
      return DEFAULT_CLASS + ' progress-bar-warning';
    }else{
      return DEFAULT_CLASS + ' progress-bar-danger';
    }
  }

  $scope.getDoneTasksPercetage = function(tasks){
    return _getDoneTasksPercetage(tasks);
  }


  function _getDoneTasksPercetage(tasks){
    var nTasksDone = 0;
    tasks.forEach(function(task){
      if(task.isDone){
        nTasksDone++;
      }
    });
    return (nTasksDone / tasks.length) * 100
  }

  $scope.deleteTask = function(tasks, id){
    $scope.tasks = tasks.filter(function (task){
      if(task.id != id) return task;
    });
    //$scope.tasks.splice( id, 1 );
  }


  fillTasks();



}]);

'use strict';