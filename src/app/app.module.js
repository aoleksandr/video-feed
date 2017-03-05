import angular from 'angular';
import appComponent from './components/app/app.component';
import headerComponent from './components/header/header.component';
import feedComponent from './components/feed/feed.component';
import feedItemComponent from './components/feed/feed-item/feed-item.component';
import 'bootstrap/dist/css/bootstrap.min.css';

const APP_NAME = 'videoFeed';

angular.module(APP_NAME, [])
  .component('app', appComponent)
  .component('header', headerComponent)
  .component('feed', feedComponent)
  .component('feedItem', feedItemComponent);

export default APP_NAME;