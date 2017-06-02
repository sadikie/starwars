appModule.component('warsList', {
    templateUrl: 'app/templates/warslist.html',
    controller: function($http, $scope) {
        // Simple GET request example:
        $http({
            method: 'GET',
            url: 'https://swapi.co/api/people/',
        }).then(function successCallback(response) {
            console.log(response)
            console.log(response.data.results)
            $scope.warriors = response.data.results
                // angular.forEach(warriors, function(warrior){
                //     $scope.warrior = warrior
                // })
        }, function errorCallback(response) {
            console.log(response)
        });


    }
})