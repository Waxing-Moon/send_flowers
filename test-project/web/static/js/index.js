

var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/sum", {
        templateUrl : "./template/summer.html"
    })
    .when("/win", {
        templateUrl : "./template/winter.html"
    })
    .when("/sp", {
        templateUrl : "./template/spring.html"
    })
    .when("/wed", {
        templateUrl : "./template/wedding.html"
    })
    .when("/car", {
        templateUrl : "./template/car.html"
    })
    .when("/bir", {
        templateUrl : "./template/birthday.html"
    });
});


