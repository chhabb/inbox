(function () {
    // abstract 用来创建抽象类
    abstract class Package {
        constructor(public weight: number) { }
        // 抽象⽅法：⽤来计算运费，不同类型包裹有不同的计算⽅式
        // 抽象方法没有函数体，就是没有具体实现
        // 它可以定义一个函数的名字、参数及其类型、返回值及其类型
        abstract calculate(): number

        // 普通⽅法：打印包裹详情
        printPackage() {
            console.log(`包裹重量为: ${this.weight}kg，运费为: ${this.calculate()}元`);
        }
    }

    // 标准包裹
    class StandardPackage extends Package {
        constructor(
            // weight不用写修饰符是因为它是继承来的，父类中写过了
            weight: number,
            //简写的时候必须写修饰符         
            public unitPrice: number // 每公⽄的固定费率
        ) { super(weight) }
        // 实现抽象⽅法：计算运费
        calculate(): number {
            return this.weight * this.unitPrice;
        }
    }
    // 创建标准包裹实例
    const s1 = new StandardPackage(10, 5)
    s1.printPackage()
})()