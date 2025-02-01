<template>
    <h1>EmitsParent</h1>
    <!-- 1. 父组件中为子组件绑定自定义事件 -->
    <EmitsChild @click="click"></EmitsChild>
    <h2>子组件传递给父组件的数据：{{ childData }}</h2>
</template>

<!-- 
    自定义事件：只能用于子传父
    区分：原生事件、自定义事件

    原生事件
    - 事件名是特定的（ click 、 mosueenter 等等）	
    - 事件对象 $event : 是包含事件相关信息的对象

    自定义事件：
    - 事件名是任意名称
    - 事件对象 $event : 是调用 emit 时所提供的数据，可以是任意类型

    vue2 中写在 DOM 元素上的都是原生事件，写在组件身上的都是自定义事件
    vue3 中无论写在哪里都是原生事件，如果想要成为自定义事件，需要在组件内部通过 defineEmits 接收
-->

<script setup lang="ts" name="EmitsParent">
import EmitsChild from './EmitsChild.vue';

// 4. 子组件触发 emit，这个回调就会被调用，回调的默认参数就是子组件传递过来的数据
function click(val1, val2) {
    console.log('click', val1, val2);
}

</script>
<style scoped></style>