'use strict';

app.controller('HomeCtrl', function(Auth, $ionicLoading, $ionicModal, $scope, Like, Match, uid) {

	var home = this;
	home.currentIndex = null;
	home.currentCardUid = null;

	
	// $scope.show = function() {
	// 	$ionicLoading.show({
	// 		template: '<ion-spinner icon="bubbles"></ion-spinner>'
	// 	});
	// };

	$scope.hide = function() {
		$ionicLoading.hide();
	}
//
	function init() {

		$scope.show();

		home.profiles = [];

		// Add user profiles

			$scope.hide();
		});
	};

	$scope.$on('$ionicView.enter', function(e) {
		init();
	});


	$ionicModal.fromTemplateUrl('templates/info.html', {
		scope: $scope
	})
	.then(function(modal) {
		$scope.modal = modal;
	});

	home.openModal = function() {
		$scope.modal.show();
	};

	home.closeModal = function() {
		$scope.modal.hide();
	};

});
