<template>
    <div>
        <h1>Child2</h1>
        <h2>Child1发送的数据：{{ data2 }}</h2>
    </div>

</template>
<script setup lang="ts" name="Child2">
// 引入 emitter
import emitter from '@/utils/emitter';
import { ref } from 'vue';

let data2 = ref('')

// 绑定事件等待接收数据
emitter.on('getmessage', (value) => {
    data2.value = value
})

</script>
<style scoped></style>