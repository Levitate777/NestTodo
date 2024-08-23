import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateTodoDto {
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
  @IsOptional()
  text: string;

  @IsBoolean()
  @IsOptional()
  isChecked: boolean;
}
