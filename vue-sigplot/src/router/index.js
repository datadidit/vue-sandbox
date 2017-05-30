import Vue from 'vue'
import VueHead from 'vue-head'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SigPlotVue from '@/components/SigPlotVue'

Vue.use(VueHead)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SigPlotVue',
      component: SigPlotVue
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
