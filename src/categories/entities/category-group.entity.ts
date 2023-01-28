import { Column, Entity, Index, OneToMany } from 'typeorm';
import { MainEntity } from '../../shared/entities/main.entity';
import { Category } from './category.entity';

@Entity({ name: 'categories_groups' })
export class CategoryGroup extends MainEntity {
  @Column()
  @Index()
  name: string;

  @OneToMany((type) => Category, (category) => category.group)
  categories: Category[];
}
