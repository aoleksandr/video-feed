import template from './app.html';
import './app.scss';

export default {
  template,
  controller($http) {
    $http.get('https://cdn.playbuzz.com/content/feed/items').then(res => {
      this.feed = res.data.items;
    });
  }
};