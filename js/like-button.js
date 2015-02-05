angular.module('like-button',[])
 .directive('likeButton', function(){
    return{
        restrict: 'E',
        scope: {
            startingValue:'=?'
        },

    controller: ['$scope', function($scope){
        $scope.value = $scope.startingValue? $scope.startingValue : 0
        $scope.increaseCount=function(){
        $scope.value += 1
        }
    }],
        replace: true,
        template:'<button class="btn btn-primary" ng-click="increaseCount()">Likes {{value}}</button>'
    }
 })
