'use strict';

app.controller('SettingCtrl', function(Auth, $ionicPopup) {
	var sett = this;


	sett.logout = function() {
		$ionicPopup.confirm({
			title: 'Logout',
			template: 'Do you want to logout?'
		})
		.then(function(res) {
			if (res) {
				Auth.logout();
			}
		});

	};

});
