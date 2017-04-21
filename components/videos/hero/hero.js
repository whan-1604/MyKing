angular.module('heroModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('videos.hero',{
            url: '/hero',
            templateUrl: 'components/videos/hero/hero.html',
            controller:'heroCtrl',
            css:['components/videos/videos.css','components/videos/hero/hero.css']
        })
})
.controller('heroCtrl',['$scope','$http',function($scope,$http){
	
	$http.get('components/videos/json/hero.json').success(function(res){
		$scope.heroData=res.msg.result;
		console.log(res.msg.result);
	})
}])