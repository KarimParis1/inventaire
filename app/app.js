/**
 * Created by Victor on 27/04/2016.
 */
var app = angular.module('inventaire', ['ngMaterial', 'ngRoute']);

// Configuration des routes
app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            controller: 'LoginController',
            templateUrl: 'app/views/loginView.html'
        })
        .when('/signup', {
            controller: 'InscriptionController',
            templateUrl: 'app/views/inscriptionView.html'
        })
        .when('/fiches', {
            controller: 'FichesController',
            templateUrl: 'app/views/fichesView.html'
        })
        .when('/listeItem', {
            controller: 'ListeItemController',
            templateUrl: 'app/views/listeItemView.html'
        })
        .otherwise({
            redirectTo: '/'
        });

});

