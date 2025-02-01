<template>
    <h1>setup语法糖之 vite-plugin-vue-setup-extend 插件的使用</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="updateName">修改姓名</button>
    <button @click="updateAge">修改年龄</button>
    <button @click="showTel">查看电话</button>
</template>

<!-- 使用 vite-plugin-vue-setup-extend 这个插件（开发依赖）可以通过name属性达到命名组件的效果，少写一个script标签，代码更简洁 -->
<script setup lang="ts" name="Test3">
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