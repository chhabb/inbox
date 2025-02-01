// 创建一个路由器，并暴露出去

import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import About from '@/views/About.vue'
import Detail from '@/views/Detail.vue'
import Communication from '@/components/组件间通信/index.vue'
import PropsParent from '@/views/组件间通信/props/PropsParent.vue'
import EmitsParent from '@/views/组件间通信/自定义事件/EmitsParent.vue'
import Mitt from '@/views/组件间通信/mitt/Mitt.vue'
import VModel from '@/views/组件间通信/v-model/VModel.vue'
import Attrs from '@/views/组件间通信/$attrs/Attrs.vue'
import RefsParent from '@/views/组件间通信/$refs和$parent/Parent.vue'
import ProvideInject from '@/views/组件间通信/provide和inject/Parent.vue'
import Pinia from '@/views/组件间通信/pinia/Pinia.vue'
import Slot from '@/views/组件间通信/插槽/Slot.vue'

/* 
    history模式：使用 createWebHistory 创建
        优点：URL 更加美观，不带有 # ，更接近传统的网站 URL 。
        缺点：后期项目上线，需要服务端配合处理路径问题，否则刷新会有 404 错误。
    
    hash模式：使用 createWebHashHistory 创建
        优点：兼容性更好（IE9都兼容），因为不需要服务器端处理路径。
        缺点： URL 带有 # 不太美观，且在 SEO 优化方面相对较差。
*/

// 1.引入 createRouter
import { createRouter, createWebHistory } from "vue-router";

// 2.创建路由器（管理多个路由）
const router = createRouter({
    history: createWebHistory(), // 路由器的工作模式
    routes: [
        /* 
            路由重定向：将特定的路由路径，重新定向到另一路由路径。
        */
        {
            path: '/',
            redirect: '/communication'
        },
        {
            /* 
                命名路由：使用路由配置项的 name 属性为路由起名字
                作用：可以简化路由跳转及传参
            */
            name: 'home',
            path: "/home",
            component: Home
        },
        /* 
            嵌套路由通过children属性指定
        */
        {
            name: 'news',
            path: "/news",
            component: News,
            children: [
                {
                    // 路径有全写和简写两种写法
                    name: 'detail',
                    // path: "detail",//简写
                    // path: "/news/detail",//全写
                    path: "/news/detail/:content?", // params 参数占位、?指定参数可传可不传
                    component: Detail,
                    /* 
                        路由props配置：将传递的路由参数以 props 方式传给组件，组件内部使用 defineProps 接收
                        布尔值用法：只能处理 params 参数
                        函数写法：自己返回一个对象，该对象的所有属性将作为 props 传递给组件，可以处理 params 和 query 参数，可以自定义数据
                        对象写法：只能传递固定的自定义数据
                    */
                    // props: true // 布尔值写法
                    // 对象写法
                    // props: {
                    //     content: 111
                    // },
                    // 函数写法，route是匹配成功的路由对象
                    props(route) {
                        return {
                            content: route.params.content
                        }
                    }
                }
            ]
        },
        {
            name: 'about',
            path: "/about",
            component: About
        },
        {
            path: '/communication',
            component: Communication,
            children: [
                {
                    path: '/props',
                    component: PropsParent,
                },
                {
                    path: '/zdysj',
                    component: EmitsParent,
                },
                {
                    path: '/mitt',
                    component: Mitt,
                },
                {
                    path: '/v-model',
                    component: VModel,
                },
                {
                    path: '/$attrs',
                    component: Attrs,
                },
                {
                    path: '/$refs&$parent',
                    component: RefsParent,
                },
                {
                    path: '/provide&inject',
                    component: ProvideInject,
                },
                {
                    path: '/pinia',
                    component: Pinia,
                },
                {
                    path: '/slot',
                    component: Slot,
                },
            ]

        }
    ]
})

// 3. 将路由器暴露出去
export default router