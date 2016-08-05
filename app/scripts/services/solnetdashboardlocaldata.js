'use strict';

/**
 * @ngdoc service
 * @name solnetDashboardApp.solnetDashboardLocalData
 * @description
 * # solnetDashboardLocalData
 * Factory in the solnetDashboardApp.
 */
angular.module('solnetDashboardApp')
  .factory('solnetDashboardLocalData', ['$http', '$q', function ($http, $q) {
    return {
      loadMockData: function (source) {
        var def = $q.defer();

        $http.get(source)
          .success(function (data) {
            def.resolve(data);
          })
          .error(function () {
            def.reject('Failed to load local mock data');
          });
        return def.promise;
      }

    };
  }]);
