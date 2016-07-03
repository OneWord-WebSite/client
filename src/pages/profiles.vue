<template>
  <ow-header :back="back" :title="title" :logo="logo" :select="select" :avatar="avatar" :add="add" :initial="initial" :title-name="userInfo.nickname"></ow-header>
  <main>
  <section class="big-avatar">
    <div class="bg" :style="{backgroundImage: `url(${userInfo.avatarUrl})`}"></div>
    <ow-big-avatar size="3.5" :src="userInfo.avatarUrl"></ow-big-avatar>
    <div class="username">{{userInfo.nickname || 'loading...'}}</div>
    <div class="bio">
      <div v-show="!bioEdit" v-on:click="editToggle">{{userInfo.bio || '点击添加个性签名'}}</div>
      <input v-show="bioEdit" v-on:blur="editToggle" type="text" id="bioEditInput" :value="userInfo.bio">
    </div>
  </section>
  <section class="user-data">
    <div class="item" :class="{'active': active === 'share'}" v-on:click="activeHandler('share')">
      <div>{{share.length}}</div>
      <div>分享</div>
    </div>
    <div class="item" :class="{'active': active === 'favour'}" v-on:click="activeHandler('favour')">
      <div>{{favour.length}}</div>
      <div>收藏</div>
    </div>
  </section>
  <section class="profiles-lists">
    <ul>
      <ow-word-item v-for="word in words" :word="word" :praise-click-handler="praiseClickHandler" transition="expand" stagger="50"></ow-word-item>
    </ul>
  </section>
  </main>
</template>

<script>
import owBigAvatar from '../components/ow-avatar.vue'
import owWordItem from '../components/ow-word-item.vue'
import owHeader from '../components/ow-header.vue'
import {updateUserBio} from '../vuex/actions'
import {userInfo} from '../vuex/getters'
import Api from '../api/'

export default {
  ready() {
    this.$loading.show()
    Api
      .getUserShare(this.userInfo.id)
      .then(data => {
        this.words = this.share = data
        this.$loading.hide()
      })
    Api
      .getUserFavour(this.userInfo.id)
      .then(data => {
        this.favour = data
        this.$loading.hide()
      })
  },
  data () {
    return {
      logo: 'hidden',
      back: 'visible',
      title: 'inherit',
      avatar: 'inherit',
      add: 'hidden',
      initial: 'hidden',
      active: 'share',
      bioEdit: false,
      share: [],
      favour: [],
      words: []
    }
  },
  computed: {
  },
  methods: {
    activeHandler: function (itemName) {
      this.active = itemName
      this.words = this[itemName]
    },

    editToggle: function (event) {
      this.bioEdit = !this.bioEdit
      if (this.bioEdit) {
        setTimeout(() => bioEditInput.focus(), 0)
      } else {
        this.updateUserBio(event.target.value)
        this.$toast('更新成功')
      }
    },

    praiseClickHandler: function() {
      Api
        .getUserShare(this.userInfo.id)
        .then(data => {
          this.share = data;
        })
      Api
        .getUserFavour(this.userInfo.id)
        .then(data => {
          this.favour = data;
        })
    }
  },
  components: {
    owBigAvatar,
    owWordItem,
    owHeader,
  },
  vuex: {
    getters: {
      userInfo
    },
    actions: {
      updateUserBio
    }
  }
}
</script>

<style>
@import "../common/css/color.base.css";

.big-avatar {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  overflow: hidden;
  color: #FFF;
  
  .bg {
    position: absolute;
    top: -2em;
    left: -2em;
    right: -2em;
    bottom: -2em;
    z-index: -1;
    background-position: 50%;
    background-repeat: no-repeat no-repeat;
    background-size: cover;
    filter: blur(3em);
  }

  .username {
    margin-top: .5rem;
    font-size: .5rem;
  }

  .bio {
    position: relative;
    height: .8rem;
    width: 4.5rem;
    margin: .2rem 0;

    &>div {
      position: absolute;
      left: 0;
      top: 0;
      height: .8rem;
      width: 100%;
      text-align: center;
      line-height: .8rem;
      font-size: .4rem;
      
    }

    &>input {
      position: absolute;
      -webkit-appearance: none !important;
      display: block;
      width: 100%;
      border-width: 0 0 0 0;
      padding: .2rem;
      outline: none;
      background-color: rgba(255, 255, 255, .7);
      font-size: .4rem;
      height: .8rem;
      border-radius: .1rem;
    }
  }
}

.user-data {
  display: flex;
  height: 2.5rem;
  background-color: #FFF;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  margin-bottom: .4rem;

  .item {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: .5rem;
    
    &>div:last-child {
      color: #333;
      font-size: .3rem;
    }

    &>div:first-child {
      color: #666;
      font-size: .7rem;
      font-weight: 200;
    }

    &:not(:last-child) {
      border-right: 1px solid #EEE;
    }

    &.active {
      &>div:last-child,
      &>div:first-child {
        color: var(--color4);
      }
    }
  }
}
</style>