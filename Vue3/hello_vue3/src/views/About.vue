<template>
    <h1>About</h1>
</template>

<script setup lang="ts" name="About">
import { onUnmounted } from 'vue';

onUnmounted(()=>{
    console.log('about卸载了');
})
</script>
<style scoped>
</style>