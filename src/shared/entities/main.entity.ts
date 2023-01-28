import { Exclude } from 'class-transformer';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class MainEntity {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @UpdateDateColumn()
  @Exclude()
  public updatedAt: Date;

  @CreateDateColumn()
  @Exclude()
  public createdAt: Date;
}
