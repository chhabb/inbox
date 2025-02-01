(function () {
    // 1.void 通常⽤于函数返回值声明
    // function logMessage(msg: string): void {
    //     console.log(msg)
    // }
    // logMessage('你好')

    // 2.以下写法均合法
    // // ⽆警告
    // function logMessage(msg: string): void {
    //     console.log(msg)
    // }
    // // ⽆警告
    // function logMessage(msg: string): void {
    //     console.log(msg)
    //     return;
    // }
    // // ⽆警告
    // function logMessage(msg: string): void {
    //     console.log(msg)
    //     return undefined
    // }

    // 3.void 和 undefined 区别
    // function logMessage(msg: string): void {
    //     console.log(msg)
    // }
    // let result = logMessage('你好')
    // if (result) { // 此⾏报错：⽆法测试 "void" 类型的表达式的真实性
    //     console.log('logMessage有返回值')
    // }

    function logMessage(msg: string): undefined {
        console.log(msg)
    }
    let result = logMessage('你好')
    if (result) { // 此⾏⽆警告
        console.log('logMessage有返回值')
    }

})()