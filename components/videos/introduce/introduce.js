angular.module('introduceModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('videos.introduce',{
            url: '/introduce',
            templateUrl: 'components/videos/introduce/introduce.html',
            controller:'introduceCtrl',
            css:['components/videos/videos.css','components/videos/introduce/introduce.css']
        })
})
.controller('introduceCtrl',['$scope','$http',function($scope,$http){
	
	$http.get('components/videos/json/introduce.json').success(function(res){
		$scope.introduceData=res.msg.result;
		console.log(res.msg.result);
	})
}])