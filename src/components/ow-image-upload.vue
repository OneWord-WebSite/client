<template>
  <section class="ow-image-upload">
    <div class="pre-upload-image">
      <pre-upload-image size="5.5" :src="imageUrl"></pre-upload-image>
      <input type="file" v-on:change="uploadImageHandler" :name="name" required="required" id="file">
    </div>
    
  </section>
</template>

<script>
import PreUploadImage from './ow-avatar.vue'

function dataURItoBlob(dataURI) {
  var byteString = atob(dataURI.split(',')[1])
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  var ab = new ArrayBuffer(byteString.length)
  var ia = new Uint8Array(ab)
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i)
  }
  return new Blob([ab], {type: mimeString})
}

export default {
  data() {
    return {
      imageUrl: "http://oneword.ufile.ucloud.com.cn/info.jpg"
    }
  },
  computed: {
    image: function() {
      if (this.imageUrl === "http://oneword.ufile.ucloud.com.cn/info.jpg") {
        return null
      } else {
        return dataURItoBlob(this.imageUrl)
      }
    }
  },
  methods: {
    uploadImageHandler: function(event) {
      var file = event.target.files[0]
      if (file && /^image\//i.test(file.type)) {
        var reader = new FileReader()
        reader.onloadend = () => {
          var img = new Image()
          img.src = reader.result

          img.onload = () => {
            var w = Math.min(400, img.width)
            var h = img.height * (w / img.width)
            var canvas = document.createElement('canvas')
            var ctx = canvas.getContext('2d')

            canvas.width = w
            canvas.height = h

            ctx.drawImage(img, 0, 0, w, h)

            var dataURL = canvas.toDataURL('image/png')
            this.imageUrl = dataURL
          }
        }
        reader.readAsDataURL(file)
      }
    },

    isVaild: function() {
      return file.validationMessage
    }
  },
  components: {
    PreUploadImage
  },
  props: ['name']
}
</script>

<style>
@import "../common/css/color.base.css";

.ow-image-upload {
  .pre-upload-image {
    position: relative;
    &>div>img {
      margin: .5rem auto 1rem auto;
    }

    &>input {
      position: absolute;
      opacity: 0;
      left: 0;
      width: 100%;
      bottom: 0;
      top: 0;
    }
  }
}
</style>
