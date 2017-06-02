appModule.component('warsList', {
    templateUrl: 'app/templates/warslist.html',
    controller: function($http, $scope, warriorService) {
        warriorService.get(null, function(response) {
            $scope.warriors = response.results;
        }, function() {
            console.log('response failed');
        });
    }
});