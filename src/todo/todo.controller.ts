import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { TodoService } from './todo.service';
import { Todo } from './models/todo.models';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CheckAllTodoDto } from './dto/check-all-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos(): Promise<Todo[]> {
    return this.todoService.getAllTodos();
  }

  @Post()
  createTodo(@Body() todoReq: CreateTodoDto): Promise<Todo> {
    return this.todoService.createTodo(todoReq);
  }

  @Patch('check-all')
  checkAllTodo(@Body() isChecked: CheckAllTodoDto): Promise<string> {
    return this.todoService.checkAllTodo(isChecked);
  }

  @Patch(':id')
  updateTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTodo: UpdateTodoDto,
  ): Promise<Todo> {
    return this.todoService.uptadeTodo(id, updateTodo);
  }

  @Delete('delete-all-checked')
  deleteAllCheckedTodo(): Promise<string> {
    return this.todoService.deleteAllCheckedTodo();
  }

  @Delete(':id')
  deleteTodo(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.todoService.deleteTodo(id);
  }
}
