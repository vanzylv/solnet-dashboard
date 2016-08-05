"use strict";$.material.init(),angular.module("solnetDashboardApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","chart.js","ui.bootstrap"]).config(["$routeProvider","ChartJsProvider",function(a,b){b.setOptions("line",{colours:[{fillColor:"rgba(0, 0, 0, 0)",strokeColor:"rgba(207,100,103,1)"}]}),a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/timemanagement",{templateUrl:"views/timemanagement.html",controller:"TimemanagementCtrl"}).when("/inbox",{templateUrl:"views/inbox.html",controller:"InboxCtrl"}).when("/calendar",{templateUrl:"views/calendar.html",controller:"CalendarCtrl"}).when("/analytics",{templateUrl:"views/analytics.html",controller:"AnalyticsCtrl"}).when("/settings",{templateUrl:"views/settings.html",controller:"SettingsCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("solnetDashboardApp").controller("layoutCtrl",["$scope","$location","solnetDashboardLocalData","solnetDashboardCommon",function(a,b,c,d){a.selected=void 0,c.loadMockData("moc-data/typeahead.json").then(function(b){a.typeAheadItems=b.typeahead}),a.isActive=function(a){return a===b.path()},a.loadAnotherPortfolio=function(b){c.loadMockData(b).then(function(b){a.$broadcast("reloadDashboardData",b)})}}]),angular.module("solnetDashboardApp").controller("MainCtrl",["$scope","$window","solnetDashboardLocalData","solnetDashboardCommon",function(a,b,c,d){function e(b){a.dashboard=d.applyCommonBindings(b)}a.optionsWorkingHoursBreakdown=a.optionsConversationsBreakdown={maintainAspectRatio:!1,scales:{yAxes:[{ticks:{display:!1}},{ticks:{display:!1}}]}},a.dailyProgressChartOptions={elements:{line:{fill:!1,tension:.1,borderWidth:3}}},a.$on("reloadDashboardData",function(a,b){e(b)}),c.loadMockData("moc-data/dashboardMock.json").then(function(a){e(a)})}]),angular.module("solnetDashboardApp").controller("TimemanagementCtrl",["$scope",function(){console.log("TimemanagementCtrl")}]),angular.module("solnetDashboardApp").controller("AnalyticsCtrl",function(){console.log("AnalyticsCtrl")}),angular.module("solnetDashboardApp").controller("CalendarCtrl",function(){console.log("CalendarCtrl")}),angular.module("solnetDashboardApp").controller("InboxCtrl",function(){console.log("InboxCtrl")}),angular.module("solnetDashboardApp").controller("SettingsCtrl",function(){console.log("SettingsCtrl")}),angular.module("solnetDashboardApp").service("solnetDashboardCommon",function(){this.applyCommonBindings=function(a){var b={};return b.portfolioManager=a.portfolioManager.name,b.labelsWorkingHours=a.workingHours.monthTimeSeries,b.seriesWorkingHours=a.workingHours.hoursTimeSeries,b.workingHoursData=a.workingHours.hours,b.workingHoursBreakdownChart={workingHoursDataBreakdown:a.workingHoursDataBreakdown.hours,labelsWorkingHoursBreakdown:new Array(a.workingHoursDataBreakdown.hours[0].length),totalHoursBreakdown:a.workingHoursDataBreakdown.totalHours},b.dailyProgress={data:a.dailyProgress.data,series:a.dailyProgress.monthTimeSeries},b.conversationChart={labelsConversations:new Array(a.conversations.conversation[0].length),conversationsData:a.conversations.conversation,totalConversations:a.conversations.total},b.projects=a.projects,b.people={totalPeople:a.people.data.length,persons:a.people.data},b.clientBilling={data:a.clientBilling.weeklyOverdue,workingHours:a.clientBilling.workingHours,clients:a.clientBilling.clients,clientManager:a.clientBilling.clientManager},b}}),angular.module("solnetDashboardApp").factory("solnetDashboardLocalData",["$http","$q",function(a,b){return{loadMockData:function(c){var d=b.defer();return a.get(c).success(function(a){d.resolve(a)}).error(function(){d.reject("Failed to load local mock data")}),d.promise}}}]),angular.module("solnetDashboardApp").run(["$templateCache",function(a){a.put("views/analytics.html",'<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <title>analytics</title> <div>Analytics</div> </head> <body> </body> </html>'),a.put("views/calendar.html",'<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <title>calendar</title> <div>Calendar</div> </head> <body> </body> </html>'),a.put("views/inbox.html",'<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <title>Inbox</title> <div>Inbox</div> </head> <body> </body> </html>'),a.put("views/main.html",'<div ng-controller="MainCtrl" class="container-fluid display-table"> <div class="row display-table-row"> <div class="row"> <div class="col-md-12 col-sm-12 col-xs-12 gutter"> <div class="common-padding-top"><strong>Hi {{dashboard.portfolioManager}}.</strong></div> <div class="no-padding-bottom"> <small>Check out your latest projects and their progress</small> </div> <hr> </div> </div> <div class="row"> <div class="col-md-12 col-sm-12 col-xs-12 gutter"> <div class="panel panel-default"> <div class="panel-heading panel-heading-override"> <div><strong>Wavy Lines</strong></div> <div>Working hours</div> </div> <div class="panel-body"> <canvas height="100" class="chart chart-line" chart-data="dashboard.workingHoursData" chart-dataset-override="dashboard.datasetOverride" chart-labels="dashboard.labelsWorkingHours" chart-series="dashboard.seriesWorkingHours"> </canvas> </div> </div> </div> </div> <div class="row"> <div class="col-md-12 col-sm-12 col-xs-12 gutter"> <div class="common-padding-top"><strong>Crunch some Numbers</strong></div> <div class="no-padding-bottom"> <small>See how your projects are progressing via the new statistics engine.</small> </div> <hr> </div> </div> <div class="row"> <div class="col-md-4 col-sm-4 col-xs-4 gutter"> <div class="panel panel-default"> <div class="panel-body"> <div class="row"> <div class="col-md-12 col-sm-12 col-xs-12 gutter"> <div class="row"> <div class="col-md-4 text-center common-margin-top"> <div> <strong ng-bind="dashboard.workingHoursBreakdownChart.totalHoursBreakdown"></strong> </div> <div class="subheading"> <smaller>Working Hours</smaller> </div> </div> <div class="col-md-8"> <canvas class="chart chart-line" chart-data="dashboard.workingHoursBreakdownChart.workingHoursDataBreakdown" chart-options="optionsWorkingHoursBreakdown" chart-labels="dashboard.workingHoursBreakdownChart.labelsWorkingHoursBreakdown"> </canvas> </div> </div> <hr> </div> <div class="col-md-12 col-sm-12 col-xs-12 gutter"> <div class="row"> <div class="col-md-4 text-center"> <div class="common-margin-top"> <strong ng-bind="dashboard.conversationChart.totalConversations"></strong> </div> <div class="subheading"> <smaller>Conversations</smaller> </div> </div> <div class="col-md-8"> <canvas class="chart chart-line" chart-data="dashboard.conversationChart.conversationsData" chart-options="optionsWorkingHoursBreakdown" chart-dataset-override="[{lineTension: 0},{showTooltips:false}]" chart-labels="dashboard.conversationChart.labelsConversations"> </canvas> </div> </div> <hr> </div> <div class="col-md-12 col-sm-12 col-xs-12 gutter"> <div class="row"> <div class="col-md-4 text-center"> <div> <strong ng-bind="dashboard.people.totalPeople"></strong> </div> <div class="subheading"> <smaller>People</smaller> </div> </div> <div class="col-md-8"> <div class="pull-left account-circle-padding" ng-repeat="person in dashboard.people.persons"> <i class="material-icons">account_circle</i> </div> </div> </div> </div> </div> </div> </div> </div> <div class="col-md-8 col-sm-8 col-xs-8 gutter"> <div class="panel panel-default"> <div class="panel-heading panel-heading-override"> <div><strong>Daily Progress</strong></div> <div class="subheading">Working hours</div> </div> {{datasetOverride}} <div class="panel-body"> <canvas class="chart chart-line" chart-data="dashboard.dailyProgress.data" chart-options="dailyProgressChartOptions" chart-labels="dashboard.dailyProgress.series" chart-dataset-override="datasetOverride" chart-series="dashboard.dailyProgress.series"> </canvas> </div> </div> </div> </div> </div> <div class="row"> <div class="col-md-12 col-sm-12 col-xs-12 gutter"> <div class="common-padding-top"><strong>Current Progress</strong></div> <div class="no-padding-bottom"> <small>This table will show you how your current projects are behaving.</small> </div> <hr> </div> </div> <div class="row"> <div class="col-md-12 col-sm-12 col-xs-12 gutter"> <div ng-repeat="project in dashboard.projects"> <div class="common-margin-bottom panel panel-default"> <div class="panel-body"> <div class="row"> <div class="col-xs-3 pull-left"> <strong> <div ng-bind="project.title"></div> </strong> <div ng-bind="project.descriptionType"> </div> </div> <div class="col-xs-3 project-list-padding-top"> <div class="pull-right last-updated-text" ng-bind="\'Last updated \' + project.lastUpdated"> </div> </div> <div class="col-xs-2 gutter"> <div class="row"> <div class="col-xs-6 gutter project-list-padding-top"> <div class="row"> <div class="col-xs-6 gutter"> <i class="material-icons">alarm</i> </div> <div class="col-xs-6 gutter"> <div class="time-spent-text pull-left" ng-bind="project.timeSpent"> </div> </div> </div> </div> <div class="col-xs-6 gutter"> <div class="row"> <div class="col-xs-6 gutter project-list-padding-top"> <i class="material-icons">note</i> </div> <div class="col-xs-6 gutter project-list-padding-top"> <div class="time-spent-text pull-left" ng-bind="project.count"> </div> </div> </div> </div> </div> </div> <div class="col-xs-4 gutter project-list-padding-top"> <div class="panel-margin-top progress"> <div class="progress-bar progress-bar-info" ng-style="{\'width\': project.progress}"></div> </div> </div> </div> </div> </div> </div> </div> </div> <div class="row"> <div class="col-md-12 col-sm-12 col-xs-12 gutter"> <div class="common-padding-top"><strong>Crunch some more Numbers</strong></div> <div class="no-padding-bottom"> <small>See how your projects are progressing via the new statistics engine.</small> </div> <hr> </div> </div> <div class="row"> <div class="col-md-4 col-sm-4 col-xs-4 gutter"> <div class="common-margin-bottom panel panel-default"> <div class="panel-heading panel-heading-override"> <div><strong>Client Hours</strong></div> <div class="subheading">Working hours {{dashboard.clientBilling.workingHours}}</div> </div> <div class="panel-body"> <div class="common-padding-bottom"> <canvas id="doughnut" class="chart chart-doughnut" chart-data="dashboard.clientBilling.data" chart-labels="[]"> </canvas> </div> <div class="row text-center"> <div ng-repeat="client in dashboard.clientBilling.clients"> <div class="col-xs-8 gutter"> <div class="client-name-text pull-left">{{client[0]}}</div> </div> <div class="col-xs-4 gutter"> <div><strong>{{client[1]}}</strong></div> </div> </div> </div> </div> </div> </div> <div class="col-md-4 col-sm-4 col-xs-4 gutter"> <div class="common-margin-bottom panel panel-default"> <div class="panel-body"> <div class="row"> <div class="col-md-12 col-sm-12 col-xs-12 text-center"> <i class="material-icons md-48">account_circle</i> </div> </div> <div class="row"> <div class="col-md-12 col-sm-12 col-xs-12 gutter text-center"> <strong>{{dashboard.clientBilling.clientManager.name}}</strong> {{dashboard.clientBilling.clientManager.location}} </div> </div> <hr> <div class="row"> <div class="billing-border-right col-xs-6 gutter"> <div>Working hours</div> <div> <strong>{{dashboard.clientBilling.clientManager.workHours}}</strong> </div> </div> <div class="col-md-6 col-sm-6 col-xs-6 gutter"> <div>Amount total</div> <div> <strong>{{dashboard.clientBilling.clientManager.amountTotal}}</strong> </div> </div> </div> <hr> <div class="row"> <div class="billing-border-right col-md-6 col-sm-6 col-xs-6 gutter"> <div>Overdue</div> <div> <strong>{{dashboard.clientBilling.clientManager.overdue}}</strong> </div> </div> <div class="col-md-6 col-sm-6 col-xs-6 gutter"> <div>% Overall work</div> <div><strong>{{dashboard.clientBilling.clientManager.percOverallWork}}</strong></div> </div> </div> </div> </div> </div> <div class="col-md-4 col-sm-4 col-xs-4 gutter"> <div class="common-margin-bottom panel panel-default"> <div class="panel-body"> <div class="row"> <div class="col-xs-12 gutter"> <div class="panel-heading panel-heading-override"> <div><strong>Total Overdue</strong></div> <div class="subheading"> Dollars all round </div> <div class="h1 client-billing-overdue text-center"> {{dashboard.clientBilling.clientManager.overdue}} </div> </div> </div> </div> <div class="row"> <div class="col-md-12 col-sm-12 col-xs-12 gutter"> <canvas class="chart chart-line" chart-data="dashboard.workingHoursData" chart-options="dailyProgressChartOptions" chart-labels="dashboard.labelsWorkingHours" chart-series="dashboard.seriesWorkingHours"> </canvas> </div> </div> </div> </div> </div> <div class="row"> <div class="col-md-12 col-sm-12 col-xs-12 gutter"> <hr> </div> </div> </div> </div>'),a.put("views/settings.html",'<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <title>Settings</title> <div>Settings</div> </head> <body> </body> </html>'),a.put("views/timemanagement.html",'<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <title>Timemanagement</title> <div>Timemanagement</div> </head> <body> </body> </html>')}]);