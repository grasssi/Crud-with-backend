import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  registartions = JSON.parse(localStorage.getItem('registration') || '[]');


  constructor() { }

  ngOnInit(): void {
    console.log('reg222=', this.registartions)
  }
  onDelete(i: number) {
    this.registartions.splice(i, 1);
    localStorage.setItem('registration', JSON.stringify(this.registartions));
  }

}
