import angular from 'angular';
import {HOME_DIRECTIVE} from './home.directive';

export const HOME = angular.module('home', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      template: '<home></home>'
    });
  })
  .directive('home', HOME_DIRECTIVE);