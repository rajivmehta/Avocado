/// <reference path="../bower_components/angular/angular.js" />
/// <reference path="../bower_components/angular-ui-router/release/angular-ui-router.js" />

var avocado = angular.module('avocado', [
    "ui.router",
    "avocado.home.controller",
    'ngMaterial'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/avocado',
        templateUrl: 'app/main/partials/avocado.home.tpl.html',
        controller: 'avocadoHomeController'
    }).state('home.designer', {
            url: '/designer',
            parent: 'home',
            templateUrl: 'app/main/partials/avocado.home.designer.tpl.html'
    }).state('home.viewer', {
        url: '/viewer',
        parent: 'home',
        templateUrl: 'app/main/partials/avocado.home.viewer.tpl.html'
    });
    $urlRouterProvider.otherwise('/', '/avocado/designer')
}])
