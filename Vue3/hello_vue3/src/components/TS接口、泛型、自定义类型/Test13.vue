<template>
    <h1>TS接口、泛型、自定义类型</h1>

</template>



<script setup lang="ts" name="Test11">
import { type PersonInter,type PersonList } from '@/types'

let person: PersonInter = { id: 'sdfsadfasdf', name: "张三", age: 60 }

let personList: PersonList = [
    { id: 'sdfsadfasdf', name: "张三", age: 60 },
    { id: 'sadfsadfs', name: "李四", age: 60 },
    { id: 'sdfsaasdfasfdfasdf', name: "王五", age: 60 }
]
</script>
<style></style>