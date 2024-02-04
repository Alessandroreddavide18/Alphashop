import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  titolo: string = "Benvenuto su Ristorante";
  sottotitolo: string = "dove la passione per il cibo si fonde con l'ospitalità autentica";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   
  }

}
