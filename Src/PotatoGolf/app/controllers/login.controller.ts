
module Potato.Golf {

    export class LoginCtrl {

        currentView: string;
        bio = 'test';
        chart: any;
        analysisSeries = new Array();



        public static $inject: string[] = ["$scope",  "DashboardSvc", "$state", "$auth", "$ionicSideMenuDelegate"];

        constructor(public $scope: any, public dashsrv: DashboardSvc, public $state: any, public $auth: any, public $ionicSideMenuDelegate: any) {

            //this.$ionicSideMenuDelegate.canDragContent(this.dashsrv.showSideNavToggle);
        }

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