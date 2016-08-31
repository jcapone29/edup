var Potato;
(function (Potato) {
    var Golf;
    (function (Golf) {
        Golf.app = angular.module("r.edge", ['ui.router']);
        Golf.app.config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'dashboard.html',
                controller: 'RedgeCtrl'
            })
                .state('messageboard', {
                url: '/messageboard',
                templateUrl: 'messageboard.html',
                controller: 'RedgeCtrl'
            })
                .state('tickgraph', {
                url: '/tickgraph',
                templateUrl: 'tickgraph.html',
                controller: 'RedgeCtrl'
            });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/dashboard');
        });
    })(Golf = Potato.Golf || (Potato.Golf = {}));
})(Potato || (Potato = {}));
//# sourceMappingURL=app.module.js.map