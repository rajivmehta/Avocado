﻿/// <reference path="../../../bower_components/angular/angular.min.js" />
angular.module('avocado.home.service', [])
    .factory('utility', function ($window) {
        return {
            configjsondata: [],
            dynamicScopRerence:{},
            setRequiredAttribute: function (item) {
                return item.validation.required == "true" ? 'required' : ''
            },
            replaceIt: function (find, replace, str) {
                return str.replace(new RegExp(find, 'g'), replace);
            },
            setMaxLengthAttribute: function (item) {
                return item.validation.hasOwnProperty('maxFieldLength') ? 'maxlength = "' + item.validation.maxFieldLength + '"' : '';
            },
            setMinAttribute: function (item) {
                return item.validation.hasOwnProperty('minField') ? 'min = "' + item.validation.minField + '"' : '';
            },
            setMaxAttribute: function (item) {
                return item.validation.hasOwnProperty('maxField') ? 'max = "' + item.validation.maxField + '"' : '';
            },
            getJsonData: function () {
                return $window.configJson.config;
            },
            generateHTML: function (config) {
                var itemFrom = '';
                var utility = this;
                angular.forEach(config, function (item) {
                    switch (item.type) {
                        case 1:
                            itemFrom += '<span><md-input-container><label>' + item.fieldName + '</label><input type="text" ng-model="' + item.model + '"  ' + utility.setRequiredAttribute(item) + '  ' + utility.setMaxLengthAttribute(item) + ' /></md-input-container></span>';
                            break;
                        case 2:
                            itemFrom += '<span><md-datepicker class="app-background-color" ng-model="' + item.model + '" md-placeholder="Enter date"></md-datepicker></span>';
                            break;
                        case 3:
                            var dropdownstring = '<span><select name="repeatSelect" ng-model="selectedCity">';
                            dropdownstring += '<option ng-repeat="option in options" value="{{option.id}}">{{option.name}}</option>';
                            dropdownstring += '</select><span>';
                            dropdownstring = utility.replaceIt('options', item.model + "options", dropdownstring);
                            itemFrom += dropdownstring;
                            break;
                        case 4:
                            itemFrom += '<span><md-input-container><label>' + item.fieldName + '</label><input type="number" ng-model="' + item.model + '"  ' + utility.setRequiredAttribute(item) + ' ' + utility.setMinAttribute(item) + '  ' + utility.setMaxAttribute(item) + ' /></md-input-container></span>';
                            break;
                        case 5:
                            itemFrom += '<span><md-input-container><label>' + item.fieldName + '</label><input type="email" ng-model="' + item.model + '"  ' + utility.setRequiredAttribute(item) + '  ' + utility.setMaxLengthAttribute(item) + '/></md-input-container></span>';
                            break;
                    }
                })
                return itemFrom;
            }

        }
    })