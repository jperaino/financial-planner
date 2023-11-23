import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavSkeletonComponent } from './nav-skeleton/nav-skeleton.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    MatSlideToggleModule,
    DashboardComponent,
    NavSkeletonComponent,
  ],
})
export class AppComponent {
  title = 'financial-planner';
}
