// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//import VueHead from 'vue-head'

//require('script-loader!./sigplot/sigplot-debug.js')
//require('./sigplot/sigplot-debug.js') //Error tinycolor is not defined

//var plot = new sigplot.Plot(document.getElementById('plot'), {});

Vue.config.productionTip = false
//Vue.use(VueHead)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
