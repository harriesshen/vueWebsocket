<template>
    <div class="page page-home">
        <infoBoard />
    </div>
</template>
<script>
import infoBoard from '../components/board/articleBoard.vue'

export default {
    name: 'homePage',
    components: {
        infoBoard
    },
    data() {
        return {
            json:
                [
                    {
                        irontitle: "第 11 屆 iT 邦幫忙鐵人賽",
                        articles: [
                            {
                                type: "Modern Web",
                                title:
                                    "「小孩才做選擇，我全都要。」小白也能輕鬆瞭解的 Vue.js 與 D3.js 。",
                                href: "https://ithelp.ithome.com.tw/users/20119062/ironman/2242",
                                info: {
                                    success: true,
                                    count: 32,
                                    subscribe: 39
                                }
                            }
                        ]
                    },
                    {
                        irontitle: "2019 邦幫忙鐵人賽",
                        articles: [
                            {
                                type: "自我挑戰",
                                title: "挑戰連續三十天喝不同家手搖飲。",
                                href: "",
                                info: {
                                    success: false,
                                    count: 29,
                                    subscribe: 512
                                }
                            },
                            {
                                type: "自我挑戰",
                                title: "連續三十天發廢文。",
                                href: "",
                                info: {
                                    success: true,
                                    count: 999,
                                    subscribe: 87
                                }
                            }
                        ]
                    }
                ]
        }
    }
}
</script>