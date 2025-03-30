import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatProgressBarModule],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css',
})
export class BudgetComponent {
  displayedColumns: string[] = [
    'department',
    'allocated',
    'spent',
    'remaining',
    'progress',
  ];
  budgetItems = [
    { department: 'Marketing', allocated: 300000, spent: 180000 },
    { department: 'Research & Development', allocated: 450000, spent: 200000 },
    { department: 'Operations', allocated: 250000, spent: 100000 },
    { department: 'Human Resources', allocated: 150000, spent: 60000 },
    { department: 'IT', allocated: 50000, spent: 0 },
  ];
}
