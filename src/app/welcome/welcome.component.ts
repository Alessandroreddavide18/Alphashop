import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  
    this.user = this.route.snapshot.params['userId']; /*popolo la variabile user con il valore passato come parametro. snapshot mi permette di leggere i parametri passati*/
  }

}
