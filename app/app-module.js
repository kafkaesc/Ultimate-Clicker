(function() {
    'use strict';

    var appModule = angular.module('ultimateClicker', ['ui.router']);

    appModule.value('componentBorders', false);

    appModule.run(function (componentBorders) {
        if (componentBorders) {
            if (appModule._invokeQueue) {
                appModule._invokeQueue.forEach(function (item) {
                    if (item[1] == 'component') {
                        var componentName = item[2][0];
                        var componentProperties = item[2][1];
                        if (componentProperties.templateUrl) {
                            var templateUrl = componentProperties.templateUrl;
                            delete componentProperties.templateUrl;
                            componentProperties.template = '<div class="component-borders"><b>' + componentName + '</b><div ng-include="\'' + templateUrl + '\'"></div></div>';
                        }
                        else {
                            var template = '<div class="component-borders">' + componentName + '<div>' + componentProperties.template + '</div></div>';
                            componentProperties.template = template;
                        }
                    }
                });
            }
        }
    });

    appModule.config(function ($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'home',
                url: '',
                template: '<menu></menu>'
            },
            {
                name: 'home2',
                url: '/',
                template: '<menu></menu>'
            },
            {
                name: 'about',
                url: '/about',
                template: '<about></about>'
            },
            {
                name: 'settings',
                url: '/settings',
                template: '<settings></settings>'
            },
            {
                name: 'game',
                url: '/world-of-clicks',
                template: '<game></game>'
            }
        ];

        $urlRouterProvider.otherwise('/');

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    });

})();
