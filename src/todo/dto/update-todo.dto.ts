import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

function validateText(text) {
  return text.trim().replace(/s+/g, ' ');
}

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
