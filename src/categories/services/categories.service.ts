import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryGroup } from '../entities/category-group.entity';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryGroup)
    private readonly categoryGroupRepository: Repository<CategoryGroup>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}
  async getAll() {
    const groups = await this.categoryGroupRepository.find({
      relations: {
        categories: true,
      },
    });

    // TODO:: remove this stupid code (we don't have seeder so it's workaround)
    if (groups.length === 0) {
      await this.seedDummyCategories();
      return await this.categoryGroupRepository.find({
        relations: {
          categories: true,
        },
      });
    }

    return groups;
  }
  async seedDummyCategories() {
    const sport = this.categoryGroupRepository.create({ name: 'Sport' });
    await this.categoryGroupRepository.save(sport);

    const sports = [
      'Soccer',
      'Tennis',
      'Basketball',
      'Hockey',
      'Baseball',
      'Volleyball',
      'Boxing',
      'Fitness',
      'Golf',
    ];
    await this.categoryRepository.save(
      sports.map((name) => ({
        name,
        group: sport,
      })),
    );

    const entertainment = this.categoryGroupRepository.create({
      name: 'Entertainment',
    });
    await this.categoryGroupRepository.save(entertainment);

    const entertainments = ['Moving', 'Gaming', 'Comedy', 'Fun', 'Music'];
    await this.categoryRepository.save(
      entertainments.map((name) => ({
        name,
        group: entertainment,
      })),
    );

    const business = this.categoryGroupRepository.create({
      name: 'Business',
    });
    await this.categoryGroupRepository.save(business);

    const businesses = ['Stocks', 'Marketing'];
    await this.categoryRepository.save(
      businesses.map((name) => ({
        name,
        group: business,
      })),
    );

    const lifestyle = this.categoryGroupRepository.create({
      name: 'Lifestyle',
    });
    await this.categoryGroupRepository.save(lifestyle);

    const lifestyles = ['Food', 'Cars', 'Traveling ✈️'];
    await this.categoryRepository.save(
      lifestyles.map((name) => ({
        name,
        group: lifestyle,
      })),
    );

    const art = this.categoryGroupRepository.create({
      name: 'Art',
    });
    await this.categoryGroupRepository.save(art);

    const arts = ['Art', 'Design'];
    await this.categoryRepository.save(
      arts.map((name) => ({
        name,
        group: art,
      })),
    );
  }
}
