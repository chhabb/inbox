(function () {
    // 声明函数类型
    // TypeScript 中的 => 在函数类型声明时表示函数类型，描述其参数类型和返回类型。
    // JavaScript 中的 => 是⼀种定义函数的语法，是具体的函数实现。
    let count: (a: number, b: number) => number
    count = function (x, y) {
        return x + y
    }
})()