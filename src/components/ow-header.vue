<template>
  <header class="ow-header" id="header" :style="{visibility: initial}">
    <div class="ow-header-logo" :style="{visibility: logo}">一言</div>
    <div class="ow-header-back" :style="{visibility: back}"><a v-link="{ path: '/' }">←</a></div>
    <a v-link="{ path: '/add' }" class="ow-header-add" :style="{visibility: add}">＋</a>
    <div class="ow-header-title" :style="{visibility: title}">{{titleName}}</div>
    <a v-link="{ path: '/profiles' }" class="avatar" :style="{visibility: avatar}">
      <ow-header-avatar size="1.3" :src="userInfo.avatarUrl"></ow-header-avatar>
    </a>
  </header>
</template>

<script>
import owHeaderAvatar from './ow-avatar.vue'
import {userInfo, userCount} from '../vuex/getters'

export default {
  data () {
    return {
    }
  },
  ready: function () {
    window.onscroll = () => {
      if (window.location.hash === '#!/profiles') {
        this.initial = document.body.scrollTop > 100 ? 'visible' : 'hidden'
      }
    }
  },
  components: {
    owHeaderAvatar
  },
  props: ['logo', 'back', 'title', 'avatar', 'select', 'add', 'initial', 'titleName'],
  vuex: {
    getters: {
      userInfo
    }
  }
}
</script>

<style>
@import "../common/css/color.base.css";
.ow-header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: var(--color4);
  height: 1.875rem;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;

  .avatar {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: .3rem;
  }
}

.ow-header-logo,
.ow-header-back {
  position: absolute;
  top: 50%;
  left: .3rem;
  transform: translateY(-50%);
  color: #FFF;
  font-size: .7rem;
}

.ow-header-back {
  font-weight: bold;
}

.ow-header-title {
  font-size: .6rem;
  color: #FFF;
}

.ow-header-select {
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
}

.ow-header-add {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 2rem;
  width: 1.3rem;
  height: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  font-size: .8rem;
  background-color: var(--color7);
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
}
</style>
