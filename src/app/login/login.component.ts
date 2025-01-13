import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string='';
  password:string='';

  constructor(private authService:AuthService , private router:Router){}

  onSubmit():void{
    if(this.authService.login(this.username,this.password)){
      this.router.navigate(['/dashboard']);
    }else{
      alert("Identifiants Incorrects")
    }
  }



}
