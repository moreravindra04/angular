// app.routes.ts
import { Routes } from '@angular/router';

// export const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'users', component: UsersComponent },

//    // Add other routes as needed
// ];

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./components/users/users.component').then(
        (c) => c.UsersComponent
      ),
  },
  {
    path: 'budget',
    loadComponent: () =>
      import('./components/budget/budget.component').then(
        (c) => c.BudgetComponent
      ),
  },
  {
    path: 'createhead',
    loadComponent: () =>
      import('./components/createhead/createhead.component').then(
        (c) => c.CreateheadComponent
      ),
  },
  {
    path: 'department',
    loadComponent: () =>
      import('./components/department/department.component').then(
        (c) => c.DepartmentComponent
      ),
  },
  {
    path: 'allocation',
    loadComponent: () =>
      import('./components/allocation/allocation.component').then(
        (c) => c.AllocationComponent
      ),
  },
];
