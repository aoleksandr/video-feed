import template from './feed-item.html';

import './feed-item.scss';

export default {
  bindings: {
    data: '<'
  },
  template,
  controller($sce) {
    this.code = $sce.trustAsResourceUrl('https://www.youtube.com/embed/z9Ul9ccDOqE');
  }
};