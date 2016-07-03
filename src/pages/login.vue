<template>
  <ow-header :back="back" :title="title" :logo="logo" :select="select" :avatar="avatar" :add="add" :initial="initial" title-name="oneword.cc"></ow-header>
  <main class="login">
    <img class="logo" src="http://oneword.ufile.ucloud.com.cn/logo.png">
    <a class="login-href" href="https://api.weibo.com/oauth2/authorize?client_id=3407672250&amp;response_type=code&amp;redirect_uri=http://oneword.cc/api/oauth">
      <img src="http://oneword.ufile.ucloud.com.cn/weibo.svg">
      <span>微博登录</span>
    </a>
  </main>
</template>

<script>
import owHeader from '../components/ow-header.vue'

export default {
  ready() {
  },
  data () {
    return {
      logo: 'hidden',
      back: 'hidden',
      title: 'visible',
      avatar: 'hidden',
      add: 'hidden',
      initial: 'visible',
      more: true
    }
  },
  computed: {
  },
  components: {
    owHeader
  }
}
</script>

<style>
@import "../common/css/color.base.css";

.login {
  position: absolute;
  left: 0;
  right: 0;
  top: 1.875rem;
  bottom: 0;
  background-color: #FFF;
  background-image: url('http://oneword.ufile.ucloud.com.cn/bg.png');
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .2);
  }
}

.logo {
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  width: 40%;
  z-index: 1;
}


.login-href {
  color: #000;
  position: absolute;
  left: 50%;
  bottom: 30%;
  transform: translate(-50%, 50%);
  width: 2.5rem;
  height: 3.5rem;
  background-color: rgba(255, 255, 255, .9);
  border-radius: .3rem;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;

  img {
    position: absolute;
      left: 50%;
      top: 15%;
      transform: translateX(-50%);
      width: 70%;
  }

  span {
    font-size: 14px;
      position: absolute;
      left: 50%;
      bottom: 15%;
      width: 100%;
      text-align: center;
      transform: translateX(-50%)
  }
}
</style>