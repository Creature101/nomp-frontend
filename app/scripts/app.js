(function () {
    'use strict';

    function wfeRouteProvider($routeProvider) {
        $routeProvider
          .when('/', {
              templateUrl: 'views/dashboard.html',
              controller: 'PoolCtrl'
          })
          .when('/pool/:poolName', {
              templateUrl: 'views/pool.html',
              controller: 'PoolCtrl',
              controllerAs: 'pool'
          })
          .otherwise({
              redirectTo: '/'
          });
    }

    angular.module('wfe2App', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(wfeRouteProvider)
    .constant('statsUrl', 'http://morehash.pw/api/stats');

})();