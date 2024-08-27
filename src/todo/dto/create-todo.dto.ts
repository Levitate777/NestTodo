import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim().replace(/s+/g, ' '))
  @Length(1, 256)
  text: string;
}
