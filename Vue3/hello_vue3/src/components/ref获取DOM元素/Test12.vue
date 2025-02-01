<template>
    <h1>ref获取DOM节点/组件实例对象</h1>
    <!-- 2.打标记 -->
    <h2 ref="china">China</h2>
    <h2>American</h2>
    <Child ref="com"></Child>
    <button @click="getDOM">点击获取DOM元素</button>
    <button @click="getCom">点击获取组件实例对象</button>
</template>

<!-- 
    ref用来获取DOM节点、组件实例对象
    通过 defineExpose 用于向外（一般是父组件）暴露自身属性，因为 setup 组件默认不会向外暴露任何属性
-->

<script setup lang="ts" name="Test12">
import Child from './Child.vue';
import { ref } from 'vue'

// 1. 声明容器
let china = ref()
let com = ref()

function getDOM() {
    // 3. 获取元素
    console.log(china.value);
}
function getCom() {
    // 3. 获取组件实例对象
    console.log(com.value);
}
</script>
<style></style>