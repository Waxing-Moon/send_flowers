
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "guest_index.html"
    })
    .when("/signin", {
        templateUrl : "login.html"
    })
    .when("/signup", {
        templateUrl : "signup.html"
    });
});