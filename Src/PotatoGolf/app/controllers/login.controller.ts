
module Potato.Golf {


    export class LoginCtrl {

        instituionInfo = new Array<InstituionInfo>();
        sampleInstiution = new Array<InstituionInfo>();
        map: google.maps.Map;
        infoWindow = new google.maps.InfoWindow();

        public static $inject: string[] = ["$scope", "DashboardSvc", "$state", "$auth", "$ionicSideMenuDelegate", '$window'];

        constructor(public $scope: any, public dashsrv: DashboardSvc, public $state: any, public $auth: any, public $ionicSideMenuDelegate: any, public $window: any) {

            //this.$ionicSideMenuDelegate.canDragContent(this.dashsrv.showSideNavToggle);
            this.getInstitutionMeta();
            window.onscroll = function () { this.headerScroll() };

        }

        getLoginCache() {
            this.$state.go("dashboard");
        }

        getInstitutionMeta() {
            this.dashsrv.getInstitustionMeta().then((response: Array<InstituionInfo>) => {
                this.instituionInfo = response;
                this.drawMap();
            });

        }

        headerScroll() {
            console.log('hit');
            var header = $('.main-content-wrapper');
            var range = 200;


            var scrollTop = $(this).scrollTop();
            var offset = header.offset().top;
            var height = header.outerHeight();
            offset = offset + height / 2;
            var calc = 1 - (scrollTop - offset + range) / range;

            header.css({ 'opacity': calc });

            if (calc > 1) {
                header.css({ 'opacity': 1 });
            } else if (calc < 0) {
                header.css({ 'opacity': 0 });

            }
            console.log(calc);


        }


        drawMap(): void {
            this.infoWindow = new google.maps.InfoWindow();
            this.infoWindow.setContent
                var myOptions = {
                    zoom: 3,
                    center: new google.maps.LatLng(39.909736, -98.522109),
                    mapMaker: false,
                    scrollwheel: false,
                    navigationControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    draggable: false,
                    zoomControl: false,
                    disableDoubleClickZoom: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                this.map = new google.maps.Map(document.getElementById('sampleMap'), myOptions);
                _.forEach(this.instituionInfo, (i) => {
                    var marker = this.addWaterMakers(i);
                    marker.getIcon();
                    this.addMapIconListener(marker);
                });
                //google.maps.event.addDomListener(window, "load", function () { this.map });
        }

        addWaterMakers(info: InstituionInfo): google.maps.Marker {
            return new google.maps.Marker(
                {
                    position: new google.maps.LatLng(+info.Latitude, +info.Longitude),
                    map: this.map,
                    title: info.Institution_Name,
                    icon: "http://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png"

                });
        }

        addMapIconListener(marker: google.maps.Marker) {
            this.infoWindow.addListener("click" , function () {
                google.maps.event.addListener(marker, "click", function () {
                    this.infoWindow.setContent('Testing');
                    this.infoWindow.open(this.map, this);
                });
            });
        }

    }
    app.controller("LoginCtrl", LoginCtrl);
}