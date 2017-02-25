angular.module('toDoList').controller('tasksController', function($scope, $stateParams, tasksRequestService, customDialogFactory, $state, $filter){

    $scope.taskList = {};
    $scope.fromTaskList = true;
    var taskListId;

    $scope.init = function(){
        fillData();
    }

    $scope.createTask = function(event){
        function DialogController($scope, $mdDialog, taskCategoryRequestService) {
            $scope.title = 'Create a Task';
            $scope.priorities  = ['LOW', 'MEDIUM', 'HIGH']
            $scope.categories = {};
            taskCategoryRequestService.getAllTaskCategories(function(response){
                $scope.categories = response.data;
            });
            $scope.submit = function(task) {
                task.createdAt = new Date();
                task.taskList = {};
                task.taskList.id = taskListId;
                console.log(task);
                createTask(task, function (response) {
                    console.log(response);
                    $mdDialog.hide();
                    fillData();
                });
            };
        }
        customDialogFactory.show(event,'public/components/tasks/templates/create.task.html', DialogController);
    }

    $scope.editTask = function(task, event){
        function DialogController($scope, $mdDialog, taskCategoryRequestService) {
            $scope.task = task;
            $scope.title = 'Edit a Task';
            $scope.priorities  = ['LOW', 'MEDIUM', 'HIGH']
            $scope.categories = {};
            taskCategoryRequestService.getAllTaskCategories(function(response){
                $scope.categories = response.data;
            });
            $scope.submit = function(task) {
                task.taskList = {};
                task.taskList.id = taskListId;
                console.log(task);
                editTask(task, function (response) {
                    console.log(response);
                    $mdDialog.hide();
                    fillData();
                });
            };
        }
        customDialogFactory.show(event,'public/components/tasks/templates/create.task.html', DialogController);
    }

    $scope.setTaskState = function(task){
        task.done = !task.done;
        editTask(task, function(){
            fillData();
        })
    }

    $scope.deleteTask = function(taskId){
        deleteTask(taskId, function(){
            fillData();
        });
    }

    $scope.logOrder = function (order){
        console.log('order: ', order);
    }

    $scope.query = {
        order: '-createdAt',
        limit: 50,
        page: 1
    };

    $scope.defineTaskStyle = function(isDone){
        if(isDone){
            return 'line-through';
        }
    }

    $scope.getNumberOfOpenTasks = function(tasks){
        if(tasks){
            var openTasks = tasks.filter( function(task){
                if (! task.done){
                    return task;
                }
            } );
            return openTasks.length;
        }
    }

    $scope.openSubtasks = function(event, task){
        $state.go('subtasks', { taskId: task.id});
    }

    $scope.exportPdf = function(){
        var docDefinition = { content: taskListToSting($scope.taskList) };
        pdfMake.createPdf(docDefinition).download('taskList.pdf');
    }

    function taskListToSting(taskList){
        var title = taskList.title;
        var createAt = $filter('date')(taskList.createdAt,"dd/MM/yyyy");
        var tasks = taskList.tasks;


        var result = '----------   ' + title + '   ----------' + '\n';
        result += 'Created At: ' +createAt + '\n\n';
        result += 'Tasks: ' + '\n';
        tasks.forEach(function(task){
            result += '   \n*****' + task.title + '*****\n';
            result += '   Priority: ' + task.priority + '\n';
            result += '   Description: ' + task.description + '\n';
            result += '   Category: ' + task.category.name + '\n';
            result += '   Created At: ' +$filter('date')(task.createdAt,"dd/MM/yyyy");
            result += '   Is done: ' + task.done + '\n';
            result += '   SubTasks: ' + '\n';
            var subTasks = task.subTasks;
            subTasks.forEach(function(subTask){
                result += '     \n##### ' + subTask.title + '#####\n';
                result += '     Description: ' + subTask.description + '\n';
            })
            result += '--------------------------------------------------------------------' + '\n';
        });


        return result;
    }

    function fillData(){
        taskListId = $stateParams.taskListId;
        getAllTasksByTaskListId(taskListId, function(response){
            console.log(response.data);
            $scope.taskList = response.data;
            $scope.taskList.tasks.forEach(function(task){
                if(task.priority === 'LOW'){
                    task.priorityWeight = 1;
                }else if(task.priority === 'MEDIUM'){
                    task.priorityWeight = 2;
                }else{
                    task.priorityWeight = 3;
                }
            });
        });
    }

    function getAllTasksByTaskListId(taskListId, callback){
        tasksRequestService.getAllTasksByTaskListId(taskListId, callback);
    }

    function getAllTasks (callback){
        tasksRequestService.getAllTasks(callback);
    }

    function getTaskById (taskId, callback){
        tasksRequestService.getSubtaskById(taskId, callback);
    }

    function createTask  (task, callback){
        tasksRequestService.createTask(task, callback);
    }

    function editTask (task, callback){
        task.taskList = {};
        task.taskList.id = taskListId;

        tasksRequestService.editTask(task, callback);
    }

    function deleteTask (taskId, callback){

        tasksRequestService.deleteTask(taskId, callback);
    }

});