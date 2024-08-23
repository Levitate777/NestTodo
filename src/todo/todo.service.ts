import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './models/todo.models';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo)
    private readonly todoModel: typeof Todo,
  ) {}

  getAllTodos(): Promise<Todo[]> {
    const todos = this.todoModel.findAll();
    if (!todos) {
      throw new InternalServerErrorException('Failed to retrieve tasks.');
    }
    return todos;
  }
  createTodo(text: CreateTodoDto): Promise<Todo> {
    const newTodo = this.todoModel.create({ ...text });
    if (!newTodo) {
      throw new InternalServerErrorException('Failed to create task.');
    }
    return newTodo;
  }
}
