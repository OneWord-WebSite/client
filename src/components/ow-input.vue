<template>
  <input class="ow-input" :placeholder="holder" :name="name" required="required" />
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    isVaild() {
      return this.$el.validationMessage
    }
  },
  props: ['holder', 'name']
}
</script>

<style>
@import "../common/css/color.base.css";

.ow-input {
  -webkit-appearance: none !important;
  display: block;
  width: 100%;
  border-width: 0 0 1px 0;
  padding: .2rem;
  outline: none;
  margin: .5rem 0;
  border-color: #EFEFEF;
  font-size: .4rem;

  &:focus {
    border-color: var(--color4);
  }
}
</style>
