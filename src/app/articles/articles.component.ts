import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../services/article-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  selectedPartner:string='';


  constructor(private ArticleService: ArticleServiceService) { }
  registartions = this.ArticleService.getAllArticles();

  ngOnInit(): void {
  }
  onDelete(i: number) {
    //with Services
    this.ArticleService.deleteArticle(i);
    //without Services
    //  this.registartions.splice(i, 1);
    //   localStorage.setItem('registration', JSON.stringify(this.registartions));
  }

}
