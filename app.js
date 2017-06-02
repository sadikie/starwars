var appModule = angular.module('appModule', ['ngResource', 'ui.router']);

appModule.component('app', {
    template: '<wars-list></wars-list>'
});
appModule.config(function($stateProvider) {
    var warriorState = {
        name: 'warriors',
        url: '/warriors',
        template: '<app></app>'
    }

    var blogState = {
        name: 'blog',
        url: '/blog',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    }

    $stateProvider.state(warriorState);
    $stateProvider.state(blogState);
});