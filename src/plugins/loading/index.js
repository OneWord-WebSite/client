import Vue from 'vue'
import Loading from './loading.vue'

let LoadingPlugin = {}
let LoadingConstructor = Vue.extend(Loading)

let loadingInstance = new LoadingConstructor({
  el: document.createElement('div')
})

let show = function() {
  loadingInstance.$appendTo(document.body)
  Vue.nextTick(() => {
    loadingInstance.visible = true
  })
}

let hide = function() {
  setTimeout(() => {
    loadingInstance.visible = false
  }, 500)
}

LoadingPlugin.install = function(Vue) {
  Vue.prototype.$loading = {
    show,
    hide
  }
}

export default LoadingPlugin