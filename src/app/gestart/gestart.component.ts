import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticles, ICat, Iiva } from '../models/Articles';
import { ArticlesService } from 'src/services/articles.service';

@Component({
  selector: 'app-gestart',
  templateUrl: './gestart.component.html',
  styleUrls: ['./gestart.component.css']
})
export class GestartComponent implements OnInit {

  codArt : string = "";
  Ean : string = "";

  isModify : boolean = false;

    articolo: IArticles = {
    codArt : "",
    descrizione : "",
    um : "",
    codStat : "",
    pzCart : 0,
    pesoNetto : 0,
    prezzo : 0,
    idStatoArt : "1",
    desStatoArt : "",
    dataCreazione : new Date(),
    imageUrl : "",
    iva : {idIva : 0, descrizione : '', aliquota : 0},
    famAssort : {id : -1, descrizione : ''},
    barcode : []
  }

  Iva: Iiva[] = [];
  Cat: ICat[] = [];

  constructor(private route: ActivatedRoute, private articlesService: ArticlesService) { }

  ngOnInit(): void {
    
    this.codArt = this.route.snapshot.params['codart'];

    if (this.codArt) {
      this.isModify = true;
      
      console.log("selezionato articolo " + this.codArt);
      
      this.articlesService.getArticlesByCode(this.codArt).subscribe({  /*sfrutto il metodo creato nel articoli.service.ts per ottenre i dati*/
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this)
    });
  } else {
    this.isModify = false;
  }
   
  this.articlesService.getIva().subscribe(
    response => {
      this.Iva = response;
      console.log(response);
    }    
) 

this.articlesService.getCat().subscribe(
  response => {
    this.Cat = response;
    console.log(response);
  }    
)
  }

  handleResponse(response: any) {
    this.articolo = response;

    this.Ean = (this.articolo.barcode) ? this.articolo.barcode[0].barcode : ""; /* se esiste un barcode allora lo setto, altrimenti lo setto vuoto*/

    console.log(this.articolo);
  }

  handleError(error: any) {
    console.log(error);
  }

  msgupdate : string = "";

  salva = () => {
    if (this.isModify) {
    this.articlesService.updateArticolo(this.articolo).subscribe(
      response => {
        console.log(response);
        this.msgupdate = "Articolo modificato";
      })}
    else {
      this.articlesService.createArticolo(this.articolo).subscribe(
        response => {
          console.log(response);
          this.msgupdate = "Articolo aggiunto";
        })
    }}
}


