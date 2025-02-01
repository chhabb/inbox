<template>
    <h1>自定义hooks</h1>
    <img class="img" :src="item" alt="" v-for="item in dogList" :key="item">
    <button @click="getADog">获得一只狗</button>
</template>

<!-- 
    hooks：让一个功能的数据（data）及方法（methods）通过一个函数封装在一起（hooks 本质就是一个函数）
    特点：
        - 命名一般是 useXxx
        - 一般放在独立的 js 或 ts 文件中，需要时在组件中引入使用    
        - 需要向外部提供可供使用的资源
-->

<script setup lang="ts" name="Test16">
// 引入 hooks 
import useDogs from '@/hooks/useDogs'

// 获取其中的资源进行使用
let { dogList, getADog } = useDogs()

</script>
<style scoped>
.img {
    width: 200px;
}
</style>