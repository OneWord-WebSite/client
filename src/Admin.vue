<template>
  <section>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>ROLE</th>
          <th>CARTOON</th>
          <th>PIC</th>
          <th>USERID</th> 
          <th>WORD</th>
          <th>CHECK</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="word in list">
          <td>{{word.id}}</td>
          <td>{{word.role}}</td>
          <td>{{word.cartoon}}</td>
          <td class="pic">{{word.pic}}<img :src="`http://oneword.cc/api/${word.pic}`"></td>
          <td>{{word.userId}}</td>
          <td>{{word.word}}</td>
          <td>
            <button v-on:click="unvalid(word.id)">N</button>
            <button v-on:click="valid(word.id)">Y</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import Api from './api/'

export default {
  ready() {
    this.refresh()
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    valid(id) {
      if (confirm('确认通过?')) {
        Api
          .adminValidWord(id)
          .then(() => {
            this.refresh()
          })
      }
    },

    unvalid(id) {
      if (confirm('确认删除?')) {
        Api
          .adminUnvalidWord(id)
          .then(() => {
            this.refresh()
          })
      }
    },

    refresh() {
      Api
      .adminGetWords()
      .then(data => {
        this.list = data
      })
    }
  }
}
</script>

<style src="./common/css/base.css"></style>
<style>
table {
  width: 100%;
}

th {
  font-family: monospace;
  color: #666;
}

.pic {
  position: relative;

  img {
    position: absolute;
    display: none;
    width: 30%;
    z-index: 1;
  }
  
  &:hover {
    img {
      display: block;
    }
  }
}
</style>
