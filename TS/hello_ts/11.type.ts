(function () {
    // 关键字type
    // 1.声明类型别名：使⽤ type 关键字定义， type 后跟类型名称
    type num = number;
    let price: num
    price = 100

    // 2.声明联合类型：使用 | 分割多个类型，表示变量可以为这些类型中的任意一种
    type Status = number | string
    type Gender = '男' | '⼥'
    function printStatus(status: Status) {
        console.log(status);
    }
    function logGender(str: Gender) {
        console.log(str)
    }
    printStatus(404);
    printStatus('200');
    printStatus('501');
    logGender('男')
    logGender('⼥')

    //3.声明交叉类型：
    //⾯积
    type Area = {
        height: number; //⾼
        width: number; //宽
    };
    //地址
    type Address = {
        num: number; //楼号
        cell: number; //单元号
        room: string; //房间号
    };
    // 定义类型House，且House是Area和Address组成的交叉类型
    type House = Area & Address;
    const house: House = {
        height: 180,
        width: 75,
        num: 6,
        cell: 3,
        room: '702'
    }

    // 4.特殊情况
    const src = [1, 2, 3];
    const dst = [0];
    src.forEach((el) => dst.push(el))
})()