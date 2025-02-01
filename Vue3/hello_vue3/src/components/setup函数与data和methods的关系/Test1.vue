<template>
    <h2>
        Test1
    </h2>
    <h3>{{ a }}</h3>
    <h3>{{ b }}</h3>
    <h3>{{ c }}</h3>
    <button @click="d">ddd</button>
</template>
<script lang="ts">
// 由于vue3项目中可同时写data、methods和setup，而setup的功能替代了data和methods，因此需要知道它们之间的一些细节，这是一道面试题
// 总结：新写法无法访问旧写法的数据，旧写法可以访问新写法的数据
export default {
    name: "Test1",
    data() {
        return {
            a: 1,
            // data 中通过 this 可以访问 setup 中的数据
            b: this.c
        }
    },
    methods: {
        d() {
            // methods 中通过 this 可以访问 setup 中的数据
            console.log('函数d', this.c);
        }
    },
    setup() {
        let c = 3
        // setup中没有this，无法访问 data 和 methods 的数据
        return {
            c
        }
    }
}
</script>
<style></style>