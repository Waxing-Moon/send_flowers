

var app = angular.module("myApp2", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
     
    .when("/", {
        templateUrl : "../client/Seller/login.html"
    })
    .when("/signup", {
        templateUrl : "../client/Seller/signup_Buyer.html"
    })
});


