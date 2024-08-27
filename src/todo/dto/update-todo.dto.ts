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
  @Transform(({ value }) => value.trim().replace(/s+/g, ' '))
  @Length(1, 256)
  @IsOptional()
  text: string;

  @IsBoolean()
  @IsOptional()
  isChecked: boolean;
}
