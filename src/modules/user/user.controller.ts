import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

   constructor(
      private readonly _userService: UserService
   ) { }

   @Get( ':id' )
   public async getUser( @Param( 'id', ParseIntPipe ) id: number ): Promise<User> {
      return await this._userService.get( id );
   }

   @Get()
   public async getUsers(): Promise<User[]> {
      return await this._userService.getAll();
   }

   @Post()
   public async createUser( @Body() user: User ): Promise<User> {
      return await this._userService.create( user );
   }

   @Patch( ':id' )
   public async updateUser( @Param( 'id', ParseIntPipe ) id: number, @Body() user: User ) {
      return await this._userService.update( id, user );
   }

   @Delete( ':id' )
   public async deleteUser( @Param( 'id', ParseIntPipe ) id: number ) {
      return await this._userService.delete( id );
   }

}
