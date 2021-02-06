import { IsEmail } from "class-validator";

export class UpdateUserDto {

   @IsEmail()
   public readonly username: string;

}