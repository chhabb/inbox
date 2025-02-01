(function () {
    // 1.限定类
    // PersonInterface接⼝，⽤与限制Person类的格式
    interface PersonInterface {
        name: string
        age: number
        speak(n: number): void
    }
    // 定义⼀个类 Person，实现 PersonInterface 接⼝
    class Person implements PersonInterface {
        constructor(
            public name: string,
            public age: number
        ) { }
        // 实现接⼝中的 speak ⽅法
        speak(n: number): void {
            for (let i = 0; i < n; i++) {
                // 打印出包含名字和年龄的问候语句
                console.log(`你好，我叫${this.name}，我的年龄是${this.age}`);
            }
        }
    }
    // 创建⼀个 Person 类的实例 p1，传⼊名字 'tom' 和年龄 18
    const p1 = new Person('tom', 18);
    p1.speak(3)

    // 2.限定对象
    interface UserInterface {
        name: string
        readonly gender: string // 只读属性
        age?: number // 可选属性
        run: (n: number) => void
    }
    const user: UserInterface = {
        name: "张三",
        gender: '男',
        age: 18,
        run(n) {
            console.log(`奔跑了${n}⽶`)
        }
    };
    // 3.限定函数
    interface CountInterface {
        (a: number, b: number): number;
    }
    const count: CountInterface = (x, y) => {
        return x + y
    }
})()