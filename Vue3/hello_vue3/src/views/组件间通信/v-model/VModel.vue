<template>
    <div>
        <h1>VModel</h1>
        <!-- v-model用在html的表单类标签上，实现双向数据绑定 -->
        <!-- <input type="text" v-model="username"> -->
        <!-- 
            v-model实现双向数据绑定的原理
            - 通过单项数据绑定实现数据引起视图变化
            - 通过input事件实现视图引起数据变化
         -->
        <input type="text" :value="username" @input="username = ($event.target as HTMLInputElement).value">

        <!-- v-model用在组件标签身上，用于实现父子双向数据同步 -->
        <!-- <Child v-model="username"></Child> -->
        <!-- 
            v-model实现父子双向数据同步的原理
            - 父组件通过props传递数据给子组件，通过自定义事件接收父组件传递的数据
            - 子组件通过props接收父组件传递的数据，通过value和input事件实现数据与子组件的同步，然后触发自定义事件传递数据给父组件
         -->
        <Child :modelValue="username" @update:modelValue="username = $event"></Child>
    </div>

</template>

<!-- 
    UI组件库大量使用 v-model
-->

<script setup lang="ts" name="VModel">
import { ref } from "vue";
import Child from './Child.vue'

let username = ref('张三')
</script>
<style scoped></style>