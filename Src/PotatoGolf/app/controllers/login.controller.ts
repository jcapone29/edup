
module Potato.Golf {

    export class LoginCtrl {

        currentView: string;
        bio = 'test';
        chart: any;
        analysisSeries = new Array();



        public static $inject: string[] = ["$scope",  "DashboardSvc", "$state", "$auth", "$ionicSideMenuDelegate"];

        constructor(public $scope: any, public dashsrv: DashboardSvc, public $state: any, public $auth: any, public $ionicSideMenuDelegate: any) {

            //this.$ionicSideMenuDelegate.canDragContent(this.dashsrv.showSideNavToggle);

            $scope.authenticate = function (provider:any) {
                console.log(provider);
                $auth.authenticate(provider);
            };

        }

    //    onSignIn(googleUser: any) {
    //    var profile = googleUser.getBasicProfile();
    //    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    //    console.log('Name: ' + profile.getName());
    //    console.log('Image URL: ' + profile.getImageUrl());
    //    console.log('Email: ' + profile.getEmail());
    //};

        authenticate(provider: string) {
            console.log(provider);
            this.$auth.authenticate(provider).then((response: any) => {
                console.log(response);
            }).catch((response: any) => {
                console.log(response);
            });;
        };

        getLoginCache() {
            this.$state.go("dashboard");
        }

    }
    app.controller("LoginCtrl", LoginCtrl);
}