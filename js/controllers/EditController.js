app.controller('EditController', ['$scope','$location', '$routeParams', '$firebaseObject', 'FBURL',   
    function($scope, $location, $routeParams, $firebaseObject, FBURL){
    
    var ref = new Firebase(FBURL + $routeParams.id);
		$scope.contact = $firebaseObject(ref);
    
    $scope.editContact = function() {
        $scope.contact.$save({
            name: $scope.contact.name,
            email: $scope.contact.email,
            phone: $scope.contact.phone,
            note: $scope.contact.note
        });
        $scope.edit_form.$setPristine();
        $scope.contact = {};
        $location.path('/contacts');
        
    };
     
}]);

