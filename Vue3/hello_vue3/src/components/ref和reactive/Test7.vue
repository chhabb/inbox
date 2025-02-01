<template>
    <h1>ref和reactive区别</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="updateName">btn</button>
</template>

<!-- 
    reactive 的局限性：修改对象中的属性，该对象是响应式的；重新分配一个新对象，会失去响应式；因为 reactive 只能保证它返回的对象是响应式的，修改该对象之后，会丢失响应式连接
-->

<script setup lang="ts" name="Test7">
// 引入 ref
import { reactive } from 'vue';

// 定义对象数据
let person = reactive({ name: "张三", age: 18 })

console.log(person);

function updateName() {
    // 这种修改对象属性的做法不可行（本质上都是在替换源对象），因为模板中使用的是顶层定义的 person，下面的操作会改变 person 变量的值，但与模板中使用的 person 数据无关联，所以不可行
    // person = { name: "李四", age: 18 }
    // person = reactive({ name: "李四", age: 18 })

    // 以下操作有效，因为本质上是在修改源对象的属性
    Object.assign(person, { name: "李四", age: 18 })

    console.log(person);
}


</script>
<style></style>