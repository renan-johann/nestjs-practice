import { IsString, IsNotEmpty } from 'class-validator';

export class MessageDto {
  @IsString() // https://github.com/typestack/class-validator
  @IsNotEmpty()
  text: string;
}
