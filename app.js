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
        .state('forNew.guidesForNew',{
            url: '/guidesForNew',
            templateUrl: 'components/forNew/guidesForNew/guidesForNew.html',
            controller:'guidesForNewCtrl',
            css:['components/forNew/forNew.css','components/forNew/guidesForNew/guidesForNew.css']
        })
        .state('forNew.joinTheKing',{
            url: '/joinTheKing',
            templateUrl: 'components/forNew/joinTheKing/joinTheKing.html',
            controller:'joinTheKingCtrl',
            css:['components/forNew/forNew.css','components/forNew/joinTheKing/joinTheKing.css']
        })
        .state('forNew.recForNew',{
            url: '/recForNew',
            templateUrl: 'components/forNew/recForNew/recForNew.html',
            controller:'recForNewCtrl',
            css:['components/forNew/forNew.css','components/forNew/recForNew/recForNew.css']
        })
        
})
.controller('forNewCtrl',['$scope','$http',function($scope,$http){
	$scope.isTwo=true;
	$scope.isThree=false;
	$scope.isFour=false;
	$scope.changeTwo=function(){
		$scope.isTwo=true;
		$scope.isThree=false;
		$scope.isFour=false;
	}
	$scope.changeThree=function(){
		$scope.isTwo=false;
		$scope.isThree=true;
		$scope.isFour=false;
	}
	$scope.changeFour=function(){
		$scope.isTwo=false;
		$scope.isThree=false;
		$scope.isFour=true;
	}
}])
.controller('heroIntrCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/home/json/heroList.json').success(function(res){
		$scope.data=res.data;
		console.log($scope.data);
	})
	
	$scope.change=function(heroST){
		$scope.style=heroST;
<<<<<<< HEAD
	}

}])

.controller('closeIDCtrl',['$scope','$http',function($scope,$http){
	$scope.isShow=true;
	$scope.show=function(){
		$scope.isShow=!$scope.isShow;
	}
}])
.controller('myKing',['$scope','$http',function($scope,$http){
	/*$http.get('components/guides/json/colleagues.json').success(function(res){
	$scope.data=res.msg.result;
	})*/
//	$scope.isTwo=true;
//	$scope.isThree=false;
//	$scope.isFour=false;
//	$scope.changeTwo=function(){
//		$scope.isTwo=true;
//		$scope.isThree=false;
//		$scope.isFour=false;
//	}
//	$scope.changeThree=function(){
//		$scope.isTwo=false;
//		$scope.isThree=true;
//		$scope.isFour=false;
//	}
//	$scope.changeFour=function(){
//		$scope.isTwo=false;
//		$scope.isThree=false;
//		$scope.isFour=true;
//	}
=======
	}	
}])
.controller('myTabCtrl',['$scope','$http',function($scope,$http){
	$scope.isOne=true;
	$scope.isTwo=false;
	$scope.isThree=false;
	$scope.isFour=false;
	$scope.changeOne=function(){
	$scope.isOne=true;
	$scope.isTwo=false;
	$scope.isThree=false;
	$scope.isFour=false;
	}
	$scope.changeTwo=function(){
	$scope.isOne=false;
	$scope.isTwo=true;
	$scope.isThree=false;
	$scope.isFour=false;
	}
	$scope.changeThree=function(){
	$scope.isOne=false;
	$scope.isTwo=false;
	$scope.isThree=true;
	$scope.isFour=false;
	}
	$scope.changeFour=function(){
	$scope.isOne=false;
	$scope.isTwo=false;
	$scope.isThree=false;
	$scope.isFour=true;
	}
>>>>>>> aa2852bbcc9e2596d1a3e7fc47db03bce7802b61
}])
.controller('joinTheKingCtrl',['$scope','$http','$location',function($scope,$http,$location){
		$scope.a=function(id){
			$location.hash(id);
		}
		
}])
.controller('guidesForNewCtrl',['$scope','$http',function($scope,$http){
	
}])
.controller('recForNewCtrl',['$scope','$http',function($scope,$http){

}])

