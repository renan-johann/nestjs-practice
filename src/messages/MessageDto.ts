import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class MessageDto {
  @IsString() // https://github.com/typestack/class-validator
  text: string;

  @IsBoolean()
  completed: boolean;
}
