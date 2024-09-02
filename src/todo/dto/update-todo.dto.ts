import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { validateText } from '../helpers/validateText';

export class UpdateTodoDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => validateText(value))
  @IsOptional()
  text: string;

  @IsBoolean()
  @IsOptional()
  isChecked: boolean;
}
