import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'bootstrap';

import './assets/scss/app.scss';

import { homeCtrl } from './home/homeCtrl';
import { routing } from './app.routing';

import { LkqAbout } from './about/lkq-about.component';
import { LkqNavbar } from './navbar/lkq-navbar.component';
import { LkqFooter } from './footer/lkq-footer.component';
import { LkqTodos } from './todos/lkq-todos.component';
import { TodosService } from './todos/lks-todos.service';

// app
angular.module('app', [uiRouter]);

// routing
angular.module('app').config(routing);

// home page
angular.module('app').controller('homeCtrl', homeCtrl);

angular.module('app').component('lkqAbout', LkqAbout);

// nav and footer components
angular.module('app').component('lkqNavbar', LkqNavbar);
angular.module('app').component('lkqFooter', LkqFooter);
angular.module('app').component('lkqTodos', LkqTodos);

// service
angular.module('app').service('TodosService', TodosService);
