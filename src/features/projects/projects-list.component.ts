import { Component } from '@angular/core';
import { HrefLinkComponent } from '../../shared/ui/href-link.component';
import { projects } from '../../data-access/data';
import { Project } from '../../interfaces/project.interface';
import { ProjectItemComponent } from './ui/project-item.component';

@Component({
  selector: 'port-projects-list',
  standalone: true,
  imports: [HrefLinkComponent, ProjectItemComponent],
  template: ` <ul>
    @for (project of projectList; track project.name) {
    <port-project-item [project]="project" />
    }
  </ul>`,
})
export class ProjectsListComponent {
  projectList: Project[] = projects;

  constructor() {}
}