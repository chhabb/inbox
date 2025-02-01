<template>
    <div>
        <h1>GrandChild</h1>
        <h2>{{ parentData }}</h2>
        <button @click="updateParent">修改祖先组件数据（或传递数据给祖先组件）</button>
    </div>
</template>
<script setup lang="ts" name="GrandChild">
// 1. 引入inject
import { inject } from 'vue'

// 2. 示意inject获取provide分发的数据
// inject('接收的数据名',默认值)，返回值就是接收到的数据，如果没有接收到数据，使用默认值
let { parentData, updateParentData } = inject('parentData', { parentData: 'hahaha', updateParentData() { } })

function updateParent() {
    updateParentData()
}


</script>
<style scoped></style>