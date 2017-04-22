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
	$scope.name='哈哈哈哈哈哈哈哈哈哈哈哈';
}])
.controller('heroIntrCtrl',['$scope','$http',function($scope,$http){
	/*$http.get('components/guides/json/colleagues.json').success(function(res){
	$scope.data=res.msg.result;
	})*/
	$scope.name='heihieheiheiehiehieehiheie';
}])