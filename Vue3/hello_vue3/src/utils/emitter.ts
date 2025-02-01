// 1. 引入mitt
import mitt from 'mitt'

// 2. 调用mitt得到emitter，emitter用来绑定、触发事件
const emitter = mitt()


/* 
    emitter.all：获取所有绑定的事件
    emitter.emit：触发一个事件
    emitter.off：解绑一个事件
    emitter.on：绑定一个事件
 */

// 绑定一个 test 事件，当事件被触发时，会执行它的回调
// emitter 可以同时绑定多个事件
emitter.on('test1', (value) => {// value 是触发事件时传递的数据
    console.log('test1被触发了',value);
})

emitter.on('test2', (value) => {
    console.log('test2被触发了',value);
})

emitter.on('test3', (value) => {
    console.log('test3被触发了',value);
})

// 触发一个事件，并传递数据，和自定义事件不同，mitte只能传递两个参数，第一个是事件名，第二个是传递的数据
setInterval(() => {
    emitter.emit('test1', 'data1')
    emitter.emit('test2', 'data2')
    emitter.emit('test3', 'data3')
}, 1000)

// 解绑一个事件
setTimeout(() => {
    emitter.off('test1')
}, 2000)

// 同时解绑所有事件
setTimeout(() => {
    emitter.all.clear()
}, 4000)

// 3. 暴露出去
export default emitter