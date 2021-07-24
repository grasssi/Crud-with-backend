import { Pipe, PipeTransform } from '@angular/core';
import { ArticleServiceService } from '../services/article-service.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  item: any
  articlebyid: any
  constructor(private ArticleService: ArticleServiceService) { }
  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;
    return [value[args-1]]
  }
}

