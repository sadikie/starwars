appModule.factory('warriorService', function($resource) {
    var url = 'https://swapi.co/api/people/';
    return $resource(url, { cache: true });
});