<template>
    <h1>watch</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">btn</button>

    <hr>

    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>

    <hr>

    <h2>姓名：{{ person1.name }}</h2>
    <h2>年龄：{{ person1.age }}</h2>
    <button @click="changeName1">修改名字</button>
    <button @click="changeAge1">修改年龄</button>
    <button @click="changePerson1">修改整个人</button>

    <hr>
    <h2>姓名：{{ person2.name }}</h2>
    <h2>年龄：{{ person2.age }}</h2>
    <h2>爱好：{{ person2.like.l1 }}\{{ person2.like.l2 }}</h2>
    <button @click="changeName2">修改名字</button>
    <button @click="changeAge2">修改年龄</button>
    <button @click="changeLike1">修改爱好1</button>
    <button @click="changeLike2">修改爱好2</button>
    <button @click="changePerson2">修改整个人</button>

</template>

<!-- 
    watch：当一个数据发生变化时，执行某种操作
    
    vue3 中 watch 是一个功能函数，使用时需要引入

    语法：watch(监视的数据,回调函数,配置对象) 
        - 回调函数接受 newVal、oldVal 两个参数
        - 配置对象的配置项：immediate、deep

    watch 返回一个函数，该函数用于解除监视（调用后，当监视数据发生变化时，不再执行回调函数）

    watch 可以监视以下四种数据：
        1.  ref 定义的数据（包括计算属性）。
        2.  reactive 定义的数据。
        3. 函数返回一个值（ getter 函数）。
        4. 一个包含上述内容的数组。
-->

<script setup lang="ts" name="Test10">
import { reactive, ref, watch } from 'vue';

// 1. 监视一个 ref 定义的基本类型数据，监视的是其 value 值的改变。
let sum = ref(0)

function changeSum() {
    sum.value += 1
}

// 监视 ref 数据时，不用 .value 
const stopWatch = watch(sum, (newVal, oldVal) => {
    console.log(newVal, oldVal);
    // 解除监视
    if (sum.value >= 10) {
        stopWatch()
    }
})

// 2. 监视一个 ref 定义的对象类型数据，监视的是对象的【地址值】，若想监视对象内部的数据，要手动开启深度监视
/* 
    若修改的是 ref 定义的对象中的属性， newValue  和  oldValue  都是新值，因为它们是同一个对象。
    若修改整个 ref 定义的对象， newValue  是新值，  oldValue  是旧值，因为不是同一个对象了。
*/
let person = ref({
    name: "张三",
    age: 18
})

function changeName() {
    person.value.name += '1'
}

function changeAge() {
    person.value.age += 1
}

function changePerson() {
    // 整个对象的地址值发生了变化
    person.value = {
        name: '李四',
        age: 80
    }
}

// 直接写 person 时，监听的时地址值的变化，内部属性发生变化时监视不到
let stopWatch1 = watch(person, (newVal, oldVal) => {
    console.log(newVal, oldVal);
})

// 监听内部属性变化时，需要开启深度监视
let stopWatch2 = watch(person, (newVal, oldVal) => {
    console.log(newVal, oldVal);
}, { deep: true })


// 3. 监视 reactive 定义的对象类型数据，默认开启深度监视（无法关闭深度监视），任何属性发生变化都会触发回调（直接修改整个对象无法触发回调）。
// 同理，因为监视的数据的地址值没有发生变化，所以 newVal 和 oldVal 是相同的，都是新对象
let person1 = reactive({
    name: "张三",
    age: 18
})

function changeName1() {
    person1.name += '1'
}

function changeAge1() {
    person1.age += 1
}

function changePerson1() {
    // person1 的地址值没有发生变化
    Object.assign(person1, {
        name: '李四',
        age: 80
    })
}

watch(person1, (newVal, oldVal) => {
    console.log(newVal, oldVal);
})

// 4. 监视 ref 或 reactive 定义的对象类型数据中的某个属性
/* 
    1. 若该属性值不是对象类型，需要写成 getter 函数形式（能返回一个值的函数）。
    2. 若该属性值是依然是对象类型，可直接编，也可写成函数，建议写成函数。
*/
let person2 = reactive({
    name: "张三",
    age: 18,
    like: {
        l1: "吃饭",
        l2: "睡觉",
    }
})

function changeName2() {
    person2.name += '1'
}

function changeAge2() {
    person2.age += 1
}

function changeLike1() {
    person2.like.l1 += '1'
}
function changeLike2() {
    person2.like.l2 += '2'
}

function changePerson2() {
    person2.like = {
        l1: 'sss',
        l2: 'saa'
    }
}

// 监视响应式对象中的某一基本类型属性
watch(() => person2.name, (newVal, oldVal) => {
    console.log(newVal, oldVal);
})
watch(() => person2.age, (newVal, oldVal) => {
    console.log(newVal, oldVal);
})

// 监视响应式对象中的某一对象类型属性
// 可以直接写，这样监视的是具体属性的变化，不关心整个对象的地址值的变化
// watch(person2.like, (newVal, oldVal) => {
//     console.log(newVal, oldVal);
// })

// 也可以写成函数，这样监视的是整个对象的地址值的变化，不关心具体属性的变化
// watch(() => person2.like, (newVal, oldVal) => {
//     console.log(newVal, oldVal);
// })

// 最佳实践：函数形式 + deep，可以监视某个属性的变化，也可以监视对象地址值的变化
watch(() => person2.like, (newVal, oldVal) => {
    console.log(newVal, oldVal);
}, { deep: true })

// 5. 监视上述多个数据
watch([() => person2.name, () => person2.like.l2], (newVal, oldVal) => {
    console.log('监视上述多个数据', newVal, oldVal);
})

</script>
<style></style>