<template>
    <router-view></router-view>
</template>

<script>
import owHeader from './components/ow-header.vue'
import store from './vuex/store'
import {getUserInfo} from './vuex/actions'
import Api from './api/'

export default {
  ready: function () {
    this.getUserInfo()
  },
  data () {
    return {}
  },
  components: {
    owHeader
  },
  store,
  vuex: {
    getters: {},
    actions: {
      getUserInfo
    }
  }
}
</script>

<style src="./common/css/base.css"></style>
<style>
@import "./common/css/color.base.css";

body {
  background-color: #EEE;
}
</style>
