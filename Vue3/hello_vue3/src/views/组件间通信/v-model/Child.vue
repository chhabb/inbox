<template>
    <div>
        <h1>Child</h1>
        <input type="text" :value="modelValue" @input="emit('update:modelValue', $event.target.value)">
    </div>

</template>

<script setup lang="ts" name="Child">
import { ref } from "vue";

defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

let username = ref('张三')


</script>
<style scoped></style>