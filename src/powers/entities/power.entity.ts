import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Power {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  skill: string;
  @DeleteDateColumn()
  deletedAt: Date;
}
