<template>
    <h1>props使用</h1>
    <!-- 使用props为子组件传递数据 -->
    <Child :personList="personList"></Child>
</template>



<script setup lang="ts" name="Test14">
import { reactive } from 'vue';
import Child from './Child.vue';
import {type PersonList} from '@/types'

let personList = reactive<PersonList>([
    { id: 'sdfsadfasdf', name: "张三", age: 60 },
    { id: 'sadfsadfs', name: "李四", age: 60 },
    { id: 'sdfsaasdfasfdfasdf', name: "王五", age: 60 }
])
</script>
<style></style>