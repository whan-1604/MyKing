angular.module('homeModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: 'components/home/home.html',
            controller:'homeCtrl',
            css:'components/home/home.css'
//          css:['components/home/home.css','css/swiper-3.4.1.min.css']
        })
})

.service('swiper',['$timeout',function($timeout){
	$timeout(function(){
		var mySwiper = new Swiper ('.swiper-container', {
		    loop: true,
		    autoplay:2000,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		  }) 
	},10);
}])


.controller('homeCtrl',['$scope','$http','$sce','swiper',function($scope,$http,$sce){
	$http.get('components/home/json/view.json').success(function(res){
		$scope.videos=res.msg.reclist_230;
		$scope.videoUrl = function(url){  
       return $sce.trustAsResourceUrl(url);  
  }  
	})
	
	$http.get('components/home/json/strategy01.json').success(function(res){
		$scope.picLists=res.msg.result;
	})
	
	$http.get('components/home/json/strategy02.json').success(function(res){
		$scope.picLists01=res.msg.result;
	})
	
}])