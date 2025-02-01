<template>
    <div>
        <h1>Child</h1>
        <h2>{{ a }}</h2>
        <h2>{{ b }}</h2>
        <!-- 父组件传递给子组件的未经接收的props属性会跑到 $attrs 属性当中，通过开发者工具可以查看这一点 -->
        <h2>{{ $attrs }}</h2>
        <!-- 因为 $attrs 是一个对象，因此可以使用 v-bind 的高级用法直接将其所有属性作为 props 传递给 GrandChild -->
        <GrandChild v-bind="$attrs"></GrandChild>
    </div>
</template>
<script setup lang="ts" name="Child">
import GrandChild from './GrandChild.vue'

defineProps(['a', 'b'])
</script>
<style scoped></style>