"use strict";
(function () {
    // enum类型
    // 例子：
    // function walk(str: string) {
    //     if (str === 'up') {
    //         console.log("向【上】⾛");
    //     } else if (str === 'down') {
    //         console.log("向【下】⾛");
    //     } else if (str === 'left') {
    //         console.log("向【左】⾛");
    //     } else if (str === 'right') {
    //         console.log("向【右】⾛");
    //     } else {
    //         console.log("未知⽅向");
    //     }
    // }
    // walk('up')
    // walk('down')
    // walk('left')
    // walk('right')
    // 1.数字枚举
    // 定义⼀个描述【上下左右】⽅向的枚举Direction
    let Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 1] = "Down";
        Direction[Direction["Left"] = 2] = "Left";
        Direction[Direction["Right"] = 3] = "Right";
    })(Direction || (Direction = {}));
    console.log(Direction); // 打印Direction会看到如下内容
    /*
     {
     0:'Up',
     1:'Down',
     2:'Left',
     3:'Right',
     Up:0,
     Down:1,
     Left:2,
     Right:3
     }
    */
    // 反向映射
    console.log(Direction.Up);
    console.log(Direction[0]);
    // 此⾏代码报错，枚举中的属性是只读的
    // Direction.Up = 'shang'
    // 声明这个函数的参数是枚举类型
    // 枚举⽤于判断逻辑的值是连续且相关的⼀组值，适合使用枚举（有代码提示，且不会写错值）。
    function walk(str) {
        if (str === Direction.Up) {
            console.log("向【上】⾛");
        }
        else if (str === Direction.Down) {
            console.log("向【下】⾛");
        }
        else if (str === Direction.Left) {
            console.log("向【左】⾛");
        }
        else if (str === Direction.Right) {
            console.log("向【右】⾛");
        }
        else {
            console.log("未知⽅向");
        }
    }
    walk(Direction.Down);
    // 2.字符串枚举
    // enum Direction {
    //     Up = "up",
    //     Down = "down",
    //     Left = "left",
    //     Right = "right"
    // }
    // let dir: Direction = Direction.Up;
    // console.log(dir); // 输出: "up"
    // 3.常量枚举
    // 普通枚举，查看编译后的js代码会发现代码量很大
    // enum Directions {
    //     Up,
    //     Down,
    //     Left,
    //     Right
    // }
    // let x = Directions.Up;
    // 常量枚举
    // const enum Directions {
    //     Up,
    //     Down,
    //     Left,
    //     Right
    // }
    // let x = Directions.Up;
})();
