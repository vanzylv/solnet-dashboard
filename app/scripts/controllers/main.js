'use strict';

/**
 * @ngdoc function
 * @name solnetDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the solnetDashboardApp
 */
angular.module('solnetDashboardApp')
  .controller('MainCtrl', ['$scope', '$window', 'solnetDashboardLocalData', 'solnetDashboardCommon',
    function ($scope, $window, solnetDashboardLocalData, solnetDashboardCommon) {

      /*chart.js options*/
      $scope.optionsWorkingHoursBreakdown = $scope.optionsConversationsBreakdown = {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {

              ticks: {
                display: false,

              }
            },
            {

              ticks: {
                display: false,

              }
            }
          ]
        }
      };

      $scope.dailyProgressChartOptions = {
        elements: {
          line: {
            fill: false,
            tension: 0.1,
            borderWidth: 3

          }
        }
      }


      /*Catch broadcasted event from root controller and apply new values to scope*/
      $scope.$on('reloadDashboardData', function (event, mockData) {
        loadData(mockData);
      });

      /*Load dashboard data from external source*/
      solnetDashboardLocalData.loadMockData('moc-data/dashboardMock.json').then(function (mockData) {
        loadData(mockData);
      });

      /*Common function to apply bindings for different data sets*/
      function loadData(mockData) {
        $scope.dashboard = solnetDashboardCommon.applyCommonBindings(mockData);
      }
    }]);
