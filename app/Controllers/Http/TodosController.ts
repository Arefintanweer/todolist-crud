import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Todo from 'App/Models/Todo'

export default class TodosController {
  async create({ request }: HttpContextContract) {
    const todos = new Todo()
    todos.task_name = request.input('task_name')
    todos.status = request.input('status')
    todos.save()
    return todos.toJSON()
  }

  async read(){
    const data = await Todo.all()
    return JSON.stringify(data)
  }

async update({ params,request }: HttpContextContract){
  const data = Todo.query().where('id',params.id)
  data.task_name = request.input('task_name')
  data.status = request.input('status')
  data.save()
  return JSON.stringify(data)
}

  async delete({ params }: HttpContextContract){
    const data = Todo.query().where('id',params.id)
    const deletedData = await data.delete()
    return JSON.stringify(deletedData)
  }

  

  // async update({ params, request }: HttpContextContract)) {
  //   const singleTodo = Todo.query().where('id',params.id)
  //   singleTodo.task_name = request.input('task_name')
  //   singleTodo.status = request.input('status')
  //   singleTodo.save()
  //   return todos.toJSON()
  // }

