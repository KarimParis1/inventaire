/**
 * Created by Victor on 01/12/2016.
 */

angular.module('inventaire').controller('ListeItemController', function ($scope, $rootScope, $mdDialog, $mdToast, $location) {



    $scope.getBack = function() {
        $location.path('/fiches')
    }

    $scope.items = [{
        name: "Doliprane",
        description: "A prendre quand Quentin chante",
        image: "https://www.pharma-medicaments.com/media/3624698__018306400_1440_22042013.jpg",
        categorie: "Médicament"
    },{
        name: "Asprine",
        description: "A prendre quand Quentin chante",
        image: "https://www.pharma-medicaments.com/media/3353153__065138800_1440_22042013.jpg",
        categorie: "Médicament"
    },{
        name: "Passport",
        description: "Passport biométrique",
        image: "https://travelersunited.org/wp-content/uploads/xus-passport-CT-1K.jpg.pagespeed.ic.fHoiPsKuqG.jpg",
        categorie: "Papiers d'identités"
    },{
        name: "Permis B",
        description: "",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/PC-Europ01-275x379.jpg/220px-PC-Europ01-275x379.jpg",
        categorie: "Papiers d'identités"
    }]

    $scope.selectedTrie = "name";

    $scope.search = "";

    $scope.tries = [
        {
            name: "Nom",
            value: "name"
        },
        {
            name: "Catégorie",
            value: 'categories'
        }
    ]


    $scope.logout = function() {
        $location.path("/fiches")
    }
    $scope.addItem = function (ev) {
        $mdDialog.show({
                controller: NouvelleItemController,
                templateUrl: 'app/views/ajouterItemDialog.html',
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

    function NouvelleItemController($scope, $mdDialog) {

        $scope.states = ('Medicament Boisson Passeport Other').split(' ').map(function(state) {
            return {abbrev: state};
        });

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

});
