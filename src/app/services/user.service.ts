import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userData: any = null;
  constructor() { }
  setUser(data: any): void {
    this.userData = data;
    localStorage.setItem('userData', JSON.stringify(data));  // Store in localStorage

  }

  getUser(): any {
    return this.userData || JSON.parse(localStorage.getItem('userData') || '{}');
  }
  // Optionally, log the user out
  logout(): void {
    this.userData = null;
    localStorage.removeItem('userData');
  }
}
