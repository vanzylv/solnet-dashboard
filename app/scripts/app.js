'use strict';

/**
 * @ngdoc overview
 * @name solnetDashboardApp
 * @description
 * # solnetDashboardApp
 *
 * Main module of the application.
 */

$.material.init();

angular
  .module('solnetDashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider,ChartJsProvider) {

    ChartJsProvider.setOptions('line', {
      colours: [
        {
          fillColor: "rgba(0, 0, 0, 0)",
          strokeColor: "rgba(207,100,103,1)"
        }
      ]
    });

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/timemanagement', {
        templateUrl: 'views/timemanagement.html',
        controller: 'TimemanagementCtrl'
      })
      .when('/inbox', {
        templateUrl: 'views/inbox.html',
        controller: 'InboxCtrl'
      })
      .when('/calendar', {
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl'
      })
      .when('/analytics', {
        templateUrl: 'views/analytics.html',
        controller: 'AnalyticsCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


