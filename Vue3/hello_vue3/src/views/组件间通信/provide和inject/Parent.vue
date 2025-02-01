<template>
    <div>
        <h1>Parent</h1>
        <Child></Child>
    </div>
</template>

<!-- 
    provide、inject 实现祖孙组件直接通信
    在祖先组件中通过 provide 配置向后代组件提供数据
    在后代组件中通过 inject 配置来声明接收数据

    注意：$attrs 也可以实现祖孙间通信，但是必须通过中间组件进行传递；provide、inject则不需要中间组件作用
-->

<script setup lang="ts" name="Parent">
import Child from './Child.vue';

// 1. 引入 provide
import { provide, ref } from 'vue'

// 2. 传递数据
// provide('数据名'，数据值)
let parentData = ref('parent的数据')

function updateParentData() {
    parentData.value += '~'
}

// 向后代提供数据，所有的后代都可以获取到
// 如果传递的数据是 ref 对象，不需要 .value，否则传递过去的就是非响应式数据
// 和自定义事件一样：可以为后代传递函数数据和非函数数据，函数数据可以用来接收后代组件传递的数据，也可以操作祖先组件内的数据
provide('parentData', { parentData, updateParentData })

</script>
<style scoped></style>