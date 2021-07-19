import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  submitted = false;
  articles = JSON.parse(localStorage.getItem('registration') || '[]');
  profileForm = new FormGroup({
    nomArticle: new FormControl('', Validators.required),
    descriptionArticle: new FormControl('', Validators.required),
    quantityArticle: new FormControl('', Validators.required),
    prixArticle: new FormControl('', Validators.required),
  });
  index: any;
  constructor(private activatetRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.index = this.activatetRoute.snapshot.params.index;
    this.profileForm.patchValue(this.articles[this.index])
  }
  updateProduct() {
    this.submitted = true;
    if (this.profileForm.invalid) { return };
    //remplacer len nouveau object avec lancien objet
    this.articles.splice(this.index, 1, this.profileForm.value);
    //mise a jour de localStorage
    localStorage.setItem('registration', JSON.stringify(this.articles))
    //apres lupdate naviger vers le component Articles
    this.router.navigate(['/articles'])
  }
}
