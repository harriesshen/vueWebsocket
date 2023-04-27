<template>
    <div class="bg">
        <infoBoard :SendMessage="SendMessage" :chatGPTMsg="chatGPTMsg" />
    </div>
</template>

<script>
import infoBoard from '../components/board/articleBoard.vue'
export default {
    name: 'homePage',
    components: {
        infoBoard
    },
    mounted() {
        this.ws = new WebSocket('ws://localhost:3000');

        this.ws.addEventListener('open', () => {
            console.log('WebSocket connected')
            // this.ws.send('hi')
        })

        this.ws.addEventListener('message', (event) => {
            this.chatGPTMsg.push(event.data)
            console.log('WebSocket message received:', event)
        })

        this.ws.addEventListener('close', () => {
            console.log('WebSocket disconnected')
        })
    },
    data() {
        return {
            chatGPTMsg: []
        }
    },
    beforeUnmount() {
        this.ws.close()
    },
    methods: {
        SendMessage(msg) {
            this.ws.send(msg);
        }
    }
}
</script>
<style scoped lang="scss">
.bg {
    height: 100vh;
    position: relative;
    margin: 0;
    font-family: Söhne, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    ;
}
</style>