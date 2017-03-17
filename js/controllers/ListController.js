app.controller('ListController', ['$scope', '$firebaseArray', '$firebaseObject', 'FBURL', function($scope, $firebaseArray, $firebaseObject, FBURL){
  
  var contacts = new Firebase(FBURL);
  $scope.contacts= $firebaseArray(contacts);
  
  $scope.removeContact = function(id) {
    var ref = new Firebase(FBURL + id);
    var contact = $firebaseObject(ref)
   contact.$remove();
   };
   
}]);

 