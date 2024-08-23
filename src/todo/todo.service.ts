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
    await this.todoModel.update(uptadeTodo, { where: { id } });
    return editTodo;
  }
}
