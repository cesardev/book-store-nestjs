import { Exclude, Expose } from "class-transformer";
import { IsString } from "class-validator";


@Exclude()
export class ReadUserDetailsDto {

   @Expose()
   @IsString()
   public readonly name: string;

   @Expose()
   @IsString()
   public readonly lastname: string;

}