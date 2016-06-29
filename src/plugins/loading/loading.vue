<template>
  <div class="ow-p-loading" transition="ow-p-loading-bounce" v-if="visible">
    <div class="spiner"></div>
    <div class="tip">加载中</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style>
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

.ow-p-loading-bounce-transition {
  transition: all .1s ease;
}

.ow-p-loading-bounce-enter, .ow-p-loading-bounce-leave {
  opacity: 0;
  transform: scale(0.7);
}

.ow-p-loading {
  position: fixed;
  width: 4rem;
  height: 5rem;
  background-color: rgba(0, 0, 0, .7);
  top: 50%;
  left: 50%;
  margin-top: -1.5625rem;
  margin-left: -2rem;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  border-radius: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .tip {
    font-size: 16px;
    color: #FFF;
  }

  .spiner {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border-width: 3px;
    border-color: #FFF transparent #FFF #FFF;
    border-style: solid;
    margin-bottom: .5rem;
    animation: rotate 1s ease-in-out infinite forwards;
  }
}
</style>
