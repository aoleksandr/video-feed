import angular from 'angular';
import appComponent from './app.component';

const APP_NAME = 'videoFeed';

angular.module(APP_NAME, [])
  .component('app', appComponent);

export default APP_NAME;