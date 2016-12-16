var Potato;
(function (Potato) {
    var Golf;
    (function (Golf) {
        Golf.app = angular.module("p.golf", ['ionic', 'ngCordova', 'ui.router', 'satellizer', 'ionic.contrib.drawer']);
        Golf.app.config(function ($stateProvider, $urlRouterProvider, $authProvider) {
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
            });
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
    })(Golf = Potato.Golf || (Potato.Golf = {}));
})(Potato || (Potato = {}));
var Potato;
(function (Potato) {
    var Golf;
    (function (Golf) {
        var CollegeSearchCtrl = (function () {
            function CollegeSearchCtrl($scope, dashsrv, $state) {
                this.$scope = $scope;
                this.dashsrv = dashsrv;
                this.$state = $state;
                this.testing = [1, 2, 3, 4, 5, 6];
                this.instituionInfo = new Array();
                this.getInstitutionMeta();
            }
            CollegeSearchCtrl.prototype.initMap = function (info) {
                info.UnitId;
                var latlng = new google.maps.LatLng(+info.Latitude, +info.Longitude);
                var myOptions = {
                    zoom: 12,
                    center: latlng,
                    mapMaker: true,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                };
                var map = new google.maps.Map(document.getElementById(info.UnitId), myOptions);
                var marker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    title: info.Institution_Name
                });
            };
            CollegeSearchCtrl.prototype.getInstitutionMeta = function () {
                var _this = this;
                this.dashsrv.getInstitustionMeta().then(function (response) {
                    _this.instituionInfo = response;
                });
            };
            CollegeSearchCtrl.$inject = ["$scope", "DashboardSvc", "$state"];
            return CollegeSearchCtrl;
        })();
        Golf.CollegeSearchCtrl = CollegeSearchCtrl;
        Golf.app.controller("CollegeSearchCtrl", CollegeSearchCtrl);
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
        var FiltersCtrl = (function () {
            function FiltersCtrl($scope, dashsrv, $state) {
                this.$scope = $scope;
                this.dashsrv = dashsrv;
                this.$state = $state;
            }
            FiltersCtrl.$inject = ["$scope", "DashboardSvc", "$state"];
            return FiltersCtrl;
        })();
        Golf.FiltersCtrl = FiltersCtrl;
        Golf.app.controller("FiltersCtrl", FiltersCtrl);
    })(Golf = Potato.Golf || (Potato.Golf = {}));
})(Potato || (Potato = {}));
var Potato;
(function (Potato) {
    var Golf;
    (function (Golf) {
        var LoginCtrl = (function () {
            function LoginCtrl($scope, dashsrv, $state, $auth, $ionicSideMenuDelegate) {
                //this.$ionicSideMenuDelegate.canDragContent(this.dashsrv.showSideNavToggle);
                this.$scope = $scope;
                this.dashsrv = dashsrv;
                this.$state = $state;
                this.$auth = $auth;
                this.$ionicSideMenuDelegate = $ionicSideMenuDelegate;
                this.bio = 'test';
                this.analysisSeries = new Array();
            }
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
    })(Golf = Potato.Golf || (Potato.Golf = {}));
})(Potato || (Potato = {}));
var Potato;
(function (Potato) {
    var Golf;
    (function (Golf) {
        var InstituionInfo = (function () {
            function InstituionInfo() {
                this.flip = false;
            }
            return InstituionInfo;
        })();
        Golf.InstituionInfo = InstituionInfo;
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
                this.api = "http://ec2-52-91-68-23.compute-1.amazonaws.com/CapApi/api/edup/";
                //api = "http://localhost:51201/api/edup/"
                //CSS
                this.sideMenuState = false;
                this.showSideNavToggle = false;
                //User Info
                this.currentActiveUser = new Golf.UserInfo();
                this.getLogin();
            }
            DashboardSvc.prototype.getInstitustionMeta = function () {
                return this.$http.get(this.api + "meta").then(function (r) { return r.data; });
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