<template>
    <h1>路由</h1>
    <!-- 
        RouterLink 
        - 通过 to 属性指定路由路径，有两种写法
            - 字符串写法
            - 对象写法
        - 通过 active-class 为当前激活的路由指定一个类名，方便添加自定义样式
    -->

    <!-- 字符串写法 -->
    <!-- <RouterLink to="/home" active-class="active">home</RouterLink>
    <RouterLink to="/news" active-class="active">news</RouterLink>
    <RouterLink to="/about" active-class="active">about</RouterLink> -->

    <!-- 对象写法 -->
    <!-- <RouterLink :to="{ path: '/home' }" active-class="active">home</RouterLink>
    <RouterLink :to="{ path: '/news' }" active-class="active">news</RouterLink>
    <RouterLink :to="{ path: '/about' }" active-class="active">about</RouterLink> -->

    <!-- 对象写法的拓展：命名路由写法 -->
    <!-- 
        replace 和 push 用法：
            作用：控制路由跳转时操作浏览器历史记录的模式。
            push 是追加历史记录（默认值，且RouterLink没有这个配置项），replace 是替换当前记录。
    -->
    <!-- 开启 replace 模式 -->
    <RouterLink replace :to="{ name: 'home' }" active-class="active">home</RouterLink>
    <RouterLink :to="{ name: 'news' }" active-class="active">news</RouterLink>
    <RouterLink :to="{ name: 'about' }" active-class="active">about</RouterLink>
    <RouterView></RouterView>
</template>

<!-- 
    路由就是一组key-value的对应关系，前端路由是路径和组件的对应关系，后端路由是路径和处理函数的对应关系
    多个路由需要通过路由器管理
    vue中，路由是 route，路由器是 router
    路由用来实现一个SPA（单页面应用）
-->

<!-- 
    路由的两个注意点：
        1. 路由组件通常存放在 pages 或 views 文件夹，一般组件通常存放在 components 文件夹。
        2. 通过点击导航，视觉效果上“消失”了的路由组件，默认是被卸载掉的，需要的时候再去挂载。
-->

<script setup lang="ts" name="Test17">
// 引入 RouterView 指定路由组件渲染的位置，RouterView 是一个组件，直接在模板中使用即可
// 引入 RouterLink 指定路由组件对应的路由路径，配置后点击即可切换路径
import { RouterView } from 'vue-router';
</script>
<style scoped>
.active {
    background-color: bisque;
}
</style>