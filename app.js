angular.module('myKing',["ui.router",'angularCSS','homeModule','videosModule','guidesModule','matchesModule','gamesModule'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
})