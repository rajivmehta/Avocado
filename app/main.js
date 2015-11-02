/// <reference path="../bower_components/angular/angular.js" />
/// <reference path="../bower_components/angular-ui-router/release/angular-ui-router.js" />
/// <reference path="../bower_components/lodash/lodash.js" />

var avocado = angular.module('avocado', [
    "ui.router",
    'avocado.viewer',
    "avocado.home.controller",
    'avocado.home.service',
    'ngMaterial'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/avocado',
            templateUrl: 'app/main/partials/avocado.home.tpl.html',
            controller: 'avocadoHomeController'
        }).state('home.designer', {
            url: '/designer',
            parent: 'home',
            templateUrl: 'app/main/partials/avocado.home.designer.tpl.html',
            controller: 'avocadoHomeDesignerController'
        }).state('home.viewer', {
            url: '/viewer',
            parent: 'home',
            templateUrl: 'app/main/partials/avocado.home.viewer.tpl.html',
            controller: 'avocadoHomeViewerController'
        });
    }]).run(['$rootScope', 'utility', '$state', function ($rootScope, utility, $state) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
            if (toState.name == "home.designer") {
                if (_.keys(utility.dynamicScopRerence).length != 0) {
                    angular.forEach(utility.dynamicScopRerence.configJson, function (item) {
                        if (item.isSelected) {
                            item[item.model] = utility.dynamicScopRerence[item.model]
                        }
                    })
                    if (utility.dynamicScopRerence.configJsonForViewer.length == 0) {
                        $state.go('home.viewer');
                    }
                }
            }
        });
    }]);
