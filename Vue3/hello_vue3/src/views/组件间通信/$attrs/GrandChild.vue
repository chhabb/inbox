<template>
    <div>
        <h1>GrandChild</h1>
        <h2>{{ $attrs }}</h2>
    </div>
</template>
<script setup lang="ts" name="GrandChild">
import { ref } from "vue"

let grandChildData = ref('grandChildData')

// $attrs 传递的数据可以通过props进行接收使用
let props = defineProps(['getData'])
props.getData(grandChildData)

</script>
<style scoped></style>