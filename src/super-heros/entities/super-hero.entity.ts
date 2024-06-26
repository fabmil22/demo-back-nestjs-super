import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class SuperHero {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  secretIdentity: string;
  @Column('json', { nullable: true })
  superpowers: string[];
  @Column({ default: 'default.jpg' })
  image?: string;
  @DeleteDateColumn()
  deletedAt: Date;
}
