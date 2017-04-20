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
		new Swiper ('.swiper-container', {
		    loop: true,
		    autoplay:2000,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		  }) 
	},10);
}])


.controller('homeCtrl',['$scope','swiper','$http',function($scope,$http){
	$http.get('components/home/json/view.json').success(function(res){
		$scope.data=res.msg;
		console.log($scope.data);
	})
}])