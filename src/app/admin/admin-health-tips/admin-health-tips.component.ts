import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-health-tips',
  standalone: false,
  
  templateUrl: './admin-health-tips.component.html',
  styleUrl: './admin-health-tips.component.css'
})
export class AdminHealthTipsComponent {

  healthTips = [
    { id: 1, title: 'Stay Hydrated', description: 'Drink at least 8 glasses of water daily.' },
    { id: 2, title: 'Exercise Regularly', description: 'At least 30 minutes of exercise daily.' },
    { id: 3, title: 'Eat a Balanced Diet', description: 'Include a variety of fruits and vegetables in your meals.' },
  ];

  // Add new health tip
  onAddHealthTip() {
    const newHealthTip = {
      id: this.healthTips.length + 1,
      title: 'New Health Tip',
      description: 'Description of the new health tip.'
    };
    this.healthTips.push(newHealthTip);
    console.log('Added new health tip:', newHealthTip);
  }

  // Edit an existing health tip
  onEditHealthTip(tip: any) {
    console.log('Editing health tip:', tip);
    // Mock editing logic (using prompt for simplicity)
    tip.title = prompt('Enter new health tip title:', tip.title) || tip.title;
    tip.description = prompt('Enter new description:', tip.description) || tip.description;
  }

  // Delete a health tip
  onDeleteHealthTip(id: number) {
    this.healthTips = this.healthTips.filter(tip => tip.id !== id);
    console.log('Deleted health tip with id:', id);
  }
}
