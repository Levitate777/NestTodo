import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim().replace(/s+/g, ' '))
  @Length(1, 255)
  text: string;
}
