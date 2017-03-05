export default {
  bindings: {
    type: '<'
  },
  template: '<div class="missing-item">{{$ctrl.message}}</div>',
  controller() {
    this.$onInit = function() {
      switch(this.type) {
        case 'youtube':
          this.message = 'Youtube video is missing';
          break;
        case 'facebook':
          this.message = 'Facebook video post is missing';
          break;
        default:
          this.message = 'Video is missing';
      }
    };
  }
};