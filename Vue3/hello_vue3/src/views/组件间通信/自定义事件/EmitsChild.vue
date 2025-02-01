<template>
    <div class="s">
        <h1>EmitsChild</h1>
        <button @click="sendData">btn</button>
    </div>

</template>

<script setup lang="ts" name="EmitsChild">
// 2. 子组件通过 defineEmits 声明接收父组件绑定的自定义事件
const emit = defineEmits(['click'])

function sendData() {
    // 3. 子组件使用 emit 触发自定义事件为父组件传递数据
    emit('click', '子组件传递给父组件的数据', '子组件传递给父组件的数据')
}

</script>
<style scoped>
.s {
    background-color: bisque;
}
</style>