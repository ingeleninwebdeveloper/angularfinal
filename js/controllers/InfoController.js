app.controller('InfoController', ['$scope','$location', '$routeParams', '$firebaseObject', 'FBURL',   
    function($scope, $location, $routeParams, $firebaseObject, FBURL){

       
    
    var ref = new Firebase(FBURL + $routeParams.id);
		$scope.contact = $firebaseObject(ref);

		 $scope.removeContact = function(id) {
    var ref = new Firebase(FBURL + id);
    var contact = $firebaseObject(ref)
   contact.$remove();
   };


  
}]);
