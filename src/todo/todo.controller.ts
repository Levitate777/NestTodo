import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './models/todo.models';
import { UpdateTodoDto } from './dto/update-todo.dto';

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

  @Patch('check-all')
  checkAllTodo(@Body() isChecked: Pick<Todo, 'isChecked'>): Promise<string> {
    console.log('controller', isChecked);
    return this.todoService.checkAllTodo(isChecked);
  }

  @Patch(':id')
  updateTodo(
    @Param('id') id: number,
    @Body() updateTodo: UpdateTodoDto,
  ): Promise<Todo> {
    return this.todoService.uptadeTodo(id, updateTodo);
  }
}
