<template>
    <div>
        <h1>Child1</h1>
        <button @click="sendData">发送数据给Child2</button>
    </div>

</template>
<script setup lang="ts" name="Child1">
import { ref } from "vue";

// 引入 emitter
import emitter from '@/utils/emitter';

let data1 = ref('Child1的数据')

function sendData() {
    // 触发事件并传递数据
    emitter.emit('getmessage', data1.value)
}

</script>
<style scoped></style>