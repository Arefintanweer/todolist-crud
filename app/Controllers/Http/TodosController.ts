// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Todo from 'App/Models/Todo'

export default class TodosController {
  async create() {
    Todo.createMany([
      {
        task_name: 'Tution',
        status: 1,
      },
      {
        task_name: 'Birthday party',
        status: 0,
      },
      {
        task_name: 'Doctor appointment',
        status: 1,
      },
      {
        task_name: 'Attend Wedding',
        status: 0,
      },
    ])
    return 'Successfully Inserted'
  }

  async read() {
    return Todo.all()

    // const filteredTodo = await Todo.find(1)
    // return filteredTodo

    // const filteredTodo = await Todo.findBy('status', 1)
    // return filteredTodo

    // const firstTodo = await Todo.first()
    // return firstTodo
  }

  async update() {
    // const updatedTodo = await Todo.findOrFail(1)
    // updatedTodo.status = 1
    // await updatedTodo.save()
    const updatedTodo = await Todo.findOrFail(3)
    updatedTodo.task_name = 'Play Football'
    await updatedTodo.save()
    return 'Successfully Updated'
  }

  async delete() {
    const deletedTodo = await Todo.findOrFail(10)
    await deletedTodo.delete()
    return 'Successfully Deleted'
  }
}
