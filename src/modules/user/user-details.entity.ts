import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users_details')
export class UserDetails extends BaseEntity {

   @PrimaryGeneratedColumn('increment')
   public id: number;

   @Column({ type: 'varchar', length: 50, nullable: true })
   public name: string;

   @Column({ type: 'varchar', nullable: true })
   public lastname: string;

   @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
   public status: string;

   @CreateDateColumn({ type: 'timestamp', name: 'create_at', nullable: true })
   public createAt: Date;

   @UpdateDateColumn({ type: 'timestamp', name: 'update_at', nullable: true })
   public updateAt: Date;
}
