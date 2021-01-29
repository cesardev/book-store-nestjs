import {
   BaseEntity, Entity,
   PrimaryGeneratedColumn, Column,
   OneToOne, JoinTable,
   ManyToMany, JoinColumn, CreateDateColumn, UpdateDateColumn
} from 'typeorm';
import { UserDetails } from './user-details.entity';
import { Role } from '../role/role.entity';

@Entity('users')
export class User extends BaseEntity {

   @PrimaryGeneratedColumn('increment')
   public id: number;

   @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
   public username: string;

   @Column({ type: 'varchar', nullable: false })
   public email: string;

   @Column({ type: 'varchar', nullable: false })
   public password: string;

   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   @OneToOne( type => UserDetails, { cascade: true, nullable: false, eager: true } )
   @JoinColumn({ name: 'detail_id' })
   public details: UserDetails;

   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   @ManyToMany(type => Role, role => role.users, { eager: true } )
   @JoinTable({ name: 'user_roles' })
   public roles: Role[];

   @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
   public status: string;

   @CreateDateColumn({ type: 'timestamp', name: 'create_at' })
   public createAt: Date;

   @UpdateDateColumn({ type: 'timestamp', name: 'update_at' })
   public updateAt: Date;

}
