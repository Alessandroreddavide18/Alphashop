import { Component, OnInit } from '@angular/core';
import { IArticles } from '../models/Articles';
import { ArticlesService } from 'src/services/articles.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   articles$ : IArticles[] = [];
   errore : string = "";


  constructor(private articlesService: ArticlesService ) { }

  ngOnInit(): void {}


  handleResponse (response: IArticles[]) {
    this.articles$ = response;
  }

  handleError (error: Object) {
    this.errore = error.toString();

  }

  /*metodi btn*/
  handleEdit = (codArt: string) => {
    console.log("Stai modificando " + codArt);
  }
  handleDelete = (codArt: string) => {
    console.log("Stai eliminando " + codArt);
    this.articles$.splice(this.articles$.findIndex(x => x.codArt === codArt), 1);
    console.log(this.articles$);
    
  }
}
