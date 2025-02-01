(function(){
// 1.明确的表示a的类型是 any —— 【显式的any】
let a: any
// 2.任意类型值都可以赋值给any类型变量
a = 100;
a = '你好';
a = false;
// 3.隐式的any：无类型声明的变量赋值多个类型的数据时，自动推断为any类型
let b;
// 以下对b的赋值，均⽆警告
b = 100;
b = '你好';
b = false;
// 4.any类型的变量，可以赋值给任意类型的变量（可能污染变量类型）
let c:any
c = 9;
let x: string
x = c; // ⽆警告
})()
