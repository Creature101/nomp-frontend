(function () {
    
angular.module('wfe2App')
  .factory('statsService', ['$cacheFactory', '$http', '$timeout', 'statsUrl', 
  function($cacheFactory, $http, $timeout, statsUrl) {
    
    var apiCache = $cacheFactory('api-cache');
    
    return function(callback){
        getData(callback);
    }
    
    function getData(callback){
        var cachedData = apiCache.get('stats');
        if (cachedData && cachedData.lastGetTime > Date.now() - 10000){
            callback(cachedData);
        }
        else{
            $http.get(statsUrl)
                .success(function (data) {
                    data.lastGetTime = Date.now();
                    apiCache.put('stats', data);
                    callback(data);
                    //$timeout(getData.bind(undefined, callback), 3000);
                });
        }
    }
  }]);
  
})();