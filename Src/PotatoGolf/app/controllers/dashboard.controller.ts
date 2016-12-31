
module Potato.Golf {

    export class DashboardCtrl {

        public static $inject: string[] = ["$scope", "DashboardSvc", "$state", '$mdSidenav'];

        constructor(public $scope: any, public dashsrv: DashboardSvc, public $state: any, public $mdSidenav: any) {


            
        }

        toggleLeft() {
            this.$mdSidenav('left').toggle();
        }

        buildToggler() {
            return 
            
        }

    }
        app.controller("DashboardCtrl", DashboardCtrl);
}