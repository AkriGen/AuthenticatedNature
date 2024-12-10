import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthenticatedResponse } from '../../interfaces/authenticated-response';
import { NgForm } from '@angular/forms';
import { Login } from '../../interfaces/login';
import { AutharizeService } from '../../services/autharize.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  loginError: boolean = false; // Variable to track login errors
  constructor(private authService: AutharizeService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Save JWT token to session
        this.authService.setSession(response);
        
        // Redirect based on role (admin or user)
        if (this.authService.isAdmin()) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      (error) => {
        alert('Login failed!');
      }
    );
  }
}
