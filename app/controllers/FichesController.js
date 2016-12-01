/**
 * Created by Victor on 01/12/2016.
 */

angular.module('inventaire').controller('FichesController', function ($scope, $rootScope, $mdDialog, $mdToast, $location, $mdMedia) {

    $scope.familles=[
        {
            lastname:"Reda",
            description:"Description de la famille 1",
            update:"2016-08-12"
        },
        {
            lastname : "bader sans majuscule",
            description: "Famille 2",
            update:"2016-07-23"

        },
        {
            lastname: "Mounir la douille",
            description: "Famille 3",
            update:"2016-08-23"
        }
    ]


    $scope.logout = function() {
        $location.path('/')
    }

    $scope.showAlert = function (ev) {
        $mdDialog.show({
                controller: NouvelleFicheController,
                templateUrl: 'app/views/ajouterFicheDialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
    };
    function NouvelleFicheController($scope, $mdDialog) {
        $scope.submitAddFiche = function (ev) {
            $mdDialog.hide();
        };

        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }



    $scope.goToListes = function() {
        $location.path('/listeItem')
    }

});