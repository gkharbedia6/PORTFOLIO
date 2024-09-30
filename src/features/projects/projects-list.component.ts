import { Component } from '@angular/core';
import { HrefLinkComponent } from '../../shared/ui/href-link.component';

@Component({
  selector: 'port-projects-list',
  standalone: true,
  imports: [HrefLinkComponent],
  template: ` <div class="flex flex-col items-center justify-start">
    win95
    <port-href-link href="https://win95-ijk3.vercel.app/" />
  </div>`,
})
export class ProjectsListComponent {
  constructor() {}
}
