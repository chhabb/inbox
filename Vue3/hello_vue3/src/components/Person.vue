<template>
    <!-- vue2必须有且仅有一个根标签，vue3可以写多个根标签 -->
    <h1>Person</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="updateName">修改姓名</button>
    <button @click="updateAge">修改年龄</button>
    <button @click="showTel">查看电话</button>
</template>
<script>
export default {
    name: "Person",
    // setup 执行时机：在 beforeCreate 之前执行
    beforeCreate() {
        console.log('beforeCreate');
    },
    // data() {
    //     return {
    //         name: '张三',
    //         age: 18,
    //         tel: 18888888888
    //     }
    // },
    // methods: {
    //     updateName() {
    //         this.name = '李四'
    //     },
    //     updateAge() {
    //         this.age += 1
    //     },
    //     showTel() {
    //         alert(this.tel)
    //     }
    // },
    setup() {
        console.log('setup');

        // 变量
        // 这样定义的变量不是响应式的
        let name = '张三'
        let age = 18
        let tel = 18888888888

        // 方法
        console.log(this); // setup 函数中的 this 是 undefined
        function updateName() {
            // 错误写法：vue2 中使用 this 访问 data 数据，vue3 的 setup 写法中没有维护 this，所以无法（也不需要）使用 this 来读取 data 数据
            // this.name = '李四'

            // vue3 中直接修改变量即可
            name = '李四'

            // 查看数据修改了，但是视图没有更新，因为这样定义的变量不是响应式的（Vue2中data配置项里的初始化数据都是响应式的）
            console.log(name);
        }
        function updateAge() {
            age += 1
            console.log(age);
        }
        function showTel() {
            alert(tel)
        }

        // 将变量放在一个对象里返回出去，模板中就可以使用
        // return {
        //     // 数据
        //     name,
        //     age,
        //     tel,
        //     // 方法
        //     updateName,
        //     updateAge,
        //     showTel
        // }

        // setup 函数可以返回一个渲染函数（参考vue官网）来生成HTML
        return () => '指定的渲染内容'
    }
}
</script>
<style></style>