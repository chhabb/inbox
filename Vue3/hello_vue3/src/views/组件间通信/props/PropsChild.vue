<template>
    <h1>PropsChild</h1>
    <h2>父组件传递给子组件的数据：{{ parentData }}</h2>
    <button @click="sendData">btn</button>
</template>

<script setup lang="ts" name="PropsChild">
import { ref } from "vue"

// 接受父组件传递的数据（更多细节参考之前关于 props 的章节）
let props = defineProps(['parentData', 'sendData'])

let childData = ref('子组件的数据')

function sendData() {
    props.sendData(childData)
}

</script>
<style scoped></style>