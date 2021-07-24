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
  profileForm = new FormGroup({
    nomArticle: new FormControl('', Validators.required),
    descriptionArticle: new FormControl('', Validators.required),
    quantityArticle: new FormControl('', Validators.required),
    prixArticle: new FormControl('', Validators.required),
  });
  id: any;
  constructor(private activatetRoute: ActivatedRoute, private router: Router, private ArticleService: ArticleServiceService) { }

  ngOnInit(): void {
    this.id = this.activatetRoute.snapshot.params.id;
    this.ArticleService.getAricleById(this.id).subscribe((response) => {
      this.profileForm.patchValue(response)
    },
      (error) => {
        console.log(error);
      }
    );
  }
  updateProduct() {
    this.submitted = true;
    if (this.profileForm.invalid) { return };
    //with services
    this.ArticleService.saveUpdate(this.id, this.profileForm.value).subscribe((response) => {
      this.router.navigate(['/articles'])
    },
      (error) => {
        console.log(error);
      }
    );
    //without Service
    //remplacer len nouveau object avec lancien objet
    // this.articles.splice(this.id, 1, this.profileForm.value);
    //mise a jour de localStorage
    // localStorage.setItem('registration', JSON.stringify(this.articles))
    //apres lupdate naviger vers le component Articles
  }
}
