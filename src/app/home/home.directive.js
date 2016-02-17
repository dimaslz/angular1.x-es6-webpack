import {HomeController as controller} from './home.ctrl';
import template from './home.html';

// can load scss from here or like now, from main.scss
// import './home.scss';

export const HOME_DIRECTIVE = ()=> {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};