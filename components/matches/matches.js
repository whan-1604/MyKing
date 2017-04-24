angular.module('matchesModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('matches',{
            url: '/matches',
            templateUrl: 'components/matches/matches.html',
            controller:'matchesCtrl',
            css:'components/matches/matches.css'
        })
})
.controller('matchesCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/matches/json/1.json').success(function(res){
		$scope.events=res.msg['reclist_236'];
	})
	
	$http.get('components/matches/json/2.json').success(function(res){
		$scope.events01=res.msg['reclist_224'];
	})
	
	$http.get('components/matches/json/2.json').success(function(res){
		$scope.events02=res.msg['reclist_230'];
	})
	
	$http.get('components/matches/json/2.json').success(function(res){
		$scope.events03=res.msg['reclist_231'];
	})
	
	$http.get('components/matches/json/2.json').success(function(res){
		$scope.events04=res.msg['reclist_232'];
	})
	
	$http.get('components/matches/json/2.json').success(function(res){
		$scope.events05=res.msg['reclist_259'];
	})
	
	$http.get('components/matches/json/2.json').success(function(res){
		$scope.events06=res.msg['reclist_260'];
	})
	
	$http.get('components/matches/json/2.json').success(function(res){
		$scope.events07=res.msg['reclist_264'];
	})
	
	$http.get('components/matches/json/2.json').success(function(res){
		$scope.events08=res.msg['reclist_265'];
//		console.log($scope.events08);
	})
	
	$http.get('components/matches/json/2.json').success(function(res){
		$scope.events09=res.msg['reclist_267'];
//		console.log($scope.events09);
	})
	
	$scope.isActive=false;
	$scope.changeShow=function(){
		$scope.isActive=!$scope.isActive;
	}
	
//	$scope.isShow=false;
//	$scope.show=function(){
//		$scope.isShow=!$scope.isShow;
//	}
}])