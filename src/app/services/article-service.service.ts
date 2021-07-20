import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor() { }
  getAllArticles() {
    return JSON.parse(localStorage.getItem('registration') || '[]');
  }
  deleteArticle(index: number) {
    const registartions = this.getAllArticles();

    registartions.splice(index, 1);
    localStorage.setItem('registration', JSON.stringify(registartions));

  }
  saveUpdate(index: number, formValue: any) {
    let artcicleData = this.getAllArticles();

    artcicleData.splice(index, 1, formValue);
    //mise a jour de localStorage
    localStorage.setItem('registration', JSON.stringify(artcicleData))
    //apres lupdate naviger vers le component Articles
    // this.router.navigate(['/articles'])
  }
  getAricleByIndex(index: number) {
    const registartions = this.getAllArticles();
    return (registartions[index])
  }
}
