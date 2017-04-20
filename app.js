angular.module('myKing',["ui.router",'angularCSS','homeModule','videosModule','guidesModule','matchesModule'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
})