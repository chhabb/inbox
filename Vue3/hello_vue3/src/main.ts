// createApp 用于创建一个 vue 应用
import { createApp } from 'vue'

// App 是根组件
import App from './App.vue'

import router from './router'
import pinia from './store'
// 4.引入 emitter，参与项目运行（因为是utils）
import emitter from './utils/emitter'

// createApp 返回 vue 应用实例，mount 函数用于将这个实例挂载到 类名为 app 的容器中，该容器位于模板文件 index.html 中
let app = createApp(App)

// 4. 使用路由器
app.use(router)

// 4. 使用pinia
app.use(pinia)

app.mount('#app')
