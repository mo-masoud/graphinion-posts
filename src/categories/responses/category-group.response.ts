import { Expose, Type } from 'class-transformer';
import { CategoryResponse } from './category.response';

export class CategoryGroupResponse {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  @Type(() => CategoryResponse)
  categories: CategoryResponse[];
}
