import { Injectable } from '@angular/core';
import { environment } from '../../enviornments/environment';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { User } from '../admin-services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutharizeService {

  private apiUrl = environment.apiUrl; // Your .NET Core API URL
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User | null>(
      JSON.parse(localStorage.getItem('currentUser')!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Get current user value
  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  // Login method: authenticates user and stores JWT token
  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/auth/login`, { username, password })
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }

  // Register method: creates a new user
  register(username: string, email: string, contact: string, password: string): Observable<any> {
    const user = {
      username: username,
      email: email,
      contact: contact,
      password: password,
    };
    return this.http
      .post<any>(`${this.apiUrl}/users`, user)
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }

  // Store user data and JWT token in localStorage
  setSession(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  // Log out and remove user session
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  // Check if the user has a valid JWT
  isAuthenticated(): boolean {
    return !!this.currentUserValue;
  }

  // Check if the user is an admin based on JWT
  isAdmin(): boolean {
    return this.currentUserValue?.role === 'admin';
  }

}
