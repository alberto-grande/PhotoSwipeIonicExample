angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Gallery) {
	$scope.showSimpleGallery = function() {
		var id = 0;
		var pswpElement = document.querySelectorAll('.pswp.simple')[0];

		// build items array
		var items = Gallery.all();

		// define options (if needed)
		var options = {
		    // parameter history should be false in order
		    // to avoid URL rewrite
		    history: false,
		    index: id // start at first slide
		};

		// Initializes and opens PhotoSwipe
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
	};
})

.controller('ImageArrayCtrl', function($scope, Gallery) {
  $scope.items = Gallery.all();
  $scope.showGallery = function(id) {
		var pswpElement = document.querySelectorAll('.pswp.imageArray')[0];

		// build items array
		var items = Gallery.all();

		// define options (if needed)
		var options = {
		    // parameter history should be false in order
		    // to avoid URL rewrite
		    history: false,
		    index: id // start at first slide
		};

		// Initializes and opens PhotoSwipe
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
  }
});
