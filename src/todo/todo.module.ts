import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { Todo } from './models/todo.models';

@Module({
  imports: [SequelizeModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
