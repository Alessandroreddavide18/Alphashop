import { Component, OnInit } from '@angular/core';
import { IArticles } from '../models/Articles';
import { ArticlesService } from 'src/services/articles.service';
import { log } from 'console';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {




  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {}



  }


  /*metodi btn*/
  // handleEdit = (codArt: string) => {
  //   console.log("Stai modificando " + codArt);
  // }
  // handleDelete = (codArt: string) => {
  //   console.log("Stai eliminando " + codArt);
  //   this.articles$.splice(this.articles$.findIndex(x => x.codArt === codArt), 1);
  //   console.log(this.articles$);
    
  // }

