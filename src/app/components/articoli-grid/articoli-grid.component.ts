import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { log } from 'console';
import { Observable, map, of } from 'rxjs';
import { IArticles } from 'src/app/models/Articles';
import { ArticlesService } from 'src/services/articles.service';

@Component({
  selector: 'app-articoli-grid',
  templateUrl: './articoli-grid.component.html',
  styleUrls: ['./articoli-grid.component.css']
})
export class ArticoliGridComponent implements OnInit {

  articles$ : IArticles[] = [];
  errore : string = "";

  
  pagina: number = 1;
  righe : number = 14;

  filter$ : Observable<string | null> = of("");
  filter : string | null  = "";

  filterType : number = 0; 

  codart : string = "";
  msgupdate : string = "";

  constructor(private articlesService: ArticlesService, private route: ActivatedRoute, private router: Router) { }



  ngOnInit(): void {
    this.filter$ = this.route.queryParamMap.pipe(
      map((params : ParamMap) => params.get('filter')),
    );

  this.filter$.subscribe(param => (this.filter = param));

  if (this.filter){ /*verifico che il filter non sia vuoto*/
    this.getArticoli(this.filter);
  }
  }

  refresh(){
    if (this.filter){
      this.getArticoli(this.filter);
    }
  }

  /*filtri*/
  getArticoli = (filter : string ) => {

    this.articles$ = [];  /* svuoto l array per inserire i nuovi filtri*/

    if (this.filterType === 0){
      this.articlesService.getArticlesByCode(filter).subscribe({
        next: this.handleResponse.bind(this),
        error: this.handleError.bind(this)
      });
    } 
    else if (this.filterType === 1){
      this.articlesService.getArticlesByDesc(filter).subscribe({
        next: this.handleResponse.bind(this),
        error: this.handleError.bind(this)
      });
    } 
    else if (this.filterType === 2){
      this.articlesService.getArticlesByEan(filter).subscribe({
        next: this.handleResponse.bind(this),
        error: this.handleError.bind(this)
      });
    }
    }
    
  

  handleResponse(response : any) {
   if (this.filterType === 0 || this.filterType === 2)  /* entrambe i tipi di ricerca restituiscono 1 solo articolo*/
   {
    let newArray : IArticles[] = [...this.articles$, response];  /* quindi vado a creare un array intermedio*/
    this.articles$ = newArray;
   }
   else{
    this.articles$ = response; /* qui mi trovo nel caso 1*/
   }

   this.filterType = 0; /* reinizializzo il filtro a 0*/
  }

  handleError(error: any) {  /* gestisco gli errori*/

  this.errore = ""; /*reimposto l'errore vuoto per svuotare il messaggio*/

  if (this.filter && this.filterType === 0){  /* se il filter che mi arriva e' uguale a 0 e sono incorro in un errore tento di fare una ricerca con filterType = 1*/
    this.filterType = 1;  
    this.getArticoli(this.filter);
  }
  else if (this.filter && this.filterType === 1){  /*idem ma con il filterType = 2*/
    this.filterType = 2;
    this.getArticoli(this.filter);
  }else{
    this.errore = ("Dispiace la tua ricerca non ha prodotto nessun risultato"); /* se non riesco ad effettuare la ricerca in modo corretto mostro l'errore*/
    this.filterType = 0;
  }

}

msgdelete : string = "";
/* METODO ELIMINA*/
 Elimina = (CodArt: string) => {
  this.articlesService.delArticoloByCodArt(CodArt).subscribe(
    response => {
      console.log(response);
      this.articles$ = this.articles$.filter(item => item.codArt !== CodArt);
      this.msgdelete = "Articolo eliminato con successo";
    },
    error => {
      console.log(error);
      this.msgdelete= "Errore nell'eliminazione dell'articolo";
    }
  );
}

handleOkDelete(response: any) {
  console.log(response);
  
  this.articles$ = this.articles$.filter(x => x.codArt !== this.codart);
  this.codart = "";
}

handleErrDelete(error: any) {
  console.log(error);
  this.errore = error.error.message;
}

/* METODO MODIFICA*/
Modifica = (codArt: string) => {
  console.log("Stai modificando " + codArt);
  this.msgupdate = "Articolo modificato con successo";
  this.router.navigate(['gestart', codArt]);
}
}



