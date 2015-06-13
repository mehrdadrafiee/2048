'use strict';

/**
 * @ngdoc function
 * @name 2048App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 2048App
 */
angular.module('2048App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
