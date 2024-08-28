import { IsBoolean } from 'class-validator';

export class CheckAllTodoDto {
  @IsBoolean()
  isChecked: boolean;
}
