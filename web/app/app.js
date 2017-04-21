import 'angular-material/angular-material.css';
import '../styles/style.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {appDirective} from './app.directive';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

angular.module('app', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial
])

.config(function($mdThemingProvider) {
  //noinspection JSUnresolvedFunction
  $mdThemingProvider.theme('default');
})

.directive('app', appDirective);
