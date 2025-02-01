/* 
    pinia：集中式状态管理工具
    只管理组件共享的状态数据，不共享的数据由组件自身管理
*/


// 1. 引入 createPinia 
import { createPinia } from "pinia";

// 2. 创建 pinia 实例
let pinia = createPinia()

// 3. 暴露出去，在main.ts中进行注入
export default pinia