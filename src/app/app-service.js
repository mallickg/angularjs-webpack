class AppService {

    constructor ($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getLeagues() {
        var deferred = this.$q.defer();
        this.$http.get('https://soccer.sportmonks.com/api/v2.0/leagues?api_token=LYzLaYN0cza7YxUCFLLMV9FPgjyIgRnNqT3JP5QJ7P90kcgcswCGUpwAM5JD').then( (leagues) => {
            deferred.resolve(leagues.data.data);
        }, (error) => {
            deferred.reject(error);
        });
        return deferred.promise;
    }

    getStanding(id) {
        var deferred = this.$q.defer();
        this.$http.get('https://soccer.sportmonks.com/api/v2.0/standings/season/' + id + '?api_token=LYzLaYN0cza7YxUCFLLMV9FPgjyIgRnNqT3JP5QJ7P90kcgcswCGUpwAM5JD').then( (result) => {
            deferred.resolve(result.data.data[0].standings.data);
        }, (error) => {
            deferred.reject(error);
        });
        return deferred.promise;
    }

}
AppService.$inject = ['$http', '$q'];
export default AppService;