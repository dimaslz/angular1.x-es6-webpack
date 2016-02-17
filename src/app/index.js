import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {APP_DIRECTIVE} from './app.directive';

import {HOME} from './home/index';

export const APP = angular.module('app', [uiRouter,HOME.name])
  .directive('app', APP_DIRECTIVE);