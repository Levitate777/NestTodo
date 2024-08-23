import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Todo } from './models/todo.models';

@Module({
  imports: [SequelizeModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
