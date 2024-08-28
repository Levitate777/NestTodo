import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateTodoDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim().replace(/s+/g, ' '))
  @IsOptional()
  text: string;

  @IsBoolean()
  @IsOptional()
  isChecked: boolean;
}
