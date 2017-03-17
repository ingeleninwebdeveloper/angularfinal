app.controller('AddController', ['$scope', '$firebaseArray', '$location', 'FBURL', function($scope, $firebaseArray, $location, FBURL){
	
	 $scope.title="prueba";
	$scope.addContact = function() {
		var ref = new Firebase(FBURL);
		var contact = $firebaseArray(ref);
		contact.$add({
			name: $scope.contact.name,
			email: $scope.contact.email,
			phone: $scope.contact.phone,
			note: $scope.contact.note
		});
		$location.path('/');
	};
	
}]);


