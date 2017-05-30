import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Foo from '@/components/Foo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
