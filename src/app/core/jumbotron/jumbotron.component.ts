import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  
  userId: string = "";
  password: string = "";
  autenticato: boolean = true;
  errMsg: string = "Spiacente, credenziali errate";
  currentImageIndex = 0;
  images = ['assets/images/tavolo2.jpg','assets/images/header1.jpg', 'assets/images/header2.jpg', 'assets/images/header.jpg', 'assets/images/tavolo1.jpg',  ];

  /* input jumbotron*/
  @Input()
  titolo: string = "";
  @Input()
  sottotitolo: string = "";
  @Input()
  showlogin: boolean = true;
  @Input()
  showAccesLink: boolean = false;
  @Input()
  showform: boolean = false;
  @Input()
  showPulse: boolean = false;
  /*---------------------------------*/  

  constructor(private route: Router, @Inject(AuthappService) private BasicAuth: AuthappService) { }

  ngOnInit(): void {
    this.startImageInterval();
  }

  startImageInterval(): void {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 5000); // Cambia l'immagine ogni 5 secondi (5000 millisecondi)
  }

  getCurrentImageUrl(): string {
    return this.images[this.currentImageIndex];
  }

  gestAuth = (): void => {
    if (this.BasicAuth.autentica(this.userId, this.password)) {
      this.route.navigate(['home']);
      this.autenticato = true;
    } else {
      this.autenticato = false;
    }
  }
}
