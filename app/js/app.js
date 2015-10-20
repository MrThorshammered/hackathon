angular
	.module('waigApp', ['ui.router','Timeout'])
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home',{
				url:'/',
				templateUrl: 'home.html'
			})
			.state('loading',{
				url:'/loading',
				templateUrl: 'loading.html',
				controller: 'LoadingController'
			})
			.state('data',{
				url:'/data',
				templateUrl: 'data.html'
			})
		
	})

