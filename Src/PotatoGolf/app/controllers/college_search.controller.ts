module Potato.Golf {

    export class CollegeSearchCtrl {

        testing = [1, 2, 3, 4, 5, 6]
        instituionInfo = new Array<InstituionInfo>();
        public static $inject: string[] = ["$scope", "DashboardSvc", "$state"];
        map: any;

        constructor(public $scope: any, public dashsrv: DashboardSvc, public $state: any) {

            this.getInstitutionMeta();
            
        }

        initMap(info: InstituionInfo) {
            info.UnitId
            var latlng = new google.maps.LatLng(+info.Latitude, +info.Longitude);
            var myOptions = {
                zoom: 12,
                center: latlng,
                mapMaker: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };

            var map = new google.maps.Map(document.getElementById(info.UnitId),
                myOptions);
            var marker = new google.maps.Marker(
                {
                    position: latlng,
                    map: map,
                    title: info.Institution_Name
                });

        }

        getInstitutionMeta() {
            this.dashsrv.getInstitustionMeta().then((response: Array<InstituionInfo>) => {
                this.instituionInfo = response; 
            });

        }
    }
    app.controller("CollegeSearchCtrl", CollegeSearchCtrl);
}