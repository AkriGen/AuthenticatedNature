import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-remedies',
  standalone: false,
  
  templateUrl: './admin-remedies.component.html',
  styleUrl: './admin-remedies.component.css'
})
export class AdminRemediesComponent {

  remedies = [
    { id: 1, name: 'Cold Remedy', description: 'Helps in curing cold and flu.' },
    { id: 2, name: 'Headache Remedy', description: 'Effective for headaches.' },
    { id: 3, name: 'Skin Care Remedy', description: 'Improves skin health.' },
  ];

  onAddRemedy() {
    const newRemedy = { id: this.remedies.length + 1, name: 'New Remedy', description: 'Description of new remedy' };
    this.remedies.push(newRemedy);
    console.log('Added new remedy:', newRemedy);
  }

  onEditRemedy(remedy: any) {
    console.log('Editing remedy:', remedy);
    // Mock editing logic
    remedy.name = prompt('Enter new remedy name:', remedy.name) || remedy.name;
    remedy.description = prompt('Enter new description:', remedy.description) || remedy.description;
  }

  onDeleteRemedy(id: number) {
    this.remedies = this.remedies.filter(remedy => remedy.id !== id);
    console.log('Deleted remedy with id:', id);
  }
}
