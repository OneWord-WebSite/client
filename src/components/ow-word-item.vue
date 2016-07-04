<template>
  <li class="ow-word-item"><a v-link="{ path: `/detail/${word.id}` }">
    <div class="praise">
      <ow-praise :num="word.praises.length" :has-been-praised="hasBeenPraised" :word-id="word.id" :cb="praiseHandler"></ow-praise>
    </div>
    <div class="content">
      <p>{{word.word}}</p>
      <div class="content-bottom">
        <span class="cartoonname">{{word.cartoon}}</span>
        <ow-created-by :uid="word.userId"></ow-created-by>
      </div>
    </div>
    <div class="avatar">
      <ow-avatar size="1.5" :src="roleAvatar"></ow-avatar>
      <div class="avatar-name">{{word.role}}</div>
    </div></a>
  </li>
</template>

<script>
import owPraise from './ow-praise.vue'
import owAvatar from './ow-avatar.vue'
import owCreatedBy from './ow-created-by.vue'
import {userId, wordsList} from '../vuex/getters'
import Api from '../api/'

export default {
  data () {
    return {
      canPraise: true
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
  computed: {
    hasBeenPraised: function() {
      return this.word.praises.includes(+this.userId)
    },
    roleAvatar: function() {
      return `http://oneword.ufile.ucloud.com.cn/${this.word.pic}`
    }
  },
  components: {
    owPraise,
    owAvatar,
    owCreatedBy
  },
  vuex: {
    getters: {
      userId,
      wordsList
    }
  },
  props: ['word', 'praiseClickHandler']
}
</script>

<style>
@import "../common/css/color.base.css";

.ow-word-item {
  margin-bottom: .3rem;
  height: 4.2rem;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &>a {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    padding: .4rem .3rem; 
    background-color: #FFF;
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    
  }
  

  .praise {
    margin-right: .5rem;
  }
  
  .content {
    width: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    font-size: 13px;

    &>p {
      color: #333;
    }
  }

  .avatar {
    margin-left: .5rem;
  }

  .avatar-name {
    margin-top: .1rem;
    text-align: center;
  }
  
  .content-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    margin-top: .3rem;
  }

  .cartoonname {
    padding: .1rem;
    color: #FFF;
    background-color: var(--color7);
  }
}
</style>