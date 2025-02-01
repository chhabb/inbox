<template>
    <h1>ref声明对象类型响应式数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="updateName">btn</button>

</template>

<!-- 
    reactive只能用来声明对象类型响应式数据，ref可以用来声明基本类型和对象类型响应式数据 
    ref声明对象类型响应式数据时，内部依然使用 reactive 进行处理，它返回一个ref对象（修改时需要.value)，该对象的 value 属性保存着一个由 reactive 创建的 proxy 代理对象（响应式是深层次的）
-->

<script setup lang="ts" name="Test6">
// 引入 ref
import { ref } from 'vue';

// 定义对象数据
let person = ref({ name: "张三", age: 18 })

console.log(person); // ref 返回一个 proxy 代理对象、

function updateName() {
    // ref声明的数据，无论是基本数据还是对象数据，操作时都必须 .value
    person.value.name = '李四'
    console.log(person);
}


</script>
<style></style>