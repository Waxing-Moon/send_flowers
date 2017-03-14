

var app = angular.module("myApp2", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    
    .when("/", {
        templateUrl : "./signup.html"
    })
  
    .when("/signin", {
        templateUrl : "./login.html"
    });
});


