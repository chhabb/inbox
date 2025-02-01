<template>
    <div>
        <h1>Child2</h1>
        <h2>{{ child2Data }}</h2>
    </div>
</template>

<script setup lang="ts" name="Child2">
import { ref } from "vue";

let child2Data = ref('Child2的数据')

// 向组件外暴露数据
defineExpose({
    child2Data
})

</script>
<style scoped></style>