<template>
  <ow-header :back="back" :title="title" :logo="logo" :select="select" :avatar="avatar" :add="add" :initial="initial"></ow-header>
  <main :style="{paddingTop: 2.275 + 'rem'}">
    <ul>
      <ow-word-item v-for="word in wordsList" :word="word" transition="expand" stagger="200"></ow-word-item>
    </ul>
    <div class="ow-lists-loading" id="loader">
      <span class="spiner" v-show="more"></span>
      <span>{{more ? '加载更多' : 'EOF'}}</span>
    </div>
  </main>
</template>

<script>
import owWordItem from '../components/ow-word-item.vue'
import owHeader from '../components/ow-header.vue'
import Api from '../api/index'
import {updateList} from '../vuex/actions'
import {wordsList} from '../vuex/getters'

export default {
  ready() {
    if (this.wordsList.length === 0) {
      this.updateList()
    }
    
    let bodyHeight = document.body.offsetHeight
    let isLoading = false

    window.onscroll = () => {
      console.log(loader.getBoundingClientRect().top, bodyHeight)
      if (loader.getBoundingClientRect().top <= bodyHeight && isLoading === false) {
        isLoading = true
        this.updateList(data => {
          isLoading = false
          if (data.length === 0) {
            this.more = false
            window.onscroll = null 
          }
        })
      }
    }
  },
  data () {
    return {
      logo: 'visible',
      back: 'hidden',
      title: 'hidden',
      avatar: 'visible',
      add: 'visible',
      initial: 'visible',
      more: true
    }
  },
  computed: {
  },
  components: {
    owWordItem,
    owHeader
  },
  vuex: {
    getters: {
      wordsList
    },
    actions: {
      updateList
    }
  }
}
</script>

<style>
.expand-transition {
  transition: all .3s ease;
  overflow: hidden;
}

.expand-enter, .expand-leave {
  opacity: 0;
  height: 0;
}

.ow-lists-loading {
  padding: .8rem;
  text-align: center;
  color: #AAA;

  .spiner {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-width: 2px;
    border-style: solid;
    border-color: currentColor currentColor currentColor transparent;
    border-radius: 50%;    
    vertical-align: middle;
    margin-right: .2rem;
    animation: rotate 1s ease-in-out infinite forwards;
  }

  span {
    vertical-align: middle;
  }
}
</style>