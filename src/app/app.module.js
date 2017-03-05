import angular from 'angular';
import appComponent from './components/app/app.component';
import headerComponent from './components/header/header.component';
import feedComponent from './components/feed/feed.component';
import feedItemComponent from './components/feed/feed-item/feed-item.component';
import missingItemComponent from './components/feed/feed-item/missing-item.component';
import formatNumberFilter from './filters/formatNumber.filter';
import embedCodeService from './services/embedCode.service';

import 'bootstrap/dist/css/bootstrap.min.css';

const APP_NAME = 'videoFeed';

angular.module(APP_NAME, [])
  .component('app', appComponent)
  .component('header', headerComponent)
  .component('feed', feedComponent)
  .component('feedItem', feedItemComponent)
  .component('missingItem', missingItemComponent)
  .filter('formatNumber', formatNumberFilter)
  .service('embedCodeService', embedCodeService);

export default APP_NAME;