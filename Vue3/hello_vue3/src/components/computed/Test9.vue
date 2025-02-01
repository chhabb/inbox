<template>
    <h1>computed</h1>
    姓：<input type="text" v-model="firstName">
    名：<input type="text" v-model="lastName">
    <h2>姓名：{{ fullName }}</h2>

    <button @click="updateName">改名</button>
</template>

<!-- 
    最佳实践：模板中的表达式尽可能简单，使用 computed 可以做到这一点
    computed 是一个功能函数，接收一个函数作为参数，该函数的返回值为最终计算的结果
    computed 的计算结果最终会包装为一个 Ref 对象
    computed 有只读（函数）和可读可写（对象）两种写法
    computed 有缓存，当且仅当依赖项发生变化时才会重新计算
-->

<script setup lang="ts" name="Test9">
import { ref, computed } from 'vue';

let firstName = ref('zhang')
let lastName = ref('san')

// 只读
// let fullName = computed(() => {
//     return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1).toLowerCase() + '-' + lastName.value.slice(0, 1).toUpperCase() + lastName.value.slice(1).toLowerCase()
// })

// 可读可写
let fullName = computed({
    get() {
        return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1).toLowerCase() + '-' + lastName.value.slice(0, 1).toUpperCase() + lastName.value.slice(1).toLowerCase()
    },
    set(newVal) {
        let [first, last] = newVal.split('-')
        firstName.value = first
        lastName.value = last
    }
})

function updateName() {
    fullName.value = 'li-si'
}
</script>
<style></style>