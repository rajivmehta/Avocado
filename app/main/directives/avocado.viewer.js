/// <reference path="../../../bower_components/angular/angular.min.js" />
angular.module('avocado.viewer', ['avocado.home.service'])
.directive('gRenderer', function ($compile, utility) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            config:'='
        },
        link: function (scope, element, attr) {
            element.empty();
            element.html(utility.generateHTML(scope.config));
            $compile(element.contents())(scope.$parent);
        }
    }
});