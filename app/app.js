(function () {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .config(config)
        .run(run);

    function config($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/index.html',
                controller: 'Home.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'home' }
            })
            .state('dashboard', {
                url: '/',
                templateUrl: 'dashboard/index.html',
                controller: 'dashboard.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'dashboard' }
            })
            .state('account', {
                url: '/account',
                templateUrl: 'account/index.html',
                controller: 'Account.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'account' }
            })
            .state('gateway', {
                url: '/account',
                templateUrl: 'gateway/index.html',
                controller: 'gateway.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'gateway' }
            })
            
            .state('tendances', {
                url: '/tendances',
                templateUrl: 'tendances/index.html',
                controller: 'tendances.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'tendances' }
            });
            
    }

    function run($http, $rootScope, $window) {
        // add JWT token as default auth header
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + $window.jwtToken;

        // update active tab on state change
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.activeTab = toState.data.activeTab;
        });
    }

    // manually bootstrap angular after the JWT token is retrieved from the server
    $(function () {
        // get JWT token from server
        $.get('/app/token', function (token) {
            window.jwtToken = token;

            angular.bootstrap(document, ['app']);
        });
    });
    
})();
'use strict';
angular.module( 'myApp', [
'ngRoute',
'myApp.filters',
'myApp.services',
'myApp.directives',
'myApp.controllers'
])
.config(['$routeProvider', function( $routeProvider) {
$routeProvider.when( '/dashboard', {templateUrl: 'dashboard/index.html', controller: 'index.controller'});
$routeProvider.when( '/stays', {templateUrl: 'stays/index.html', controller: 'index.controller'});
$routeProvider.otherwise({ redirectTo: '/dashboard' });
}]);