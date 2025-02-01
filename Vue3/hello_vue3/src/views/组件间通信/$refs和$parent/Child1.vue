<template>
    <div>
        <h1>Child1</h1>
        <h2>{{ child1Data }}</h2>
        <!-- 
           和 $refs 类似，$parent 也是一个内置变量，值为对象，当前组件的父组件实例对象。
        -->
        <button @click="updateParent($parent)">操作父组件的数据</button>
    </div>
</template>
<script setup lang="ts" name="Child1">
import { ref } from "vue";

let child1Data = ref('Child1的数据')

function updateParent(value){
    console.log(value);
    
    value.parentData = '修改后的数据'
}


// 向组件外暴露数据
defineExpose({
    child1Data
})

</script>
<style scoped></style>