import Vue from 'vue';
import App from './app.vue';

import './assets/styles/style.styl'
import './assets/styles/global.styl';

Vue.config.productionTip = false

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  render: (h) => h(App)
}).$mount(root)

// new Vue({
//   el: '#root',
//   template: '<App></App>',
//   components: {
//       App
//   }
// })