<template>
    <div>
        <h1>Child</h1>
        <GrandChild></GrandChild>
    </div>
</template>
<script setup lang="ts" name="Child">
import GrandChild from './GrandChild.vue';
</script>
<style scoped></style>