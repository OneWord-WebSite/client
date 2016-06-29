<template>
  <div class="ow-loading">
    <div class="spiner">加载中</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style>
@import "../common/css/color.base.css";

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

.ow-loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .15);
  z-index: 2;

  .spiner {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .5);
    color: #FFF;
    width: 3.5rem;
    height: 4.5rem;
    border-radius: .2rem;
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    font-size: 15px;

    &::before {
      content: '';
      display: block;
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
      border-width: 3px;
      border-color: #FFF transparent #FFF #FFF;
      border-style: solid;
      margin-bottom: .5rem;
      animation: rotate 1s infinite forwards;
    }
  }
}

</style>
