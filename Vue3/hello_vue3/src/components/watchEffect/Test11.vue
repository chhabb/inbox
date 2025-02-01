<template>
    <h1>watchEffect</h1>
    <h2>当前sum1求和为{{ sum1 }}</h2>
    <h2>当前sum2求和为{{ sum2 }}</h2>
    <button @click="addSum1">btn1</button>
    <button @click="addSum2">btn2</button>
</template>

<!-- 
    watchEffect和watch功能一致，用法不一样
    - watchEffect的回调一上来就会执行一次
    - watchEffect不用写监听的数据源，它会自动分析回调中使用的数据，当其变化时进行监听，不变化就不执行回调
-->

<script setup lang="ts" name="Test11">
import { ref, watch, watchEffect } from 'vue'

let sum1 = ref(0)
let sum2 = ref(0)

function addSum1() {
    sum1.value += 1
}
function addSum2() {
    sum2.value += 1
}

// watch实现
// watch([sum1, sum2], (newVal) => {
//     console.log(newVal);

//     let [sum1, sum2] = newVal
//     if (sum1 >= 5 || sum2 >= 7) {
//         console.log('发请求');
//     }
// })

// watchEffect实现
watchEffect(() => {
    console.log('一上来就执行一次');
    if (sum1.value >= 5 || sum2.value >= 7) {
        console.log('发请求');
    }
})
</script>
<style></style>