import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (user_id: string, password: string): boolean => {
    var retVal = (user_id === "Alessandro" && password === "123") ? true : false /*Se la password e l'id sono corretti, restituisce true*/

    if (retVal) {
      sessionStorage.setItem("user_id", user_id); /*in caso di login corretto salvo in sessione l'id dell'utente*/
    }
    return retVal;
  }


  loggedUser = (): string | null => (sessionStorage.getItem("user_id")) ? sessionStorage.getItem("user_id") : "";
  islogged = (): boolean => (sessionStorage.getItem("user_id")) ? true : false;
  clearUser = (): void => sessionStorage.removeItem("user_id"); /*Cancello l'utente dalla sessione*/
  clearAll = (): void => sessionStorage.clear(); /*Cancello tutte le informazioni dalla sessione*/

}
