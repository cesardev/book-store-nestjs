import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Role } from './role.entity';
import { RoleService } from './role.service';

@Controller('roles')
export class RoleController {

   constructor(
      private readonly _roleService: RoleService
   ) { }

   @Get( ':id' )
   public async getRole( @Param( 'id', ParseIntPipe ) id: number ): Promise<Role> {
      return await this._roleService.get( id );
   }

   @Get()
   public async getRoles(): Promise<Role[]> {
      return await this._roleService.getAll();
   }

   @Post()
   public async createRole( @Body() role: Role ): Promise<Role> {
      return await this._roleService.create( role );
   }

   @Patch( ':id' )
   public async updateRole( @Param( 'id', ParseIntPipe ) id: number, @Body() role: Role ) {
      return await this._roleService.update( id, role );
   }

   @Delete( ':id' )
   public async deleteRole( @Param( 'id', ParseIntPipe ) id: number ) {
      return await this._roleService.delete( id );
   }

}
