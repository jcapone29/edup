﻿
module Potato.Golf {

    export class DashboardCtrl {

        public static $inject: string[] = ["$scope", "DashboardSvc", "$state"];

        constructor(public $scope: any, public dashsrv: DashboardSvc, public $state: any) {


        }

    }
        app.controller("DashboardCtrl", DashboardCtrl);
}