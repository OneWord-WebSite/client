<template>
  <button class="ow-praise" :class="{'hasbeenPraised': hasBeenPraised}" v-on:click.prevent="clickHandler">
    {{num}}
  </button>
</template>

<script>
import Api from '../api/'

export default {
  data () {
    return {
      canPraise: true
    }
  },
  methods: {
    clickHandler() {
      if (!this.canPraise) return
      this.canPraise = false
      let praise = this.hasBeenPraised ? Api.praiseDown : Api.praiseUp
      let praiseInfo = this.hasBeenPraised ? '取消收藏成功' : '收藏成功'
      let reqData = {
        wordId: this.wordId,
        userId: this.userId
      }
      praise(reqData).then(d => {
        this.cb(d)

        this.$toast(praiseInfo)
        this.canPraise = true
      })
    }
  },
  props: ['num', 'hasBeenPraised', 'wordId', 'userId', 'cb']
}
</script>

<style>
@import "../common/css/color.base.css";

@keyframes praiseAnim {
  0% {
    transform: translateY(3px);
  }

  100% {
    transform: translateY(0);
  }
}

.ow-praise {
  &.hasBeenPraised {
    color: var(--color4);
    animation: praiseAnim .2s;
  }

  position: relative;
  display: block;
  width: 1.2rem;
  height: 2rem;
  border-radius: .2rem;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  -webkit-appearance: none !important;
  border: none;
  background-color: #FFF;
  font-size: .35rem;

  &::before {
    content: "";
    display: block;
    border-width: 5px;
    border-color: transparent transparent currentColor transparent;
    border-style: solid;
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: .1rem;
    transform: translateX(-50%);
  }
}

</style>
