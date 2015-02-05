var todoApp = angular.module('TodoApp',['ngAnimate', 'like-button', 'current-weather']);

todoApp.run(function(){
    console.log('App Started')
})

todoApp.controller('TodoList', ['$scope', function($scope){
    $scope.items = [];
    $scope.items.push({done:false,name:"go for a run"})
    $scope.items.push({done:false,name:"code some things"})
    $scope.items.push({done:false,name:"have some fun"})
    $scope.newItem="";

    $scope.removeItem = function(myItemIndex){
        $scope.items.splice(myItemIndex,1);
    }

    $scope.addItem = function(){
        $scope.items.push({done:false,name:$scope.newItem});
        $scope.newItem=""
    }

    $scope.getData = function(){
        console.log($scope.items);
    }

    $scope.move = function(currentIndex, direction){
        var targetIndex = currentIndex + direction;
        if(targetIndex < 0  || targetIndex >= $scope.items.length) {
            alert('nope nope nope');
            return;
        }
        var tempItem = $scope.items[currentIndex];
            $scope.items[currentIndex] = $scope.items[targetIndex];
            $scope.items[targetIndex] = tempItem;
        }

}])

