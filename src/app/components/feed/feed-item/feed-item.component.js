import template from './feed-item.html';

import './feed-item.scss';

export default {
  bindings: {
    data: '<'
  },
  template,
  controller($sce, embedCodeService) {
    this.$onInit = function() {
      if(!this.data.title || !this.data.views) {
        this.missing = true;
        return;
      }
      this.code = $sce.trustAsHtml(embedCodeService.getCode(this.data));
    };
  }
};