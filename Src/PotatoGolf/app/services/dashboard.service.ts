module Potato.Golf {

    export class DashboardSvc {

        api = "http://ec2-52-91-68-23.compute-1.amazonaws.com/CapApi/api/edup/";
        //api = "http://localhost:51201/api/edup/"
        //CSS
        sideMenuState = false;
        showSideNavToggle = false;

        //User Info
        currentActiveUser = new UserInfo();


        public static $inject: string[] = ["$http", "$q"];


        constructor(public $http: angular.IHttpService, public $q: angular.IQService) {

            this.getLogin();
        }


        getInstitustionMeta() {

            return this.$http.get(this.api + "meta").then(r => r.data);

        }

        getLogin() {
            this.currentActiveUser.FirstName = "Joe";
            this.currentActiveUser.LastName = "Capone";

        }

        getLoginCache() {
        }




    }

    app.service("DashboardSvc", DashboardSvc);

}