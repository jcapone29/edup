var Potato;
(function (Potato) {
    var Golf;
    (function (Golf) {
        Golf.app = angular.module("p.golf", ['ionic', 'ngCordova', 'ui.router', 'satellizer']);
        Golf.app.config(function ($stateProvider, $urlRouterProvider, $authProvider) {
            $stateProvider
                .state('login', {
                url: '/login',
                templateUrl: 'app/views/login.html',
                controller: 'LoginCtrl'
            })
                .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'app/views/dashboard.html',
                controller: 'DashboardCtrl'
            })
                .state('messageboard', {
                url: '/messageboard',
                templateUrl: 'app/views/messageboard.html',
                controller: 'DashboardCtrl'
            })
                .state('tickgraph', {
                url: '/tickgraph',
                templateUrl: 'app/views/tickgraph.html',
                controller: 'DashboardCtrl'
            });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/login');
            $authProvider.facebook({
                clientId: 'Facebook App ID',
                responseType: 'token',
                name: 'facebook',
                url: '/auth/facebook',
                authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
                redirectUri: window.location.origin + '/',
                requiredUrlParams: ['display', 'scope'],
                scope: ['email'],
                scopeDelimiter: ',',
                display: 'popup',
                oauthType: '2.0',
                popupOptions: { width: 280, height: 400 }
            });
            $authProvider.google({
                clientId: '664035970252-muqashu8bkoe94s361fnooqo5044trnq.apps.googleusercontent.com',
                url: '/auth/google',
                authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
                redirectUri: window.location.origin,
                requiredUrlParams: ['scope'],
                optionalUrlParams: ['display'],
                scope: ['profile', 'email'],
                scopePrefix: 'openid',
                scopeDelimiter: ' ',
                display: 'popup',
                oauthType: '2.0',
                popupOptions: { width: 452, height: 633 }
            });
        });
    })(Golf = Potato.Golf || (Potato.Golf = {}));
})(Potato || (Potato = {}));
var Potato;
(function (Potato) {
    var Golf;
    (function (Golf) {
        var DashboardCtrl = (function () {
            function DashboardCtrl($scope, dashsrv, $state) {
                this.$scope = $scope;
                this.dashsrv = dashsrv;
                this.$state = $state;
                this.bio = 'test';
                this.analysisSeries = new Array();
            }
            DashboardCtrl.$inject = ["$scope", "DashboardSvc", "$state"];
            return DashboardCtrl;
        })();
        Golf.DashboardCtrl = DashboardCtrl;
        Golf.app.controller("DashboardCtrl", DashboardCtrl);
    })(Golf = Potato.Golf || (Potato.Golf = {}));
})(Potato || (Potato = {}));
var Potato;
(function (Potato) {
    var Golf;
    (function (Golf) {
        var LoginCtrl = (function () {
            function LoginCtrl($scope, dashsrv, $state, $auth, $ionicSideMenuDelegate) {
                this.$scope = $scope;
                this.dashsrv = dashsrv;
                this.$state = $state;
                this.$auth = $auth;
                this.$ionicSideMenuDelegate = $ionicSideMenuDelegate;
                this.bio = 'test';
                this.analysisSeries = new Array();
                //this.$ionicSideMenuDelegate.canDragContent(this.dashsrv.showSideNavToggle);
            }
            LoginCtrl.prototype.authenticate = function (provider) {
                console.log(provider);
                this.$auth.authenticate(provider).then(function (response) {
                    console.log(response);
                }).catch(function (response) {
                    console.log(response);
                });
                ;
            };
            ;
            LoginCtrl.prototype.getLoginCache = function () {
                this.$state.go("dashboard");
            };
            LoginCtrl.$inject = ["$scope", "DashboardSvc", "$state", "$auth", "$ionicSideMenuDelegate"];
            return LoginCtrl;
        })();
        Golf.LoginCtrl = LoginCtrl;
        Golf.app.controller("LoginCtrl", LoginCtrl);
    })(Golf = Potato.Golf || (Potato.Golf = {}));
})(Potato || (Potato = {}));
var Potato;
(function (Potato) {
    var Golf;
    (function (Golf) {
        var UserInfo = (function () {
            function UserInfo() {
            }
            return UserInfo;
        })();
        Golf.UserInfo = UserInfo;
        var ActiveSession = (function () {
            function ActiveSession() {
            }
            return ActiveSession;
        })();
        Golf.ActiveSession = ActiveSession;
    })(Golf = Potato.Golf || (Potato.Golf = {}));
})(Potato || (Potato = {}));
var Potato;
(function (Potato) {
    var Golf;
    (function (Golf) {
        var DashboardSvc = (function () {
            function DashboardSvc($http, $q) {
                this.$http = $http;
                this.$q = $q;
                this.api = "http://ec2-52-91-68-23.compute-1.amazonaws.com/CapApi/api/Hedge/";
                //CSS
                this.sideMenuState = false;
                this.showSideNavToggle = false;
                //User Info
                this.currentActiveUser = new Golf.UserInfo();
                this.getLogin();
            }
            DashboardSvc.prototype.getTickets = function () {
                // return this.$http.get(this.api + "ticker").then(r => r.data);
            };
            DashboardSvc.prototype.getLogin = function () {
                this.currentActiveUser.FirstName = "Joe";
                this.currentActiveUser.LastName = "Capone";
            };
            DashboardSvc.prototype.getLoginCache = function () {
            };
            DashboardSvc.$inject = ["$http", "$q"];
            return DashboardSvc;
        })();
        Golf.DashboardSvc = DashboardSvc;
        Golf.app.service("DashboardSvc", DashboardSvc);
    })(Golf = Potato.Golf || (Potato.Golf = {}));
})(Potato || (Potato = {}));
//# sourceMappingURL=app.js.map