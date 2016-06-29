<template>
  <ow-header :back="back" :title="title" :logo="logo" :select="select" :avatar="avatar" :add="add" :initial="initial" title-name="添加新的一言"></ow-header>
  <main :style="{paddingTop: 2.275 + 'rem'}">
    <form class="add-form" id="addForm">
      <ow-image-upload name="image" v-ref:image></ow-image-upload>
      <ow-input holder="角色名称" name="role"></ow-input>
      <ow-input holder="所属动漫" name="cartoon"></ow-input>
      <ow-textarea holder="角色台词" name="word"></ow-textarea>
      <input type="submit" value="添加" v-on:click.prevent="submitHandler"/>
      <p>
        你提交的东东，会被进行审核，审核通过后才会被展现，所以你不要提交一些奇奇怪怪的东西哦~🍭🍭🍭
      </p>
    </form>
  </main>
</template>

<script>
import owHeader from '../components/ow-header.vue'
import owInput from '../components/ow-input.vue'
import owTextarea from '../components/ow-textarea.vue'
import owImageUpload from '../components/ow-image-upload.vue'
import Api from '../api/index'

export default {
  data () {
    return {
      logo: 'hidden',
      back: 'visible',
      title: 'visible',
      select: 'hidden',
      avatar: 'visible',
      add: 'hidden',
      initial: 'visible',
    }
  },
  methods: {
    submitHandler: function() {
      this.$loading.show()
      
      let form = new FormData(addForm)
      form.set('image', this.$refs.image.image, 'image.jpg')

      Api
        .addWord(form)
        .then(data => {
          this.$loading.hide()
          this.$toast('添加成功')
        })
    }
  },
  components: {
    owHeader,
    owInput,
    owTextarea,
    owImageUpload
  },
}
</script>

<style>
@import "../common/css/color.base.css";

.add-form {
  background-color: #FFF;
  padding: .3rem;

  input[type="submit"] {
    margin: 1rem 0;
    -webkit-appearance: none !important;
    display: block;
    width: 100%;
    height: 1.5rem;
    border: none;
    background-color: var(--color7);
    border-radius: .2rem;
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    font-size: .45rem;
    color: #FFF;
  }

  &>p {
    color: #999;
  }
}
</style>