// src/app/allocation/allocation.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

interface Allocation {
  id: number;
  project: string;
  resources: string;
  budget: number;
  status: 'In Progress' | 'Planning' | 'On Hold' | 'Completed' | 'Cancelled';
  completion: number;
  startDate: string;
  endDate: string;
  priority: 'High' | 'Medium' | 'Low';
  department: string;
}

@Component({
  selector: 'app-allocation',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './allocation.component.html',
  styleUrl: './allocation.component.css',
})
export class AllocationComponent {
  Math = Math;
  displayedColumns: string[] = [
    'project',
    'resources',
    'status',
    'completion',
    'budget',
    'timeline',
    'actions',
  ];

  allocations: Allocation[] = [
    {
      id: 1,
      project: 'Website Redesign',
      resources: 'Team A (5 members)',
      budget: 85000,
      status: 'In Progress',
      completion: 75,
      startDate: 'Jan 15, 2024',
      endDate: 'Mar 30, 2024',
      priority: 'High',
      department: 'Marketing',
    },
    {
      id: 2,
      project: 'Mobile App Development',
      resources: 'Team B (3 members)',
      budget: 120000,
      status: 'Planning',
      completion: 20,
      startDate: 'Feb 01, 2024',
      endDate: 'Jul 15, 2024',
      priority: 'High',
      department: 'IT',
    },
    {
      id: 3,
      project: 'Database Migration',
      resources: 'Team C (2 members)',
      budget: 45000,
      status: 'On Hold',
      completion: 50,
      startDate: 'Dec 10, 2023',
      endDate: 'Feb 28, 2024',
      priority: 'Medium',
      department: 'IT',
    },
    {
      id: 4,
      project: 'Security Audit',
      resources: 'Team D (4 members)',
      budget: 35000,
      status: 'Completed',
      completion: 100,
      startDate: 'Nov 05, 2023',
      endDate: 'Jan 20, 2024',
      priority: 'High',
      department: 'IT',
    },
    {
      id: 5,
      project: 'Cloud Migration',
      resources: 'Team E (6 members)',
      budget: 150000,
      status: 'In Progress',
      completion: 60,
      startDate: 'Jan 10, 2024',
      endDate: 'Apr 30, 2024',
      priority: 'Medium',
      department: 'Operations',
    },
    {
      id: 6,
      project: 'Customer Portal',
      resources: 'Team F (4 members)',
      budget: 95000,
      status: 'In Progress',
      completion: 35,
      startDate: 'Feb 15, 2024',
      endDate: 'May 30, 2024',
      priority: 'Medium',
      department: 'Customer Service',
    },
    {
      id: 7,
      project: 'Employee Training Program',
      resources: 'Team G (2 members)',
      budget: 28000,
      status: 'Planning',
      completion: 10,
      startDate: 'Mar 01, 2024',
      endDate: 'Apr 15, 2024',
      priority: 'Low',
      department: 'Human Resources',
    },
    {
      id: 8,
      project: 'Inventory Management System',
      resources: 'Team H (3 members)',
      budget: 75000,
      status: 'In Progress',
      completion: 40,
      startDate: 'Jan 20, 2024',
      endDate: 'Jun 10, 2024',
      priority: 'High',
      department: 'Operations',
    },
  ];

  getTotalResources(): number {
    let total = 0;
    this.allocations.forEach((allocation) => {
      const match = allocation.resources.match(/\((\d+) members\)/);
      if (match && match[1]) {
        total += parseInt(match[1], 10);
      }
    });
    return total;
  }

  getAverageCompletion(): number {
    const total = this.allocations.reduce(
      (sum, allocation) => sum + allocation.completion,
      0
    );
    return Math.round(total / this.allocations.length);
  }

  getTotalBudget(): number {
    return this.allocations.reduce(
      (sum, allocation) => sum + allocation.budget,
      0
    );
  }

  getProgressBarClass(completion: number): string {
    if (completion < 30) return 'progress-low';
    if (completion < 70) return 'progress-medium';
    return 'progress-high';
  }

  getDepartmentData() {
    const departments: { [key: string]: number } = {};

    this.allocations.forEach((allocation) => {
      if (!departments[allocation.department]) {
        departments[allocation.department] = 0;
      }
      departments[allocation.department]++;
    });

    return Object.keys(departments)
      .map((department) => ({
        name: department,
        count: departments[department],
      }))
      .sort((a, b) => b.count - a.count);
  }
}
