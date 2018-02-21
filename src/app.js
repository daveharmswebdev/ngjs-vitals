import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'bootstrap';

import './assets/media/scss/app.scss';

import { MainCtrl } from './controllers/MainCtrl';
import { routing } from './app.routing';

angular.module('app', [uiRouter]);

angular.module('app').config(routing);

angular.module('app').controller('mainCtrl', MainCtrl);

angular.module('app').component('lkqNavbar', {
  template: `
      <a ui-sref="hello">Hello</a>
      <a ui-sref="about">About</a>
    `
});
