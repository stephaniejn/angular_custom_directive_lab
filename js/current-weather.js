angular.module('current-weather',[])
 .directive('weather', function(){
    console.log("i'm the weather!")
    return{
        restrict: 'E',
        scope:{
            location:"@"
        },
    controller: ['$scope', '$element', '$http', function($scope,$element,$http){



        var req = {
            url: 'http://api.openweathermap.org/data/2.5/weather',
            params: {
                q: $scope.location
            }
        }

        $http(req).success(function(data){
            $scope.weather = data
            $scope.temp = Math.round(((data.main.temp - 273.15) * 1.8000) + 32)
        })
    }],
    replace: true,
    template:'<h4>{{weather.name}} has {{weather.weather[0].description}} and it is {{temp}}&deg; F</h4>'
    }
})

