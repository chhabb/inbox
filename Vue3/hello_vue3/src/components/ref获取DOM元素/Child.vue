<template>
    <h1>Child</h1>
</template>
<script setup lang="ts" name="Child">
import { defineExpose } from 'vue'
const num1 = 1
const num2 = 2

defineExpose({
    num1
})
</script>
<style></style>