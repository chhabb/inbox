// 定义一个接口
export interface PersonInter {
    id: string
    name: string
    age: number
}

// 自定义类型
// export type PersonList = Array<PersonInter>
export type PersonList = PersonInter[]