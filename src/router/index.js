import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import T1 from 'components/T1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/t1',
      name: 'T1',
      component: T1
    }
  ]
})
