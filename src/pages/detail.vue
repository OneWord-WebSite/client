<template>
  <ow-header :back="back" :title="title" :logo="logo" :select="select" :avatar="avatar" :add="add" :initial="initial" title-name="一言"></ow-header>
  <main :style="{paddingTop: 2.275 + 'rem'}">
    <img class="detail-preview" :src="roleAvatar">
    <section class="detail-word" v-show="word.id">
      <ow-praise :num="word.praises.length" :has-been-praised="hasBeenPraised" :word-id="word.id" :cb="praiseHandler"></ow-praise>
      <div class="detail-tag">
        <span class="cartoonname">{{word.cartoon}}</span>
        <ow-created-by :uid="word.userId"></ow-created-by>
        <div class="time">{{timeago}}</div>
      </div>

      <p class="content">
        {{word.word}}
      </p>

      <div class="avatar">
        <ow-avatar size="1.2" :src="roleAvatar"></ow-avatar>
        <div class="avatar-name">{{word.role}}</div>
      </div>
      <div class="next" v-show="word.nextId">
        <a v-link="{ path: `/detail/${word.nextId}` }">→</a>
      </div>
    </section>
  </main>
</template>

<script>
import owHeader from '../components/ow-header.vue'
import owPraise from '../components/ow-praise.vue'
import owAvatar from '../components/ow-avatar.vue'
import owCreatedBy from '../components/ow-created-by.vue'
import Api from '../api/'
import {userId, wordsList} from '../vuex/getters'
import timeAgo from 'timeago.js'

let ta = timeAgo()

export default {
  data () {
    return {
      logo: 'hidden',
      back: 'visible',
      title: 'visible',
      avatar: 'visible',
      add: 'hidden',
      initial: 'visible',
      word: {
        praises: []
      },
      canPraise: true
    }
  },
  computed: {
    hasBeenPraised: function() {
      return this.word.praises.includes(+this.userId)
    },

    timeago: function() {
      return ta.format(this.word.createdAt, 'zh_CN')
    },

    roleAvatar: function() {
      return `http://oneword.ufile.ucloud.com.cn/${this.word.pic}`
    }
  },
  methods: {
    praiseHandler: function(d) {
      d.id ? this.word.praises.push(d.userId) : this.word.praises.pop() 
      
      // todo: 
      let index = this.wordsList.find(value => value.id === d.wordId)
      // console.log(this.word.praises)
      // if (index) index.praises = this.word.praises 

      if (this.praiseClickHandler) this.praiseClickHandler() 
    }
  },
  components: {
    owHeader,
    owAvatar,
    owPraise,
    owCreatedBy,
  },
  route: {
    data() {
      this.$loading.show()
      Api
        .getWord(this.$route.params.id).then(data => {
          this.word = data
          this.$loading.hide()
        })
    }
  },
  vuex: {
    getters: {
      userId,
      wordsList
    }
  }
}
</script>

<style>
@import "../common/css/color.base.css";

.detail-preview {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.detail-word {
  position: relative;
  background-color: #FFF;
  padding: .5rem .3rem 1.5rem .3rem;
  margin-top: -5px;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;

  .next {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);

    &>a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      height: 2.5rem;
      border: none;
      color: #FFF;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
      background-color: var(--color7);
      font-size: .7rem;
      font-weight: bold;
    }
  }

  .content {
    position: relative;
    margin: 1.5rem;
    font-size: .45rem;
    text-indent: 2em;

    &::before,
    &::after {
      position: absolute;
      
      color: #CCC;
      font-size: 1.5rem;
    }
    
    &::before {
      content: "“";
      left: -1em;
      top: -.5em;
    }

    &::after {
      content: "”";
      right: -.5em;
      bottom: -1em;
    }
  }
  
  .avatar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: .3rem;

    .avatar-name {
      font-size: .4rem;
      margin-left: .2rem;
    }
  }

  .detail-tag {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: .5rem;
    left: 2rem;
    right: .3rem;
    
    &>.cartoonname {
      padding: .1rem;
      color: #FFF;
      background-color: #8FC6B4;
    }
    
    .time {
      color: #9C9C9C;
    }

    &>.by {
      display: flex;
      align-items: center;
      color: #9C9C9C;
      .username {
        margin-left: .1rem;
      }
    }
  }
}
</style>