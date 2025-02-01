<template>
    <h1>Count</h1>
    <h2>求和：{{ countStore.sum }}</h2>
    <h2>bigbigSum：{{ bigbigSum }}</h2>
    <button @click="updateNum">btn</button>
</template>

<script setup lang="ts" name="Count">

// 1. 引入定义好的 store 的 hooks
import useCountStore from '@/store/count'
import { storeToRefs } from 'pinia';

// 2. 调用获得 store 实例，是一个 Proxy 对象，其中保存了 store 当中 state 里的状态数据，每个数据都是一个 ref 对象
// 注意：当一个 Proxy 对象内部的属性是一个 ref 对象时，该 ref 对象会自动解包，使用时不需要再 .value
const countStore = useCountStore()

// 3. 获取数据（两种方式）
console.log(countStore.sum); // 不用 .value
console.log(countStore.$state.sum);

/* 
    修改pinia数据：
    - 直接通过小 store 的实例修改（在vue3中没有问题，在vue2中不允许直接修改state当中的数据），适合修改少量数据
    - 通过 store 的 $patch 方法修改，适合修改大量数据（只触发一次更新，效率高，可以通过开发工具看到）
    - 通过 actions 修改（vue2标准操作，需要定义对应数据的 actions），传递修改的数据并在actions中对应的方法里接收，适合在 actions 的方法里添加自己的逻辑（类似于编程式导航）
*/
function updateNum() {
    // 直接修改
    // countStore.sum += 1

    // 通过 $patch 修改
    // countStore.$patch({
    //     sum: 222
    // })

    // 通过 actions 修改
    countStore.increment(100)
}

/* 
    toRefs 和 storeToRefs：
    - 都可以用来解决解构赋值小 store 数据时丢失响应式的问题
    - toRefs 不推荐使用，因为它会将小 store 身上所有的数据都变成 ref 对象，效率太差
    - storeToRefs 只会将 store 当中 state 的数据变成 ref 对象，效率高
*/
// 解构赋值，方便展示
let { sum, bigbigSum } = storeToRefs(countStore)

console.log('sum', sum);


/* 
    $subscribe：通过 store 的 $subscribe() 方法侦听 state 中数据的变化，发生变化则触发回调
    - 可以配合 localStorage 实现数据刷新不丢失的效果
*/
countStore.$subscribe((mutate, state) => {
    // 不关心第一个参数
    console.log('mutate&state', mutate, state)
    localStorage.setItem('sum', JSON.stringify(state.sum))
})
</script>
<style scoped></style>