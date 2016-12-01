/**
 * Created by Dood on 01/12/2016.
 */
/**
 * Created by Dood on 01/12/2016.
 */
/**
 * Created by Victor on 01/12/2016.
 */

angular.module('inventaire').controller('HomeController', function ($scope, $rootScope, $mdDialog, $mdToast, $mdMedia) {

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

});
