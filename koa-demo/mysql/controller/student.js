const db = require('../model/db')
class Student{
    async list(ctx){
        let {name} = ctx.query
        // console.log(ctx)
        let rs = await db('select * from student where name = ?',name)
        ctx.body = rs
    }
    async add(ctx){
        let params = ctx.request.body
        console.log(params)
        // let params = {
        //     name:'hihihi',
        //     age:12
        // }
        let rs = await db('insert into student set ?',params)
        // ctx.body = 'add'
        ctx.body = rs
    }
    async update(ctx){
        let {age,id} = ctx.request.body
        console.log(ctx)
        let rs = await db('update student set age = ?,id=?',[age,id])
        ctx.body = rs
    }
    async remove(ctx){
        let {id} = ctx.request
        console.log(ctx)
        let rs = await db('delete  from student where id = ?',id)
        ctx.body = rs
    }
}
module.exports = new Student()