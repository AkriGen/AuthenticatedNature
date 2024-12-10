import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt'; // Import the JwtHelperService
import { UserService } from './services/user.service';
import { AutharizeService } from './services/autharize.service';

@Injectable({
  providedIn: 'root' // Makes the AuthGuard globally available
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AutharizeService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const currentUser = this.authService.currentUserValue;
    const isAdmin = this.authService.isAdmin();

    // If not logged in, redirect to login
    if (!currentUser) {
      this.router.navigate(['/login']);
      return false;
    }

    // If the route requires admin, and the user is not an admin, redirect to a different page
    if (route.data['role'] === 'admin' && !isAdmin) {
      this.router.navigate(['/home']); // Redirect to home or any non-admin page
      return false;
    }

    return true;
  }
  // constructor(private router: Router, private userService: UserService) {}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> | Promise<boolean> | boolean {
  //   // Check if the user is authenticated (using UserService)
  //   const currentUser = this.userService.getUser();  // Get the current logged-in user

  //   // If user is authenticated, allow access to the route
  //   if (currentUser && currentUser.email) {
  //     return true;
  //   }

  //   // If not authenticated, redirect to the login page and return false
  //   this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } }); // Optionally store the return URL
  //   return false;
  // }
  
}
