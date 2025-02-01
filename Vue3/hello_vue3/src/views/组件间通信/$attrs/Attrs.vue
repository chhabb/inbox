<template>
    <div>
        <h1>Attrs</h1>
        <h2>{{ grandChildData }}</h2>
        <!-- 
            使用没有参数的 v-bind 将一个对象的所有属性都当作 props 传入
            和自定义事件类似：
            - 传递的是非函数数据，是传给子孙组件去用的
            - 传递的是函数数据，是想要子孙组件的数据去用的
         -->
        <Child v-bind="{ a, b, c, d, getData }"></Child>
    </div>
</template>
<!-- 
    1.  $attrs 用于实现当前组件的父组件，向当前组件的子组件通信（祖孙之间）。
    2. 具体说明： $attrs 是一个对象，包含所有父组件传入的标签属性。
    注意： $attrs 会自动排除 props 中声明的属性(可以认为声明过的  props  被子组件自己“消费”了)
-->
<script setup lang="ts" name="Attrs">
import Child from './Child.vue'

import { ref } from 'vue'

let a = ref('a')
let b = ref('b')
let c = ref('c')
let d = ref('d')

let grandChildData = ref('')

function getData(value) {
    grandChildData.value = value
}

</script>
<style scoped></style>