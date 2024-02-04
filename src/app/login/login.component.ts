import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = "";
  password: string = "";
  autenticato: boolean = true;
  errMsg: string = "Spiacente, credenziali errate";
 
  titolo: string = "Accesso e Autenticazione";
  sottotitolo: string = "Inserisci credenziali";
 
  

  constructor(private route: Router, @Inject(AuthappService) private BasicAuth: AuthappService) { }

  ngOnInit(): void {
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
