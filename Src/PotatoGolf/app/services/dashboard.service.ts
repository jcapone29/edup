module Potato.Golf {

    export class DashboardSvc {

        api = "http://ec2-52-91-68-23.compute-1.amazonaws.com/CapApi/api/Hedge/";

        //CSS
        sideMenuState = false;
        showSideNavToggle = false;

        //User Info
        currentActiveUser = new UserInfo();


        public static $inject: string[] = ["$http", "$q"];


        constructor(public $http: angular.IHttpService, public $q: angular.IQService) {

            this.getLogin();
        }


        getTickets() {

           // return this.$http.get(this.api + "ticker").then(r => r.data);

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