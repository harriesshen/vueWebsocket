<template>
    <div class="bg">
        <infoBoard />
    </div>
</template>

<script scoped>

import infoBoard from '../components/board/articleBoard.vue'
export default {
    components: {
        infoBoard
    }
}
</script>
<style scoped lang="scss">
.bg {
    height: 100vh;
    position: relative;
    margin: 0;
}
</style>