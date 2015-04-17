angular.module('starter.directives', [])
.directive('pswpContainer', function(){
	return {
		restrict: 'E',
		scope: {
			id: "@"
		},
		templateUrl: '/templates/pswp-container.html',
		controller: ['$scope', function(scope){

			scope.$on('show-gallery', function(event, galleryId, items, index) {
				if(scope.id != galleryId)
					return;
				
				console.log('openGallery');
				var pswpElement = document.querySelectorAll('#' + scope.id + ' .pswp')[0];
				// define options (if needed)
				var options = {
				    // parameter history should be false in order
				    // to avoid URL rewrite
				    history: false,
				    index: index // start at first slide
				};

				// Initializes and opens PhotoSwipe
				var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
				gallery.init();
			});

		}]
	};
});