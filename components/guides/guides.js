angular.module('guidesModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('guides',{
            url: '/guides',
            templateUrl: 'components/guides/guides.html',
            controller:'guidesCtrl',
            css:'components/guides/guides.css'
        })
})
.controller('guidesCtrl',['$scope',function($scope){
	$scope.name = '熊4';
}])