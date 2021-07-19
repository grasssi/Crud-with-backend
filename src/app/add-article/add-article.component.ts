import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  submitted = false;
  profileForm = new FormGroup({
    nomArticle: new FormControl('',Validators.required),
    descriptionArticle: new FormControl('',Validators.required),
    quantityArticle: new FormControl('',Validators.required),
    prixArticle: new FormControl('',Validators.required),
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addArticle() {
    this.submitted = true;
    if (this.profileForm.invalid) { return };
    const registartions = JSON.parse(localStorage.getItem('registration') || '[]');
    registartions.push(this.profileForm.value);
    localStorage.setItem('registration', JSON.stringify(registartions));
    console.log('reg=', registartions)
    this.router.navigate(['/articles'])
  }
}
