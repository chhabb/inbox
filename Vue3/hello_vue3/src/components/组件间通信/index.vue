<template>
    <h1>组件间通信</h1>
    <ul>
        <li>
            <RouterLink to="/props">props</RouterLink>
        </li>
        <li>
            <RouterLink to="/zdysj">自定义事件</RouterLink>
        </li>
        <li>
            <RouterLink to="/mitt">mitt</RouterLink>
        </li>
        <li>
            <RouterLink to="/v-model">v-model</RouterLink>
        </li>
        <li>
            <RouterLink to="/$attrs">$attrs</RouterLink>
        </li>
        <li>
            <RouterLink to="/$refs&$parent">$refs、$parent</RouterLink>
        </li>
        <li>
            <RouterLink to="/provide&inject">provide、inject</RouterLink>
        </li>
        <li>
            <RouterLink to="/pinia">pinia</RouterLink>
        </li>
        <li>
            <RouterLink to="/slot">slot</RouterLink>
        </li>
    </ul>
    <RouterView></RouterView>
</template>

<!-- 
    组件通信就是组件之间传递数据
    
    Vue3 组件通信和 Vue2 的区别：
    - 移出事件总线，使用 mitt 代替。
    -  vuex 换成了 pinia 。
    - 把 .sync 优化到了 v-model 里面了。
    - 把 $listeners 所有的东西，合并到 $attrs 中了。
    -  $children 被砍掉了。
-->
<script setup lang="ts" name="Communication">
import { RouterLink, RouterView } from 'vue-router';
</script>
<style scoped></style>