(function () {
    // 1.泛型函数 
    function logData<T>(data: T): T {
        console.log(data)
        return data
    }
    logData<number>(100)
    logData<string>('hello')

    // 2.泛型可以有多个
    function logData<T, U>(data1: T, data2: U): T | U {
        console.log(data1, data2)
        return Date.now() % 2 ? data1 : data2
    }
    logData<number, string>(100, 'hello')
    logData<string, boolean>('ok', false)

    // 3.泛型接⼝
    interface PersonInterface<T> {
        name: string,
        age: number,
        extraInfo: T
    }
    let p1: PersonInterface<string>
    let p2: PersonInterface<number>
    p1 = { name: '张三', age: 18, extraInfo: '⼀个好⼈' }
    p2 = { name: '李四', age: 18, extraInfo: 250 }

    // 4.泛型约束
    interface LengthInterface {
        length: number
    }
    // 约束规则是：传⼊的类型T必须具有 length 属性
    function logPerson<T extends LengthInterface>(data: T): void {
        console.log(data.length)
    }
    logPerson<string>('hello')
    // 报错：因为number不具备length属性
    // logPerson<number>(100)

    // 5.泛型类
    class Person<T> {
        constructor(
            public name: string,
            public age: number,
            public extraInfo: T
        ) { }
        speak() {
            console.log(`我叫${this.name}今年${this.age}岁了`)
            console.log(this.extraInfo)
        }
    }
    // 测试代码1
    const p1 = new Person<number>("tom", 30, 250);
    // 测试代码2
    type JobInfo = {
        title: string;
        company: string;
    }
    const p2 = new Person<JobInfo>("tom", 30, {
        title: '研发总监', company: '发发发
科技公司' })
})()