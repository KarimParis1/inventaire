/**
 * Created by Victor on 01/12/2016.
 */

angular.module('inventaire').controller('LoginController', function ($scope, $rootScope, $mdDialog, $mdToast, $location) {

    $scope.login = {
        mail: '',
        psw: ''
    };

    $scope.reg = {
        fname: '',
        lname: '',
        mail: '',
        psw: ''
    }

    $scope.loginSend = function(){
        if($scope.login.mail != '' && $scope.login.psw != ''){
            $location.path('/fiches');
        } else {
            $mdToast.show($mdToast.simple().content("Some fields are empties").position('bottom right'));
        }
    }

    $scope.signUp = function(){
        if($scope.reg.fname != '' && $scope.reg.lname != '' && $scope.reg.mail != '' && $scope.reg.psw != ''){
            $location.path('/');
        } else {
            $mdToast.show($mdToast.simple().content("Some fields are empties").position('bottom right'));
        }
    }


});