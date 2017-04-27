angular.module('myKing',["ui.router",'angularCSS','homeModule','videosModule','guidesModule','matchesModule','me-lazyload'])
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
        .state('forNew.guidesForNew',{
            url: '/guidesForNew',
            templateUrl: 'components/forNew/guidesForNew/guidesForNew.html',
            controller:'guidesForNewCtrl',
            css:['components/forNew/forNew.css','components/forNew/guidesForNew/guidesForNew.css']
        })
        .state('forNew.joinTheKing',{
            url: '/joinTheKing',
            templateUrl: 'components/forNew/joinTheKing/joinTheKing.html',
            controller:'joinTheKingCtrl',
            css:['components/forNew/forNew.css','components/forNew/joinTheKing/joinTheKing.css']
        })
        .state('forNew.recForNew',{
            url: '/recForNew',
            templateUrl: 'components/forNew/recForNew/recForNew.html',
            controller:'recForNewCtrl',
            css:['components/forNew/forNew.css','components/forNew/recForNew/recForNew.css']
        })
        
        .state('activities',{
            url: '/activities',
            templateUrl: 'components/activities/activities.html',
            controller:'activitiesCtrl',
            css:'components/activities/activities.css'
        })
        
         .state('inFormation',{
            url: '/inFormation',
            templateUrl: 'components/inFormation/inFormation.html',
            controller:'inFormationCtrl',
            css:'components/inFormation/inFormation.css'
        })
        
})
.controller('forNewCtrl',['$scope','$http',function($scope,$http){
	$scope.isTwo=true;
	$scope.isThree=false;
	$scope.isFour=false;
	$scope.changeTwo=function(){
		$scope.isTwo=true;
		$scope.isThree=false;
		$scope.isFour=false;
	}
	$scope.changeThree=function(){
		$scope.isTwo=false;
		$scope.isThree=true;
		$scope.isFour=false;
	}
	$scope.changeFour=function(){
		$scope.isTwo=false;
		$scope.isThree=false;
		$scope.isFour=true;
	}
}])
.controller('heroIntrCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/home/json/heroList.json').success(function(res){
		$scope.data=res.data;
		console.log($scope.data);
	})
	
	$scope.change=function(heroST){
		$scope.style=heroST;
	}

}])

.controller('closeIDCtrl',['$scope','$http',function($scope,$http){
	$scope.isShow=true;
	$scope.show=function(){
		$scope.isShow=!$scope.isShow;
	}
}])

.controller('myTabCtrl',['$scope','$http',function($scope,$http){
	console.log(22222222222);
	$scope.isOne=true;
	$scope.isTwo=false;
	$scope.isThree=false;
	$scope.isFour=false;
	$scope.changeOne=function(){
	$scope.isOne=true;
	$scope.isTwo=false;
	$scope.isThree=false;
	$scope.isFour=false;
	}
	$scope.changeTwo=function(){
	$scope.isOne=false;
	$scope.isTwo=true;
	$scope.isThree=false;
	$scope.isFour=false;
	}
	$scope.changeThree=function(){
	$scope.isOne=false;
	$scope.isTwo=false;
	$scope.isThree=true;
	$scope.isFour=false;
	}
	$scope.changeFour=function(){
	$scope.isOne=false;
	$scope.isTwo=false;
	$scope.isThree=false;
	$scope.isFour=true;
	}
}])
.controller('joinTheKingCtrl',['$scope','$http','$location',function($scope,$http,$location){
		$scope.a=function(id){
			$location.hash(id);
		}
		
}])
.controller('guidesForNewCtrl',['$scope','$http',function($scope,$http){
	
}])
.controller('recForNewCtrl',['$scope','$http',function($scope,$http){

}])

.controller('activitiesCtrl',['$scope','$http',function($scope,$http){
		$scope.name='张小萌';
}])

.controller('inFormationCtrl',['$scope','$http',function($scope,$http){
		$scope.changemsg=function(msgnum){
		$http.get('components/inFormation/json/mnPage'+(msgnum+1)+'.json').success(function(res){
			$scope.arrMes=res.msg.result;
		})
		
		/*-----------------*/
                                                    //读取的页数
		var page = 2 , loading = true;                      //判断是否正在读取内容的变量
		
		$scope.arrMes = [];
		
		$scope.pushContent=function(msgnum) {                    //核心是这个函数，向$scope.posts

                                                //添加内容
        	if (loading) {                         //如果页面没有正在读取
           		loading = false;                     //告知正在读取
            	$http.get("components/inFormation/json/mnPage"+(msgnum+1)+".json") //调用API，读取第几页的内
                	.success(function (res) {
                    	$scope.home_bannerimgarr=res.msg.result;
                    	for(var i = 0; i <= $scope.home_bannerimgarr.length - 1; i++) {
                        	$scope.arrMes.push($scope.home_bannerimgarr[i]);
                    	}
                    	loading = true;            //告知读取结束
                	});
            	page++;                             //翻页
	            if(page>4){
	                page=2;
	            }
        	}
    	}
	  	/*滚动事件监听*/
		var xxx=document.getElementById("mes_auto");
		xxx.onscroll = function () {
        	var scrollTop = xxx.scrollTop,
            	viewHeight = xxx.clientHeight,
            	height = content.offsetHeight;
//          console.log(scrollTop,viewHeight,height)
             //判断是否滚动到底部
	        if ((scrollTop + viewHeight) >= height){
	        	 $scope.pushContent(msgnum);   
	        }
  		}
	}
	$scope.changemsg(1);
}])