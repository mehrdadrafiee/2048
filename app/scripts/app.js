'use strict';

/**
 * @ngdoc overview
 * @name 2048App
 * @description
 * # 2048App
 *
 * Main module of the application.
 */
angular
  .module('2048App', [Game])
  .controller('GameController', function (GameManager) {
  	this.game = GameManager;
  });
