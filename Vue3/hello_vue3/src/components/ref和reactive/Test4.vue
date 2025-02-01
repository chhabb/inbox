<template>
    <h1>ref声明响应式数据</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="updateName">修改姓名</button>
    <button @click="updateAge">修改年龄</button>
    <button @click="showTel">查看电话</button>
</template>

<!-- 
    vue3提供ref和reactive两种声明响应式数据的功能函数，将一个数据传递给这两个函数时会得到相应的响应式数据 
    一般地，通过ref创建基本类型响应式数据，通过reactive创建对象类型响应式数据
-->
<script setup lang="ts" name="Test4">
// 使用这两个函数需要从vue中引入
import { ref } from 'vue';

let name = ref('张三')
let age = ref(18)
let tel = 18888888888

// 返回一个通过vue处理过的Ref对象
console.log(name, age);

function updateName() {
    // Ref对象特点：修改时需要.value，在模板中使用时不需要.value（自动解包）
    name.value = '李四'
    console.log(name);
}
function updateAge() {
    age.value += 1
    console.log(age);
}
function showTel() {
    alert(tel)
}
</script>
<style></style>