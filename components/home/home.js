angular.module('homeModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: 'components/home/home.html',
            controller:'homeCtrl',
            css:'components/home/home.css'
        })
})
.controller('homeCtrl',['$scope',function($scope){
	$scope.name = '熊1';
	$scope.show='我是首页'
}])