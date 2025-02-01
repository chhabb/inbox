<template>
    <div>
        <h1>Ref对象的解包行为</h1>

        <!-- 模板中使用不需要.value -->
        <h2>{{ testData }}</h2>
        <h2>{{ obj }}</h2>
        <button @click="click">btn</button>
    </div>
</template>

<!-- 
    Ref对象的解包行为：
    - 模板中自动解包
    - 当一个Ref对象是一个Proxy对象的属性时自动解包
-->

<script setup lang="ts" name="Test18">
import { reactive, ref } from 'vue';

let testData = ref('testData')
let obj = reactive({
    a: 1,
    b: 2,
    c: ref(3)
})

function click() {
    // 当一个Ref对象是一个Proxy对象的属性时，操作无需.value
    obj.c += 1
    console.log(obj);
}

</script>
<style scoped></style>