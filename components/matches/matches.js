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
.controller('matchesCtrl',['$scope',function($scope){
	$scope.name = '熊2';
}])