angular.module('starter.directives', [])
.directive('pswpContainer', function(){
	return {
		restrict: 'E',
		scope: {
			id: "@"
		},
		templateUrl: '/templates/pswp-container.html',
		controller: ['$scope', function($scope){

		}]
	};
});