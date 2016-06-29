import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

const state = {
  userInfo: {
    id: Cookies.get('uid'),
    nickname: Cookies.get('nickname'),
    bio: 'loading...'
  },
  list: [],
  pageIndex: 0
}

const mutations = {
  'UPDATE_USER_INFO': (state, userInfo) => {
    state.userInfo = Object.assign(state.userInfo, userInfo)
  },
  'UPDATE_LIST': (state, listData) => {
    state.list = state.list.concat(listData)
    state.pageIndex++
  }
}

export default new Vuex.Store({
  state,
  mutations,
})