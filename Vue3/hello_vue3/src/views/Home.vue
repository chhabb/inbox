<template>
    <h1>Home</h1>
</template>
<script setup lang="ts" name="Home">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
// 获取 router 实例 
let router = useRouter()

/* 
    编程式路由导航：借助 router 的实例方法，通过编写代码来实现。
    常用的API：
        router.push     保存所有历史记录
        router.replace  销毁当前页面历史记录，直接保存新跳转的历史记录
        router.go 跳转到某一历史记录
    API 的写法与 RouterLink 的 to 的写法完全一致，有字符串和对象两种
    vue2 中编程时导航路由路径不变且传递参数不变的情况下，重复点击会报错；vue3中不会报错
*/

onMounted(() => {
    setTimeout(() => {
        // 字符串写法
        // router.push('/news')

        // 对象写法
        router.push({ name: "news" })
    }, 3000)
})
</script>
<style scoped></style>