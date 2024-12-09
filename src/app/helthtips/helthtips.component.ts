import { Component } from '@angular/core';

@Component({
  selector: 'app-helthtips',
  standalone: false,
  
  templateUrl: './helthtips.component.html',
  styleUrl: './helthtips.component.css'
})
export class HelthtipsComponent {
  title = 'HealthTips';
  healthTips = [
    { TipTitle: 'Hydration is Key', TipDescription: 'Drink at least 8 glasses of water daily to keep your body hydrated.', HealthTipsimg: 'https://images.pexels.com/photos/29566528/pexels-photo-29566528/free-photo-of-man-enjoys-refreshing-drink-on-a-sunny-beach.jpeg?auto=compress&cs=tinysrgb&w=400', CategoryID: 0, CreatedByAdminID: 0 },
    { TipTitle: 'Balanced Diet', TipDescription: 'Include a variety of fruits, vegetables, whole grains, and lean proteins for better health.', HealthTipsimg: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg', CategoryID: 0, CreatedByAdminID: 0 },
    { TipTitle: 'Exercise Regularly', TipDescription: 'Aim for 150 minutes of moderate-intensity activity each week to stay fit.', HealthTipsimg: 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg', CategoryID: 0, CreatedByAdminID: 0 },
    { TipTitle: 'Get Enough Sleep', TipDescription: 'Sleep for 7-9 hours per night to improve your overall well-being.', HealthTipsimg: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', CategoryID: 2, CreatedByAdminID: 0 },
    { TipTitle: 'Manage Stress Effectively', TipDescription: 'Try stress-relieving activities such as yoga or deep breathing exercises.', HealthTipsimg: 'https://images.pexels.com/photos/5717793/pexels-photo-5717793.jpeg', CategoryID: 3, CreatedByAdminID: 0 },
    { TipTitle: 'Limit Processed Foods', TipDescription: 'Processed foods can be high in unhealthy fats and sugars, so eat fresh whenever possible.', HealthTipsimg: 'https://images.pexels.com/photos/6942035/pexels-photo-6942035.jpeg', CategoryID: 0, CreatedByAdminID: 0 },
    { TipTitle: 'Strengthen Your Immune System', TipDescription: 'Eat foods rich in vitamin C and D to support your immune health.', HealthTipsimg: 'https://images.pexels.com/photos/3873190/pexels-photo-3873190.jpeg', CategoryID: 0, CreatedByAdminID: 0 },
    { TipTitle: 'Quit Smoking', TipDescription: 'Smoking increases your risk of various health problems. Seek help to quit.', HealthTipsimg: 'https://images.pexels.com/photos/293402/pexels-photo-293402.jpeg', CategoryID: 4, CreatedByAdminID: 0 },
    { TipTitle: 'Stay Active Mentally', TipDescription: 'Engage in puzzles or new learning activities to keep your mind sharp.', HealthTipsimg: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg', CategoryID: 0, CreatedByAdminID: 0 },
    { TipTitle: 'Practice Mindfulness', TipDescription: 'Meditation can reduce stress and improve overall well-being.', HealthTipsimg: 'https://images.pexels.com/photos/29583280/pexels-photo-29583280/free-photo-of-artistic-japanese-calligraphy-workshop-activity.jpeg', CategoryID: 0, CreatedByAdminID: 0 },
    { TipTitle: 'Maintain Healthy Relationships', TipDescription: 'Build strong social connections to reduce stress and improve mental health.', HealthTipsimg: 'https://images.pexels.com/photos/6382623/pexels-photo-6382623.jpeg', CategoryID: 0, CreatedByAdminID: 0 },
    { TipTitle: 'Wash Your Hands Frequently', TipDescription: 'Handwashing is one of the best ways to prevent the spread of illness.', HealthTipsimg: 'https://images.pexels.com/photos/3992952/pexels-photo-3992952.jpeg', CategoryID: 5, CreatedByAdminID: 0 },
    { TipTitle: 'Get Regular Health Screenings', TipDescription: 'Regular check-ups can detect health issues early and improve outcomes.', HealthTipsimg: 'https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg', CategoryID: 0, CreatedByAdminID: 0 },
    { TipTitle: 'Avoid Excessive Alcohol', TipDescription: 'Limit alcohol intake to reduce the risk of liver disease and other health issues.', HealthTipsimg: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg', CategoryID: 0, CreatedByAdminID: 0 },
    { TipTitle: 'Take Care of Your Skin', TipDescription: 'Use sunscreen to protect your skin from harmful UV rays and prevent aging.', HealthTipsimg: 'https://images.pexels.com/photos/3762880/pexels-photo-3762880.jpeg', CategoryID: 0, CreatedByAdminID: 0 },
    { TipTitle: 'Practice Gratitude', TipDescription: 'Expressing gratitude can improve your mood and overall mental health.', HealthTipsimg: 'https://images.pexels.com/photos/29619212/pexels-photo-29619212/free-photo-of-sunset-yoga-practice-in-tranquil-nature.jpeg', CategoryID: 0, CreatedByAdminID: 0 },
    { TipTitle: 'Incorporate More Fiber', TipDescription: 'A fiber-rich diet helps with digestion and can reduce the risk of heart disease.', HealthTipsimg: 'https://images.pexels.com/photos/29614540/pexels-photo-29614540/free-photo-of-healthy-breakfast-plate-with-boiled-eggs-and-fruits.jpeg', CategoryID: 0, CreatedByAdminID: 0 },
    { TipTitle: 'Limit Screen Time', TipDescription: 'Excessive screen time can cause eye strain and disrupt sleep patterns.', HealthTipsimg: 'https://images.pexels.com/photos/29614540/pexels-photo-29614540/free-photo-of-healthy-breakfast-plate-with-boiled-eggs-and-fruits.jpeg', CategoryID: 1, CreatedByAdminID: 0 },
    { TipTitle: 'Foster Healthy Habits', TipDescription: 'Small daily habits, like walking or stretching, contribute to long-term health benefits.', HealthTipsimg: 'https://images.pexels.com/photos/4852713/pexels-photo-4852713.jpeg', CategoryID: 0, CreatedByAdminID: 0 }
  ];
  
  filteredHealthTips = this.healthTips;

  filterByCategory(categoryId: number) {
    if (categoryId === 0) {
      this.filteredHealthTips = this.healthTips;
    } else {
      this.filteredHealthTips = this.healthTips.filter(tip => tip.CategoryID === categoryId);
    }
  }

  constructor() { }

  ngOnInit(): void { }

}
