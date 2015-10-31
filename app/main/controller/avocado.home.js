/// <reference path="../../../bower_components/angular/angular.js" />
angular.module('avocado.home.controller', [])
    .controller('avocadoHomeController', ['$scope', '$state', function ($scope, $state) {
        (function () {
            
        })();

        $scope.onSelectDesigner = function () {
            $state.go('home.designer');
        }

        $scope.onSelectViewer = function () {
            $state.go('home.viewer');
        }

    }])