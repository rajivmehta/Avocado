/// <reference path="../../../bower_components/angular/angular.js" />
/// <reference path="../services/home.designer.services.js" />

angular.module('avocado.home.controller', ['avocado.home.service'])
    .controller('avocadoHomeController', ['$scope', '$state', 'avaocadoHomeService', function ($scope, $state, avaocadoHomeService) {
        $scope.searchField="";
        (function () {
            
        })();

        $scope.onSelectDesigner = function () {
            avaocadoHomeService.test();
            $state.go('home.designer');
        }

        $scope.onSelectViewer = function () {
            $state.go('home.viewer');
        }

    }])