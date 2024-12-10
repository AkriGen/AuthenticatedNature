import { Component } from '@angular/core';
import { AdminProfile, AdminService } from '../../admin-services/admin.service';

@Component({
  selector: 'app-admin-profile',
  standalone: false,
  
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.css'
})
export class AdminProfileComponent {

  currentAdmin: AdminProfile = {
    AdminId: 0,
    Username: '',
    Email: '',
    Password: '',  // Password field
    HealthTips: [],
    Products: [],
    Remedies: [],
    Role: null,
    RoleId: 0
  };

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadAdminProfile();  // Load admin profile when the component is initialized
  }

  loadAdminProfile(): void {
    this.adminService.getAdminProfile().subscribe(
      (data) => {
        this.currentAdmin = data; 
        console.log(data) // Assign fetched data to currentAdmin
      },
      (error) => {
        console.error('Error loading admin profile:', error);
      }
    );
  }

  saveProfile(): void {
    this.adminService.updateAdminProfile(this.currentAdmin).subscribe(
      (response) => {
        console.log('Admin profile updated:', response);
        alert('Profile updated successfully!');
      },
      (error) => {
        console.error('Error updating admin profile:', error);
        alert('Error updating profile.');
      }
    );
  }
}
