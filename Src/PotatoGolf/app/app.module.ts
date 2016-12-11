module Potato.Golf {

    export var app = angular.module("p.golf", ['ionic', 'ngCordova', 'ui.router','satellizer']);

    app.config(function ($stateProvider: any, $urlRouterProvider: any, $authProvider: any) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/views/login.html',
                controller: 'LoginCtrl',
                 controllerAs: 'vm'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'app/views/dashboard.html',
                controller: 'DashboardCtrl',
                controllerAs: 'vm'
            })
            .state('collegesearch', {
                url: '/collegesearch',
                templateUrl: 'app/views/college-search.html',
                controller: 'CollegeSearchCtrl',
                controllerAs: 'vm'
            })
            .state('tickgraph', {
                url: '/tickgraph',
                templateUrl: 'app/views/tickgraph.html',
                controller: 'DashboardCtrl',
                controllerAs: 'vm'
            }).state('filters', {
                url: '/filters',
                templateUrl: 'app/views/filters.html',
                controller: 'FiltersCtrl',
                controllerAs: 'vm'
            })
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');


        $authProvider.google({
            clientId: '664035970252-muqashu8bkoe94s361fnooqo5044trnq.apps.googleusercontent.com',
        });

        $authProvider.google({   
            url: 'http://localhost:51201/api/Gpro',
            authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            scope: ['profile', 'email'],
            scopePrefix: 'openid',
            scopeDelimiter: ' ',
            requiredUrlParams: ['scope'],
            optionalUrlParams: ['display'],
            display: 'popup',
            type: '2.0',
            popupOptions: { width: 580, height: 400 }
        });

        $authProvider.facebook({
            clientId: 'Facebook App ID',
            responseType: 'token',
            name: 'facebook',
            url: '/auth/facebook',
            authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
            redirectUri: window.location.origin + '/',
            requiredUrlParams: ['display', 'scope'],
            scope: [],
            scopeDelimiter: ',',
            display: 'popup',
            oauthType: '2.0',
            popupOptions: { width: 280, height: 400 }
        });
    });

}