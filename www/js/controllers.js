angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $rootScope, Gallery) {
	$scope.showSimpleGallery = function() {
		var id = 0;
		var items = Gallery.all();
		$rootScope.$broadcast('show-gallery','pswpSimple', items, id);
	};
})

.controller('ImageArrayCtrl', function($scope, $rootScope, Gallery) {
  $scope.items = Gallery.all();
  $scope.showGallery = function(id) {

		// build items array
		var items = Gallery.all();
		$rootScope.$broadcast('show-gallery','pswpArray', items, id);

  }
});
