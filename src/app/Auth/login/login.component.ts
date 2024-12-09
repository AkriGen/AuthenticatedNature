import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData = {
    email: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  login(): void {
    const userAccount = localStorage.getItem('userAccount');
    if (userAccount) {
      const storedUser = JSON.parse(userAccount);
      if (
        this.loginData.email === storedUser.email &&
        this.loginData.password === storedUser.password
      ) {
        this.userService.setUser(storedUser);
        alert('Login successful!');
        this.router.navigate(['/user']);
      } else {
        alert('Invalid email or password!');
      }
    } else {
      alert('No account found. Please sign up first!');
      this.router.navigate(['/signup']);
    }
  }
}
