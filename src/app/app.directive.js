// can load scss from here or like now, from main.scss
// import './app.scss';
import template from './app.html';

export const APP_DIRECTIVE = () => {
  return {
    template,
    restrict: 'E',
    scope: {},
    replace: true
  };
};