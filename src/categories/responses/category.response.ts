import { Expose } from 'class-transformer';

export class CategoryResponse {
  @Expose()
  id: number;

  @Expose()
  name: string;
}
