import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Serialize } from '../../shared/decorators/serialize.decorator';
import { CategoryGroupResponse } from '../responses/category-group.response';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly services: CategoriesService) {}

  @Serialize(CategoryGroupResponse)
  @MessagePattern({ cmd: 'get_categories' })
  getAll() {
    return this.services.getAll();
  }
}
