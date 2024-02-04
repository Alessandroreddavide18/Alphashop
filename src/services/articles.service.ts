import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IArticles, ICat, Iiva } from 'src/app/models/Articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  
  server : string = "localhost";
  port : number = 5051; 

  constructor(private httpClient : HttpClient) {} /*ignetto l argomento httpClient*/

  /* filtri endpoint*/
  getArticlesByDesc = (descrizione: string) =>{
    return this.httpClient.get<IArticles[]>(`http://${this.server}:${this.port}/api/articoli/cerca/descrizione/${descrizione}`)
    .pipe(
      map(response => { 
        response.forEach(item => item.desStatoArt = this .getStatus(item.idStatoArt));
        return response;
      }) 
    )
  }

  getArticlesByCode = (codart: string) =>{ 

    return this.httpClient.get<IArticles>(`http://${this.server}:${this.port}/api/articoli/cerca/codice/${codart}`)
    .pipe (
      map(response => {
        response.idStatoArt = this.getStatus(response.idStatoArt)
        return response;
      })
    );
  }

  getArticlesByEan = (barcode: string) =>{ 

    return this.httpClient.get<IArticles>(`http://${this.server}:${this.port}/api/articoli/cerca/barcode/${barcode}`)
    .pipe (
      map(response => {
        response.idStatoArt = this.getStatus(response.idStatoArt)
        return response;
      })
    );
  }
// ------------------------------------------------------------------------------------------------------------------------------------------//

/* funzione per mappare l idStatoArt*/
  getStatus = (idStatoArt: string) : string => {
    if (idStatoArt === "1") {
      return "Disponibile";
    } else if (idStatoArt === "2") {
      return "Sospeso";
    }else {
      return "Non Disponibile";
    }
  }  

  /*metodo delete*/
  delArticoloByCodArt = (codart: string) => 
  this.httpClient.delete(`http://${this.server}:${this.port}/api/articoli/elimina/${codart}`)


  /*metodo per modificare un articolo*/
  updateArticolo = (articolo: IArticles) =>
  this.httpClient.put(`http://${this.server}:${this.port}/api/articoli/modifica`, articolo) 


  /*metodo per creare un articolo*/
  createArticolo = (articolo: IArticles) =>
  this.httpClient.post(`http://${this.server}:${this.port}/api/articoli/inserisci`, articolo)

  /*Metodo per ottenere iva*/
  getIva = () => this.httpClient.get<Iiva[]>(`http://${this.server}:${this.port}/api/iva`)

  /*Metodo per ottenere categoria*/
  getCat = () => this.httpClient.get<ICat[]>(`http://${this.server}:${this.port}/api/cat`)

  
}



  
  
