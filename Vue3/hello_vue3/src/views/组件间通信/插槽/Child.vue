<template>
    <div>
        <h1>Child</h1>
        <!-- 
            父组件传递的插槽内容，子组件通过内置的 slot 组件标签来指定其渲染位置
            slot标签内部可以填写默认内容，如果父组件没有传递插槽内容，则渲染默认内容
        -->
        <slot name="default">
            <h2>默认内容</h2>
        </slot>

        <!-- 
            slot标签有一个name属性，用来命名插槽，父组件中通过 v-slot 指令可以指定将插槽的内容放在哪一个 slot 标签中
            默认插槽其实也有名字，是 default，不过一般不写
        -->
        <slot name="s2"></slot>
        <slot name="s3"></slot>


        <!-- 
            作用域插槽：数据在组件的自身，但根据数据生成的结构和样式需要组件的使用者来决定。
            因此子组件需要把数据回传给父组件去添加结构和样式
            作用域插槽可以是具名插槽，也可以是默认插槽
        -->
        <!-- 
            作用域插槽回传的数据是传递给了插槽的使用者
            可以同时回传多个数据
        -->
        <slot name="s4" :childData="childData" :a="a"></slot>
    </div>
</template>
<script setup lang="ts" name="Child">
import { ref } from "vue";
let childData = ref({
    a: 1,
    b: 2,
    c: 3
})
let a = ref('a')
</script>
<style scoped></style>