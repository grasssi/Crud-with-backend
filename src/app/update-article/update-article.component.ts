import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleServiceService } from '../services/article-service.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  submitted = false;
  articles = this.ArticleService.getAllArticles();
  profileForm = new FormGroup({
    nomArticle: new FormControl('', Validators.required),
    descriptionArticle: new FormControl('', Validators.required),
    quantityArticle: new FormControl('', Validators.required),
    prixArticle: new FormControl('', Validators.required),
  });
  index: any;
  constructor(private activatetRoute: ActivatedRoute, private router: Router, private ArticleService: ArticleServiceService) { }

  ngOnInit(): void {
    this.index = this.activatetRoute.snapshot.params.index;
    this.profileForm.patchValue(this.articles[this.index])
  }
  updateProduct() {
    this.submitted = true;
    if (this.profileForm.invalid) { return };
    //with services
    this.ArticleService.saveUpdate(this.index, this.profileForm.value);
    this.ArticleService.getAricleByIndex(this.index);
    //without Service
    //remplacer len nouveau object avec lancien objet
    // this.articles.splice(this.index, 1, this.profileForm.value);
    //mise a jour de localStorage
    // localStorage.setItem('registration', JSON.stringify(this.articles))
    //apres lupdate naviger vers le component Articles
    this.router.navigate(['/articles'])
  }
}
