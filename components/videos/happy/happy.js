angular.module('happyModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('videos.happy',{
            url: '/happy',
            templateUrl: 'components/videos/happy/happy.html',
            controller:'happyCtrl',
            css:['components/videos/videos.css','components/videos/happy/happy.css']
        })
})
.controller('happyCtrl',['$scope','$http',function($scope,$http){
	
	$http.get('components/videos/json/happy.json').success(function(res){
		$scope.gamesData=res.msg.result;
		console.log(res.msg.result);
	})
}])