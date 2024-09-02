import { IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

function validateText(text) {
  return text.trim().replace(/s+/g, ' ');
}

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => validateText(value))
  text: string;
}
