import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateRoleDto, ReadRoleDto, UpdateRoleDto } from './dto';
import { Role } from './role.entity';
import { RoleService } from './role.service';

@Controller('roles')
export class RoleController {

   constructor(
      private readonly _roleService: RoleService
   ) { }

   @Get( ':roleId' )
   public getRole( @Param( 'roleId', ParseIntPipe ) roleId: number ): Promise<ReadRoleDto> {
      return this._roleService.get( roleId );
   }

   @Get()
   public getRoles(): Promise<ReadRoleDto[]> {
      return this._roleService.getAll();
   }

   @Post()
   public createRole( @Body() role: Partial<CreateRoleDto> ): Promise<ReadRoleDto> {
      return this._roleService.create( role );
   }

   @Patch( ':roleId' )
   public updateRole(
      @Param( 'roleId', ParseIntPipe ) roleId: number,
      @Body() role: Partial<UpdateRoleDto>
   ) {
      return this._roleService.update( roleId, role );
   }

   @Delete( ':roleId' )
   public deleteRole( @Param( 'roleId', ParseIntPipe ) roleId: number ) {
      return this._roleService.delete( roleId );
   }

}
