import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Todo } from './models/todo.models';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CheckAllTodoDto } from './dto/check-all-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo)
    private readonly todoModel: typeof Todo,
  ) {}

  getAllTodos(): Promise<Todo[]> {
    return this.todoModel.findAll({
      order: [['id', 'ASC']],
    });
  }

  createTodo(text: CreateTodoDto): Promise<Todo> {
    return this.todoModel.create({ ...text });
  }

  async uptadeTodo(id: number, updateTodo: UpdateTodoDto): Promise<Todo> {
    const editTodo = await this.todoModel.findByPk(id);
    if (!editTodo) {
      throw new NotFoundException('Failed to update todo.');
    }
    await editTodo.update(updateTodo, { where: { id } });
    return editTodo;
  }

  async checkAllTodo(updateTodo: CheckAllTodoDto): Promise<string> {
    const checkAll = await this.todoModel.update(
      {
        isChecked: updateTodo.isChecked,
      },
      {
        where: { isChecked: !updateTodo.isChecked },
      },
    );
    if (checkAll[0] === 0) {
      throw new NotFoundException('Failed to update check all todo.');
    }
    return 'OK';
  }

  async deleteTodo(id: number): Promise<string> {
    const coutdelete = await this.todoModel.destroy({ where: { id } });
    if (!coutdelete) {
      throw new NotFoundException('Failed to delete todo.');
    }
    return 'OK';
  }

  async deleteAllCheckedTodo(): Promise<string> {
    const countDelete = await this.todoModel.destroy({
      where: { isChecked: true },
    });
    if (!countDelete) {
      throw new NotFoundException('Failed to delete all checked todo.');
    }
    return 'OK';
  }
}
