/// <reference path="../../../bower_components/angular/angular.js" />
/// <reference path="../services/home.designer.services.js" />
/// <reference path="../../../bower_components/lodash/lodash.min.js" />

angular.module('avocado.home.controller', ['avocado.home.service', 'avocado.viewer'])
    .controller('avocadoHomeController', ['$scope', '$state', 'utility', function ($scope, $state, utility) {
        $scope.searchField = "";
        (function () {

        })();

        $scope.onSelectDesigner = function () {
            $state.go('home.designer');
        }

        $scope.onSelectViewer = function () {
            $state.go('home.viewer');
        }

    }])
    .controller('avocadoHomeDesignerController', ['$scope', 'utility', function ($scope, utility) {
        var self = $scope;
        (function () {
            self.configJson = utility.getJsonData();
            utility.configjsondata = self.configJson;
        })();
    }])
    .controller('avocadoHomeViewerController', ['$scope', 'utility', function ($scope, utility) {
        var self = $scope;

        (function () {
            self.configJson = utility.configjsondata;
            self.configJsonForViewer = [];
            angular.copy(self.configJson, self.configJsonForViewer);
            self.configJsonForViewer = _.filter(self.configJsonForViewer, function (item) {
                return (item.isSelected == true);
            })

            angular.forEach(self.configJsonForViewer, function (item) {
                if (item.type == 3) {
                    self[item.model] = item[item.model];
                    self[item.model + "options"] = item.options
                } else {
                    self[item.model] = item[item.model];
                }
            });
        })();
    }]);