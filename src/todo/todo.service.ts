import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './models/todo.models';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo)
    private readonly todoModel: typeof Todo,
  ) {}

  getAllTodos(): Promise<Todo[]> {
    const todos = this.todoModel.findAll();
    if (!todos) {
      throw new InternalServerErrorException('Failed to retrieve todos.');
    }
    return todos;
  }

  createTodo(text: CreateTodoDto): Promise<Todo> {
    const newTodo = this.todoModel.create({ ...text });
    if (!newTodo) {
      throw new InternalServerErrorException('Failed to create todo.');
    }
    return newTodo;
  }

  async uptadeTodo(id: number, uptadeTodo: UpdateTodoDto): Promise<Todo> {
    const editTodo = await this.todoModel.findByPk(id);
    if (!editTodo) {
      throw new InternalServerErrorException('Failed to update todo.');
    }
    await editTodo.update(uptadeTodo, { where: { id } });
    console.log('update', editTodo);
    return editTodo;
  }

  async checkAllTodo(updateTodo: Pick<Todo, 'isChecked'>): Promise<string> {
    console.log('service', updateTodo);
    const checkAll = await this.todoModel.update(
      {
        isChecked: updateTodo.isChecked,
      },
      {
        where: { isChecked: !updateTodo.isChecked },
      },
    );
    console.log(checkAll);
    if (checkAll[0] === 0) {
      throw new InternalServerErrorException(
        'Failed to update check all todo.',
      );
    }
    return 'update check all completed';
  }

  async deleteTodo(id: number): Promise<string> {
    await this.todoModel.destroy({ where: { id } });
    return 'delete one todo';
  }
}
