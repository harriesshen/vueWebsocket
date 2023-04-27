<template>
  <div id="content">
    <span class="msg" v-for="(item, index) in chatGPTMsg" v-bind:key="index">{{ item }}</span>
  </div>
  <div id="InputBox">
    <input type="text" v-model="msg" id="InputText" placeholder="輸入" v-on:keyup.enter="handleClick" />
  </div>
</template>

<script>
//^^^^^^^^^^^^^^^^^^^^HTML&Vue^^^^^^^^^^^^^^^^^^^^^

export default {
  name: 'articleBoard',
  props: { SendMessage: Function, chatGPTMsg: Array },
  data() {
    return {
      msg: '', lastEnterTime: 0
    }
  },
  methods: {
    handleClick() {
      const now = Date.now()
      if (now - this.lastEnterTime > 2000) { // 检查时间间隔是否大于 1 秒
        console.log('msg', this.msg)
        this.SendMessage(this.msg)
        this.msg = ''
        this.lastEnterTime = now
      }

    }
  }
}
</script>

<style scoped lang="scss">
#InputBox {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15%;
  border-top: 1px solid;
}

#InputText {
  position: absolute;
  bottom: 5vh;
  height: 8%;
  width: 50%;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid rgba(52, 53, 65, 0.1);
}

#content {

  height: 80%;
  width: 100%;
  white-space: pre-line;
  overflow: auto;
  font-size: 18px;
  line-height: 30px;
  background-color: rgba(52, 53, 65, 0.1);
  display: flex;
  flex-direction: column;
}

span:nth-child(odd)::before {
  content: "我：";
}

span:nth-child(even)::before {
  content: "CHATGPT：";
}
</style>
