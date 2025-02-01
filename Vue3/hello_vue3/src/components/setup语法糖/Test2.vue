<template>
    <h1>setup语法糖</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="updateName">修改姓名</button>
    <button @click="updateAge">修改年龄</button>
    <button @click="showTel">查看电话</button>
</template>

<script lang="ts">
export default {
    name: "Test2",
}
</script>

<!-- Vue3允许一个单文件组件中写两个script标签 -->
<!-- 两个script标签必须同时写lang=ts（lang属性保持一致即可，也可以都不写） -->
<!-- setup语法糖，其中声明的变量和方法直接在模板中可用 -->
<script setup lang="ts">
// 变量
let name = '张三'
let age = 18
let tel = 18888888888

// 方法
function updateName() {
    name = '李四'
    console.log(name);
}
function updateAge() {
    age += 1
    console.log(age);
}
function showTel() {
    alert(tel)
}
</script>
<style></style>