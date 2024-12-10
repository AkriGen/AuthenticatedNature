
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AutharizeService } from '../../services/autharize.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [CommonModule, ReactiveFormsModule,FormsModule ],
})
export class SignupComponent {
  signupForm: FormGroup;
  registrationError: boolean = false;  // To track if registration failed

  constructor(private authService: AutharizeService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form group with validation
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Registration method
  register() {
    if (this.signupForm.invalid) {
      return;
    }

    const { username, email, contact, password } = this.signupForm.value;
    
    this.authService.register(username, email, contact, password).subscribe(
      (response) => {
        alert('Registration successful! Please log in.');
        this.router.navigate(['/login']);
      },
      (error) => {
        this.registrationError = true;
        console.error('Registration failed', error);
      }
    );
  }
}