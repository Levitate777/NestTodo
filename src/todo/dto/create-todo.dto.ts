import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) =>
    value
      .trim()
      .replace(/ {2,}/g, ' ')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;'),
  )
  @Length(1, 255)
  text: string;
}
