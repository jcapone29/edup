﻿module Potato.Golf {

    export class CollegeSearchCtrl {

        testing = [1,2,3,4,5,6]
        public static $inject: string[] = ["$scope", "DashboardSvc", "$state"];

        constructor(public $scope: any, public dashsrv: DashboardSvc, public $state: any) {


        }

    }
    app.controller("CollegeSearchCtrl", CollegeSearchCtrl);
}