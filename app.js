angular.module('myKing',["ui.router",'angularCSS','homeModule','videosModule','guidesModule','matchesModule'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('forNew',{
            url: '/forNew',
            templateUrl: 'components/forNew/forNew.html',
            controller:'forNewCtrl',
            css:'components/forNew/forNew.css'
        })
        .state('heroIntr',{
            url: '/heroIntr',
            templateUrl: 'components/heroIntr/heroIntr.html',
            controller:'heroIntrCtrl',
            css:'components/heroIntr/heroIntr.css'
        })
})
.controller('forNewCtrl',['$scope','$http',function($scope,$http){
	/*$http.get('components/guides/json/colleagues.json').success(function(res){
	$scope.data=res.msg.result;
	})*/
	$scope.change=false;
	$scope.changeClass=function(){
		$scope.change=!$scope.change;
	}
}])
.controller('heroIntrCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/home/json/heroList.json').success(function(res){
		$scope.data=res.data;
		console.log($scope.data);
	})
	
	$scope.change=function(heroST){
		$scope.style=heroST;
	}
	
//	$scope.isShow=false;
//	$scope.show=function(){
//		$scope.isShow=!$scope.isShow;
//	}
	
}])


