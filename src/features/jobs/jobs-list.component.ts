import { Component, Input } from '@angular/core';
import { iJobExperience } from '../../interfaces/job-experience.interface';
import { jobs } from '../../data-access/data';
import { JobItemComponent } from './ui/job-item.component';

@Component({
  selector: 'port-jobs-list',
  standalone: true,
  imports: [JobItemComponent],
  template: ` <ul>
    @for (job of jobsList; track job.company) {
    <port-job-item [job]="job" [isExpanded]="areAllExpanded" />
    }
  </ul>`,
})
export class JobsListComponent {
  @Input() areAllExpanded = false;

  jobsList: iJobExperience[] = jobs;
}
