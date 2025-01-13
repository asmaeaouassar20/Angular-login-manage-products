import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  currentUser:any;
  constructor(private authService:AuthService,private router:Router){}

  ngOnInit(): void {
      this.currentUser=this.authService.getCurrentUser();
      if(!this.authService.isLoggedIn()){
        this.router.navigate(['/login']);
      }
  }

  logout():void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
