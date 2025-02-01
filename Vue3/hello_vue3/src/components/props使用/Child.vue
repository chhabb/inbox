<template>
    <h1>Child</h1>
    <div v-for="item in personList" :key="item.id">{{ item.name }}</div>
</template>



<script setup lang="ts" name="Test11">

import { type PersonList } from '@/types'

// defineProps 是一个功能函数，用于接收 props 传递的值
// defineProps 在 setup 中天然可用，不用引入
// defineProps 接受的值在模板中直接可用
// defineProps 返回值为接受的所有 props 的值

// 纯JS写法：需要在一个数组中接收
// let props = defineProps(['personList'])

// TS写法：注意小括号不用数组接收
// let props = defineProps<{
//     personList: PersonList
// }>()

// 可传可不传
// let props = defineProps<{
//     personList?: PersonList
// }>()

// 使用 withDefaults 指定默认值
// 参数一是 defineProps 接收的 props 值，参数二是一个对象，用来指定默认值
// 默认值值必须使用一个函数指定
// withDefaults 返回最终处理完的 props 值
let props = withDefaults(
    defineProps<{ personList?: PersonList }>(), {
    personList: () => [
        {
            id: "11111",
            name: '赵六',
            age: 12
        }
    ]
})
console.log('props', props);


</script>
<style></style>