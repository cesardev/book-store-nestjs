import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { User } from "../user/user.entity";

@Entity('roles')
export class Role extends BaseEntity {
   
   @PrimaryGeneratedColumn('increment')
   public id: number;

   @Column({ type: 'varchar', length: 20, nullable: false })
   public name: string;

   @Column({ type: 'text', nullable: false })
   public description: string;

   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   @ManyToMany(type => User, user => user.roles)
   @JoinColumn()
   public users: User[];

   @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
   public status: string;

   @CreateDateColumn({ type: 'timestamp', name: 'create_at' })
   public createAt: Date;

   @UpdateDateColumn({ type: 'timestamp', name: 'update_at' })
   public updateAt: Date;

}
