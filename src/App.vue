<template>
    <home />
</template>

<script >
import { ref, reactive, onBeforeMount, onUnmounted, provide } from "vue";
import home from './view/homePage.vue'
import store from "./store";
import { socketService } from './util/socketService'
export default {
    //引入畫面之後，要渲染畫面的話要先放入components中
    components: {
        home
    },
    setup() {

        //vue3 沒有created,beforeCreate這兩個生命週期 所以直接在setup()裡面直接執行即可
        onBeforeMount(() => {
            socketService()
        })
        onUnmounted(() => {
        })
        provide("chatGPTMsg", store)
        console.log('addmsg', store.addMsg)
        provide("addMsg", store.addMsg)
        return {

        }
    }
}
</script>
<style lang="scss" >
* {
    font-family: Söhne, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    ;
}
</style>