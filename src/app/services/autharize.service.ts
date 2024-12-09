import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutharizeService {

  private isLoggedIn: boolean = false;

  constructor() {}

  // Set the user as logged in
  login() {
    this.isLoggedIn = true;
  }

  // Set the user as logged out
  logout() {
    this.isLoggedIn = false;
  }

  // Check if the user is logged in
  getLoginStatus(): boolean {
    return this.isLoggedIn;
  }
  
}
