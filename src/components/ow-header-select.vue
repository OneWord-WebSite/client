<template>
  <div class="ow-header-select">
    <select v-on:change="changeHandler">
      <option value="/newest">最新的</option>
      <option value="/hottest">最热的</option>
    </select>
  </div>
</template>

<script>
export default {
  methods: {
    changeHandler: function(event) {
      var path = event.target.options[event.target.selectedIndex].value
      this.$route.router.go(path)
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style>
@import "../common/css/color.base.css";
@import "../common/css/header.css";

.ow-header-select {
  width: 3rem;
  border-bottom: 1px solid #FFF;

  &::after {
    content: "";
    display: block;
    border-width: 5px 5px 0 5px;
    border-color: #FFF transparent transparent transparent;
    border-style: solid;
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    right: .3rem;
    transform: translateY(-50%);
  }

  select {
    height: 1.1rem;
    width: 3rem;
    color: #FFF;  
    font-size: .55rem;
    border: none;
    padding-left: .3rem;
    -webkit-appearance: none !important;
    background-color: transparent;
  }
}
</style>
