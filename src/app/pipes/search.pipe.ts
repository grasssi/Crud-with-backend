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
    args = args.toLowerCase()
        return value.filter((item: any) => {
      return item?.nomArticle?.toLowerCase().includes(args) ||
        item?.descriptionArticle?.toLowerCase().includes(args) ||
        item?.quantityArticle == args ||
        item?.prixArticle == args ||
        item?.id == args;
    });
  }
}

