import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  login(username:string,password:string):boolean{
    if(username==='Asmae' && password==='1234'){
      return true;
    }else{
      alert("Identifiants Incorrects");
      return false;
    }
  }


}
