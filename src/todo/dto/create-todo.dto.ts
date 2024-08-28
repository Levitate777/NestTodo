import { IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim().replace(/s+/g, ' '))
  text: string;
}
