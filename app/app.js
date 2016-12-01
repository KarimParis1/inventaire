/**
 * Created by Victor on 27/04/2016.
 */
var app = angular.module('inventaire', ['ngMaterial', 'ngRoute']);

// Configuration des routes
app.config(function ($routeProvider) {

    $routeProvider
        .when('/maps', {
            controller: 'MapCtrl',
            templateUrl: 'app/views/MapView.html'
        })

});

app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('inventaire');
});



});
