class AppCtrl {

    constructor (AppService) {
        this.AppService = AppService;
        this.getLeagues();
        this.getStanding("6361");
    }

    getLeagues() {
        this.AppService.getLeagues().then( (results) => {
            this.leagues = results;
        }, (error) => {
            // TODO handle errors
        });
    }

    getStanding(id) {
        this.AppService.getStanding(id).then( (results) => {
            this.standing = results;
        }, (error) => {
            // TODO handle errors
        })

    }
}
AppCtrl.$inject = ['AppService'];
export default AppCtrl;