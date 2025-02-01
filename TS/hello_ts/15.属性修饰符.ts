(function () {
    // 属性修饰符
    class Person {
        // 默认修饰符 public，不写就是public
        name: string //等同于 public  name: string
        age: number //等同于 public  age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
        // 等同于 public speak(){}
        speak() {
            // 类的内部使用 public 修饰的属性
            console.log(`我叫：${this.name}，今年${this.age}岁`)
        }
    }

    class Student extends Person {
        study() {
            // 子类可以使用父类的 public 修饰的属性
            console.log(`${this.name}正在努⼒学习中......`)
        }
    }
    const p1 = new Person('tom', 18)
    // 类的外部访问/调用 public 修饰的属性和方法
    console.log(p1.name);
    console.log(p1.age);
    p1.speak()

    // 2.属性简写形式，以Person为例

    // class Person {
    //     // public name: string 不用写
    //     // public age: number 不用写
    //     constructor(
                // public name: string, 修饰符直接放参数前面，简写的时候必须写修饰符
                // public age: number 修饰符直接放参数前面，简写的时候必须写修饰符
            // ) {
    //         // this.name = name 不用写
    //         // this.age = age 不用写
    //     }
    // }
})()