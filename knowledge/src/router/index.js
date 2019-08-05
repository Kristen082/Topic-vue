import Vue from 'vue'
import Router from 'vue-router'

import Answer from '@/views/answer'
import Last from '@/views/last'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'answer',
      component: Answer
    },
    {
      path: '/last',
      name: 'last',
      component: Last
    }
  ]
})
