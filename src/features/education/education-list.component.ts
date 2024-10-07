import { Component, Input } from '@angular/core';

@Component({
  selector: 'port-education-list',
  standalone: true,
  imports: [],
  template: ` <ul>
    eduuuu
    <!-- @for (jobs of jobsList; track jobs.company) {
    <div>{{ jobs.company }}</div>
    } -->
  </ul>`,
})
export class EductionListComponent {
  @Input() areAllExpanded = false;
}
