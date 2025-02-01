<template>
    <h1>PropsParent</h1>
    <!-- 
        props：使用频率最高的组件间通信方式，适用于父子之间
        父组件传递数据给子组件
        - 非函数式数据，是传递个子组件用的
        - 函数式数据，是想要子组件传递数据给父组件用
        -->
    <PropsChild :parentData="parentData" :sendData="getData"></PropsChild>
    <h2>子组件传递给父组件的数据：{{ childData }}</h2>
</template>

<script setup lang="ts" name="PropsParent">
import { ref } from 'vue'
import PropsChild from './PropsChild.vue'

let parentData = ref('父组件的数据')

let childData = ref('')

// 这个回调用来接收子组件传递的数据
function getData(val) {
    childData.value = val
}

</script>
<style scoped></style>