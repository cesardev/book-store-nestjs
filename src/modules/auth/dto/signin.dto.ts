import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {

   @IsNotEmpty()
   @IsString()
   public username: string;

   @IsNotEmpty()
   @IsString()
   public password: string;

}
