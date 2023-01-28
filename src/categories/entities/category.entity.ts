import { Column, Entity, Index, ManyToOne } from 'typeorm';
import { MainEntity } from '../../shared/entities/main.entity';
import { CategoryGroup } from './category-group.entity';

@Entity({ name: 'categories' })
export class Category extends MainEntity {
  @Column()
  @Index()
  name: string;

  @ManyToOne((type) => CategoryGroup)
  group: CategoryGroup;
}
