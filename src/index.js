import './sass/main.scss';

import angular from 'angular';
import {APP} from './app';

angular.element(document).ready(function() {
	angular.bootstrap(document, [APP.name]);
});