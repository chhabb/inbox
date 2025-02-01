<template>
    <div>
        <h1>Parent</h1>
        <!-- 3. 标记组件标签 -->
        <Child1 ref="child1"></Child1>
        <Child2 ref="child2"></Child2>
        <button @click="changeChild1">修改Child1的数据</button>
        <button @click="changeChild2">修改Child2的数据</button>
        <h2>{{ parentData }}</h2>
        <!-- \
            使用 $refs 获取所有的子组件实例对象
            $refs 是一个 this 上暴露出来的特殊变量，可以在模板中使用时进行传递（或者直接拿到this获取），值为对象，包含所有被 ref 属性标识的 DOM 元素或组件实例。
            注意：所有this上暴露出来的特殊变量都可以这么用
             - 直接在模板中进行传递
             - 获取 this 进行操作
         -->
        <button @click="getAllChild($refs, $data)">获取所有的子组件</button>
    </div>
</template>
<script setup lang="ts" name="Parent">
// 1. 引入 ref
import { ref } from 'vue';
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';

// 2. 声明ref
let child1 = ref()
let child2 = ref()

function changeChild1() {
    // 4. 父组件可以获取并修改子组件数据
    // vue3中组件内的数据必须通过defineExpose暴露出去才能在外部获得
    // 子组件是一个 ref 对象，操作时需要 .value
    console.log(child1);
    child1.value.child1Data = '修改后的数据'
}
function changeChild2() {
    console.log(child2);
    child2.value.child2Data = '修改后的数据'
}

// 获取所有的组件实例，可以操作组件内暴露出来的数据
function getAllChild(value, value1) {
    console.log(value, value1);
}

let parentData = ref('父组件的数据')

// 暴露数据给子组件去操作
defineExpose({
    parentData
})
</script>
<style scoped></style>