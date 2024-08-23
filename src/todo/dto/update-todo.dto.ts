import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateTodoDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsBoolean()
  isChecked: boolean;
}
