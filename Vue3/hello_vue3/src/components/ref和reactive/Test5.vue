<template>
    <h1>reactive声明响应式数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="updateName">btn</button>

    <h2>列表</h2>
    <div v-for="(a, index) in arr" :key="a.id">{{ a.name }}<button @click="updateArr(index)">btn</button></div>

    <h1>{{obj.a.b.c}}</h1>
    <button @click="updateObj">btn</button>
</template>

<!-- reactive特点：声明的响应式数据是深层次的，无论数据嵌套多深，都能变成响应式 -->

<script setup lang="ts" name="Test5">
// 引入 reactive
import { reactive } from 'vue';

// 定义对象数据
let person = reactive({ name: "张三", age: 18 })

console.log(person); // reactive 返回一个 proxy 代理对象、

function updateName() {
    person.name = '李四'
    console.log(person);
}

// 定义数组数据
let arr = reactive([{ id: 1, name: 'aaa' }, { id: 2, name: 'bbb' }, { id: 3, name: 'ccc' }])

function updateArr(index: any) {
    arr[index].name = '李四'
}

// 深层次
let obj = reactive({
    a: {
        b: {
            c: 1
        }
    }
})

function updateObj(){
    obj.a.b.c = 100
}
</script>
<style></style>