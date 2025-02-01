<template>
    <h1>News</h1>
    <ul>
        <li v-for="news in newsList" :key="news.id">
            <!-- 
                传递query参数： 
                方式一（字符串形式）：直接在路由路径后以?分割，以key-value的形式用&拼接起来进行传递
                方式二（对象形式）：使用 to 属性的配置对象的 query 配置项进行传递
            -->

            <!-- 字符串传递 query 参数 -->
            <!-- <RouterLink :to="`/news/detail?content=${news.content}`">{{ news.title }}</RouterLink> -->

            <!-- 对象传递 query 参数 -->
            <!-- <RouterLink :to="{ name: 'detail', query: { content: news.content } }">{{ news.title }}</RouterLink> -->

            <!-- 
                传递params参数： 
                方式一（字符串形式）：直接在路由路径后以/分割，每一个/后面拼接一个params参数
                方式二（对象形式）：使用 to 属性的配置对象的 params 配置项进行传递

                注意：
                - 传递params参数需要占位，传几个参数占几个位
                - 对象写法只能使用命名路由传递
                - 不能传递对象或数组（会报错）
            -->
            
            <!-- 字符串传递 params 参数 -->
            <!-- <RouterLink :to="`/news/detail/${news.content}`">{{ news.title }}</RouterLink> -->

            <!-- 对象传递 params 参数 -->
            <RouterLink :to="{ name: 'detail', params: { content: news.content } }">{{ news.title }}</RouterLink>
        </li>
    </ul>
    <RouterView></RouterView>
</template>

<!-- 
    路由传参：
        Vue世界中路由有两种传递方式：params和query
-->

<script setup lang="ts" name="News">
import { reactive } from 'vue';
import { RouterView, RouterLink } from 'vue-router';


let newsList = reactive([
    {
        id: "1asda",
        title: "高考女生：不会有比读书更简单的事",
        content: "6月9日，2024年湖南高考落下帷幕，考生们冲出考场，完成人生中的第一套重要答卷。"
    },
    {
        id: "asdfasdf",
        title: "曝足协要求中泰同时开赛被拒",
        content: "6月11日晚，亚洲区世预赛36强赛最后一轮，届时中国男足将客场挑战韩国男足，而泰国队坐镇主场对阵新加坡。值得注意的是，这2场比赛并非同时进行，而据媒体人苏东透露称，这一切都是中国足协自己造成的。"
    },
    {
        id: "1asasfdafgda",
        title: "带你“沉浸式”体验各地端午民俗活动",
        content: "端午将至，蕴含着浓郁传统文化气息的民俗体验游受到格外的欢迎。依托着中华文明的丰厚底蕴，各地不断尝试文化和旅游深度融合，消费场景推陈出新，消费新业态不断涌现，一个热气腾腾的“端午经济”助力消费活力升级。"
    },
    {
        id: "1asasdfasda",
        title: "参与别国政变 6名西方人“或面临死刑”",
        content: "据路透社9日消息，周五，参与刚果（金）未遂政变53名嫌疑人在首都金沙萨出庭，其中包括6名美国、英国、加拿大和比利时公民。"
    },
])

</script>
<style scoped></style>