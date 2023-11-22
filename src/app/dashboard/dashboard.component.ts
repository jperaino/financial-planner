import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  // Based on the screen size, switch from standard to one column per row
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Forecast Chart', cols: 1, rows: 1 },
          { title: 'Scenarios', cols: 1, rows: 1 },
          { title: 'Lines', cols: 1, rows: 1 },
          { title: 'Something Else', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Forecast Chart', cols: 2, rows: 2 },
        { title: 'Scenarios', cols: 1, rows: 1 },
        { title: 'Lines', cols: 1, rows: 2 },
        { title: 'Something Else', cols: 1, rows: 1 },
      ];
    })
  );
}
