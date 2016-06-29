<template>
  <textarea class="ow-textarea" :placeholder="holder" :name="name"></textarea>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  ready: function() {
    this.$el.addEventListener('input', () => {
      this.$el.style.height = 'auto'
      this.$el.style.height = this.$el.scrollHeight + 'px'
    }, false)
  },
  props: ['holder', 'name']
}
</script>

<style>
@import "../common/css/color.base.css";

.ow-textarea {
  -webkit-appearance: none !important;
  display: block;
  width: 100%;
  border-width: 0 0 1px 0;
  padding: .2rem;
  outline: none;
  margin: .5rem 0;
  resize: none;
  border-color: #EFEFEF;
  font-size: .4rem;

  &:focus {
    border-color: var(--color4);
  }
}
</style>
