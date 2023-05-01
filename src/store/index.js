import { reactive, readonly } from "vue";
//reactive 只能定義宣告 物件或陣列
//readonly 唯獨這個變數
const state = reactive({
  chatGPTMsg: ["hi"],
});

const addMsg = (msg = "") => {
  state.chatGPTMsg.push(msg);
};

export default {
  state: readonly(state),
  addMsg,
};
