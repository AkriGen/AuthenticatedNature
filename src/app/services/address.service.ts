import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private savedAddresses = new BehaviorSubject<any[]>([]);

  constructor() {}

  // Get the list of all saved addresses
  getSavedAddresses() {
    return this.savedAddresses.asObservable();
  }

  // Add a new address to the list
  addAddress(address: any) {
    const currentAddresses = this.savedAddresses.value;
    currentAddresses.push(address);
    this.savedAddresses.next(currentAddresses);
  }

  // Remove an address from the list
  removeAddress(address: any) {
    const currentAddresses = this.savedAddresses.value;
    const index = currentAddresses.indexOf(address);
    if (index > -1) {
      currentAddresses.splice(index, 1);
      this.savedAddresses.next(currentAddresses);
    }
  }

  // Update an existing address
  updateAddress(updatedAddress: any) {
    const currentAddresses = this.savedAddresses.value;
    const index = currentAddresses.findIndex(
      (address) => address.street === updatedAddress.street
    );
    if (index > -1) {
      currentAddresses[index] = updatedAddress;
      this.savedAddresses.next(currentAddresses);
    }
  }
}
