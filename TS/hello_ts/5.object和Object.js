"use strict";
(function () {
    // 1.object（⼩写）  可存储所有⾮原始类型：对象、函数、数组等
    let a; //a的值可以是任何【⾮原始类型】，包括：对象、函数、数组等
    // 以下代码，是将【⾮原始类型】赋给a，所以均符合要求
    // a = {}
    // a = { name: '张三' }
    // a = [1, 3, 5, 7, 9]
    // a = function () { }
    // a = new String('123')
    // class Person { }
    // a = new Person()
    // 以下代码，是将【原始类型】赋给a，有警告
    // a = 1 // 警告：不能将类型“number”分配给类型“object”
    // a = true // 警告：不能将类型“boolean”分配给类型“object”
    // a = '你好' // 警告：不能将类型“string”分配给类型“object” 
    // a = null // 警告：不能将类型“null”分配给类型“object”
    // a = undefined // 警告：不能将类型“undefined”分配给类型“object”
    // Object（⼤写）可存储所有可以调⽤ Object ⽅法的类型（除了 undefined 和 null 的任何值）。
    let b; //b的值必须是Object的实例对象（除去undefined和null的任何值）
    // 以下代码，均⽆警告，因为给a赋的值，都是Object的实例对象
    b = {};
    b = { name: '张三' };
    b = [1, 3, 5, 7, 9];
    b = function () { };
    b = new String('123');
    class Person {
    }
    b = new Person();
    b = 1; // 1不是Object的实例对象，但其包装对象是Object的实例
    b = true; // truue不是Object的实例对象，但其包装对象是Object的实例
    b = '你好'; // “你好”不是Object的实例对象，但其包装对象是Object的实例
    // 以下代码均有警告
    // b = null // 警告：不能将类型“null”分配给类型“Object”
    // b = undefined // 警告：不能将类型“undefined”分配给类型“Object”
})();
