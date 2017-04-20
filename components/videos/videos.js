angular.module('videosModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('videos',{
            url: '/videos',
            templateUrl: 'components/videos/videos.html',
            controller:'videosCtrl',
            css:'components/videos/videos.css'
        })
})
.controller('videosCtrl',['$scope',function($scope){
	$scope.name = '熊3';
}])