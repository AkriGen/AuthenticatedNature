
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [CommonModule, ReactiveFormsModule,FormsModule ],
})
export class SignupComponent {
  userSignInForm: FormGroup;

  constructor(private fb: FormBuilder,private userService: UserService, private router:Router) {
    // Initialize forms
    this.userSignInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  signupData = {
    name: '',
    email: '',
    contact: '',
    password: ''
  };


  signup(): void {
    if (this.signupData.name && this.signupData.email && this.signupData.password) {
      localStorage.setItem('userAccount', JSON.stringify(this.signupData));
      alert('Signup successful! You can now log in.');
      this.router.navigate(['/login']);
    } else {
      alert('Please fill out all required fields!');
    }
  }
}