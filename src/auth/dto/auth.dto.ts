import {
  IsEmail,
  IsEmpty,
  IsString,
} from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsEmpty()
  email: string;

  @IsString()
  @IsEmpty()
  password: string;
}
