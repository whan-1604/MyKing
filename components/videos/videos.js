angular.module('videosModule',['gamesModule','heroModule','introduceModule','happyModule','officialModule'])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/videos/games');
    $stateProvider
        .state('videos',{
            url: '/videos',
            templateUrl: 'components/videos/videos.html',
            controller:'videosCtrl',
            css:'components/videos/videos.css'
        })
})
.service('swiper',['$timeout',function($timeout){
	$timeout(function(){
		new Swiper ('.swiper-container', {
		    loop: true,
		    autoplay:2000,
		    // 如果需要分页器
		    autoplayDisableOnInteraction:false,
		    pagination: '.swiper-pagination'
		  }) 
	},10);
}])
.controller('videosCtrl',['$scope','$http','swiper',function($scope,$http){
	$http.get('components/videos/json/bannner.json').success(function(res){
		$scope.data=res.msg.reclist_236;
		console.log($scope.data);
	})
}])