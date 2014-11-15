(function (ng, _) {
    'use strict';

    ng.module('wfe2App').controller('PoolCtrl', poolCtrl);
    
    function poolCtrl($scope, $http, $routeParams, $timeout, statsUrl, statsService) {
        $scope.poolName = $routeParams.poolName;
        
        statsService(function(data){
            $scope.pools = data.pools;
            if ($scope.poolName){
                $scope.poolStats = data.pools[$scope.poolName];
            }
        });
/*
        function getData () {
            $http.get(statsUrl)
                .success(function (data) {
                    $scope.pools = _.toArray(data.pools);
                    if ($scope.poolName){
                        $scope.poolStats = data.pools[$scope.poolName];
                    }
                    $timeout(getData, 3000);
                });
        }
        
        getData();
*/

        $scope.poolDetails = {
            'saffroncoin': { stratum: 'stratum.morehash.pw:3333'},
            'ufocoin': { stratum: 'stratum.morehash.pw:3334' },
            'popcoin': { stratum: 'stratum.morehash.pw:3335' },
            'phoenixcoin': { stratum: 'stratum.morehash.pw:3336' }
        }
    }
})(angular, _);