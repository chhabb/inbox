<template>
    <h1>Vue3生命周期</h1>

</template>

<!-- 
    生命周期就是在特定的时机调用对应的函数执行某些操作
    vue2的beforeCreate和created合并为setup
-->

<script setup lang="ts" name="Test15">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';
onBeforeMount(() => {
    console.log('onBeforeMount');
})

onMounted(() => {
    console.log('onMounted');
})

onBeforeUpdate(() => {
    console.log('onBeforeUpdate');
})

onUpdated(() => {
    console.log('onUpdated');
})

onBeforeUnmount(() => {
    console.log('onBeforeUnmount');
})

onUnmounted(() => {
    console.log('onUnmounted');
})
</script>
<style></style>