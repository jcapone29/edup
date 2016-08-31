
module Potato.Golf {

    export class DashboardCtrl {

        currentView: string;
        bio = 'test';
        chart: any;
        analysisSeries = new Array();


        public static $inject: string[] = ["$scope", "DashboardSvc", "$state"];

        constructor(public $scope: any, public dashsrv: DashboardSvc, public $state: any) {


        }

    }
        app.controller("DashboardCtrl", DashboardCtrl);
}