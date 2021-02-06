import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { RoleRepository } from './role.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { CreateRoleDto, ReadRoleDto, UpdateRoleDto } from './dto';
import { plainToClass } from 'class-transformer';
import { status } from '../../shared/entity-status.enum';

@Injectable()
export class RoleService {

   constructor(
      @InjectRepository( RoleRepository )
      private readonly _roleRepository: RoleRepository
   ) {}

   async get( id: number ): Promise<ReadRoleDto> {

      if ( !id ) {
         throw new BadRequestException('id must be sent');
      }

      const role: Role = await this._roleRepository.findOne( id, {
         where: { status: status.ACTIVE }
      });

      if ( !role ) {
         throw new NotFoundException();
      }

      return plainToClass( ReadRoleDto, role );
   }

   async getAll(): Promise<ReadRoleDto[]> {

      const roles: Role[] = await this._roleRepository.find( {
         where: { status: status.ACTIVE }
      });

      return roles.map(( role: Role ) => plainToClass( ReadRoleDto, role ));
   }

   async create( role: Partial<CreateRoleDto> ): Promise<ReadRoleDto> {

      const savedRole = await this._roleRepository.save( role );

      return plainToClass( ReadRoleDto, savedRole );

   }

   async update( roleId: number, role: Partial<UpdateRoleDto> ): Promise<ReadRoleDto> {

      const foundRole: Role = await this._roleRepository.findOne( roleId, {
         where: { status: status.ACTIVE }
      });

      if ( !foundRole ) {
         throw new NotFoundException( 'This role does not exist' );
      }

      foundRole.name = role.name;
      foundRole.description = role.description;

      const updateRole: Role = await this._roleRepository.save( foundRole );

      return plainToClass( ReadRoleDto, updateRole );

   }

   async delete( id: number ): Promise<void> {

      const roleExists = await this._roleRepository.findOne(id, {
         where: { status: status.ACTIVE },
      });

      if ( !roleExists ) {
         throw new NotFoundException();
      }

      await this._roleRepository.update( id, { status: 'INACTIVE' });

   }
}
