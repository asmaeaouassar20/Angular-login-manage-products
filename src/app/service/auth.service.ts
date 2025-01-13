import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  // Méthode pour simuler une connexion
  login(username:string,password:string){
    if(username==='user' && password==='password'){
      localStorage.setItem('currentUser',JSON.stringify({username}));
      return true;
    }
    return false;
  }



  // Méthode pour déconnecter l'utilisateur
  logout():void{
    localStorage.removeItem('currntUser');
  }



  // Méthode pour vérifier si l'utilisateur est connecté
  isLoggedIn():boolean{
    return !!localStorage.getItem('currentUser');
  }

  /**
   * Méthode pour obtenir l'utilisateur courant
   * 
   * Récupérer un élément nommé 'currentUser' depuis le 'localStorage', le convertit de JSON en un objet JS, et le retourne.
   * Si l'élément n'existe pas, il retourne un objet vide {}
   * 
   * @returns 
   */
  getCurrentUser():any{
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }
}
