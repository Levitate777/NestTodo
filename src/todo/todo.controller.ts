import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './models/todo.models';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('all')
  getAllTodos(): Promise<Todo[]> {
    return this.todoService.getAllTodos();
  }

  @Post('create')
  createTodo(@Body() text: CreateTodoDto): Promise<Todo> {
    return this.todoService.createTodo(text);
  }
}
