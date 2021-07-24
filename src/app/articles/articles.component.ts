import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../services/article-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  selectedPartner:any;
  registartions:any;

  constructor(private ArticleService: ArticleServiceService) { }

  ngOnInit(): void {
    this.registartions = this.ArticleService.getAllArticles();
  }

  onDelete(i: number) {
    //with Services
    this.ArticleService.deleteArticle(i);
    this.ngOnInit(); // first way
   // this.registartions =  this.ArticleService.getAllArticles() // second way
    //without Services
    //  this.registartions.splice(i, 1);
    //   localStorage.setItem('registration', JSON.stringify(this.registartions));
  }

}
