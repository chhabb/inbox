<template>
    <h1>Detail</h1>
    <!-- <div>{{ query.content }}</div> -->
    <!-- <div>{{ params.content }}</div> -->
    <div>{{ content }}</div>
</template>
<!-- 
获取路由query参数：引入 useRoute hooks 获取 当前匹配成功的 route 路由对象，通过其中的 query 属性获取
获取路由query参数：引入 useRoute hooks 获取 当前匹配成功的 route 路由对象，通过其中的 params 属性获取
-->
<script setup lang="ts" name="Detail">
// 1. 引入 useRoute hooks
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';

// 2. 获取当前匹配成功的路由
let route = useRoute()
console.log(route);

// 解构赋值简化模板中渲染数据的操作
// 因为 route 是一个 Proxy 对象，解构赋值会切断获得的值与响应式对象之间的连接，所以需要通过 toRefs 处理确保解构赋值所获得的数据是响应式的
// let { query } = toRefs(route)

// let { params } = toRefs(route)

// 接收路由传递的 props 参数
defineProps(['content'])

</script>
<style scoped></style>