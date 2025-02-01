// 自定义useDogs hooks
import axios from 'axios'
import { reactive,onMounted } from 'vue';

export default function useDogs() {

    // 数据
    let dogList = reactive<any>([])

    // 方法
    async function getADog() {
        try {
            let res = await axios.get<any, any>('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(res.data.message)
            console.log(res);
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    // 钩子
    onMounted(()=>{
        getADog()
    })

    // 还可以添加其他资源，比如计算属性、监视属性，不会冲突，类似于 vue2 中的 mixin
    // 优势：复用代码, 让 setup 中的逻辑更清楚易懂。

    // 暴露外部需要使用的资源
    return {
        dogList,
        getADog
    }
}