(function () {
    // 1.设置a的类型为unknown
    let a: unknown
    //以下对a的赋值，均符合规范
    a = 100
    a = false
    a = '你好'

    // 2
    // 设置x的数据类型为string
    let x: string
    // x = a //警告：不能将类型“unknown”分配给类型“string”

    // 必须确定a是唯一的类型
    // 方式1：加类型判断
    // if(typeof a === 'string'){
    //     x = a　// 不报错，因为到这一步已经确定类型为string了
    //     console.log(x)
    // }

    // 第⼆种⽅式：加断⾔
    x = a as string
    //第三种⽅式：加断⾔
    x = <string>a

    // 3.读取 any 类型数据的任何属性都不会报错，⽽ unknown 正好与之相反。
    let str1: string
    str1 = 'hello'
    str1.toUpperCase() //⽆警告
    let str2: any
    str2 = 'hello'
    str2.toUpperCase() //⽆警告
    let str3: unknown
    str3 = 'hello';
    // str3.toUpperCase() //警告：“str3”的类型为“未知”
        // 使⽤断⾔强制指定str3的类型为string
        (str3 as string).toUpperCase() //⽆警告

})()