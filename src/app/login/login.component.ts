import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username:string ='';  
  password : string ='';
  constructor(private authService:AuthService , private router:Router){}

  login(){
    if(this.authService.login(this.username,this.password)){
      this.router.navigate(['/products']);
    }
  }

}
