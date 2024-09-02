import { IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

import { validateText } from '../helpers/validateText';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => validateText(value))
  text: string;
}
