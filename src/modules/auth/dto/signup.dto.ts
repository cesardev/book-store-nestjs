import { IsNotEmpty, IsString } from 'class-validator';

export class SignUpDto {

   @IsNotEmpty()
   @IsString()
   public username: string;

   @IsNotEmpty()
   @IsString()
   public email: string;

   @IsNotEmpty()
   @IsString()
   public password: string;

}
