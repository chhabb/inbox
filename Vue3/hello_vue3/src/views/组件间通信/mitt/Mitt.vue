<template>
    <div>
        <h1>Mitt</h1>
        <Child1></Child1>
        <Child2></Child2>
    </div>

</template>

<!-- 
    与消息订阅与发布（pubsub）和 vue2 中的全局事件总线功能类似，可以实现任意组件间通信。
    注意：mitt 使用时只需要配置后在各个组件内引入即可，不需要像 pinia、vue-router 一样进行注入操作
-->

<script setup lang="ts" name="Mitt">
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';

</script>
<style scoped>
</style>