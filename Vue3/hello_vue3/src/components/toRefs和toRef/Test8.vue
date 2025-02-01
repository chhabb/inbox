<template>
    <h1>toRefs和toRef</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>

    <h2>toRef 年龄：{{ person.age }}</h2>

    <div>
        <button @click="updateName">btn1</button>
        <button @click="updateAge">btn2</button>
    </div>
    <div>
        <button @click="updateName1">btn1</button>
        <button @click="updateAge1">btn2</button>
    </div>
    <div>
        <button @click="updateToRefAge">btn</button>
    </div>
</template>

<!-- 
    从一个 Proxy 代理对象中进行解构赋值拿到其中的属性时，这些属性不是响应式的
    toRefs 功能函数用于将一个 Proxy 对象的属性包装成多个 Ref 对象（使用时需要 .value），此时进行解构赋值拿到其中的属性时，这些属性能够保持其响应式（因为是 Ref 对象），且修改这些 Ref 对象的值时，会影响原 Proxy 对象的值（与原 Proxy 对象的响应式链接依然存在）
-->

<script setup lang="ts" name="Test8">
import { reactive, toRefs, toRef } from 'vue';

let person = reactive({ name: "张三", age: 18 })

// 直接解构赋值拿出来的属性不是响应式的
// let { name, age } = person

// function updateName() {
//     name += '1'
//     console.log(name, person.name);
// }

// function updateAge() {
//     age += 1
//     console.log(age, person.age);
// }

// 通过toRefs处理后进行解构赋值拿出来的属性是响应式的
let { name, age } = toRefs(person)

console.log(toRefs(person));
console.log(name, age);


function updateName1() {
    name.value += '1'
    console.log(name, person.name);
}

function updateAge1() {
    age.value += 1
    console.log(age, person.age);
}

// toRef 用于提取 Proxy 对象中某一个单独属性，包装成 Ref 对象，同样的，具备与原 Proxy 对象的响应式链接。语法：toRef(源Proxy对象,'要提取的属性字符串')
let nl = toRef(person, 'age')

function updateToRefAge() {
    nl.value += 1
    console.log(nl, person.age);
}

</script>
<style></style>