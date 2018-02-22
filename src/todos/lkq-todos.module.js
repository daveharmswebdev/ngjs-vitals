import angular from 'angular';
import { LkqTodos } from './lkq-todos.component';
import { TodosService } from './lks-todos.service';

export const TodoModule = angular
  .module('TodoModule', [])
  .component('lkqTodos', LkqTodos)
  .service('TodosService', TodosService)
  .name
