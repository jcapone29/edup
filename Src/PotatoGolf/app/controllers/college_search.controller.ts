module Potato.Golf {

    export class CollegeSearchCtrl {


        public static $inject: string[] = ["$scope", "DashboardSvc", "$state"];

        constructor(public $scope: any, public dashsrv: DashboardSvc, public $state: any) {


        }

    }
    app.controller("CollegeSearchCtrl", CollegeSearchCtrl);
}