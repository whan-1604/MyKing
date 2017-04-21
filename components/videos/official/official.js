angular.module('officialModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('videos.official',{
            url: '/official',
            templateUrl: 'components/videos/official/official.html',
            controller:'officialCtrl',
            css:['components/videos/videos.css','components/videos/official/official.css']
        })
})
.controller('officialCtrl',['$scope','$http',function($scope,$http){
	
	$http.get('components/videos/json/official.json').success(function(res){
		$scope.officialData=res.msg.result;
		console.log(res.msg.result);
	})
}])