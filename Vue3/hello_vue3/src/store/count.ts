// vue3 把 state 拆分成了许多小 store，每使用一个都需要单独定义，命名一般都是 组件名.ts

// 1. 引入 defineStore 
import { defineStore } from "pinia";

// 2. 使用 defineStore 创建保存某一小块共享数据的小 store，命名一般都是 useXxxStore
// defineStore 接受两个参数
// - 参数 1 是区分各个小 store 的 id 字符串，最好和文件名一致
// - 参数 2 是一个配置对象，用来配置当前 store
const useCountStore = defineStore('count', {

    // state 用来保存状态数据，必须写成一个函数
    state() {
        return {
            sum: JSON.parse(localStorage.getItem('sum') as any) 
        }
    },
    // actions 存放一些用来修改 state 状态数据的方法
    actions: {
        increment(num) {
            console.log('increment调用了', num);
            // actions 方法里的 this 指向当前 store 
            console.log(this);

            // 两种修改方式
            // this.$state.sum = num
            this.sum = num

        }
    },
    // getters 用来加工 state 数据，类似于计算属性，每次 state 数据发生变化，会重新计算，有三种写法
    getters: {
        // 写法一
        bigSum(state) {
            return state.sum * 10
        },
        // 写法二
        bigbigSum: state => state.sum * 100,
        // 写法三：使用this
        bigbigbigSum() {
            console.log(this); // getters 方法里的 this 也指向当前 store 
            return this.sum * 1000
        }
    }
})

// 3. 把定义好的 store 暴露出去
export default useCountStore