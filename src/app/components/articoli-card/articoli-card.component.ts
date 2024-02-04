import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ArticlesService } from 'src/services/articles.service';

@Component({
  selector: 'app-articoli-card',
  templateUrl: './articoli-card.component.html',
  styleUrls: ['./articoli-card.component.css']
})
export class ArticoliCardComponent implements OnInit {
  

  pagina: number = 1;
  righe : number = 8;

  
  products: Product[] = [
    {codart: '1', descrizione: "Spaghetti Pasta Barilla", um: "kg", qta: 1, prezzo: 1.5, data: new Date(), ImageUrl: '/assets/images/food1.jpg'},
    {codart: '2', descrizione: "Penne Rigate De Cecco", um: "Kg", qta: 1, prezzo: 1.2, data: new Date(),ImageUrl: '/assets/images/food2.jpg'},
    {codart: '3', descrizione: "Salsa di Pomodoro Mutti", um: "g", qta: 300, prezzo: 1.8, data: new Date(),ImageUrl: '/assets/images/food3.jpg'},
    {codart: '4', descrizione: "Olio d'Oliva Extra Vergine", um: "L", qta: 1, prezzo: 4.5, data: new Date(),ImageUrl: '/assets/images/food4.jpg'},
    {codart: '5', descrizione: "Parmigiano Reggiano", um: "g", qta: 200, prezzo: 3.0, data: new Date(),ImageUrl: '/assets/images/panino1.jpg'},
    {codart: '6', descrizione: "Fagioli Neri in Scatola", um: "g", qta: 400, prezzo: 2.2, data: new Date(),ImageUrl: '/assets/images/ramen 4.jpg'},
    {codart: '7', descrizione: "Tonno all'Olio d'Oliva", um: "g", qta: 200, prezzo: 2.5, data: new Date(),ImageUrl: '/assets/images/ramen1.jpg'},
    {codart: '8', descrizione: "Origano Secco", um: "g", qta: 100, prezzo: 0.8, data: new Date(),ImageUrl: '/assets/images/ramen2.jpg'},
    {codart: '9', descrizione: "Condimento al Miele", um: "ml", qta: 150, prezzo: 2.0, data: new Date(),ImageUrl: '/assets/images/ramen3.jpg'},
    {codart: '10', descrizione: "Sottaceti", um: "g", qta: 300, prezzo: 1.7, data: new Date(),ImageUrl: '/assets/images/food2.jpg'},
    {codart: '11', descrizione: "Pane Integrale", um: "g", qta: 500, prezzo: 2.0, data: new Date(),ImageUrl: '/assets/images/food3.jpg'},
    {codart: '12', descrizione: "Filetto di Salmone", um: "g", qta: 200, prezzo: 6.0, data: new Date(),ImageUrl: '/assets/images/food2.jpg'},
    {codart: '13', descrizione: "Marmellata di Fragole", um: "g", qta: 150, prezzo: 2.2, data: new Date(),ImageUrl: '/assets/images/ramen2.jpg'},
    {codart: '14', descrizione: "Patatine Croccanti", um: "g", qta: 300, prezzo: 1.5, data: new Date(),ImageUrl: '/assets/images/food2.jpg'},
    {codart: '15', descrizione: "Bustine di Tè Verde ", um: "pezzi", qta: 25, prezzo: 3.0, data: new Date(),ImageUrl: '/assets/images/ramen1.jpg'}
      ]
  

  constructor(private articlesService: ArticlesService) { }
  
  ngOnInit(): void {}

  getProducts = (): Product[] => this.products;

}