import Vue from 'vue'
import App from './App.vue'

window.$ = window.jQuery = require('jquery/dist/jquery')
window.Popper = require('@popperjs/core/dist/umd/popper')
require('bootstrap')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
