import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
displayName: any;

constructor(private auth : AuthenticationService, private router : Router , private userService : UserService){}
user$ = this.userService.currentUserProfile$

  logout(){
    this.auth.Logout().subscribe(() => 
    this.router.navigate(['']) )
    localStorage.clear()
  }
 
 
}
