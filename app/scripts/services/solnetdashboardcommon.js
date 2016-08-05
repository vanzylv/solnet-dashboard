'use strict';

/**
 * @ngdoc service
 * @name solnetDashboardApp.solnetDashboardCommon
 * @description
 * # solnetDashboardCommon
 * Service in the solnetDashboardApp.
 */
angular.module('solnetDashboardApp')
  .service('solnetDashboardCommon', function () {

    this.applyCommonBindings = function (mockData) {


      // AngularJS will instantiate a singleton by calling "new" on this function
      var root = {};
      root.portfolioManager = mockData.portfolioManager.name;

      /*Working hours*/
      root.labelsWorkingHours = mockData.workingHours.monthTimeSeries;
      root.seriesWorkingHours = mockData.workingHours.hoursTimeSeries;
      root.workingHoursData = mockData.workingHours.hours;


      /*Working hours breakdown*/
      root.workingHoursBreakdownChart = {
        workingHoursDataBreakdown: mockData.workingHoursDataBreakdown.hours,
        labelsWorkingHoursBreakdown: new Array(mockData.workingHoursDataBreakdown.hours[0].length),
        totalHoursBreakdown: mockData.workingHoursDataBreakdown.totalHours
      };

      root.dailyProgress = {
        data : mockData.dailyProgress.data,
        series : mockData.dailyProgress.monthTimeSeries
      };

      /*Conversations*/
      root.conversationChart =
      {
        labelsConversations: new Array(mockData.conversations.conversation[0].length),
        conversationsData: mockData.conversations.conversation,
        totalConversations: mockData.conversations.total
      };

      /*Projects*/
      root.projects = mockData.projects;

      /*People*/
      root.people = {
        totalPeople: mockData.people.data.length,
        persons: mockData.people.data
      };


      root.clientBilling = {
        data: mockData.clientBilling.weeklyOverdue,
        workingHours: mockData.clientBilling.workingHours,
        clients: mockData.clientBilling.clients,
        clientManager: mockData.clientBilling.clientManager
      };
      return root;
    }

  });
