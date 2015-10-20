angular
	.module('waigApp')
	.controller('LoadingController', LoadingController);

 // LoadingController.$inject = ['$state', '$setTimeout']

	function LoadingController($state, $Timeout){
		console.log('yo')

		$Timeout(function(){
			$state.go('data')
		}, 3000)
	}