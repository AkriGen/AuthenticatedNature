import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt'; // Import the JwtHelperService
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root' // Makes the AuthGuard globally available
})
export class AuthGuard implements CanActivate {
  // constructor(private router: Router, private jwtHelper: JwtHelperService) {}

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   const token = localStorage.getItem("jwt");

  //   if (token && !this.jwtHelper.isTokenExpired(token)) {
  //     console.log(this.jwtHelper.decodeToken(token));
  //     return true; // If token is valid and not expired, allow the route
  //   }

  //   // If token is expired or doesn't exist, redirect to login
  //   this.router.navigate(["login"]);
  //   return false;
  // }
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user is authenticated (using UserService)
    const currentUser = this.userService.getUser();  // Get the current logged-in user

    // If user is authenticated, allow access to the route
    if (currentUser && currentUser.email) {
      return true;
    }

    // If not authenticated, redirect to the login page and return false
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } }); // Optionally store the return URL
    return false;
  }
  
}
