import { Pipe, PipeTransform } from '@angular/core';
import { ArticleServiceService } from '../services/article-service.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
constructor(private ArticleService: ArticleServiceService){ }
  transform(value: any, args?: any): any {

    console.log('serch=',value);

    if (!value) return null;
    if (!args) return value;
    args = args.toLowerCase();
value= this.ArticleService.getAricleByIndex(args);
    console.log('value=',value);
    return (value.nomArticle || value.descriptionArticle||value.quantityArticle||value.prixArticle)
  }
}
