import { Component, Input } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';
import { HrefLinkComponent } from '../../../shared/ui/href-link.component';
import { ButtonComponent } from '../../../shared/ui/button.component';

@Component({
  selector: 'port-project-item',
  standalone: true,
  template: `<div
    class="flex flex-col gap-2 border-b border-black pb-2 overflow-hidden lg:w-[55vw] w-[95vw] mb-7"
  >
    <h3 class="text-md font-bold underline">{{ project.name }}</h3>

    <a port-href-link class="text-[13px]" [href]="project.url">{{
      project.url
    }}</a>

    <p
      class="description overflow-hidden whitespace-nowrap text-[12px] max-w-full text-ellipsis transition-all duration-200"
      [class.expanded]="isExpanded"
    >
      {{ project.description }}
    </p>
    <div class="flex justify-center">
      <button
        class="text-[10px] w-fit underline bg-none border-none p-0 text-inherit hover:no-underline	"
        port-button
        (click)="toggleDescription()"
      >
        {{ isExpanded ? 'Read less' : 'Read more' }}
      </button>
    </div>
  </div> `,
  styles: [
    `
      .description {
        &.expanded {
          white-space: normal;
        }
      }
    `,
  ],
  imports: [HrefLinkComponent, ButtonComponent],
})
export class ProjectItemComponent {
  @Input({ required: true }) project: Project = {
    name: '',
    url: '',
    description: '',
  };
  @Input() isExpanded = false;

  toggleDescription() {
    this.isExpanded = !this.isExpanded;
  }
}
