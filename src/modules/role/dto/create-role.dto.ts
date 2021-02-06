import { IsString, MaxLength } from "class-validator";


export class CreateRoleDto {

   @IsString()
   @MaxLength( 50, { message: 'This name is not valid' } )
   public readonly name: string;

   @IsString()
   @MaxLength( 100, { message: 'This description is not valid' } )
   public readonly description: string;

}