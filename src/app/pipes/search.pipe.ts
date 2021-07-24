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
    console.log('value=', value);
    if (!value) return null;
    if (!args) return value;
    args = args.toLowerCase();
    this.articlebyid = this.ArticleService.getAricleByIndex(args);
    console.log(' this.articlebyid =', this.articlebyid);
    return (
      // this.ArticleService.getAricleByIndex(args)
      this.articlebyid.nomArticle || this.articlebyid.descriptionArticle || this.articlebyid.quantityArticle || this.articlebyid?.prixArticle
    )
  }
}

