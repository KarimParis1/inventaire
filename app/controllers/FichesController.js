/**
 * Created by Victor on 01/12/2016.
 */

angular.module('inventaire').controller('FichesController', function ($http,$scope, $rootScope, $mdDialog, $mdToast, $location, $mdMedia) {


    //var search= "microsoft";
    $scope.show=function(){
        alert('vous avez cliqué');
    }

    $scope.show= function(article){

        console.log(article);
        $mdDialog.show({

            templateUrl:'app/views/newsView.html',
            clickOutsideToClose:true,
            controller: function($scope,$mdDialog){
                $scope.article = article;
                $scope.hide=function(){$mdDialog.hide();};
                $scope.cancel=function(){$mdDialog.cancel();};
            }
        })
    }

    $scope.go = function () {

        var search = $scope.recherche;
        $http.defaults.headers.common["Ocp-Apim-Subscription-Key"] = "fc0df77a54494178803a11aa25b36e2f";
        $http.get('https://api.cognitive.microsoft.com/bing/v5.0/search?q='+$scope.recherche, {
            headers: {
            }
        }).success(function(response){
            $scope.data=response;
            console.log($scope.data);
            $scope.images=response.images.value;
            $scope.news=response.news.value;

            //console.log($scope.result);

        });
        $scope.recherche=" ";
        $scope.bool= true;
    }

    /*$scope.suggest = function () {

        var sug = $scope.mayberecherche;
        $http.defaults.headers.common["Ocp-Apim-Subscription-Key"] = "fc0df77a54494178803a11aa25b36e2f";
        $http.get('https://api.cognitive.microsoft.com/bing/v5.0/search?q='+$scope.recherche, {
            headers: {
            }
        }).success(function(response){
            $scope.resultats=response.news.value;
           // console.log(response);
            //console.log($scope.resultats);
            $scope.recherche=" ";
        });
        $scope.recherche=" ";
    }*/




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