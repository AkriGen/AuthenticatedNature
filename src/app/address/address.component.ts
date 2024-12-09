import { Component } from '@angular/core';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-address',
  standalone: false,
  
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {

  // User address object
  address: any = {
    street: '',
    phone: '',
    city: '',
    state: '',
    country: '',
    zipCode: ''
  };

  savedAddresses: any[] = [];
  isEditMode: boolean = false;
  addressToEdit: any = null;

  constructor(private addressService: AddressService) {}

  ngOnInit(): void {
    // Subscribe to get the current list of saved addresses
    this.addressService.getSavedAddresses().subscribe((addresses) => {
      this.savedAddresses = addresses;
    });
  }

  // Save a new address
  saveAddress(): void {
    if (this.isEditMode && this.addressToEdit) {
      // If in edit mode, update the existing address
      this.addressService.updateAddress(this.address);
    } else {
      // If not in edit mode, add a new address
      this.addressService.addAddress(this.address);
    }
    this.resetAddressForm();
  }

  // Reset the address form
  resetAddressForm(): void {
    this.address = {
      street: '',
      phone: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
    };
    this.isEditMode = false;
    this.addressToEdit = null;
  }

  // Remove an address from the list
  removeAddress(address: any): void {
    this.addressService.removeAddress(address);
  }

  // Set the form to edit mode and populate with the selected address
  editAddress(address: any): void {
    this.address = { ...address }; // Clone the address to avoid direct mutation
    this.isEditMode = true;
    this.addressToEdit = address;
  }
}
