import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Serialize } from '../../shared/decorators/serialize.decorator';
import { GetCategoriesEvent } from '../events/get-categories.event';
import { CategoryGroupResponse } from '../responses/category-group.response';
import { CategoryResponse } from '../responses/category.response';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly services: CategoriesService) {}

  @Serialize(CategoryGroupResponse)
  @MessagePattern({ cmd: 'get_categories_with_groups' })
  getCategoriesWithGroups() {
    return this.services.getCategoriesWithGroups();
  }

  @Serialize(CategoryResponse)
  @MessagePattern({ cmd: 'get_categories' })
  getCategories(event: GetCategoriesEvent) {
    return this.services.getCategories(event);
  }
}
