'use strict';

/**
 * @ngdoc function
 * @name solnetDashboardApp.controller:layoutCtrl
 * @description
 * # layoutCtrl
 * Controller of the solnetDashboardApp
 */
angular.module('solnetDashboardApp')
  .controller('layoutCtrl', ['$scope', '$location', 'solnetDashboardLocalData', 'solnetDashboardCommon', function ($scope, $location, solnetDashboardLocalData, solnetDashboardCommon) {

    $scope.selected = undefined;

    solnetDashboardLocalData.loadMockData('moc-data/typeahead.json').then(function (data) {
      $scope.typeAheadItems = data.typeahead;
    });

    $scope.isActive = function (route) {
      return route === $location.path();
    };


    $scope.loadAnotherPortfolio = function (source) {

      /*Reload dashboard data from another extern al source ('moc-data/dashboardMockAnother.json')*/
      solnetDashboardLocalData.loadMockData(source).then(function (mockData) {
        $scope.$broadcast('reloadDashboardData', mockData);
      });

    }
  }]);
