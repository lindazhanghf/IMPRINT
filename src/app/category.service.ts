import { Injectable } from '@angular/core';

import { Category } from './category';
import { CATEGORIES } from './data/categories';

@Injectable()
export class CategoryService {
  getCategories(): Promise<Category[]> {
    return Promise.resolve(CATEGORIES);
  }

  getCategory(id: number): Promise<Category> {
    return this.getCategories()
               .then(categories => categories.find(category => category.id === id));
  }
}
