import app from './app';


describe("app api service", () => {
    var appService, httpBackend;

    beforeEach(angular.mock.module(app));

    beforeEach(inject(function (_AppService_, $httpBackend) {
        appService = _AppService_;
        httpBackend = $httpBackend;
    }));


    it("should do something", function () {
        httpBackend.whenGET("https://soccer.sportmonks.com/api/v2.0/leagues?api_token=LYzLaYN0cza7YxUCFLLMV9FPgjyIgRnNqT3JP5QJ7P90kcgcswCGUpwAM5JD").respond({
            data: [{
                "id": 271,
                "legacy_id": 43,
                "country_id": 320,
                "name": "Superliga",
                "is_cup": false,
                "current_season_id": 6361,
                "current_round_id": 127988,
                "current_stage_id": 48050,
                "live_standings": true,
                "coverage": {"topscorer_goals": true, "topscorer_assists": true, "topscorer_cards": true}
            }, {
                "id": 501,
                "legacy_id": 66,
                "country_id": 1161,
                "name": "Premiership",
                "is_cup": false,
                "current_season_id": 7953,
                "current_round_id": 129144,
                "current_stage_id": 56530,
                "live_standings": true,
                "coverage": {"topscorer_goals": true, "topscorer_assists": true, "topscorer_cards": true}
            }],
            "meta": {
                "subscription": {
                    "started_at": {
                        "date": "2017-03-20 21:02:56.000000",
                        "timezone_type": 3,
                        "timezone": "UTC"
                    }, "trial_ends_at": null, "ends_at": null
                },
                "plan": {"name": "Free Plan", "price": "0.00", "request_limit": "3,1"},
                "sports": [{"id": 1, "name": "Soccer", "current": true}],
                "pagination": {
                    "total": 2,
                    "count": 2,
                    "per_page": 100,
                    "current_page": 1,
                    "total_pages": 1,
                    "links": []
                }
            }
        });
        httpBackend.whenGET("https://soccer.sportmonks.com/api/v2.0/leagues?api_token=LYzLaYN0cza7YxUCFLLMV9FPgjyIgRnNqT3JP5QJ7P90kcgcswCGUpwAM5JE").respond({
            "error": {
            "message": "Unauthenticated.",
                "code": 401
            }
        });
        appService.getLeagues().then((leagues) => {
            if (!leagues.data.error) {
                expect(leagues.data.data.length).toEqual(2);
            } else if (leagues.data.error) {
                expect(leagues.data.error.code).notNull;
            }
        });

        /*httpBackend.when('GET', 'https://soccer.sportmonks.com/api/v2.0/leagues?api_token=LYzLaYN0cza7YxUCFLLMV9FPgjyIgRnNqT3JP5QJ7P90kcgcswCGUpwAM5JD').respond( (result) => {
            // do nothing
        }, (error) => {
            expect(error.code).toEqual(404);
        });*/

        httpBackend.flush();
    });
});