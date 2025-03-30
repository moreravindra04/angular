// src/app/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  show = true;
  dashboardCards = [
    {
      title: 'User Statistics',
      subtitle: 'Current active users',
      content: 'Total users: 1,254',
      icon: 'people',
    },
    {
      title: 'Budget Overview',
      subtitle: 'Current fiscal year',
      content: 'Total budget: $1,200,000',
      icon: 'attach_money',
    },
    {
      title: 'Allocation Status',
      subtitle: 'Resource distribution',
      content: '80% of resources allocated',
      icon: 'pie_chart',
    },
    {
      title: 'System Health',
      subtitle: 'All systems operational',
      content: 'Uptime: 99.9%',
      icon: 'check_circle',
    },
  ];

  onInit() {
    this.show = true;
  }

  router: any;
  // Method to handle navigation programmatically
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
