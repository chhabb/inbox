<template>
    <div>
        <h1>Slot</h1>
        <ChildVue>
            <!-- 写在组件标签开始标签和结束标签之间的内容会被vue视为要传递给其内部，是插槽的内容 -->
            <h2>默认插槽</h2>
        </ChildVue>
        <ChildVue>
            <!-- 
                具名插槽通过 v-slot:插槽名 可以指定将某些结构和样式 放入指定的插槽中去
                插槽的指令语法修改过很多次，这里写的是最新的推荐语法
                v-slot 指令可以应用于 template 标签和组件标签上，为了灵活运用，建议只使用 template 标签
                template 是无意义、无结构标签，可以写任意多个，且不会渲染到页面中去
            -->
            <!-- v-slot指令全写 -->
            <template v-slot:s2>具名插槽1</template>
            <!-- v-slot指令简写 -->
            <template #:s3>具名插槽2</template>
        </ChildVue>
        <ChildVue>
            <!-- v-slot指令下面的写法是在接收所有作用域插槽回传的数据，会包装为一个对象 -->
            <template v-slot:s4="allData">
                {{ allData }}
            </template>
        </ChildVue>
    </div>
</template>
<script setup lang="ts" name="Slot">
import ChildVue from "./Child.vue";
</script>
<style scoped></style>