/**
 * Created by Dipam on 12/11/2017.
 */

var app = angular.module("ChatBoxApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl : "views/landing.html",
            controller: "LandingController"
        })
        .when("landing", {
            templateUrl : "views/landing.html",
            controller: "LandingController"
        })
}]);