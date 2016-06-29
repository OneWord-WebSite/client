import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Lists from '../pages/lists.vue'
import Profiles from '../pages/profiles.vue'
import Add from '../pages/add.vue'
import Detail from '../pages/detail.vue'

var router = new VueRouter()

router.map({
  '/': {
    component: Lists
  },
  '/profiles': {
    component: Profiles
  },
  '/add': {
    component: Add
  },
  '/detail/:id': {
    component: Detail
  }
})

router.beforeEach(function(transition) {
  document.body.scrollTop = 0
  transition.next()
})

export default router