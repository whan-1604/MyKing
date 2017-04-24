angular.module('guidesModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('guides',{
            url: '/guides',
            templateUrl: 'components/guides/guides.html',
            controller:'guidesCtrl',
            css:'components/guides/guides.css'
        })
        .state('guides.recent',{
            url: '/recent',
            templateUrl: 'components/guides/recent/recent.html',
            controller:'recentCtrl',
            css:['components/guides/guides.css','components/guides/recent/recent.css']
        })
        .state('guides.newhand',{
            url: '/newhand',
            templateUrl: 'components/guides/newhand/newhand.html',
            controller:'newhandCtrl',
            css:['components/guides/guides.css','components/guides/newhand/newhand.css']
        })
        .state('guides.heros',{
            url: '/heros',
            templateUrl: 'components/guides/heros/heros.html',
            controller:'herosCtrl',
            css:['components/guides/guides.css','components/guides/heros/heros.css']
        })
        .state('guides.officialNews',{
            url: '/officialNews',
            templateUrl: 'components/guides/officialNews/officialNews.html',
            controller:'officialNewsCtrl',
            css:['components/guides/guides.css','components/guides/officialNews/officialNews.css']
        })
        .state('guides.colleagues',{
            url: '/colleagues',
            templateUrl: 'components/guides/colleagues/colleagues.html',
            controller:'colleaguesCtrl',
            css:['components/guides/guides.css','components/guides/colleagues/colleagues.css']
        })
})
//.service('swiper',['$timeout',function($timeout){
//	$timeout(function(){
//		new Swiper ('.swiper-container', {
//		    loop: true,
//		    autoplay:2000,
//		    // 如果需要分页器
//		    autoplayDisableOnInteraction:false,
//		    pagination: '.swiper-pagination'
//		  }) 
//	},10);
//}])
.controller('guidesCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/guides/json/bannner.json').success(function(res){
		$scope.data=res.msg.reclist_270;
	})
	$scope.spanShow1=true;
		$scope.spanShow2=false;
		$scope.spanShow3=false;
		$scope.spanShow4=false;
		$scope.spanShow5=false;
		$scope.beOne=true;
		$scope.beTwo=false;
		$scope.beThree=false;
		$scope.beFour=false;
		$scope.beFive=false;
		$scope.changeOne=function(){
		$scope.beOne=true;
		$scope.beTwo=false;
		$scope.beThree=false;
		$scope.beFour=false;
		$scope.beFive=false;
		$scope.spanShow1=true;
		$scope.spanShow2=false;
		$scope.spanShow3=false;
		$scope.spanShow4=false;
		$scope.spanShow5=false;
		}
		$scope.changeTwo=function(){
		$scope.beOne=false;
		$scope.beTwo=true;
		$scope.beThree=false;
		$scope.beFour=false;
		$scope.beFive=false;
		$scope.spanShow1=false;
		$scope.spanShow2=true;
		$scope.spanShow3=false;
		$scope.spanShow4=false;
		$scope.spanShow5=false;
		}
		$scope.changeThree=function(){
		$scope.beOne=false;
		$scope.beTwo=false;
		$scope.beThree=true;
		$scope.beFour=false;
		$scope.beFive=false;
		$scope.spanShow1=false;
		$scope.spanShow2=false;
		$scope.spanShow3=true;
		$scope.spanShow4=false;
		$scope.spanShow5=false;
		}
		$scope.changeFour=function(){
		$scope.beOne=false;
		$scope.beTwo=false;
		$scope.beThree=false;
		$scope.beFour=true;
		$scope.beFive=false;
		$scope.spanShow1=false;
		$scope.spanShow2=false;
		$scope.spanShow3=false;
		$scope.spanShow4=true;
		$scope.spanShow5=false;
		}
		$scope.changeFive=function(){
		$scope.beOne=false;
		$scope.beTwo=false;
		$scope.beThree=false;
		$scope.beFour=false;
		$scope.beFive=true;
		$scope.spanShow1=false;
		$scope.spanShow2=false;
		$scope.spanShow3=false;
		$scope.spanShow4=false;
		$scope.spanShow5=true;
		}
}])
.controller('recentCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/guides/json/recent.json').success(function(res){
	$scope.data=res.msg.result;
	})

}])
.controller('newhandCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/guides/json/newhand.json').success(function(res){
	$scope.data=res.msg.result;
	})

}])
.controller('herosCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/guides/json/heros.json').success(function(res){
	$scope.data=res.msg.result;
	})

}])
.controller('officialNewsCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/guides/json/officialNews.json').success(function(res){
	$scope.data=res.msg.result;
	})
}])
.controller('colleaguesCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/guides/json/colleagues.json').success(function(res){
	$scope.data=res.msg.result;
	})
}])