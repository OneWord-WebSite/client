import 'whatwg-fetch'
import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  sync
} from 'vuex-router-sync'
import VueSweetAlert from 'vue-sweetalert'
import VueToast from 'vue-ttoast'
import Loading from './plugins/loading/'

import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueSweetAlert)
Vue.use(VueToast)
Vue.use(Loading)

import router from './router/index'
import store from './vuex/store'

sync(store, router)
router.start(App, 'app')