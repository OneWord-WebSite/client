<template>
  <div class="ow-avatar">
    <img v-bind:style="{width: size + 'rem', height: size + 'rem'}" v-bind:src="src" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['size', 'src']
}
</script>

<style src="../common/css/base.css"></style>
<style>
@import "../common/css/color.base.css";

.ow-avatar {
  img {
    display: block;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    object-fit: cover;
  }
  
}
</style>
