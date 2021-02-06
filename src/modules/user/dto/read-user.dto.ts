/* eslint-disable @typescript-eslint/no-unused-vars */
import { Type } from "class-transformer";
import { IsEmail, IsNumber, IsString } from "class-validator";
import { ReadUserDetailsDto } from "./read-user-details.dto";


export class ReadUserDto {

   @IsNumber()
   public readonly id: number;

   @IsEmail()
   public readonly email: string;

   @IsString()
   public readonly username: string;

   @Type( type => ReadUserDetailsDto )
   public readonly details: ReadUserDetailsDto;

}