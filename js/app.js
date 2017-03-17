var app = angular.module('myApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
  $routeProvider
	.when('/', {
		controller: 'ListController',
		templateUrl: 'views/list.html'
	})
	.when('/add', {
		controller: 'AddController',
		templateUrl: 'views/add.html'
	})
	.when('/edit/:id', {
		controller: 'EditController',
		templateUrl: 'views/edit.html'
	
	})

	.when('/contact-info/:id', {
		controller: 'InfoController',
		templateUrl: 'views/contact-info.html'
	
	})

	.otherwise({
		redirectTo: '/'
	});
});

app.constant("FBURL", 
  "https://angularapp-d68b4.firebaseio.com/contacts/"
);
