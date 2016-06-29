<template>
  <div class="ow-created-by">
    <ow-avatar size=".5" :src="avatarUrl"></ow-avatar>
    <div class="username">{{nickname}}</div>
  </div>
</template>

<script>
import owAvatar from './ow-avatar.vue'
import Api from '../api/index'

export default {
  ready() {
    if (this.uid) {
      Api
        .getWeiboNickname(this.uid)
        .then(data => {
          this.nickname = data.screen_name
        })
    }
    
    this.$watch('uid', () => {
      Api
        .getWeiboNickname(this.uid)
        .then(data => {
          this.nickname = data.screen_name
        })
    })
  },
  data () {
    return {
      nickname: ''
    }
  },
  computed: {
    avatarUrl: function() {
      return `http://tp4.sinaimg.cn/${this.uid}/180/1`
    }
  },
  components: {
    owAvatar
  },
  props: ['uid']
}
</script>

<style src="../common/css/base.css"></style>
<style>
@import "../common/css/color.base.css";
.ow-created-by {
    display: flex;
    align-items: center;
    color: #9C9C9C;
    width: 3.5rem;
    justify-content: flex-end;

    .username {
      margin-left: .2rem;
    }
  }
</style>
