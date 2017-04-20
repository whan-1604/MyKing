angular.module('gamesModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('videos.games',{
            url: '/games',
            templateUrl: 'components/videos/games/games.html',
            controller:'gamesCtrl',
            css:['components/videos/videos.css','components/videos/games/games.css']
        })
})
.controller('gamesCtrl',['$scope','$http',function($scope,$http){
	
	$http.get('components/videos/json/games.json').success(function(res){
		$scope.gamesData=res.result;
		console.log(res.result);
	})
}])