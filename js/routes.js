angular.module("gtms").config(function  ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/main");
  $stateProvider
    $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "partials/state1.html",
      controller: function($scope, $timeout){
      	console.log("init state1 controller")
      	$scope.state = "State 1 Name"
      	$timeout(function(){$scope.state = "State 1 Name Changed"}, 2000)
      }
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "partials/state1.list.html",
      controller: function($scope) {
      	console.log("init state1 list controller")
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state("state1.list2",  {
    	url: "/list2",
    	template: "<h3>List of State 2 Items{{name}}</h3>",
    	controller: function($scope){
    		console.log("init state1 list2 controller")
    		$scope.items = ["C"]
    		$scope.name = "state1 list2"
    	}
    })
    .state('main', {
    	url: '/main', 
    	templateUrl: 'main.html',
    	controller: "MainController"
    })
})
